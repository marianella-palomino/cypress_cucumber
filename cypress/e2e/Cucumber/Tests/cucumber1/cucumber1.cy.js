Given ('Abrir el navegador principal',()=>{
    cy.visit('https://demoqa.com/text-box')
    cy.title('eq','DEMOQA')
})

And('Cargar los datos nombre {word}, email {word}, dir1 {word}, dir2 {word}',(Name,Email,Dir1,Dir2)=>{
    cy.get('#userName').should('be.visible').type(Name)
    Cypress.env('Name', Name)
    cy.wait(2000)
    cy.get('#userEmail').should('be.visible').type(Email)
    Cypress.env('Email', Email)
    cy.wait(2000)
    cy.get('#currentAddress').should('be.visible').type(Dir1)
    Cypress.env('Dir1', Dir1)
    cy.wait(2000)
    cy.get('#permanentAddress').should('be.visible').type(Dir2)
    Cypress.env('Dir2', Dir2)
    cy.wait(2000)
})

When('Presionar el botón guardar',()=>{
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(2000)
})

Then('Validar los datos ingresados',()=>{
    cy.get('[id="name"]').contains(Cypress.env('Name'))
    cy.get('[id="email"]').contains(Cypress.env('Email'))
    cy.get('[id="currentAddress"]').contains(Cypress.env('Dir1'))
    cy.get('[id="permanentAddress"]').contains(Cypress.env('Dir2'))
})