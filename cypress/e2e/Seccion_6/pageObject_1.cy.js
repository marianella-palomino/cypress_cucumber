import ProyectoUno_Po from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO'
/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Page Objects Models', () =>{

    const master = new ProyectoUno_Po()

    master.visitHome()

    it.only('Test Uno', () => {
        master.seccionUno(1500,'Nella','Test', 'test@test.com')
    })

    it('Test Dos', () => {
        master.seccionDos(1500,'519', 'Direccion 1', 'Prueba', 'New Jersey')
        cy.Validar_campo2('small.help-block[data-bv-validator="phone"][data-bv-for="phone"][data-bv-result="INVALID"]','Please supply a vaild phone number with area code','teléfono')
    })

    it('Test Tres', () => {
        master.seccionTres(1500,'1234', 'www.test.com', 'yes', 'Com')
        cy.Validar_campo2('small.help-block[data-bv-validator="stringLength"][data-bv-for="comment"][data-bv-result="INVALID"]','Please enter at least 10 characters and no more than 200','proyecto')
    })

    it('Test Cuatro', () => {
        master.seccionUno(1500,'Nella','Test', 'test@test.com')
        master.seccionDos(1500,'5198765432', 'Direccion 1', 'Prueba', 'New Jersey')
        master.seccionTres(1500,'1234', 'www.test.com', 'yes', 'Comentario')
    })

})