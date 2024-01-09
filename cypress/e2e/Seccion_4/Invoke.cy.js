//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Manejo de Invoke', () =>{

    it('Invoke text', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title('eq', 'Input Validation')
        cy.wait(2000)

        cy.get('.page-body > :nth-child(5)').invoke('text').as('info')

        cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.')

        cy.get('[for="firstname"]').invoke('text').as('title_name')
        cy.get('@title_name').should('contain','First name:').then(() => {
            cy.get('#firstname').type('Nella')
        })
    });

    it('Invoke estilos', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title('eq', 'Input Validation')
        cy.wait(2000)

        cy.get('[for="firstname"]').invoke('attr','style','color:Blue; font-size:50px')
    });

    it('Invoke ocultar y mostrar', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title('eq', 'Input Validation')
        cy.wait(2000)

        cy.get('[for="firstname"]').invoke('hide')
        cy.get('#firstname').invoke('hide')

        cy.wait(2000)

        cy.get('[for="firstname"]').invoke('show','3s')
        cy.get('#firstname').invoke('show','4s')
    });

    it('Reto Invoke ocultar y mostrar', () => {
        let tiempo = 1500
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title('eq', 'Input Validation')
        
        cy.get('[for="surname"]').invoke('hide')
        cy.get('#surname').invoke('hide')
        
        cy.wait(tiempo)

        cy.get('#firstname').should('be.visible').type('Nella').then(() => {
            cy.wait(tiempo)
            cy.get('[for="surname"]').invoke('show', '6s')
            cy.get('#surname').invoke('show', '8s')
            cy.wait(tiempo)
            cy.get('#surname').type('Test Pruebas')
            cy.wait(tiempo)
        })
    });

    it('Reto, invoke src', () => {
        let tiempo = 1500
        cy.visit('https://demo.seleniumeasy.com/bootstrap-modal-demo.html')
        cy.title('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(tiempo)

        cy.get('.cbt').invoke('attr','src').should('include','930_180.png')

    });

    it.only('Reto, invoke target_blank', () => {
        let tiempo = 1500
        cy.visit('https://docs.cypress.io/plugins')
        cy.title('eq', 'Plugins | Cypress Documentation')
        cy.wait(tiempo)

        cy.get('[data-cy="plugin-Preprocessors"] > .pluginsList_GP3o > :nth-child(3) > .pluginTitle_P0gB > h3 > a').invoke('removeAttr','target').click({force:true})

    });

}) //Cierre de describe