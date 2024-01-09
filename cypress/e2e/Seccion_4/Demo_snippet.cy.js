/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Demo de la primera plantilla', () =>{

    it('Demo uno', () => {
        let tiempo = 1500
        cy.visit('https://demoqa.com/text-box')
        cy.title('eq', 'DEMOQA')
        cy.wait(tiempo)

        cy.get('[type="text"]').should('be.visible').type('Nella')
        cy.wait(tiempo)
    })

})