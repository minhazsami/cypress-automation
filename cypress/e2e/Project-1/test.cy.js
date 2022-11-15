/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'


describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/').wait(2000)
      cy.get('input[value="radio1"]').click()
      cy.get('#autocomplete').type('Practice')
      cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')
      cy.get('#checkBoxOption1').should('have.value', 'option1').click()
      cy.get('#checkBoxOption2').should('have.value', 'option2').click()
      cy.get('#checkBoxOption3').should('not.have.value', 'option').click()
      cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

        const text = $el.text()
        if(text.includes("REST API")){

          cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

            const priceText = price.text()
            expect(priceText).to.equal('35')
          })
        }
        
      })

      //cy.get('#mousehover').invoke('show')
      //cy.contains('Top').click({force:true}) // For button, cypress can click the hidden element of the CTA. For that use the {force:true} in the click mathod.
      cy.get('div.mouse-hover-content').invoke('show') // validation of the Mosue hover and visible the hidden element.
      cy.contains('Top').click()
      cy.url().should('include', 'top')

      //ifrane section

      cy.frameLoaded('#courses-iframe')
      cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })
  })