/// <reference types="Cypress" />
import Home from "./pageObjects/HomePage.cy"
import productsPage from "./pageObjects/productPage.cy"



describe('My First Test', () => {
  let data; //closure variable

    before(() => {
        // executes once prior all tests in it block
        cy.fixture('example').then(function (fdata)
        {
           data=fdata
        })
     });
    it('Verify the HomePage', () => {

      const homePage= new Home();

      cy.viewport(1000, 560)
      cy.visit(data.url)
      homePage.getEditName().type(data.name)
      //Assersion
      homePage.getEditNameLenght().should('have.attr', 'minlength', 2)
      homePage.getEmail().type(data.email)
      homePage.getPassword().should('have.attr', 'type', 'password').type('Sami@2247')//assersion
      homePage.getCheckbox().check()
      homePage.getGender().select(data.gender)
      homePage.getEmploymentStatus1().click()
      homePage.getEmploymentStatus2().click()
      homePage.getShop().click()

    })

    it('Verify the ProductPage', () => {

      const productPage=new productsPage();

      cy.wait(1000)

      data.productName.forEach(function(element){

        cy.SelectProducts(element)

      });

      productPage.getCheckout().click()
      // calculate total number of the products price start
      var sum=0
      productPage.getItem().each(($el, index, list)=>{
        const item=$el.text()
        var resutl=item.split(' ')
        resutl=resutl[1].trim()
        sum=Number(sum)+Number(resutl)
        
      }).then(function(){
        cy.log(sum)
      })
      
      // Calculation End

      productPage.getCheckoutCTA().click()
      productPage.getText().type('Bangladesh')
      //Cypress.config("defaultCommandTimeout", 8000)
      cy.wait(8000)
      productPage.getTextSuggesion().click()
      productPage.getCheckbox().click({force: true})
      productPage.getPurchaseCTA().click()
      cy.wait(3000)
      //productPage.getSuccessMesg().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
      productPage.getSuccessMesg()

    })
  })