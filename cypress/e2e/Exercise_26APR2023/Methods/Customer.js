
class Customer {


    type(css,text){
        cy.get(css).clear().type(text)
        .should('exist')
    }

    click(css){
        cy.get(css).click({force: true}).should('exist')
    }

    verify(css){
        cy.get(css).should('exist')
    }
}

export default Customer;




