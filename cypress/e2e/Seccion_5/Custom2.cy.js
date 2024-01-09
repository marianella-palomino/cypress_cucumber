/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Reto custom por medio de comandos personalizados', () =>{

    let tiempo = 2000

    before(() => {
        cy.visit('http://demo.seleniumeasy.com/input-form-demo.html')
        cy.title('eq', 'Selenium Easy - Input Form Demo with Validations')
        cy.wait(tiempo)
    })

    it('test', () => {
        cy.Bloque_Reto_Form(1500,'Nella','Test', 'test@test.com', '5198765432', 'Direccion 1', 'Prueba', 'New Jersey', '1234', 'www.test.com', 'yes', 'Comentario')
        cy.wait(tiempo)
    })

    it.only('Pruebas validar email', () => {
        cy.Bloque_Reto_Form(1500,'Nella','Test', 'test.com', '5198765432', 'Direccion 1', 'Prueba', 'New Jersey', '1234', 'www.test.com', 'yes', 'Comentario')
        cy.wait(tiempo)
        //cy.Validar_campo('small.help-block[data-bv-validator="emailAddress"]','Please supply a valid email address','email')
        cy.Validar_campo2('small.help-block[data-bv-validator="emailAddress"]','Please supply a valid email address','email')
    })

    it.only('Pruebas validar nombre', () => {
        cy.Bloque_Reto_Form(1500,'N','Test', 'test@test.com', '5198765432', 'Direccion 1', 'Prueba', 'New Jersey', '1234', 'www.test.com', 'yes', 'Comentario')
        cy.wait(tiempo)
        //cy.Validar_campo('small.help-block[data-bv-validator="stringLength"][data-bv-for="first_name"][data-bv-result="INVALID"]','Please enter more than 2 characters','nombre')
        cy.Validar_campo2('small.help-block[data-bv-validator="stringLength"][data-bv-for="first_name"][data-bv-result="INVALID"]','Please enter more than 2 characters','nombre')
    })

})