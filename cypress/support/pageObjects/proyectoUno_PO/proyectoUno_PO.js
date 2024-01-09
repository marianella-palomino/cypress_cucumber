class ProyectoUno_Po{

    visitHome(){
        let tiempo = 2000

        before(() => {
            cy.visit('http://demo.seleniumeasy.com/input-form-demo.html')
            cy.title('eq', 'Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
        })
    }

    seccionUno(t, name, last, email){
        let tiempo = t
        cy.get('[name="first_name"]').clear().should('be.visible').type(name)
        cy.wait(tiempo)
        cy.screenshot('Campo nombre')
        cy.get('[name="last_name"]').clear().should('be.visible').type(last)
        cy.wait(tiempo)
        cy.get('[name="email"]').clear().should('be.visible').type(email)
        cy.wait(tiempo)
    }

    seccionDos(t,phone, address, city, state){
        let tiempo = t
        cy.get('[name="phone"]').clear().should('be.visible').type(phone)
        cy.wait(tiempo)
        cy.get('[name="address"]').clear().should('be.visible').type(address)
        cy.wait(tiempo)
        cy.get('[name="city"]').clear().should('be.visible').type(city)
        cy.wait(tiempo)
        cy.get('[name="state"]').select(state)
        cy.wait(tiempo)
    }

    seccionTres(t,zip, website, hosting, comment){
        let tiempo = t
        cy.get('[name="zip"]').clear().should('be.visible').type(zip)
        cy.wait(tiempo)
        cy.get('[name="website"]').clear().should('be.visible').type(website)
        cy.wait(tiempo)
        cy.get('[name="hosting"]').check(hosting)
        cy.wait(tiempo)
        cy.get('[name="comment"]').clear().should('be.visible').type(comment)
        cy.wait(tiempo)
        cy.get('.btn').should('be.visible').click({force:true})
        cy.wait(tiempo)
    }

}//Final

export  default ProyectoUno_Po;