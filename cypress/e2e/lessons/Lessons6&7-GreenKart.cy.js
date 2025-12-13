import CartPage from '../green-kart-pages/CartPage';
import CountryPage from '../green-kart-pages/CountryPage';
import HomePage from '../green-kart-pages/HomePage';

const homePage = new HomePage();
const cartPage = new CartPage();
const countryPage = new CountryPage();

describe('GreenKart - e2e test with POM', () => {
  beforeEach(() => {
    homePage.visit('/seleniumPractise/#/');
    cy.fixture('./data/products.json').as('productData');
  });

  it('E2E Process', function() {
    homePage.verifyUrl('/seleniumPractise/#/');

    //Task 1: Load fixture and verify existing Products
    this.productData.forEach((item) => {
        homePage.verifyProductExist(item.productName);
    })
    
    //Task 2: Add items to the cart
    this.productData.forEach((item) => {
        cy.wait(1000);
        homePage.addItemToCart(item.productName, item.quantity);
        cy.log(`Adding ${item.productName} x ${item.quantity} to cart `)
    })

    //Task 3: Go to Checkout
        //3.1. Click Cart and verify
    homePage.clickCart();
    cy.get('.empty-cart h2').should('not.exist');

        //3.2. Verify redirection
    homePage.clickProceed();
    cartPage.verifyUrl('/cart');

    //Task 4: Handle the table
        //4.1.Verify Table Header
    const expectedHeader = ['#', 'Product Name', 'Quantiry', 'Price', 'Total']
    cartPage.verifyHeaderColumns(expectedHeader);

        //4.2. Verify Product Image
    this.productData.forEach((item) => {
        cartPage.verifyProductImages(item.productName, item.img);
    })
        
        //4.3. Get Product Name, Quanity, Price, Total and log each row
    this.productData.forEach((item) => {
        cartPage.getProductName(item.index).then((name) => {
            cartPage.getQty(item.index).then((qty) => {
                cartPage.getPrice(item.productName).then((price) => {
                    cartPage.getTotal(item.productName).then((total) => {
                        cy.log(`Row ${item.index}: ${name} - ${qty} - ${price} - ${total}`)
                    })
                })
            })
        })
    })
        
        //4.4. Assert number of rows are equal number of items in fixture
    const expectedLength = this.productData.length;
    cartPage.verifyNumberOfRows(expectedLength);

        //4.5. Assert total = price * quantity
    this.productData.forEach((item) => {
        const expectedTotal = Number(item.quantity) * Number(item.price);
        cartPage.getTotal(item.productName).then((total) => {
            const actualTotal = Number(total);
            expect(actualTotal).to.equal(expectedTotal);
        })
    })

        //4.6. Click Place Order and assert redirection
    cy.contains('Place Order').click();
    countryPage.verifyUrl('/country');

    //Task 5: Checkout
        //5.1. Verify the error message
    cy.get('select').select('Vietnam');
    cy.contains('Proceed').click();
    countryPage.verifyErrorMsg('Please accept Terms & Conditions - Required');

        //5.2.
    cy.get('.chkAgree').click();
    cy.contains('Proceed').click();
    countryPage.verifySuccessMsg('Thank you, your order has been placed successfully');

  })
})