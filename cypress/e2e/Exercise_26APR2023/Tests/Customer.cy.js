import Login from '../Methods/Login'
import Menu from '../Methods/Menu'
import Customer from '../Methods/Customer'



describe('Navigate to Customers Module', () => {

    beforeEach(()=>{

        cy.fixture('Objects.json').as('repo')
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.url('contains','https://admin-demo.nopcommerce.com/login')
        cy.title('eq','Your store. Login')
        cy.viewport('macbook-16')
    })

it('Login and Navigate to Customers Module', () => {

    cy.get('@repo').then(  (repo) => {

    const loginPage = new Login();
    const menuPage = new Menu();
    const customerPage = new Customer();

        // Login
        loginPage.quickLogin('admin@yourstore.com','admin')
        loginPage.check(repo.checkbox)
        loginPage.clickLogin()

        //Validate Title
        cy.title().should('contain', 'Dashboard')

        // Navigate to Customer
        menuPage.click(repo.menuCustomer)
        menuPage.click(repo.menuCustomerModule)

        //Search via Email
        customerPage.type(repo.customerEmailField,'victoria_victoria@nopCommerce.com')
        customerPage.click(repo.customerSearchButton)

        //Verify searched item is present in the results
        customerPage.verify(repo.itemToVerify)

        
        cy.screenshot()
});
})
})