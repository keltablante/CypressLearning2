import heroku from '../fileUpload/fileUpload'

describe('upload', () => {
    
    beforeEach(()=>{

        cy.fixture('fileUpload.json').as('json')
        
        // cy.url('contains','https://admin-demo.nopcommerce.com/login')
        // cy.title('eq','Your store. Login')
        cy.viewport('macbook-16')
    })

    it('upload a file', () => {
        cy.get('@json').then(  (json) => {

            const herokuPage = new heroku();
                cy.visit(json.herokuUploadURL)
                herokuPage.upload(json.fileUpload, 'testUpload.txt')
                herokuPage.click(json.fileSubmit)

            //     cy.get(json.fileSubmit).then(  (ele) =>{


            //         let actualText = ele.text()
            //         cy.log(`File uploaded name: ${actualText}`)
            //         expect(actualText).to.contain('testUpload')
    
    
            // }  )


        })
    });
});