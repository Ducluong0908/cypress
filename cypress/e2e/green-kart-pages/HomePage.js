import BasePage from './BasePage';

class HomePage extends BasePage {
    constructor() {
        super();
        this.productNameClass = '.product-name';
        this.cartIcon = 'img[alt=Cart]';
        this.proceedButton = 'PROCEED TO CHECKOUT'
    }

    visit(path){
        super.visit(path);
    }

    addItemToCart(name, qty){
        //input Qty
        cy.contains(this.productNameClass, name)
            .parents('.product')
            .find('.stepper-input .quantity')
            .clear()
            .type(qty);
        //Add to Cart
        cy.contains(this.productNameClass, name)
            .parents('.product')
            .find('.product-action button')
            .click();
    }
    
    clickCart() {
        cy.get(this.cartIcon).click();
    }

    clickProceed() {
        cy.contains(this.proceedButton).click();
    }

    verifyProductExist(name){
        cy.contains(this.productNameClass, name).should('be.visible');
    }

    verifyProductImg(){

    }
}

export default HomePage;