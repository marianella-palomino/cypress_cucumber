/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Hooks Ejemplos', () =>{
    
    let tiempo = 2000
    
    before(() => {
        
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title('eq', 'Radio Buttons | TestingQaRvn')
        cy.wait(tiempo)
    });

    it('Test uno', () => {
        cy.get('[type="checkbox"]').check({force: true}).should('be.checked')
        cy.wait(tiempo)
    })

    it('Test dos', () => {
        cy.get('[type="checkbox"]').uncheck({force: true}).should('not.be.checked')
        cy.wait(tiempo)
    })

})