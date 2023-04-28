//div[@class="a-cardui-footer"]//descendant::a[text()="Shop Now"]


/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>
require('cypress-xpath')

describe('launch amazon india and click on a specific shop now link', () => {

  before(() => {
    cy.fixture('data.json').as('amazon')
  })
  it('launch app', () => {
    cy.get('@amazon').then(  (amazon) => {
      cy.viewport('macbook-16')
      cy.visit(amazon.amazonInURL)

      cy.xpath('//div[@class="a-cardui-footer"]//descendant::a[text()="Shop Now"]').click()

    })
  });
});