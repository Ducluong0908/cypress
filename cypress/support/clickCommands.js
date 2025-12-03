Cypress.Commands.add('clickAccount', () => {
  cy.get('.account-cart-wrapper')
    .find('a.skip-link.skip-account').click();
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