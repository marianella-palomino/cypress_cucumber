//para que funcionen los comandos
/// <reference types = 'cypress' />

require('cypress-plugin-tab')

describe ('Campos de tipo fecha', () =>{

    it('Fecha Uno', () => {
        let tiempo = 1800
        cy.visit('https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html')
        cy.title('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(tiempo)

        cy.get('#sandbox-container1 > .input-group > .form-control').should('be.visible').type('02/11/2023')
        cy.get('.text-center > :nth-child(1)').click()
    });

    it('Fecha Dos', () => {
        let tiempo = 1800
        cy.visit('https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html')
        cy.title('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(tiempo)

        cy.get('[placeholder="Start date"]').should('be.visible').type('31/10/2023 {esc}')
        cy.get('[placeholder="End date"]').should('be.visible').type('01/11/2023').type('{esc}')
    });

    it.only('Fecha Tres', () => {
        let tiempo = 1800
        cy.visit('https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html')
        cy.title('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(tiempo)

        cy.get('[placeholder="Start date"]').should('be.visible').type('31/10/2023 {esc}').tab().type('01/11/2023 {esc}')
    });

}) //Cierre de describe