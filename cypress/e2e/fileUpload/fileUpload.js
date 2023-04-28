// const {expectedUsername,expectedPassword} = require('../../../fixtures/fileUpload.json')



class heroku {


    click(css){
        // cy.get(css).should('exist').click({force: true})
        cy.get(css).click()
    }


    upload(css,upload){
        cy.get(css).attachFile(upload)
    }
    



}

export default heroku;




