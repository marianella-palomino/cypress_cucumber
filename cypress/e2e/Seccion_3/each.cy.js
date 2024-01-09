//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Bucles For y each', () =>{

    it('For uno', () => {
        // for(let i=1; i<=10; i++){
        //     cy.log("Número: " + i)
        // }

        for(let i=1; i<=100; i=i+10){
            cy.log("Número: " + i)
        }
    });

    it('For dos', () => {

        for(let i=1; i<=10; i++){
            let t=5
            cy.log(t + " X " + i + '=' + t*i)
        }
    });

    it('Each uno', () => {

        cy.visit('https://dapper-pastelito-04ff24.netlify.app/shop')
        cy.title('eq', 'Themerc - Dummy Ecommerce')
        cy.wait(1500)

        cy.get('.sc-ejWHKt').each(($el, index, $list) => {
            //cy.log($el.text())
            let producto =  $el.text()
            cy.log(producto)

        })

    });

    it('Each dos', () => {

        cy.visit('https://dapper-pastelito-04ff24.netlify.app/shop')
        cy.title('eq', 'Themerc - Dummy Ecommerce')
        cy.wait(2000)

        cy.get('.sc-ejWHKt').each(($el, index, $list) => {
            
            let producto =  $el.text()
            if(producto.includes('Key Holder')){
                cy.wrap($el).click()
                cy.wait(2000)
            }

        })

    });

    it('Each tres', () => {

        cy.visit('https://dapper-pastelito-04ff24.netlify.app/shop')
        cy.title('eq', 'Themerc - Dummy Ecommerce')
        let t=1500
        cy.wait(t)

        for(let x=0; x<=3; x++){
            cy.get('.sc-ejWHKt').eq(x).click({force:true})
            cy.wait(t)
            cy.get('[role="listbox"]').first().click()
            cy.contains('div[role="option"]', '2').click();
            cy.wait(t)
            cy.get('.shopping').first().click()
            cy.wait(t)
            cy.get(':nth-child(2) > .container > :nth-child(5) > p > i').should('be.visible').and('have.text', 'You currently have 3 of these items from the cart')
            cy.get('.nav-item--active').click()       
        }

    });

    it.only('Each cuatro', () => {

        cy.visit('https://dapper-pastelito-04ff24.netlify.app/shop')
        cy.title('eq', 'Themerc - Dummy Ecommerce')
        let t=1500
        cy.wait(t)
        const datos = []

        cy.get('.sc-ejWHKt').each(($el, index, $list) => {

            datos[index] = $el.text()
            //cy.log(datos.length)

        }).then(() => {
            for(let x=0; x<=datos.length; x++){
                cy.get('.sc-ejWHKt').eq(x).click({force:true})
                cy.wait(t)
                cy.get('[role="listbox"]').first().click()
                cy.contains('div[role="option"]', '1').click();
                cy.wait(t)
                cy.get('.shopping').first().click()
                cy.wait(t)
                cy.get(':nth-child(2) > .container > :nth-child(5) > p > i').should('be.visible').and('have.text', 'You currently have this item in the cart')
                cy.get('.nav-item--active').click()       
            }
        })

        //cy.log(datos)

    });

}) //Cierre de describe