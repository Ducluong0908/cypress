import 'cypress-iframe';

describe('lesson04 - Homework', () => {
  it.skip('Test 01', () => {
    //1. Open link
    cy.visit('http://iframetester.com/');
 
    //2. Enter URL and Render iframe
    cy.get('#url-search').type('https://katalon-demo-cura.herokuapp.com/#appointment');
    cy.get('button[onclick="submit()"]').click();
    cy.wait(5000);
 
    //3. Operate actions in iframe
    cy.get('.iframe-container')
    cy.frameLoaded('#iframe-window');
    cy.getIframeBody('#iframe-window').then(($body) => {
      cy.wrap($body).find('#btn-make-appointment').click();
    });
    
    cy.getIframeBody('#iframe-window').then(($body) => {
      cy.wrap($body).find('#txt-username').type('lucas');
      cy.wrap($body).find('#txt-password').type('lucas');
      cy.wrap($body).find('#btn-login').click();
      cy.wrap($iframeBody).find('#txt-username').clear();
      cy.wrap($body).find('#txt-username').type('John Doe');
      cy.wrap($body).find('#txt-password').type('ThisIsNotAPassword');
      cy.wrap($body).find('#btn-login').click();

    });
  })
  
  it('Test 02', () => {
    //1. Open link
    cy.visit('http://iframetester.com/')
 
    //2. Enter URL in expected field
    cy.get('#url-search').type('https://www.testtrack.org/');
    cy.get('button[onclick="submit()"]').click();
    cy.wait(5000);

    //3. Navigate to File Upload Demo
    cy.get('.iframe-container')
    cy.frameLoaded('#iframe-window');
    cy.getIframeBody('#iframe-window').then(($body) => {
      cy.wrap($body).contains('File Upload Demo').click();
    });
 
    cy.getIframeBody('#iframe-window').then(($body) => {
    
      //4. Upload 4 files in the existing areas
      cy.wrap($body).find('#single-file').selectFile('cypress/fixtures/cypress-upload-testing.txt');
      cy.wrap($body).find('#multiple-files').selectFile('cypress/fixtures/cypress-upload-testing.txt');
      cy.wrap($body).find('#image-only').selectFile('cypress/fixtures/cypress-upload-image.png');
      cy.wrap($body).find('#document-only').selectFile('cypress/fixtures/cypress-upload-pdf.pdf');

      //5. Verify successful pop-up
      cy.wrap($body).contains('📁 Files Queued for Transmission').should('be.visible');

      //6. Click on Initiate Upload
      cy.wrap($body).find('#upload-files-btn').click()

      //7. Verify upload successfully
      cy.wrap($body).contains('🛰️ Transmission Complete').should('be.visible');
    });
  })
})