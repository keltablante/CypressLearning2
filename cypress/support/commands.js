// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>


import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')  //drag and drop
require('cypress-iframe')



Cypress.Commands.add('clickElementWithText', (text)=>{
    cy.get('*').contains(text).click()
	})

Cypress.Commands.add('typeOnElementWithId', (id, input)=>{
    cy.get(`input[id="${id}"]`).clear().type(input)
    })


Cypress.Commands.add('customHandleIFrame', function(id){
    return cy.get(id)
            .its('0.contentDocument.body')
            .then(   cy.wrap    )
})