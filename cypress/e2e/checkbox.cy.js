/// <reference types="cypress" />


describe('launch checkbox url', () => {

    before(() => {
      cy.fixture('data.json').as('jsonFile')
    })
  
    it('launch app', () => {
      cy.get('@jsonFile').then(  (URL) => {
        cy.visit(URL.checkboxActivityURL)
        cy.title().should('contain','Only Testing')
        cy.get('input[value="Bike"]').check().should('be.checked')
        cy.get('input[value="Car"]').check().should('be.checked')
        cy.get('input[value="Boat"]').check().should('be.checked')
        cy.get('input[value="male"]').check().should('be.checked')
        cy.get('input[value="female"]').should('not.be.checked')
        
      })
    });
  });