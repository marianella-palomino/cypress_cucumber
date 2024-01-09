/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Reto de la función Hooks', () =>{

    let tiempo = 1500

    before(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title('eq', 'OrangeHRM')
        cy.wait(tiempo)
        cy.get('[name="username"]').should('be.visible').type('Admin')
        cy.wait(tiempo)
        cy.get('[name="password"]').should('be.visible').type('admin123')
        cy.wait(tiempo)
        cy.get('[type="submit"]').should('be.visible').click({force:true})
    })

    // after(() => {
    //     cy.log('############### Último Ciclo --- Final de todo ###############')
    //     cy.wait(2000)
    //     cy.get('.oxd-userdropdown-tab > .oxd-icon').should('be.visible').click({force:true})
    //     cy.wait(tiempo)
    //     cy.get('.oxd-userdropdown-link').contains('Logout').should('be.visible').click({force:true})
    //     cy.wait(tiempo)
    // })

    it('test uno', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })

    it('test dos', () => {
        cy.get(':nth-child(3) > .oxd-main-menu-item').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })

    it('test tres', () => {
        cy.get(':nth-child(7) > .oxd-main-menu-item').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })

})