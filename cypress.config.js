const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; //cucumber
const fs = require('fs')//va de la mano con la config para que no se guarden los videos si no hay errores

//For connecting to MySQL
const mysql = require('mysql2')
function queryTestDb(query, config) {
 const connection = mysql.createConnection(config.env)
 connection.connect()
 return new Promise((resolve, reject) => {
   connection.query(query, (error, results) => {
     if (error) reject(error)
     else {
       connection.end()
       return resolve(results)
     }
   })
 })
}

module.exports = defineConfig({
  video: true, //para que se graben videos y solo se hace con el comando cypress run
  videoCompression: true, //para comprimir el video
  defaultCommandTimeout: 5000, //cuanto se demora en cargar un elemento
  execTimeout: 60000,
  pageLoadTimeout: 600000, //cuanto se demora en cargar una página
  viewportWidth: 1500, //tamaño ancho
  viewportHeight: 900, //tamaño alto
  chromeWebSecurity: false, //muestra contenidos inseguros
  env: {
    host: 'staging-cx-mgn2-15',
    user: 'tiendamia',
    password: 'Fufesos+76',
    database: 'tiendamia',
    skuAMZ: "B09JQL8KP9",
  },
  e2e: {
    specPattern: '**/*.{js,jsx,ts,tsx,feature}',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      on('task', { queryDb: query => { return queryTestDb(query, config) }, });
      //on('task', { log (message) {console.log(message); return null } });
      // implement node event listeners here
      on("file:preprocessor", cucumber()); //cucumber
      //Acá empieza la config para que no se guarden los videos si no hay errores
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          )
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video)
          }
        }
      })// Acá termina la config para que no se guarden los videos si no hay errores
    },
    testIsolation: false, //para que la página no se borre al pasar a otro test
    baseUrl: 'https://www.tiendamia.com.do',
  },
});
