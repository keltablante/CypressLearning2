/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>
require('cypress-xpath')


describe('launch amazon', () => {
  before(() => {
    cy.fixture('data.json').as('amazon')
  })
  it('launch amazon', () => {
    cy.get('@amazon').then(  (amazon) => {
      console.log(amazon.amazonURL)
      cy.viewport('macbook-13')
      cy.visit(amazon.amazonURL)

      // cy.xpath("//input[contains(@id,'twotab')]").click()
      cy.xpath('//*[@class="nav-line-1-container"]').trigger('mouseover')
    })
  });

  before(() => {
    cy.fixture('data.json').as('demoGuru')
  })
  it.only('launch app', () => {
    cy.get('@demoGuru').then(  (demoGuru) => {
        cy.viewport('macbook-13')
        cy.visit(demoGuru.demoGuruURL)

        // cy.xpath("//input[contains(@id,'twotab')]").click()
        cy.xpath('//span[@class="context-menu-one btn btn-neutral"]').trigger('contextmenu')
        cy.xpath('//button[contains(text(),"Double-Click Me To See Alert")]').trigger('dblclick', {force: true})

        })
    })
});