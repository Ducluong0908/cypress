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