//para que funcionen los comandos
/// <reference types = 'cypress' />

const urlPais = 'https://www.tiendamia.com.pa/';
const dropDownMiCuenta = '.my-account-dropdown.js-guest > .dropdown-button';
const btnIngresar = '.my-account-dropdown.js-guest > #my-account-dropdown-dialog > .px-3 > .button-text-icon-large';
const inputEmail = '.login-container > .block.block-customer-login > .block-content > #login-form > .fieldset > .email > .control > #email';
const inputContrasena = '#pass';
const btnLogin = '.fieldset > .actions-toolbar > div.primary > #send2';
const lblCustomerName = '.dropdown-button > .js-fullname';
const sliderOfertasDeLaSemana = '#slider-container-section-1';
const inputBuscar = '#search';
const btnLupa = '[type="submit"]';
const primerProducto = '.item-collection > :nth-child(1)';
const btnComprar = '#product-checkout-button';
const btnFinalizarCompra = '.loading-skeleton-container';
const inputCedulaIdentidad = 'input[name="custom_attributes[document]"]';
const inputFechaNacimiento = 'input[name="custom_attributes[birthdate]"]';
const inputDireccion = 'input[name="street[0]"]';
const dropDownProvincia = 'select[name="region_id"]';
const inputCiudad = 'input[name="city"]';
const inputCodigoPostal = 'input[name="postcode"]';
const inputTelefono = 'input[name="telephone"]';
const btnContinuar = 'button[data-role="opc-continue"]';
const breakLabel = 'h2 > span';

describe ('Login', () =>{

    it('Login exitoso', () => {
        cy.visit(urlPais);
        cy.get(dropDownMiCuenta).click();
        cy.get(btnIngresar).click();
        cy.get(inputEmail).type('pefesih386@hondabbs.com');
        cy.get(inputContrasena).type('Test123*');
        cy.wait(10000);
        cy.get(btnLogin).click();
        cy.get(lblCustomerName).should('be.visible').and('contain', 'Test Test');
        cy.get(sliderOfertasDeLaSemana).should('be.visible');
    });

    it.only('Llegar al checkout', () => {
        cy.visit(urlPais);
        cy.get(dropDownMiCuenta).click();
        cy.get(btnIngresar).click();
        cy.get(inputEmail).type('manetest@yahoo.com');
        cy.get(inputContrasena).type('Test123*');
        cy.wait(10000);
        cy.get(btnLogin).click();
        cy.get(lblCustomerName).should('be.visible').and('contain', 'Test Test');
        cy.get(sliderOfertasDeLaSemana).should('be.visible');
        cy.get(inputBuscar).type('pop');
        cy.contains(btnLupa,'Search').click();
        cy.get(primerProducto).click();
        cy.get(btnComprar).click();
        cy.get(btnFinalizarCompra).click();

        cy.get(inputCedulaIdentidad).type('123456789');
        cy.get(inputFechaNacimiento).type('23/05/1987');
        cy.get('body').click();
        cy.get(inputDireccion).clear().type('Calle Test 123');
        cy.get(dropDownProvincia).select('890');
        cy.get(inputCiudad).clear().type('Pruebas');
        cy.get(inputCodigoPostal).clear().type('12345');
        cy.get(inputTelefono).clear().type('987654321');
        cy.contains(btnContinuar, 'Continuar').click();

        cy.contains(btnContinuar, 'Continuar al pago').click();

        cy.get(breakLabel).should('be.visible').and('have.text', 'We are on a break');
    });

}) 