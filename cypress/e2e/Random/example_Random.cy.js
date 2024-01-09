/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Métodos de Carga por Randoms', () =>{

    let tiempo = 500
    let numero_pruebas = 5

    it('Mi Primer Test -> Hola Mundo', () => {
        cy.log('Hola mundo')
        cy.wait(tiempo)
    })

    it('Test Random', () => {
        for(let num=1; num<=numero_pruebas;num++)
        {
            //let estado_Arr = ["1: 1", "3: 13", "S: 32", "55555", "Lore"];
            //let Random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];
            let cantidad = Math.floor(Math.random() * 3000);

            cy.visit('https://demoqa.com/text-box')
            cy.title('eq', 'DEMOQA')
            cy.wait(tiempo)
            cy.get('#userName').should('be.visible').type('Nombre' + cantidad)
            cy.wait(tiempo)
            cy.get('#userEmail').should('be.visible').type('correo' + cantidad + '@gmail.com')
            cy.wait(tiempo)
            cy.get('#currentAddress').should('be.visible').type('DirAct' + cantidad)
            cy.wait(tiempo)
            cy.get('#permanentAddress').should('be.visible').type('DirPer' + cantidad)
            cy.wait(tiempo)
            cy.get('#submit').should('be.visible').click({force:true})
            cy.wait(tiempo)
        }
    })

})