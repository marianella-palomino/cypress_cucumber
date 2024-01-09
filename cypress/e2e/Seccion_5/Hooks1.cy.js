/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Hooks', () =>{

    before(() => {
        cy.log('############### ----- Principio de todo ----- ###############')
        cy.wait(2000)
    })

    beforeEach(() => {
        cy.log('Esto se repite en cada uno de los test muy importante')
        cy.wait(2000)
    })

    // afterEach(() => {
    //     cy.log('Esto se hace al final de todos los test')
    //     cy.wait(2000)
    // })

    // after(() => {
    //     cy.log('############### Último Ciclo --- Final de todo ###############')
    //     cy.wait(2000)
    //     cy.visit('https://demoqa.com/')
    // })

    it('test uno', () => {
        cy.log('test uno')
        cy.wait(2000)
    })

    it('test dos', () => {
        cy.log('test dos')
        cy.wait(2000)
    })

    it('test tres', () => {
        cy.log('test tres')
        cy.wait(2000)
    })

    it('test cuatro', () => {
        cy.log('test cuatro')
        cy.wait(2000)
    })

    it('test cinco', () => {
        cy.log('test cinco')
        cy.wait(2000)
    })

})