describe('Lesson06 - Homework', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
  });

  it('E2E Process', () => {
    //Task 1: Load fixture
    cy.verifyProducts();
    
    //Task 2: Add items to the cart
    cy.addToCart({
        'Brocolli - 1 Kg': '1',
        'Cauliflower - 1 Kg': '2',
        'Cucumber - 1 Kg': '3',
        'Beetroot - 1 Kg': '4',
        'Carrot - 1 Kg': '5',
        'Tomato - 1 Kg': '6'
    });

    //Task 3: Go to Checkout
    cy.clickCart();
    cy.verifyCartNotEmpty();
    cy.clickText('PROCEED TO CHECKOUT');
    cy.url().should('include', '/cart')

    //Task 4: Handle the table
    cy.verifyTableHeader({
        '0': '#',
        '1': 'Product Name',
        '2': 'Quantiry',
        '3': 'Price',
        '4': 'Total'
    });
    cy.verifyProductImg({
        '0': './images/broccoli.jpg',
        '1': './images/cauliflower.jpg',
        '2': './images/cucumber.jpg',
        '3': './images/beetroot.jpg',
        '4': './images/carrots.jpg',
        '5': './images/tomato.jpg'
    });
    cy.logCartTable();
    //Bug: Qty displays incorrectly as expected

    //Task 5: Checkout
    cy.clickText('Place Order');
    cy.get('select').select('Vietnam');
    cy.clickText('Proceed');
    cy.verifyMessage('span b', 'Please accept Terms & Conditions - Required');
    cy.checkBox();
    cy.clickText('Proceed');
    cy.contains('Thank you, your order has been placed successfully').should('be.visible')
  })
})