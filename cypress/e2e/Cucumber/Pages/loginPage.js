class loginPage{

    elements = {
        inputEmail:() => cy.get('.login-container > .block.block-customer-login > .block-content > #login-form > .fieldset > .email > .control > #email'),
        inputContrasena:() => cy.get('.login-container > .block.block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'),
        //inputContrasena:() => cy.get('#pass'),
        btnLogin:() => cy.get('.fieldset > .actions-toolbar > div.primary > #send2')
    }

    clickIngresar(){
        this.elements.btnLogin().click();
    }

    fillLoginData(email,pwd){
        this.elements.inputEmail().type(email);
        this.elements.inputContrasena().type(pwd);
    }

}

module.exports = new loginPage();