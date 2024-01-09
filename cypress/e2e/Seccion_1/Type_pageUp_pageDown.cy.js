//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Ejemplo de Type pageUp, pageDown,', () =>{

    it('Type pageUp', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-21').type('{pageup}') //Scrolls up
        cy.wait(2000)
    });

    it('Type pageDown', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-21').type('{pagedown}') //Scrolls down
        cy.wait(2000)
    });

}) //Cierre de describe