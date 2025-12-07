Cypress.Commands.add('clickAccount', () => {
  cy.get('.account-cart-wrapper')
    .find('a.skip-link.skip-account')
    .click();
});

Cypress.Commands.add('clickLogin', () => {
  cy.get('a[title="Log In"]')
    .click()
});

Cypress.Commands.add('clickCreateAnAccount', () => {
  cy.get('a[title="Create an Account"]')
    .click()
});

Cypress.Commands.add('clickRegister', () => {
  cy.get('button[title="Register"]')
    .click();
});

Cypress.Commands.add('clickText', (text) => {
  cy.contains(text)
    .click();
});

Cypress.Commands.add('clickCart', () => {
  cy.get('img[alt=Cart]')
    .click()
});

Cypress.Commands.add('addProductToCart', (products) => {
  products.forEach((product) => {
    cy.contains('.product-name', product)
      .parents('.product')
      .find('.product-action button')
      .click()
  })
  // console.log("Added products successfully")
})

Cypress.Commands.add('checkBox', () => {
  cy.get('input[type=checkbox]')
    .click()
})
