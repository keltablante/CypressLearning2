/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>
require('cypress-xpath')

describe('launch zoho url', () => {

    before(() => {
      cy.fixture('data.json').as('jsonFile')
    })
  
    it('select and validate algeria on dropdown', () => {
      cy.get('@jsonFile').then(  (URL) => {
        cy.visit(URL.zohoURL)
        cy.title().should('contain','Book a demo')
        cy.get('#zcf_address_country').select(3).should('have.value','Algeria')        
      })
    });

    it('select and validate Canada on dropdown', () => {
        cy.get('@jsonFile').then(  (URL) => {
          cy.visit(URL.zohoURL)
          cy.title().should('contain','Book a demo')
          cy.get('#zcf_address_country').select('Canada').should('have.value','Canada')        
        })
      });


    it.only('select and validate a value from a span dropdown ', () => {
        cy.get('@jsonFile').then(  (URL) => {
            cy.visit(URL.dummyURL)
            // cy.title().should('have.text','Dummy ticket for applying visa - Verifiable flight reservation for embassy')
            cy.get('#select2-billing_country-container').click()
            cy.get('.select2-search__field').type('Philippines').type('{enter}')
            
            cy.get('#select2-billing_country-container').should('have.text','Philippines')        

            // cy.xpath('//input[@id="test-input"]').click()
          })
    });

  });