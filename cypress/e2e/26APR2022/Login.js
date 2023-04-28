



class Login {


    //Identification

    txtEmail = 'input#Email'
    // txtPass = 'input#Email'

    //Methods

    enterEmail(emailID){

        cy.get(this.txtEmail).clear().type(emailID)
    }

}


export default Login;