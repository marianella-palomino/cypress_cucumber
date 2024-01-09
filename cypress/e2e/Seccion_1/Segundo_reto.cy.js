//para que funcionen los comandos
/// <reference types = 'cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')

describe ('Segundo Reto', () =>{

    it('Probando la aplicación', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.title().should('eq', 'Computers database')
        cy.wait(1000)

        //Buscar
        cy.xpath('//*[@id="searchbox"]').should('be.visible').type('ACE')
        cy.get('#searchsubmit').should('be.visible').click()

        //Agregar
        cy.get('#add').should('be.visible').click()
        cy.get('[name="name"]').should('be.visible').type('Cypress')
        cy.get('#introduced').should('be.visible').type('2023-10-17').tab().type('2024-10-17')
        cy.get('#company').should('be.visible').select('IBM').should('have.value', '13').wait(1500)//combo
        cy.get('.primary').should('be.visible').click()
        cy.xpath('//*[@id="searchbox"]').should('be.visible').type('Cypress')
        cy.get('#searchsubmit').should('be.visible').click()
    });

}) //Cierre de describe