/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>
require('cypress-xpath')

describe('launch application', () => {

    before(() => {
      cy.fixture('data.json').as('jsonFile')
    })
  
    it('launch amazon and perform actions', () => {
      cy.get('@jsonFile').then(  (json) => {

// LOGIN
const expectedUsername = "admin@yourstore.com"
const expectedPassword = "admin"
        cy.visit(json.nopCommerceURL)
        cy.viewport('macbook-16')
        cy.title().should('eq','Your store. Login')
        cy.get('#Email').clear().type(json.nopUsername).should('have.value',expectedUsername)
        cy.get('#Password').clear().type(json.nopPassword).should('have.value',expectedPassword)
        cy.get('#RememberMe').should('not.be.checked')
        cy.xpath('//input[@type="checkbox"]').check()
        cy.xpath('//button[contains(text(),"Log in")]').click()

// DASHBOARD validation

        cy.title().should('contains','Dashboard / nopCommerce administration')
        cy.xpath('//h1[contains(text(),"Dashboard")]').should('be.visible')


//CUSTOMER
        var customers = cy.get('p').contains('Customers')
        console.log(customers.should('exist'))




        const customers = cy.get('p').contains('Customers')
        const customerLength = customers.length
        const isNotPresent = customers.length = 0

        if (customerLength = isNotPresent) {
            cy.get('#nopSideBarPusher').click()
        }

        // cy.get('p').contains('Customers').then(($el) => {
        //     const isNotPresent = $el.length = 0;
        //     console.log(isNotPresent)
        //     if (isNotPresent) {

        //       cy.get('#nopSideBarPusher').click()
        //       cy.log('elementA exists');
        //     }
        //   });

        //   cy.get('#nopSideBarPusher').click()

        cy.get('p').contains('Customers').first().click()
        cy.xpath('//a[@href="/Admin/Customer/List"]').first().click()

        cy.xpath('//input[@class="form-control text-box single-line"]').first().clear()
            .type('victoria_victoria@nopCommerce.com')
            .should('have.value','victoria_victoria@nopCommerce.com')
        cy.xpath('//button[@class="btn btn-primary btn-search"]').click()
 
        



        cy.screenshot()
        
      })
    });
  });