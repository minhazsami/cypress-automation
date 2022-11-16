class productsPage
{
    getShop()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default productsPage;