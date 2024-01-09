//para que funcionen los comandos
/// <reference types = 'cypress' />

require('cypress-plugin-tab')

describe ('Ejemplo función tab', () =>{

    it('Type con Tab', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-21').type('Nella').tab().
        type('Test').tab().
        type('test@test.com')
    });

    //cy.get()
}) //Cierre de describe