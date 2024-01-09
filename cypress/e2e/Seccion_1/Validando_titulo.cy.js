//para que funcionen los comandos
/// <reference types = 'cypress' /> 

describe ('Sección 1 Validando el título', () =>{

    it('Test validar el título', () => {
        cy.visit('http://validaciones.rodrigovillanueva.com.mx/index.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.log('Ok la función title funcionó bien')
    });

}) //Cierre de describe