//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Nueva Sección Checkbox', () =>{

    it('Check Uno', () => {
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title().should('eq', 'Radio Buttons | TestingQaRvn')
        cy.wait(1000)

        cy.get('[type="checkbox"]').check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get('[type="checkbox"]').uncheck({force: true}).should('not.be.checked')
    });

    it('Check por Selección', () => {
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title().should('eq', 'Radio Buttons | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-42-row-1').check({force: true}).should('be.checked')
        //cy.get('#wsf-1-field-42-row-1').click({force: true})
        cy.wait(1000)
        cy.get('#wsf-1-field-42-row-2').click({force: true})
        cy.wait(1000)
    });

}) //Cierre de describe