//para que funcionen los comandos
/// <reference types = 'cypress' />

describe ('Assert', () =>{

    it('Assert Contains', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.title().should('eq', 'Automation Exercise')
        cy.wait(1000)
        
        
        cy.get('.col-sm-8').contains(' Products').click()
    });

    it('Assert Find, eq', () => {
        cy.visit('https://dapper-pastelito-04ff24.netlify.app/shop')
        cy.wait(1000)
        cy.title().should('eq', 'Themerc - Dummy Ecommerce')
        cy.wait(1000)
        
        cy.get('.segment').find('.header').eq(1).click()
        cy.wait(1000)
        
    });

    it('Assert Find, eq, validando descuento y precio', () => {
        cy.visit('https://dapper-pastelito-04ff24.netlify.app/shop')
        cy.wait(1000)
        cy.title().should('eq', 'Themerc - Dummy Ecommerce')
        cy.wait(1000)
        
        cy.get('.segment').find('.header').eq(2).click()
        cy.wait(1000)

        cy.get('.iHfZND .product-saved-money').first().then((e) => {
            
            //cy.log(e.text())
            const ahorro = e.text()
            cy.log(ahorro)
            cy.wait(1000)
            
            if(ahorro === "Saving you $8.25"){
                cy.log('El producto tiene descuento')
            }
            
        })

        cy.get('.iHfZND .product-price').first().then((e) => {
            
            cy.log(e.text())
            let precio = e.text()
            cy.log(precio)
            precio = precio.slice(1,3)
            cy.log(precio)
            cy.wait(1000)
            
            if(precio > 40){
                cy.log('El producto sale de nuestro presupuesto, no lo podemos comprar')
                cy.get('.computer > .sc-dicizt > span > .ui').click()
            }else{
                cy.log('El producto está en nuestro presupuesto, continua con la compra')
                cy.get(':nth-child(2) > .container > .sc-jNkFXo > .ui').click()
                cy.wait(2000)
            }
           
        })
        
    });

    it('Assert Contain.text y Have.text', () => {
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)

        cy.get('#nombre').should('be.visible').type('Lore')
        cy.get('#apellidos').should('be.visible').type('Meza')
        cy.get('#tel').should('be.visible').type('9876543210')
        cy.get('#email').should('be.visible').type('test@test.com')
        cy.get('#direccion').should('be.visible').type('Calle Pruebas 123')
        cy.wait(1000)
        cy.get('.btn-primary').should('be.visible').click()

        //cy.get('#flashMessage').should('have.text','El formulario se ha enviado correctamente.')
        cy.get('#flashMessage').should('contain.text','enviado')
    });

    it('Assert contain.value y have.value con then', () => {
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)

        cy.get('#nombre').should('be.visible').type('Lore')

        /*
        cy.get('#nombre').should('contain.value', 'Lore').then(() => {
            cy.get('#apellidos').should('be.visible').type('Meza')
            cy.get('#tel').should('be.visible').type('9876543210')
            cy.get('#email').should('be.visible').type('test@test.com')
            cy.get('#direccion').should('be.visible').type('Calle Pruebas 123')
            cy.wait(1000)
            cy.get('.btn-primary').should('be.visible').click()
        })
        */
        cy.get('#nombre').should('have.value', 'Lore').then(() => {
            cy.get('#apellidos').should('be.visible').type('Meza')
            cy.get('#tel').should('be.visible').type('9876543210')
            cy.get('#email').should('be.visible').type('test@test.com')
            cy.get('#direccion').should('be.visible').type('Calle Pruebas 123')
            cy.wait(1000)
            cy.get('.btn-primary').should('be.visible').click()
        })
    });

    it('Assert have.class', () => {
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)

        cy.get('#nombre').should('be.visible').should('have.class', 'form-control').then(() => {
        cy.get('#nombre').type('Lore').wait(1000)
       })
    });

    it('Assert have.class y and', () => {
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)

        cy.get('#nombre').should('be.visible').and('have.class', 'form-control').then(() => {
        cy.get('#nombre').type('Lore').wait(1000)
       })
    });

    it('Assert have.class y and', () => {
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)

        //cy.get('#nombre').should('not.be.visible')
        cy.get('#nombre').should('be.visible').and('not.have.class', 'form-control1').then(() => {
        cy.get('#nombre').type('Lore').wait(1000)
       })
    });

    it('Assert have.lenght y css', () => {
        cy.visit('https://demo.seleniumeasy.com/table-pagination-demo.html')
        cy.title().should('eq', 'Selenium Easy - Table with Pagination Demo')
        cy.wait(1000)

        cy.get('#myTable > tr > td').should('have.length', 91)
        cy.get('#myTable > tr > td').should('have.css', 'padding', '8px')
    });

    it('Contains', () => {
        const tiempo = 3000
        cy.visit('https://www.boticasysalud.com/')
        cy.title().should('eq', 'Inicio — ByS')
        cy.wait(tiempo)

        //Eliminando ventana
        cy.get('.arrow-card > .d-flex > :nth-child(1)').should('be.visible').click({force:true})
        cy.wait(tiempo)
        cy.get('.site-header__search > .search > .search__seach > .search__form > .search__input').should('be.visible').type('acidino')
        cy.wait(tiempo)
        cy.contains('.indicator__area','Ingresar').click({force:true})
        cy.wait(tiempo)
    })

    it.only('Invoke', () => {
        const tiempo = 1000
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(tiempo)

        let a = 40
        let b = 35

        cy.get('#value1').should('be.visible').and('have.class','form-control').type(a)
        cy.get('#value2').should('be.visible').and('have.class','form-control').type(b)

        cy.contains('[type = "button"]','Get Total').click()

        cy.get('#displayvalue').should('be.visible').then((e) => {
            let r = a + b
            cy.log('El valor de r: ' + r)
            cy.log(e.text())
            let res = e.text()

            if(r == res){
                cy.log('Son iguales')
            }else{
                cy.log('El resultado es incorrecto')
            }

            if(res > 50){
                a = a - 10
                b = b - 10
                cy.get('#value1').invoke('attr', 'placeholder').should('contain','Enter value').then(() => {
                    cy.get('#value1').clear().type(a)
                    cy.get('#value1').invoke('attr','style','color:blue')
                })
                cy.get('#value2').should('be.visible').and('have.class','form-control').clear().type(b)
                cy.get('#value2').invoke('attr','style','color:blue')

                cy.contains('[type = "button"]','Get Total').click()

                cy.get('#displayvalue').should('be.visible').then((e) => {
                    cy.get('#displayvalue').invoke('attr','style','color:red')
                })
            }else{
                a = a + 5
                b = b + 5
                cy.get('#value1').should('be.visible').and('have.class','form-control').clear().type(a)
                cy.get('#value2').should('be.visible').and('have.class','form-control').clear().type(b)

                cy.contains('[type = "button"]','Get Total').click()
            }
        })
    });

}) //Cierre de describe