/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Record Cypress Studio', () =>{
    it('Invoke text', () => {
        let tiempo = 1500
        cy.visit('https://demoqa.com/text-box')
        cy.title('eq', 'DEMOQA')
        cy.wait(tiempo)
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#userName').type('Nella');
        cy.get('#userEmail').type('test@test.com');
        cy.get('#currentAddress').click();
        cy.get('#currentAddress').type('Direc1');
        cy.get('#permanentAddress').click();
        cy.get('#permanentAddress').type('Direc2');
        cy.get('#submit').click();
        cy.wait(tiempo)
        /* ==== End Cypress Studio ==== */
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('test_Checkbox', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/checkbox');
        cy.get('.rct-collapse > .rct-icon').click({force:true});
        cy.get(':nth-child(3) > .rct-text > .rct-collapse > .rct-icon > path').click({force:true});
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click({force:true});
        cy.get('#tree-node-wordFile').check({force:true});
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .rct-text > .rct-collapse > .rct-icon').click({force:true});
        cy.get(':nth-child(2) > ol > :nth-child(2) > .rct-text > .rct-collapse > .rct-icon').click({force:true});
        cy.get(':nth-child(2) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click({force:true});
        cy.get('#tree-node-private').check({force:true});
        cy.get(':nth-child(2) > :nth-child(2) > .rct-node-collapsed > .rct-text > .rct-collapse > .rct-icon').click({force:true});
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon > path').click({force:true});
        cy.get('#tree-node-angular').check({force:true});
        /* ==== End Cypress Studio ==== */
    });
})