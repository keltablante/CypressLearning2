/// <reference types="cypress" />

describe('HRM App validation', ()=>{


    //hooks
    //mocha/chai/jasmine  ----- unit testing framework for Javascript


    afterEach(function(){

        cy.log('********after each**************')

    })


    after( ()=>{

        cy.log('------execute after-----')

    }  )


    it('verify login feature', ()=>{


        cy.log('-------------verify login feature test case------------------')

        

    })



    it('verify logout feature', ()=>{


        cy.log('-------------verify logout feature test case------------------')


    })


    before( ()=>{

        cy.log('------execute before-----')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.log('application launched sucessfully.')

    }  )





    beforeEach(function(){

        cy.log('********before each **************')

    })



})
/// <reference types="cypress" />

describe('HRM App validation2', ()=>{


    
    after( ()=>{

        cy.log('------execute after-----')

    }  )


    it('verify login feature', ()=>{


        cy.log('-------------verify login feature test case------------------')


        let expectedTitle = "OrgangeHRM"
        let actualTitle = "organgeHRM"


        let a = 5
        let b = "99"
        console.log(a+b);

        expect(actualTitle).to.equal(expectedTitle)
        

    })


 

    before( ()=>{

        cy.log('------execute before-----')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.log('application launched sucessfully.')

    }  )





    

})