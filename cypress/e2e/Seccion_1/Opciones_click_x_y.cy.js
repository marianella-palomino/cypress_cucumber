//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Opciones por Coordenadas (x,y)', () =>{

    it('Click Force True', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').should('be.visible').click()
        cy.wait(1000)

        cy.get('.oxd-topbar-header-title').should('be.visible').click(50,5)
        cy.get('.oxd-topbar-header-title').should('be.visible').click(70,5)
        cy.wait(1000)
    });

}) //Cierre de describe