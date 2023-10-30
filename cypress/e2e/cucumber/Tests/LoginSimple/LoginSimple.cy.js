import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('A user enters to the login Page', () => {
    cy.visit('/')
})

When('A user enters the username {string}', (username) => {
    cy.get('[data-test="username"]').type(username)
})

And('A user enters the password {string}', (password) => {
    cy.get('[data-test="password"]').type(password)
})

And('A user clicks on the login button', () => {
    cy.get('[data-test="login-button"]').click()
})

Then('A user will be logged in', () => {
    cy.url().should('contain', '/inventory.html')
})