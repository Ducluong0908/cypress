// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  return cy
    .get(iframeSelector, { timeout: 10000 })
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
});

Cypress.Commands.add('verifyPageLogo', (selector, attr) => {
  cy.get(selector)
    .find(attr)
    .should('have.attr','alt','Magento Commerce');
})

Cypress.Commands.add('clickAccount', () => {
  cy.get('.account-cart-wrapper')
    .find('a.skip-link.skip-account').click();
})

Cypress.Commands.add('clickLogin', () => {
  cy.get('a[title="Log In"]')
    .click()
})

Cypress.Commands.add('verifyHeader', () => {
  cy.get('.page-title').find('h1')
})

Cypress.Commands.add('clickCreateAnAccount', () => {
  cy.get('a[title="Create an Account"]')
    .click()
})

Cypress.Commands.add('clickRegister', () => {
  cy.get('button[title="Register"]')
    .click();
})

Cypress.Commands.add('verifyMessage', (text) => {
  cy.get('.success-msg span')
    .should('contains.text','');
})

Cypress.Commands.add('fillForm', (fields) => {
  Object.entries(fields).forEach(([selector, value]) => {
    cy.get(selector).type(value);
  })
})

Cypress.Commands.add('fillPassWord', (fields) => {
  Object.entries(fields).forEach(([selector, value]) => {
    cy.get(selector).type(value, {log: false});
  })
})



