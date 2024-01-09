//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Nueva Sección Radio Button', () =>{
    
    it('Check por Radio Button', () => {
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title().should('eq', 'Radio Buttons | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-44-row-1').check({force: true}).should('be.checked')
        cy.wait(1000)
        cy.get('#wsf-1-field-44-row-2').click({force: true})
        cy.wait(1000)
    });

}) //Cierre de describe