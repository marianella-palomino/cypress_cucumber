import homePage from "../../Pages/homePage";
import loginPage from "../../Pages/loginPage";

//var countryId;
let userEmail;

Given ('Un usuario ingresa a la página de login con el email {string} y password {string}', function(email, pwd){
    //cy.visit('/');
    cy.visit('/', {failOnStatusCode: false});
    //homePage.openMyAccountDropdown();
    //homePage.clickEnterDropdownBtn();
    homePage.navegarALogin();
    loginPage.fillLoginData(email,pwd);
    userEmail = email;
    //countryId = loginPage.obtainCurrentCountryId();
    cy.wait(1000);
})

When ('Un usuario hace click en Ingresar', function(){
    loginPage.clickIngresar();
})

Then ('El usuario está en la home page', function(){
    homePage.validateBanner();
})

Then ('El nombre del usuario visible es correcto', function(){
    homePage.validateCustomerName('pefesih386@hondabbs.com');
})