
import Login from './activity_customMethodImport'

describe('login', () => {

    beforeEach(()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.url('contains','https://admin-demo.nopcommerce.com/login')
        cy.title('eq','Your store. Login')
    })

it('login using custom method by importing a separate js file', () => {
    
    const myMethod = new Login();
        myMethod.enterEmail('admin@yourstore.com')
        myMethod.enterPassword('admin')
        myMethod.clickLogin()
        cy.title().should('contain', 'Dashboard')

});

it('login using custom method in commands.js', () => {

    cy.typeOnElementWithId('Email','admin@yourstore.com')
        .should('exist')
        .and('have.value','admin@yourstore.com')

    cy.typeOnElementWithId('Password', 'admin')
        .should('exist')
        .and('have.value','admin')
        
    cy.clickElementWithText('Log in')
    cy.title().should('contain', 'Dashboard')
})
})