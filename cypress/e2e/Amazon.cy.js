/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>
require('cypress-xpath')
// const { contains } = require("cypress/types/jquery");


describe('launch amazon', () => {

  before(() => {
    cy.fixture('data.json').as('amazon')
  })
  it('launch app', () => {
    cy.get('@amazon').then(  (amazon) => {
      console.log(amazon.amazonURL)
      cy.viewport('macbook-13')
      cy.visit(amazon.amazonURL)

      // cy.xpath("//input[contains(@id,'twotab')]").click()
      cy.xpath('//*[@class="nav-line-1-container"]').trigger('mouseover')
    })
  });
});