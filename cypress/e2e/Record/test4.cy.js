describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1440, 783)
    
       cy.visit('https://demoqa.com/')
    
       cy.get('.category-cards > .card:nth-child(1) > div > .avatar > svg').click({force:true})
    
       cy.get('.element-group > .show > .menu-list > #item-0 > .text').click({force:true})
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').click({force:true})
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').type('Nella')
    
       cy.get('.text-field-container > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').click({force:true})
    
       cy.get('.text-field-container > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').type('test@test.com')
    
       cy.get('.text-field-container > #userForm > #currentAddress-wrapper > .col-md-9 > #currentAddress').click({force:true})
    
       cy.get('.text-field-container > #userForm > #permanentAddress-wrapper > .col-md-9 > #permanentAddress').click({force:true})
    
       cy.get('.text-field-container > #userForm > .mt-2 > .text-right > #submit').click({force:true})
    
       cy.get('.element-group > .show > .menu-list > #item-1 > .text').click({force:true})
    
       cy.get('ol > .rct-node > .rct-text > .rct-collapse > .rct-icon').click({force:true})
    
       cy.get('.rct-node-expanded > .rct-text > label > .rct-checkbox > .rct-icon').click({force:true})
    
       cy.get('ol > .rct-node > .rct-text > label > #tree-node-home').check({force:true})
    
       cy.get('.element-group > .show > .menu-list > #item-2 > .text').click({force:true})
    
       cy.get('.row > .col-12 > div > .custom-control:nth-child(2) > .custom-control-label').click({force:true})
    
       cy.get('.row > .col-12 > div > .custom-control > #yesRadio').type('on')
    
       cy.get('.row > .col-12 > div > .custom-control:nth-child(3) > .custom-control-label').click({force:true})
    
       cy.get('.row > .col-12 > div > .custom-control > #impressiveRadio').type('on')
    
       cy.get('.row > .col-12 > div > .custom-control:nth-child(2) > .custom-control-label').click({force:true})
    
       cy.get('.row > .col-12 > div > .custom-control > #yesRadio').type('on')
    
       cy.get('.accordion > .element-group > .show > .menu-list > #item-3').click({force:true})
    
       cy.get('.col-12 > .web-tables-wrapper > .mt-2 > .col-md-7 > #addNewRecordButton').click({force:true})
    
       cy.get('.modal-body > #userForm > #firstName-wrapper > .col-md-6 > #firstName').click({force:true})
    
       cy.get('.modal-body > #userForm > #firstName-wrapper > .col-md-6 > #firstName').type('Nella')
    
       cy.get('.modal-body > #userForm > #lastName-wrapper > .col-md-6 > #lastName').click({force:true})
    
       cy.get('.modal-body > #userForm > #lastName-wrapper > .col-md-6 > #lastName').type('Test')
    
       cy.get('.modal-body > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').type('test@test.com')
    
       cy.get('.modal-body > #userForm > #age-wrapper > .col-md-2 > #age').type('25')
    
       cy.get('.modal-body > #userForm > #salary-wrapper > .col-md-9 > #salary').click({force:true})
    
       cy.get('.modal-body > #userForm > #salary-wrapper > .col-md-9 > #salary').type('20000')
    
       cy.get('.modal-body > #userForm > #department-wrapper > .col-md-6 > #department').click({force:true})
    
       cy.get('.modal-body > #userForm > #department-wrapper > .col-md-6 > #department').type('Lima')
    
       cy.get('.modal-body > #userForm > .mt-4 > .text-right > #submit').click({force:true})
    
    })
   
   })
   