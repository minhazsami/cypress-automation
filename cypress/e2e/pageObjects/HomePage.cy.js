class Home
{
    getEditName()
    {
       return cy.get(':nth-child(1) > .form-control')
    }

    getEditNameLenght()
    {
        return cy.get(':nth-child(1) > .form-control')
        
    }

    getEmail()
    {
        return cy.get('input[name="email"]')
    }

    getPassword()
    {
        return cy.get('input[placeholder="Password"]')
    }

    getCheckbox()
    {
        return cy.get('#exampleCheck1')
    }

    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }

    getEmploymentStatus1()
    {
        return cy.get('#inlineRadio1')
    }

    getEmploymentStatus2()
    {
        return cy.get('#inlineRadio2')
    }

    getShop()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }

    getNameDisplayWarning()
    {
        return cy.get('.alert.alert-danger')

    }
}

export default Home;