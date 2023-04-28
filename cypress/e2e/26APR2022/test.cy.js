import Login from '../pages/LoginPage'



describe('Verify NOP Comm Login', ()=>{



    //hooks
    beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')


    })

    it.skip('verifyLogin and Logout with valid user credenatils', ()=>{

        cy.get('input#Email').clear().type('admin@yourstore.com')

        cy.get('#Password').clear().type('admin')

        cy.get('#RememberMe').check().should('be.checked')

        cy.get('button').contains('Log in').click()


        //validation
        cy.title().should('eq', 'Dashboard / nopCommerce administration')

    })



    it('verifyLogin and Logout with valid user credenatils - Page Object Model', ()=>{

        
        const lp = new Login();

        lp.enterEmail('adminPageObjectModel@yourstore.com')





        //validation
        cy.title().should('contain', 'Login')


        // //validation
        // cy.title().should('eq', 'Dashboard / nopCommerce administration')

    })




})