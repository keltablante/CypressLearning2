

const {expectedUsername,expectedPassword} = require('../../../fixtures/Objects.json')
class Login {

    txtEmail = 'input#Email'
    txtPass = 'input#Password'
    btnLogin = 'Log in'
    checkbox = 'input#RememberMe'

        enterEmail(emailID){
            cy.get(this.txtEmail).clear().type(emailID)
            .should('have.value',expectedUsername)
            .should('exist')
        }

        enterPassword(passwordId){
            cy.get(this.txtPass).clear().type(passwordId)
            .should('have.value',expectedPassword)
            .should('exist')
        }
        clickLogin(){
            cy.get('*').contains(this.btnLogin).click()
            .should('exist')
        }

        quickLogin(email, password){

            this.enterEmail(email)
            this.enterPassword(password)
        }

        clickCheckbox(){
            cy.get(this.checkbox).check().should('be.checked')
                .should('exist')
        }

        check(css){
            cy.get(css).check({force: true})
                .should('be.checked')
                .should('exist')
        }

        click(css){
            cy.get(css).click({force: true}).should('exist')
        }

}

export default Login;