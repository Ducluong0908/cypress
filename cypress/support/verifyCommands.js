Cypress.Commands.add('verifyPageLogo', (selector, attr) => {
  cy.get(selector)
    .find(attr)
    .should('have.attr','alt','Magento Commerce');
})

Cypress.Commands.add('verifyHeader', () => {
  cy.get('.page-title')
    .find('h1');
})

Cypress.Commands.add('verifyMessage', (text) => {
  cy.get('.success-msg span')
    .should('contains.text', text);
})