//para que funcionen los comandos
/// <reference types = 'cypress' />

require('cypress-plugin-tab')

describe ('Primer Reto', () =>{

    it('Primer Reto', () => {
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Datatables2_ok.html')
        cy.title().should('eq', 'Formulario de Ejemplo')
        cy.wait(1000)

        cy.get('label > input').should('be.visible').type('Pepe')
        cy.wait(1000)
        cy.get('label > input').should('be.visible').clear()

        //Agregar un registro
        cy.get('#btnAdd').should('be.visible').click()
        cy.wait(1000)
        cy.get('#nombre').should('be.visible').type('Lore').tab().type('34')
        cy.get('#btnSubmit').should('be.visible').click()

        cy.get('label > input').should('be.visible').type('Lore')
        cy.wait(1000)
        cy.get('label > input').should('be.visible').clear()

        //Editar un registro
        cy.get('.even > :nth-child(4) > .btn-warning').should('be.visible').click()
        cy.wait(1000)
        cy.get('#edad').should('be.visible').clear().type('18')
        cy.wait(1000)
        cy.get('#btnSubmit').should('be.visible').click()

        cy.get('label > input').should('be.visible').type('Lore')
        cy.wait(1000)
        cy.get('label > input').should('be.visible').clear()
        cy.wait(1000)

        //Borrar un registro
        cy.get('.odd > :nth-child(4) > .btn-danger').should('be.visible').click()
    });

}) //Cierre de describe