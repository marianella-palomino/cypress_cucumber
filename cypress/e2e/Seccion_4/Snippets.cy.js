//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Configuración y uso de los Snippets', () =>{

    it('Snippet uno', () => {
        let tiempo = 1500
        cy.visit('https://demoqa.com/text-box')
        cy.title('eq', 'DEMOQA')
        cy.wait(tiempo)

        cy.get('[type="text"]').should('be.visible').type('Demo')
        cy.wait(tiempo)
    });

}) //Cierre de describe