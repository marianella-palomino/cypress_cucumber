//para que funcionen los comandos
/// <reference types = 'cypress' />

require('cypress-plugin-tab')

describe ('Ejemplo función tab', () =>{

    it('Demo de los Asserts', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-21').should('be.visible').type('Nella')
        cy.wait(1000)
        cy.get('#wsf-1-field-22').should('be.visible').type('Test')
        cy.wait(1000)
        cy.get('#wsf-1-field-23').should('be.visible').should('be.enabled').type('test@test.com')
    });

    //cy.get()
}) //Cierre de describe