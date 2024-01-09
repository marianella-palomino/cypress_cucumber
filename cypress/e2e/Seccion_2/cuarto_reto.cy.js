//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Cuarto Reto', () =>{

    it.only('Assert', () => {
        const tiempo = 1000
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(tiempo)

        let a = 5
        let b = 5

        cy.get('#value1').should('be.visible').and('have.class','form-control').type(a)
        cy.get('#value2').should('be.visible').and('have.class','form-control').type(b)

        cy.contains('[type = "button"]','Get Total').click()

        cy.get('#displayvalue').should('be.visible').then((e) => {
            let r = a + b
            cy.log('El valor de r: ' + r)
            cy.log(e.text())
            let res = e.text()

            if(r == res){
                cy.log('Son iguales')
            }else{
                cy.log('El resultado es incorrecto')
            }

            if(res > 50){
                a = a - 10
                b = b - 10
                cy.get('#value1').should('be.visible').and('have.class','form-control').clear().type(a)
                cy.get('#value2').should('be.visible').and('have.class','form-control').clear().type(b)

                cy.contains('[type = "button"]','Get Total').click()
            }else{
                a = a + 5
                b = b + 5
                cy.get('#value1').should('be.visible').and('have.class','form-control').clear().type(a)
                cy.get('#value2').should('be.visible').and('have.class','form-control').clear().type(b)

                cy.contains('[type = "button"]','Get Total').click()
            }
        })
    });

}) //Cierre de describe