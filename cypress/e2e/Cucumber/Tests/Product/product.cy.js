import productPage from "../../Pages/productPage";
var sku;

Given('Un usuario busca un producto de AMZ por SKU', function() {
    cy.visit('/', {failOnStatusCode: false});
    sku = Cypress.env('skuAMZ');

    productPage.searchSKU(sku);
})

Given('El usuario ejecuta la api de producto', function() {
    cy.apiProduct(sku);
})

When('El usuario hace click en el producto', function() {
    console.log('zzz',this.apiProductResponse);
    productPage.clickSearchButton();
    productPage.enterFirstProduct();
})

Then('El usuario valida la marca del producto contra el campo X de la api', function() {
    console.log('zzz',this.apiProductResponse);
    productPage.validateProductBrand(sku);
})

Then('El usuario valida el precio del producto contra el campo X de la api', function() {
    productPage.validateProductPrice();
})

Then('El usuario valida el stock del producto contra el campo X de la api', function() {
    productPage.validateInStock();
})