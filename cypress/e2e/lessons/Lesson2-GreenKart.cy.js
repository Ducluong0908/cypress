describe('Lesson02 - rahulshettyacademy', () => {
  it('E2E Process', () => {
    //Open link
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    //Find Cucumber 
    cy.get('input[type=search] ').type('Cucumber')

    cy.get('button[class=search-button]').click()
    
    //Add product to cart 
    cy.contains('ADD TO CART').click()

    cy.contains('✔ ADDED').should('be.visible')

    //Open cart and checkout
    cy.get('img[alt=Cart]').click()
  
    cy.contains('PROCEED TO CHECKOUT').click()

    //Apply promo code
    cy.get('p[class=quantity]').should('contains.text','1')

    cy.get('.promoCode').type('rahulshettyacademy')

    cy.get('.promoBtn').click()
    
    //Verify promo code
    cy.get('.promoInfo', {timeout: 10000 }).should('contains.text','Code applied ..!')

    //Proceed order
    cy.contains('Place Order').click()

    cy.get('select[style="width: 200px;"]').select('Vietnam')
    
    cy.get('input[type=checkbox]').click()

    cy.contains('Proceed').click()

    //Verify order successfully
    cy.contains('Thank you, your order has been placed successfully').should('be.visible')
  })
})