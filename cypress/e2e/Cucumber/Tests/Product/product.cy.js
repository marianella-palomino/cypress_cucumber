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
    productPage.clickSearchButton();
    productPage.enterFirstProduct();
})

Then('El usuario valida la marca del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductBrand();
})

Then('El usuario valida el titulo del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductTitle();
})

Then('El usuario valida la capacidad del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductCapacity();
})

Then('El usuario valida el color del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductColor();
})

Then('El usuario valida el style del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductStyle();
})

Then('El usuario valida el vendor del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductVendor();
})

Then('El usuario valida el stock del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductStock();
})

Then('El usuario valida la devolucion del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductReturns();
})

Then('El usuario valida la condicion del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductStatus();
})

Then('El usuario valida la imagen del producto contra el campo correspondiente en la API', function() {
    productPage.validateProductImage();
})