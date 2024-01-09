//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Nueva Sección Combobox', () =>{

    it('Combobox', () => {
        cy.visit('https://www.google.com')
        cy.title().should('eq', 'Google')
        cy.wait(1000)

        cy.get('#APjFqb').should('be.visible').type('Ferrari').type('{enter}')
        cy.get('.MUFPAc > :nth-child(2) > a').click()
    });

}) //Cierre de describe