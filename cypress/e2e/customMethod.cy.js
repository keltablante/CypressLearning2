/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>
require('cypress-xpath')

describe('launch app and perform actions using custom method', () => {

  before(() => {
    cy.fixture('data.json').as('json')
  })
  it('launch app', () => {
        cy.get('@json').then(  (json) => {
        cy.viewport('macbook-16')
        cy.visit(json.nopCommerceURL)
        cy.url().should('contain','https://admin-demo.nopcommerce.com/').and('eq',json.nopCommerceURL)
        cy.title().should('eq','Your store. Login')

        cy.typeOnElementWithId('Email', json.nopUsername)

        cy.typeOnElementWithId('Password', json.nopPassword)

        cy.get('input[data-val-required*="field is required"]').check().should('be.checked')
        
        cy.clickElementWithText('Log in')

    })
  });
});