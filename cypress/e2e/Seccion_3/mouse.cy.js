//para que funcionen los comandos
/// <reference types = 'cypress' />

require('@4tw/cypress-drag-drop')

describe ('Cypress eventos Mouse', () =>{

    it('Drag abd Drop', () => {
        let tiempo = 1000
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title('eq', 'The Internet')
        cy.wait(1500)

        cy.get('#column-a').drag('#column-b',{force:true})
    });

    it('Drag abd Drop 2', () => {
        let tiempo = 1000
        cy.visit('https://demo.seleniumeasy.com/drag-and-drop-demo.html')
        cy.title('eq', 'Selenium Easy Demo - Drag and Drop Demo')
        cy.wait(1500)

        cy.get('#todrag > :nth-child(2)').drag('#mydropzone')
        cy.wait(1500)
        cy.get('#todrag > :nth-child(3)').drag('#mydropzone')
        cy.wait(1500)
        cy.get('#todrag > :nth-child(4)').drag('#mydropzone')
        cy.wait(1500)
        cy.get('#todrag > :nth-child(5)').drag('#mydropzone')
        cy.wait(1500)
    });

    it('Trigger/Mouseover', () => {
        // let tiempo = 1500
        // cy.visit('https://www.way2automation.com/')
        // cy.title('eq', 'Get Online Selenium Certification Course | Way2Automation')
        // cy.wait(tiempo)

        // cy.get('#menu-item-27580').trigger('mouseover')
        // cy.wait(tiempo)

        let tiempo = 1500
        cy.visit('https://www.wong.pe/')
        cy.title('eq', 'Días de Expertos Wong.pe | Hasta 30% desct. en Licores')
        cy.wait(tiempo)

        cy.get('.vtex-menu-2-x-styledLinkContainer').trigger('mouseover')
        cy.wait(tiempo)

    });

    it('Invoke/target', () => {

        let tiempo = 1500
        cy.visit('https://docs.cypress.io/plugins')
        cy.title('eq', 'Plugins | Cypress Documentation')
        cy.wait(tiempo)

        cy.contains('Cucumber').invoke('removeAttr','target').click()
        cy.wait(tiempo)

    });

    it.only('Slider', () => {

        let tiempo = 1800
        cy.visit('https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html')
        cy.title('eq', 'Selenium Easy - Drag and Drop Range Sliders ')
        cy.wait(tiempo)

        cy.get('#slider1 > .range > input').invoke('attr','value', '90')
        cy.wait(tiempo)

        cy.get('#slider3 > .range > input').invoke('attr','value', '90')
        cy.wait(tiempo)
        
        cy.get('#slider5 > .range > input').invoke('attr','value', '90')
        cy.wait(tiempo)

    });

}) //Cierre de describe