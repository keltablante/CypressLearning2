
class Menu {

    //we can use this method to directly click on the object
        clickCustomer(){
            cy.get('i[class="nav-icon far fa-user"] + p').click()
            .should('exist')
        }
    //we can use this method to directly click on the object
        clickCustomerModule(){
            cy.get('a[href="/Admin/Customer/List"] > p').click()
            .should('exist')
        }
    //we can use this method to click on the user input object using css selector
        click(css){
            cy.get(css).click({force: true}).should('exist')
        }
    
}

export default Menu;