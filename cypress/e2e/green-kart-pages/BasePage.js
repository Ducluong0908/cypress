class BasePage {
    constructor() {
        this.timeout = 10000;
    }

    visit(path){
        cy.visit(path);
    }

    verifyUrl(path){
        cy.url().should('include', path);
    }
}

export default BasePage;