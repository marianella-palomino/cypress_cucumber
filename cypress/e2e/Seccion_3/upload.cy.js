//para que funcionen los comandos
/// <reference types = 'cypress' />

import 'cypress-file-upload';

describe ('Upload Imágenes', () =>{

    it('Cargando imágenes', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        const ruta = 'img1.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)
    });

}) //Cierre de describe