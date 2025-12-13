describe('Magento - e2e test', () => {
  it('E2E Process', () => {
    //1. Open link
    cy.visit('http://live.techpanda.org/index.php/mobile.html')

    //2. Click on Account -> Log In button
    cy.get('.account-cart-wrapper').find('a.skip-link.skip-account').click()
    cy.get('a[title="Log In"]').click()
    
    //3. Click on Create An Account button
    cy.get('a[title="Create an Account"]').click()
    
    //4. Key in First Name, Middle Name, Last Name
    cy.get('#firstname').type('Dao')
    cy.get('#middlename').type('Duc')
    cy.get('#lastname').type('Luong')

    //5. Clear all populated fields
    cy.get('#firstname, #middlename, #lastname').each(($el) => {
        cy.wrap($el).clear()
    })
    
    //6. Fill in 6 existing fields
    cy.get('#firstname').type('Dao')
    cy.get('#middlename').type('Duc')
    cy.get('#lastname').type('Luong')
    cy.get('#email_address').type('12345678@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#confirmation').type('123456789')

    //7. Click on Register
    cy.get('.buttons-set').find('.button').click()

    //8. Navigate to Address Book
    cy.get('.block-content li a').contains('Address Book').click()

    //9. Fill in CONTACT INFO
    cy.get('#company').type('CMC')
    cy.get('#telephone').type('0123456789')
    cy.get('#fax').type('888888')

    //10. Fill in ADDRESS INFO
    cy.get('#street_1').type('888888')
    cy.get('#city').type('Hanoi')
    cy.get('#zip').type('111111')
    cy.get('#region_id').select('Alaska')
    cy.get('#country').select('Vietnam')

    //11. Save Address
    cy.get('button[title="Save Address"]').click()

    //12. Verify Save Address successfully
    cy.get('.success-msg ul li span').should('contain.text','The address has been saved.')
  })
})