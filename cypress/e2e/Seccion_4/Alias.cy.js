//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Manejo de los Alias', () =>{

    it('Alias uno', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title('eq', 'Input Validation')
        cy.wait(2000)

        cy.get('#firstname').should('be.visible').as('nom')
        cy.get('@nom').type('Nella')

        cy.get('#surname').should('be.visible').as('ap')
        cy.get('@ap').type('Test Pruebas')

        cy.get('#age').should('be.visible').as('edad')
        cy.get('@edad').type('25')

        cy.get('#country').should('be.visible').as('pais')
        cy.get('@pais').select('Peru').should('have.value','Peru')

        cy.get('#notes').should('be.visible').as('notas')
        cy.get('@notas').type('Automation')

        cy.get('[type="submit"]').click({force:true})
    });

}) //Cierre de describe