/// <reference types="cypress" />

// const { eq } = require('cypress/types/lodash');
const {appURL_QA,username,password} = require('./config/data.json')

describe('nopCommerce', () => {
  it('launch app and perform validation', () => {
    
    cy.visit(appURL_QA)
    cy.url().should('contain','https://admin-demo.nopcommerce.com/').and('eq',appURL_QA)
    cy.title().should('eq','Your store. Login')

    cy.get('input[value$=".com"]').clear().type(username).should('have.value',username)

    cy.get('input[name^="Pass"]').clear().type(password).should('have.value',password)
    cy.get('input[data-val-required*="field is required"]').check().should('be.checked')


    cy.get('button[class="button-1 login-button"]').click()
    cy.title().should('eq','Dashboard / nopCommerce administration')


    cy.get('a[href="/logout"]').click()
    cy.title().should('eq','Your store. Login')
  });
});