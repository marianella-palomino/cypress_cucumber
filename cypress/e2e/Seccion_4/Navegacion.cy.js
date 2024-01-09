/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Navegación entre las páginas', () =>{

    it('Back, forward', () => {
        let tiempo = 1500
        cy.visit('https://demoqa.com/')
        cy.title('eq', 'DEMOQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.go('back')
        cy.go('back')

        cy.wait(tiempo)

        cy.go('forward')
        cy.go('forward')
    })

    it.only('Reload', () => {
        let tiempo = 1500
        cy.visit('https://demoqa.com/')
        cy.title('eq', 'DEMOQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.get('#userName').should('be.visible').type('Nella')
        cy.wait(tiempo)

        cy.get('#userEmail').should('be.visible').type('test@test.com')
        cy.wait(tiempo)

        cy.reload()

        cy.wait(tiempo)

        cy.go('back')
    })

})