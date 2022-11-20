class productsPage
{
    
    getCheckout()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getItem()
    {
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotalAmount()
    {
        return cy.get('h3 strong')
    }

    getCheckoutCTA()
    {
        return cy.get('.btn.btn-success')
    }

    getText()
    {
        return cy.get('input[type="text"]')
    }

    getTextSuggesion()
    {
        return cy.get('.suggestions > ul > li > a')
    }

    getCheckbox()
    {
        return cy.get('#checkbox2')
    }

    getPurchaseCTA()
    {
        return cy.get('input[type="submit"]')
    }

    getSuccessMesg()
    {
        return cy.get('.alert').then(function(element)
        {
            const successAlert=element.text()
            expect(successAlert.includes('Success')).to.be.true
        })
    }


}

export default productsPage;