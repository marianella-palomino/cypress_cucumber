//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Alertas en cypress', () =>{

    it('Alert', () => {
        cy.visit('https://demo.seleniumeasy.com/bootstrap-modal-demo.html')
        cy.title('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(2000)

        cy.get('.btn-primary').contains('Launch modal').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('.btn-primary').contains('Save changes').click()
        cy.wait(2000)

        cy.get('.btn-primary').contains('Launch modal').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('.btn').contains('Close').click()
        cy.wait(2000)
    });

}) //Cierre de describe