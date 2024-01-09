/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Comandos Personalizados', () =>{

    let tiempo = 2000

    before(() => {
        cy.visit('https://demoqa.com/text-box')
        cy.title('eq', 'DEMOQA')
        cy.wait(tiempo)
    })

    it('Demo uno', () => {
        cy.Texto_visible(1500,'#userName','Nella')
        cy.Texto_visible(1500,'#userEmail','test@test.com')
        cy.Texto_visible(1500,'#currentAddress','Dirección 1')
        cy.Texto_visible(1500,'#permanentAddress','Dirección 2')
        cy.Click(1500,'#submit')
    })

    it.only('Demo dos por bloque', () => {
        cy.Bloque_DEMOQA(1500,'Nella','test@test.com','Dirección 1','Dirección 2')
    })

})