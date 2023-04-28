







describe('Interacting with an iframe', () => {
    it('Should enter text into a text field within an iframe', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe')



    //   const my_iFrame = cy.get('#mce_0_ifr')
    //   .its('0.contentDocument.body')
    //   .should('be.visible')
    //   .then(cy.wrap)


    //   my_iFrame.clear().type('Hello test test test test').type('{ctrl}A')

    //   cy.get('button[title="Bold"]').click()


    
        // cy.wrap('0.contentDocument.body').find('#mce_0_ifr').type('Hello, World!')


        // const frame = cy.get('#mce_0_ifr').its('0.contentDocument.body').then(cy.wrap)
        
        
        // frame.clear().type(`'Hello, World!' {ctrl}A`).get('button[title="Bold"]').click()


        // cy.customHandleIFrame('#mce_0_ifr').clear().type(`'Hello, World!' {ctrl}A`).get('button[title="Bold"]').click()


        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type(`'Hello, World!' {ctrl}A`)

        cy.get('button[title="Bold"]').click()
        cy.get('button[title="Italic"]').click()

    })
  })
  
  
  
  
  
  
  