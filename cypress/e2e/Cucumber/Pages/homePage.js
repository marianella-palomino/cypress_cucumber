class homePage{

    elements = {
        //const dropDownMiCuenta = '.my-account-dropdown.js-guest > .dropdown-button';
        dropDownMiCuenta:() => cy.get('.my-account-dropdown.js-guest > .dropdown-button'),
        //const btnIngresar = '.my-account-dropdown.js-guest > #my-account-dropdown-dialog > .px-3 > .button-text-icon-large';
        btnIngresar:() => cy.get('.my-account-dropdown.js-guest > #my-account-dropdown-dialog > .px-3 > .button-text-icon-large'),
        //sliderOfertasRelampago:() => cy.get('#slider-container-section-1'),
        sliderRelojes:() => cy.get('.s-one-column.l-four-columns > .l-first-one-three'),
        lblCustomerName:() => cy.get('.dropdown-button > .js-fullname')
    }

    validateCustomerName(userEmail) {
        // cy.obtenerNombreApellido(userEmail).then(function({ userNombre, userApellido }) {
        //   const userData = `${userNombre} ${userApellido}`;
        //   this.elements.lblCustomerName().should('be.visible').and('contain', userData);
        // });

        console.log('xxx', userEmail);

        cy.obtenerNombreApellido(userEmail).then(function() {
          const userData = this.userData;
          console.log('aaaa',userData);
          this.elements.lblCustomerName().should('be.visible').and('contain', userData);
        });

        cy.get('body').then(function() {
            userData
        });
      }
      
    validateBanner(){
        this.elements.sliderRelojes().should('be.visible');
    }

    navegarALogin(){
        this.openMyAccountDropdown();
        this.clickEnterDropdownBtn();
    }

    openMyAccountDropdown(){
        //cy.get(dropDownMiCuenta).click();
        this.elements.dropDownMiCuenta().click();
    }

    clickEnterDropdownBtn(){
        //cy.get(btnIngresar).click();
        this.elements.btnIngresar().click();
    }

}

module.exports = new homePage();