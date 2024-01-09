/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Demo de una Rest Api', () =>{

    it('Test Uno', () => {

        const datos = {
            "Nombre": "Nella",
            "Ap": "Test",
            "Am": "Pruebas",
            "Tel": "987654321",
            "Dir": "Dir 1"
        }

        cy.log(datos['Nombre'])
        cy.log(datos['Ap'])
        cy.log(datos['Am'])
        cy.log(datos['Tel'])
        cy.log(datos['Dir'])
    })

})