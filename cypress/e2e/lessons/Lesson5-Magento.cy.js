import rgbHex from 'rgb-hex';
import { faker } from '@faker-js/faker';
 
describe('Magento - e2e test', () => {
  it('E2E Process', () => {
    cy.visit('https://live.techpanda.org/'); //Open link
    cy.getPageLogo().should('have.attr','alt','Magento Commerce'); //Verify Logo
    cy.findAccount().click();
    cy.findLogin().click();
    cy.getPageHeader().should('contains.text','Login'); //Verify Header of the page
    cy.findCreateAccount().click();
    cy.getPageHeader().should('have.css','font-size','24px'); //verify fint-size of the Page Header
    cy.contains('.required', '* Required Fields') //get Required Fields to  its color
      .invoke('css', 'color')
      .then((bgcolor) => {
        expect(rgbHex(bgcolor)).to.equal('df280a');
      })
    //Fill Register Form
   
    cy.get('#firstname').type('Luong'); //input First Name
    cy.get('#middlename').type('Duc'); //input Middle Name
    cy.get('#lastname').type('Dao'); //input Last Name
 
    const email = faker.internet.email(); //generate a random email address
 
    cy.get('#email_address').type(email); //input Email
    cy.get('#password').type('123123123', { log: false }); //input Password
    cy.get('#confirmation').type('123123123', { log: false }); //confirm inputted
    cy.get('button[title="Register"]').click();
    cy.getMessage().should('contains.text', 'Thank you for registering'); //Verify register successfully
    cy.get('#nav').contains('Mobile').click(); //Click Mobile
    cy.get('.category-products')
      .find('.toolbar')
      .first()
      .find('select[title="Sort By"]')
      .select('Price');
    //get text of product's price
    cy.get('.price-box').then(($price) => {
      const priceList = [];
 
      const firstProd = $price.find('#product-price-1 span').text().trim(); //get price text of the 1st product
      const cleanFirst = firstProd.replace(/[^0-9.]/g, ''); //remove unwanted characters
      priceList.push(parseFloat(cleanFirst)); //push it in the array
 
      const secondProd = $price.find('#product-price-3').text().trim(); //get price text of the 2nd product
      const cleanSecond = secondProd.replace(/[^0-9.]/g, ''); 
      priceList.push(parseFloat(cleanSecond)); //push it in the array
 
      const thirdProd = $price.find('#product-price-2').text().trim(); //get price text of the 3rd product
      const cleanThird = thirdProd.replace(/[^0-9.]/g, ''); 
      priceList.push(parseFloat(cleanThird)); //push it in the array
 
      const sortList = [...priceList].sort((a, b) => a - b); //sort the list array
 
      expect(priceList).to.deep.equal(sortList); //assert two lists
    })
    //add product to Cart
    cy.get('a[title = "Sony Xperia"]')
      .parents('.product-info')
      .find('button[title="Add to Cart"]')
      .click();

    //assert the displayed price
    cy.get('.product-cart-price').then(($price) => {
      const price = $price.find('.price').text().trim(); //get price text
      const cleanNumb = price.replace(/[^0-9.]/g, ''); //remove unwanted characters
      
      expect(parseFloat(cleanNumb)).to.equal(100); //assert
    })
  })
})