Feature: Login
@focus
Scenario: Login exitoso
Given Un usuario ingresa a la página de login con el email "pefesih386@hondabbs.com" y password "Test123*"
When Un usuario hace click en Ingresar
Then El usuario está en la home page
And El nombre del usuario visible es correcto