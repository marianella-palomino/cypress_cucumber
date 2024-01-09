/// <reference types = 'cypress' />

import data2 from '../../fixtures/datos2.json'
import data1 from '../../fixtures/datos2.json'

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Carga por Fixture', () =>{

    //Cargando el Archivos Json
    // before(function(){
    //     cy.fixture('datos2').then(function(data){
    //         this.data2 = data
    //     })
    // })

    // it('Test Uno Cargando desde Json', () => {
    //     cy.visit('https://demoqa.com/text-box')
    //     cy.title('eq', 'DEMOQA')
    //     cy.wait(2000)

    //     cy.get('#userName').should('be.visible').type(data2.nombre)
    //     cy.wait(2000)
    //     cy.get('#userEmail').should('be.visible').type(data2.email)
    //     cy.wait(2000)
    //     cy.get('#currentAddress').should('be.visible').type(data2.dir1)
    //     cy.wait(2000)
    //     cy.get('#permanentAddress').should('be.visible').type(data2.dir2)
    //     cy.wait(2000)
    //     cy.get('#submit').should('be.visible').click({force:true})
    //     cy.wait(2000)
    // })

    //Alias con Json
    // before(function(){
    //     cy.fixture('datos2').as('datos_json') //el alias
    // })

    // it('Test Dos Alias con Json', () => {
    //     cy.visit('https://demoqa.com/text-box')
    //     cy.title('eq', 'DEMOQA')
    //     cy.wait(2000)

    //     cy.get('@datos_json').then((data) => {

    //         cy.get('#userName').should('be.visible').type(data.nombre)
    //         cy.wait(2000)
    //         cy.get('#userEmail').should('be.visible').type(data.email)
    //         cy.wait(2000)
    //         cy.get('#currentAddress').should('be.visible').type(data.dir1)
    //         cy.wait(2000)
    //         cy.get('#permanentAddress').should('be.visible').type(data.dir2)
    //         cy.wait(2000)
    //         cy.get('#submit').should('be.visible').click({force:true})
    //         cy.wait(2000)

    //     })

    // })

    it('Reto Fixture', () => {

        cy.fixture('excel_datos').then(testdata => { //Se reemplaza datos1 por MOCK_DATA o por data_excel
            testdata.forEach(datos => {
                const d_nombre = datos.nombre
                const d_email = datos.email
                const d_dir1 = datos.dir1
                const d_dir2 = datos.dir2

                cy.visit('https://demoqa.com/text-box')
                cy.title('eq', 'DEMOQA')
                cy.wait(2000)

                cy.get('#userName').should('be.visible').type(d_nombre)
                cy.wait(2000)
                cy.get('#userEmail').should('be.visible').type(d_email)
                cy.wait(2000)
                cy.get('#currentAddress').should('be.visible').type(d_dir1)
                cy.wait(2000)
                cy.get('#permanentAddress').should('be.visible').type(d_dir2)
                cy.wait(2000)
                cy.get('#submit').should('be.visible').click({force:true})
                cy.wait(2000)

            })
        })

    })

})