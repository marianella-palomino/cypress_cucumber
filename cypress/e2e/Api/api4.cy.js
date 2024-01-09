/// <reference types = 'cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')

describe ('Demo de una Rest Api - 4', () =>{

    it('Test Cuatro', () => {

        const datos = {
            "Nombre": "Nella",
            "Ap": "Test",
            "Am": "Pruebas",
            "Tel": "987654321",
            "Dir": "Dir 1",
            "Cursos": [
                {
                    "Nombre": "Php",
                    "Descripcion": "Lenguaje de Programación Php"
                },
                {
                    "Nombre": "Java",
                    "Descripcion": "Lenguaje de Programación Java"
                },
                {
                    "Nombre": "Python",
                    "Descripcion": "Lenguaje de Programación Python"
                },
            ]
        }

        cy.log(datos.Nombre)
        cy.log(datos.Dir)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[1])
        cy.log(datos.Cursos[2].Nombre)
        cy.log(datos.Cursos[2].Descripcion)

    })

})