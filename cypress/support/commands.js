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

//generate a random email
Cypress.Commands.add('randomEmail', () => {
  const random = crypto.randomUUID(); //generate a random uuid
  const email = `user_${random}@gmail.com`; //return an email including the uuid
  return cy.wrap(email)
})
 
//getPageLogo
Cypress.Commands.add('getPageLogo', () => {
  cy.get('.logo')
    .find('img');
})
 
//getHeaderTitle
Cypress.Commands.add('getPageHeader', () => {
  cy.get('.page-title')
    .find('h1');
})
 
//getMessage
Cypress.Commands.add('getMessage', () => {
  cy.get('.success-msg').find('span');
})
 
//find Account filed
Cypress.Commands.add('findAccount', () => {
  cy.get('.account-cart-wrapper')
    .find('a.skip-link.skip-account');
})
 
//find Login filed
Cypress.Commands.add('findLogin', () => {
  cy.get('a[title="Log In"]');
})
 
//find Create An Account button
Cypress.Commands.add('findCreateAccount', () => {
  cy.get('a[title="Create an Account"]');
})