class productPage{

    elements = {
        searchInput: () => cy.get('#search'),
        searchButton: () => cy.get('.actions > .action'),
        //firstProductCard: () => cy.get(':nth-child(1) > a > .info > .item-name'),
        firstProductCard: () => cy.get('.item-card'),
        productBrand: () => cy.get('.brand'),
        productPrice: () => cy.get('.main-price'),
        inStockLabel: ()=> cy.get('.product-details-container > :nth-child(1) > :nth-child(3)')
    }

    searchSKU(sku) {
        this.elements.searchInput().type(sku);
    }

    clickSearchButton(){
        this.elements.searchButton().click();
    }

    enterFirstProduct(){
        this.elements.firstProductCard().click();
        console.log('zzz',this.apiProductResponse);
    }

    validateProductBrand(sku){
        cy.wait(2000);
        console.log('xxx', sku);
        
        cy.apiProduct(sku).then((apiProductResponse) => {
            cy.wait(2000);

            console.log('aaa',apiProductResponse);

            const brandText = apiProductResponse.product.brand;
            console.log('bbb',brandText);

            this.elements.productBrand().should('be.visible').invoke('text').then((textProductBrand) => {
                console.log('ccc',textProductBrand);
                const cleanedTextProductBrand = textProductBrand.trim();
    
                console.log('yyy',cleanedTextProductBrand);
                expect(cleanedTextProductBrand).to.eq(brandText);
            });

        });

    }

    validateProductPrice(){
        this.elements.productPrice().should('be.visible');
    }

    validateInStock(){
        this.elements.inStockLabel().should('be.visible');
    }
}

module.exports = new productPage();