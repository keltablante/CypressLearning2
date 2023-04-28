/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>
require('cypress-xpath')
// const { eq } = require('cypress/types/lodash');
const {orangehrm, orangeUsername, orangePassword} = require('./config/data.json')

describe('orangeHRM', () => {
  it('launch app and perform validation', () => {
    
    cy.visit(orangehrm)
    cy.url().should('contain','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').and('eq',orangehrm)
    cy.title().should('eq','OrangeHRM')
    // cy.get('input[name="username"]').clear().type(orangeUsername).should('have.value',orangeUsername)
    cy.xpath('//input[@name="username"]').clear().type(orangeUsername).should('have.value',orangeUsername)

    // cy.get('input[name="password"]').clear().type(orangePassword).should('have.value',orangePassword)
    cy.xpath('//input[@name="password"]').clear().type(orangePassword).should('have.value',orangePassword)

    // cy.get('button[type="submit"]').click()
    cy.xpath('//button[@type="submit"]').click()
    cy.title().should('eq','OrangeHRM')
  });
  it.only('launch app and perform validation using xpath', () => {
    
    cy.visit(orangehrm)
    cy.url().should('contain','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').and('eq',orangehrm)
    cy.title().should('eq','OrangeHRM')
    cy.xpath('//input[@name="username"]').clear().type(orangeUsername).should('have.value',orangeUsername)
    // cy.get('input[name="username"]').clear().type(orangeUsername).should('have.value',orangeUsername) //try using css
    cy.xpath('//input[@name="password"]').clear().type(orangePassword).should('have.value',orangePassword)
    // cy.xpath('//div[@class="orangehrm-login-forgot"]').find('.oxd-text').click()
    // cy.xpath('//form[@class="oxd-form"]//div[@class="orangehrm-login-forgot"]').find(':contains("Forgot your password? ")').click()

    cy.xpath('//button[@type="submit"]').click()
    cy.title().should('eq','OrangeHRM')

    cy.xpath('//p[@class="oxd-userdropdown-name"]').click()
    cy.wait(4000)
    cy.xpath('//a[contains(text(),"Logout")]').click()
    cy.title().should('eq','OrangeHRM')
    cy.screenshot()
    
  });
});

// tagname[attribute='value'] - generic syntax fore css selector


