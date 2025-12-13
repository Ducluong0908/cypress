describe('Magento - e2e test', () => {
  it('E2E Process', () => {
    //Open link
    cy.visit('https://live.techpanda.org/');

    //Verify Logo
    cy.verifyPageLogo('.logo','img');
    cy.clickAccount();
    cy.clickLogin();

    //Verify Header
    cy.verifyHeader().should('contains.text','Login');
    cy.clickCreateAnAccount();
    cy.verifyHeader().should('have.css','font-size','24px');

    //Fill Register Form
    cy.fillForm({
        '#firstname': 'Dao',
        '#middlename': 'Duc',
        '#lastname': 'Luong',
        '#email_address': '222@gmail.com'
    });
    cy.fillPassWord({
        '#password': '123456789',
        '#confirmation': '123456789',
    });
    cy.clickRegister();

    //Verify register successfully
    cy.verifyMessage('.success-msg span', 'Thank you for registering');
  })
})