Cypress.Commands.add('fillForm', (fields) => {
  Object.entries(fields).forEach(([selector, value]) => {
    cy.get(selector).type(value);
  })
});

Cypress.Commands.add('fillPassWord', (fields) => {
  Object.entries(fields).forEach(([selector, value]) => {
    cy.get(selector).type(value, {log: false});
  })
});

Cypress.Commands.add('addToCart', (inputQty) => {
  Object.entries(inputQty).forEach(([productName, qty]) => {
    cy.contains('.product-name', productName)
      .parents('.product')
      .find('.stepper-input .quantity')
      .clear()
      .type(qty)
      
    cy.contains('.product-name', productName)
      .parents('.product')
      .find('.product-action button')
      .click();
    
    cy.log(`Adding: ${productName} x ${qty} to cart`)
  })
})