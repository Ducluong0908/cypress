describe('Lesson05 - Homework', () => {
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
        '#email_address': '111111111@gmail.com'
    });
    cy.fillPassWord({
        '#password': '123456789',
        '#confirmation': '123456789',
    });
    cy.clickRegister();

    //Verify register successfully
    cy.verifyMessage('Thank you for registering');
  })
})