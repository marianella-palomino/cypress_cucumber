class productPage{

    elements = {
        searchInput: () => cy.get('#search'),
        searchButton: () => cy.get('.actions > .action'),
        //firstProductCard: () => cy.get(':nth-child(1) > a > .info > .item-name'),
        firstProductCard: () => cy.get('.item-card'),
        productBrand: () => cy.get('.brand'),
        productTitle: () => cy.get('.title'),
        productCapacity: () => cy.get('.option-7139114 > .variation-title-container > .variation-selected'),
        productColor: ()=> cy.get('.variation-title-container > .variation-selected'),
        productStyle: ()=> cy.get('.single-title-container > .variation-selected'),
        productVendor: ()=> cy.get('.product-details-container > :nth-child(5) > :nth-child(3)'),
        productStock: ()=> cy.get('.product-details-container > :nth-child(1) > :nth-child(3)'),
        productReturns: ()=> cy.get('.product-details-container > :nth-child(3) > :nth-child(3)'),
        productStatus: ()=> cy.get('.product-details-container > :nth-child(4) > :nth-child(3)'),
        productWeight: ()=> cy.get('.product-details-container > :nth-child(2) > :nth-child(3)'),
        productSKU: ()=> cy.get('.sku-container-info > span'),
        productImage: ()=> cy.get('.selected-variant > img'),
    }

    searchSKU(sku) {
        this.elements.searchInput().type(sku);
    }

    clickSearchButton(){
        this.elements.searchButton().click();
    }

    enterFirstProduct(){
        this.elements.firstProductCard().first().click();
    }

    validateProductBrand(){
        cy.wait(2000);
        
        cy.get('@apiProductResponse').then((apiProductResponse) => {
            console.log('aaa', apiProductResponse);

            const brandText = apiProductResponse.body.product.brand;
            console.log('bbb', brandText);
    
            this.elements.productBrand().should('be.visible').and('contain', brandText);
        });
        // cy.wait(2000);
        // console.log('xxx', sku);
        
        // cy.apiProduct(sku).then((apiProductResponse) => {
        //     cy.wait(2000);

        //     console.log('aaa',apiProductResponse);

        //     const brandText = apiProductResponse.product.brand;
        //     console.log('bbb',brandText);

        //     this.elements.productBrand().should('be.visible').invoke('text').then((textProductBrand) => {
        //         console.log('ccc',textProductBrand);
        //         const cleanedTextProductBrand = textProductBrand.trim();
    
        //         console.log('yyy',cleanedTextProductBrand);
        //         expect(cleanedTextProductBrand).to.eq(brandText);
        //     });

        // });
    }

    validateProductTitle(){
        cy.get('@apiProductResponse').then((apiProductResponse) => {

            const titleText = apiProductResponse.body.product.name;
            this.elements.productTitle().should('be.visible').and('contain', titleText);
        });
    }

    validateProductCapacity(){
        cy.get('@apiProductResponse').then((apiProductResponse) => {

            const capacity = apiProductResponse.body.product.variations.filter((item) => item.variation_label == 'Capacity');

            if(capacity.length > 0){
                const options = capacity[0].options.filter((item) => item.sku == apiProductResponse.body.product.sku);

                if(options.length > 0) {
                    const capicityText = options[0].label;
                    this.elements.productCapacity().should('be.visible').and('contain', capicityText);
                } else {
                    throw new Error('ERROR: El sku no está en las opciones');
                }
            }       
        });
    }

    validateProductColor(){
        cy.get('@apiProductResponse').then((apiProductResponse) => {

            const color = apiProductResponse.body.product.variations.filter((item) => item.variation_code == 'color');

            if(color.length > 0){
                const options = color[0].options.filter((item) => item.sku == apiProductResponse.body.product.sku);

                if(options.length > 0) {
                    const colorText = options[0].label;
                    this.elements.productColor().should('be.visible').and('contain', colorText);
                } else {
                    throw new Error('ERROR: El sku no está en las opciones');
                }
            }       
        });
        
    }

    validateProductStyle(){
        cy.get('@apiProductResponse').then((apiProductResponse) => {

            const style = apiProductResponse.body.product.variations.filter((item) => item.variation_code == 'style');

            if(style.length > 0){
                const options = style[0].options.filter((item) => item.sku == apiProductResponse.body.product.sku);

                if(options.length > 0) {
                    const styleText = options[0].label;
                    this.elements.productStyle().should('be.visible').and('contain', styleText);
                } else {
                    throw new Error('ERROR: El sku no está en las opciones');
                }
            }
        });
    }

    validateProductVendor(){
        cy.get('@apiProductResponse').then((apiProductResponse) => {

            const vendorText = apiProductResponse.body.merchant_name;
            this.elements.productVendor().should('be.visible').and('contain', vendorText);
        });
    }

    validateProductStock(){
        cy.get('@apiProductResponse').then((apiProductResponse) => {
            const stockText = apiProductResponse.body.product.availability.stock.toString();
            
            this.elements.productStock().should('exist').invoke('text').then((productStock) => {
                if (stockText === 'true' && productStock === 'En stock') {
                    cy.log('La validación exitosa productStock es "En stock" cuando stockText es "true"');
                } else if(stockText === 'false' && productStock === 'Sin Stock'){
                    cy.log('La validación exitosa productStock es "Sin Stock" cuando stockText es "false"');
                } else{ 
                    throw new Error(`La validación falló. productStock: ${productStock}, stockText: ${stockText}`);
                }
            });
        });

    }

    validateProductReturns(){
        cy.get('@apiProductResponse').then((apiProductResponse) => {
            const returnsText = apiProductResponse.body.product.merchant_returns.toString();
            
            this.elements.productReturns().should('exist').invoke('text').then((productReturns) => {
                if (returnsText === 'true' && productReturns === 'Si') {
                    cy.log('La validación exitosa productReturns es "Si" cuando returnsText es "true"');
                } else if(returnsText === 'false' && productReturns === 'No'){
                    cy.log('La validación exitosa productReturns es "No" cuando returnsText es "false"');
                } else{ 
                    throw new Error(`La validación falló. productReturns: ${productReturns}, returnsText: ${returnsText}`);
                }
            });
        });
    }

    validateProductStatus(){
        cy.get('@apiProductResponse').then((apiProductResponse) => {
            const statusText = apiProductResponse.body.product.product_status.toString();
            
            this.elements.productStatus().should('exist').invoke('text').then((productStatus) => {
                if (statusText === 'new' && productStatus === 'Nuevo') {
                    cy.log('La validación exitosa productStatus es "Nuevo" cuando statusText es "new"');
                } else if(statusText === 'used' && productStatus === 'Usados'){
                    cy.log('La validación exitosa productStatus es "Usados" cuando statusText es "used"');
                } else if(statusText === 'refurbished' && productStatus === 'Refurbished'){
                    cy.log('La validación exitosa productStatus es "Refurbished" cuando statusText es "refurbished"');
                } else{ 
                    throw new Error(`La validación falló. productStatus: ${productStatus}, statusText: ${statusText}`);
                }
            });
        });
    }
    
}

module.exports = new productPage();