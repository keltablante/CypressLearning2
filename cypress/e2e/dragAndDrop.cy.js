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
        cy.visit(json.dhtmlgoodiesURL)
        cy.title().should('eq','Demo 2: Drag and drop')

        cy.xpath('//div[@id="box6"]').drag('#box106')

    })
  });
});