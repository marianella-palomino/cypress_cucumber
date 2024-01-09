//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Nueva Sección Select', () =>{

    it('Combobox', () => {
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html')
        cy.title().should('eq', 'Formulario de Ejemplo')
        cy.wait(1000)

        cy.get('#comboBox1').should('be.visible').select('Valor 3').should('have.value', '3').wait(2000)
        cy.get('#comboBox1').should('be.visible').select('Valor 5').wait(1500)
    });

    it('Input', () => {
        cy.visit('https://www.google.com')
        cy.title().should('eq', 'Google')
        cy.wait(1000)

        cy.get('#APjFqb').should('be.visible').type('Ferrari').type('{enter}')
        cy.get('.MUFPAc > :nth-child(2) > a').click()
    });

    it.only('Combobox Opción Múltiple', () => {
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html')
        cy.title().should('eq', 'Formulario de Ejemplo')
        cy.wait(1000)

        cy.get('#comboBox1').should('be.visible').select('Valor 1').should('have.value', '1').wait(2000)
        //cy.get('#comboBox2').should('be.visible').select(['Valor 2','Valor 4']).invoke('val').should('deep.equal', ['2', '4'])
        cy.get('#comboBox2').should('be.visible').select(['Valor 3','Valor 5']).then(() =>{
            cy.get('#os').should('be.visible').select('Windows').should('have.value', 'windows').wait(2000)
            cy.get('#version').should('be.visible').select('Windows 10').should('have.value', 'Windows 10').wait(2000)
            cy.get('.btn-primary').click()
        })
        cy.wait(1000)
    });

}) //Cierre de describe