
describe ("Bienvenido al curso de Cypress Sección 1", () =>{

    it('Mi primer test -> Hola mundo', () => {
        cy.log('Hola mundo');
        cy.wait(1500)
    });

    it('Segundo test -> Campo name', () => {
        cy.visit("http://validaciones.rodrigovillanueva.com.mx/index.html")

        cy.get('#nombre').type('Nella')
        cy.wait(1500)
        cy.get('#apellidos').type('Test')
        cy.wait(1500)
        cy.get('#tel').type('9871236540')
        cy.wait(1500)
        cy.get('#email').type('test123@gmail.com')
        cy.wait(1500)
        cy.get('#direccion').type('Calle Dirección 177')
        cy.wait(1500)
        cy.get('.btn-primary').click()
        cy.wait(1500)
    });

}) //Cierre de describe