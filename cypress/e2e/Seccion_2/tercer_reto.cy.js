//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Tercer Reto', () =>{

    it.only('Combobox Opción Múltiple', () => {
        cy.visit('https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html')
        cy.title().should('eq', 'Selenium Easy - JQuery Dual List Box Demo')
        cy.wait(1000)
        
        /*
        cy.get(':nth-child(1) > .form-control').should('be.visible').select(['Manuela','Maria Eduarda','Julia']).then(() =>{
            cy.get('.pAdd').should('be.visible').click().wait(1000).then(() =>{
                cy.get(':nth-child(3) > .form-control').should('be.visible').select(['Manuela','Maria Eduarda','Julia']).wait(1000).then(() =>{
                    cy.get('.pRemove').should('be.visible').click().wait(1500).then(() =>{
                        cy.get('.pAddAll').should('be.visible').click().wait(1500).then(() =>{
                            cy.get('.pRemoveAll').should('be.visible').click()
                            cy.log('Se movieron todos los elementos')
                        })
                    })
                })
            })
         })
        */
        
        cy.get(':nth-child(1) > .form-control').should('be.visible').select(['Manuela','Maria Eduarda','Julia']).then(() =>{
            cy.get('.pAdd').should('be.visible').click().wait(1000)
            cy.get(':nth-child(3) > .form-control').should('be.visible').select(['Manuela','Maria Eduarda','Julia']).wait(1000)
            cy.get('.pRemove').should('be.visible').click().wait(1500)
            cy.get('.pAddAll').should('be.visible').click().wait(1500)
            cy.get('.pRemoveAll').should('be.visible').click()
            cy.log('Se movieron todos los elementos')
            cy.wait(1000)
        })
    });

}) //Cierre de describe