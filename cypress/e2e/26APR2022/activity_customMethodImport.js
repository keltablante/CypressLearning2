
class Login {

    txtEmail = 'input#Email'
    txtPass = 'input#Password'
    btnLogin = 'Log in'

        enterEmail(emailID){
            cy.get(this.txtEmail).clear().type(emailID)
        }

        enterPassword(passwordId){
            cy.get(this.txtPass).clear().type(passwordId)
        }
        clickLogin(){
            cy.get('*').contains(this.btnLogin).click()
        }
}

export default Login;