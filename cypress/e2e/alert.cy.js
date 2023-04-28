/// <reference types="cypress" />


describe('launch checkbox url', () => {

    before(() => {
      cy.fixture('data.json').as('jsonFile')
    })
  
    it('launch app', () => {
      cy.get('@jsonFile').then(  (URL) => {
        cy.visit(URL.alertURL)
        cy.viewport('macbook-13') //sets resolution native to macbook 13inches

        cy.get('button#alert').click()

        cy.get('button#confirm').click()
        cy.on('window:confirm', () => false)
        cy.on('window:confirm', (content) => expect(content).to.equal('Hello Alert'))

        
        // cy.window().then((x) => {
        //     cy.stub(x, 'prompt').returns('Kel Tablante');
        // });
        // cy.get('button#prompt').click();




        cy.window().then((x) => {
            cy.stub(x, 'prompt').returns(null); 
        });
        cy.get('button#prompt').click();


        // cy.get('button#prompt').click();   
        // cy.on('window:prompt', () => false)

      })
    });
  });