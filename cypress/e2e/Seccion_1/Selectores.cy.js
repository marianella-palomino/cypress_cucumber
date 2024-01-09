//para que funcionen los comandos
/// <reference types = 'cypress' />

require('cypress-xpath')

describe ('Tipos de Selectores', () =>{

    it.only('Selector por id', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-212').should('be.visible', {timeout:25000}).type('Lore')
        cy.get('#wsf-1-field-22').should('be.visible').type('Meza')
        cy.wait(1000)
    });

    it('Selector por Atributo', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get('[placeholder="Nombre:"]').should('be.visible').type('Lore')
        cy.wait(1000)
    });

    it('Selector por Xpath', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.xpath('//*[@id="wsf-1-field-21"]').should('be.visible').type('Lore')
        cy.wait(1000)
        //Hay extensiones para Xpath en Chrome como ChroPath, TruePath, CSS and XPath checker y 
        //El Relative XPath sale con la extensión XPath Helper o Relative XPath Helper
    });

    it('Selector por Contains', () => {
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title().should('eq','Radio Buttons | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-label-44-row-1').contains('CypressIO').click()
        cy.get('#wsf-1-label-44-row-2').contains('WebdriverIO').click()
        //cy.get('.wsf-label').contains('CypressIO')
        cy.wait(1000)
    });

    it('Selector por Copy_Selector', () => {
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title().should('eq','Radio Buttons | TestingQaRvn')
        cy.wait(1000)

        cy.get('#wsf-1-field-39').should('be.visible').type('test@test.com')
        cy.wait(1000)
    });

}) //Cierre de describe