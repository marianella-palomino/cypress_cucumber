// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible', (t, selector, texto) => {
    let tiempo = t
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Click', (t, selector) => {
    let tiempo = t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_force', (t, selector) => {
    let tiempo = t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})

//Funciones por conjunto o completas
//Creando funciones DEMOQA
Cypress.Commands.add('Bloque_DEMOQA', (t, name, email, dir1, dir2) => {
    let tiempo = t
    cy.get('#userName').should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get('#userEmail').should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get('#currentAddress').should('be.visible').type(dir1)
    cy.wait(tiempo)
    cy.get('#permanentAddress').should('be.visible').type(dir2)
    cy.wait(tiempo)
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Bloque_Reto_Form', (t, name, last, email, phone, address, city, state, zip, website, hosting, comment) => {
    let tiempo = t
    cy.get('[name="first_name"]').clear().should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get('[name="last_name"]').clear().should('be.visible').type(last)
    cy.wait(tiempo)
    cy.get('[name="email"]').clear().should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get('[name="phone"]').clear().should('be.visible').type(phone)
    cy.wait(tiempo)
    cy.get('[name="address"]').clear().should('be.visible').type(address)
    cy.wait(tiempo)
    cy.get('[name="city"]').clear().should('be.visible').type(city)
    cy.wait(tiempo)
    cy.get('[name="state"]').select(state)
    cy.wait(tiempo)
    cy.get('[name="zip"]').clear().should('be.visible').type(zip)
    cy.wait(tiempo)
    cy.get('[name="website"]').clear().should('be.visible').type(website)
    cy.wait(tiempo)
    cy.get('[name="hosting"]').check(hosting)
    cy.wait(tiempo)
    cy.get('[name="comment"]').clear().should('be.visible').type(comment)
    cy.wait(tiempo)
    cy.get('.btn').should('be.visible').click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Validar_campo', (selector, mens, nombre_campo) => {
    cy.get(selector).should('be.visible').then((val) => {
        let dato = val.text()
        let mensaje = mens
        
        if(dato == mensaje){
            cy.log('####################')
            cy.log('El ' + nombre_campo + ' no es válido')
            cy.log('####################')
        }
    })
})

Cypress.Commands.add('Validar_campo2', (selector, mens, nombre_campo) => {
    cy.get(selector).should('be.visible').should('contain',mens).then(() => {
        cy.log('####################')
        cy.log('El ' + nombre_campo + ' no es válido')
        cy.log('####################')
    })
})

// Cypress.Commands.add('nombre', () => {
//     cy.task('queryDb','').then((dato) => {
//         console.log(dato);
//         cy.wrap(dato).as('dato');
//     })
// })

Cypress.Commands.add('obtenerNombreApellido', (userEmail) => {
    cy.task('queryDb', `SELECT firstname, lastname FROM tiendamia.customer_entity WHERE email = '${userEmail}' AND website_id = 3`).then((result) => {
        //return result
        cy.wrap({
            userNombre: result[0].firstname,
            userApellido: result[0].lastname
          }).as('userData');
      });
  });

Cypress.Commands.add('apiProduct', (sku) => {
    const body = {
        "sku": sku,
        "merchant_id": "amz",
        "clear_cache": true,
        "navigation_url": "",
        "store": "do"
    }
    return cy.request({
        method: 'POST',
        url: 'https://virtual-catalog.tiendamia.net/api/v2/product',
        body: body,
    }).then((response) => {
        // const apiProductResponse = response.body;
        // return apiProductResponse;
        cy.wrap(response).as('apiProductResponse');
    })

});
  
  