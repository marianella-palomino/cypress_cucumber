class productPage{

    elements = {
        searchInput: () => cy.get('#search'),
        searchButton: () => cy.get('.actions > .action'),
        //firstProductCard: () => cy.get(':nth-child(1) > a > .info > .item-name'),
        firstProductCard: () => cy.get('.item-card'),
        productBrand: () => cy.get('.brand'),
        productTitle: () => cy.get('.title'),
        productColor: ()=> cy.get('.variation-title-container > .variation-selected'),
        productStyle: ()=> cy.get('.single-title-container > .variation-selected'),
        productVendor: ()=> cy.get('.product-details-container > :nth-child(5) > :nth-child(3)'),
        productStock: ()=> cy.get('.product-details-container > :nth-child(1) > :nth-child(3)'),
        productWeight: ()=> cy.get('.product-details-container > :nth-child(2) > :nth-child(3)'),
        productReturns: ()=> cy.get('.product-details-container > :nth-child(3) > :nth-child(3)'),
        productCondition: ()=> cy.get('.product-details-container > :nth-child(4) > :nth-child(3)'),
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

    validateProductColor(){

        cy.get('@apiProductResponse').then((apiProductResponse) => {

            const color = apiProductResponse.body.product.variations.filter((item) => item.variation_code == 'color');
            console.log('fff',color);

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

    // validateProductStyle(){
    //     cy.get('@apiProductResponse').then((apiProductResponse) => {

    //         const styleText = apiProductResponse.body.product.variations[1].options[0].label;
    //         this.elements.productStyle().should('be.visible').and('contain', styleText);
    //     });
    // }

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
                    cy.log('La validación fue exitosa. ProductStock es "En stock" cuando stockText es "true"');
                } else if(stockText === 'false' && productStock === 'Sin Stock'){
                    cy.log('La validación fue exitosa. ProductStock es "Sin Stock" cuando stockText es "false"');
                } else{ 
                    throw new Error(`La validación falló. productStock: ${productStock}, stockText: ${stockText}`);
                }
            });
        });

    }
    
}

module.exports = new productPage();