//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Funciones para Type', () =>{

    it('Type --> ENTER', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.wait(1500)

        //cy.get('#APjFqb').type('cypress io') //copy selector
        cy.get('[name="q"]').type('cypress io {enter}') //name
        cy.wait(1000)
        cy.get('#rso > div:nth-child(2) > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3').click()
    });

}) //Cierre de describe