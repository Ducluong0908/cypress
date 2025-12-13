import BasePage from "./BasePage";

class CountryPage extends BasePage{
    constructor() {
        super();
        this.message = '.errorAlert b'
    }

    verifyErrorMsg(text) {
        cy.get(this.message).should('contains.text', text);
    }

    verifySuccessMsg(text) {
        cy.contains(text).should('be.visible');
    }
}

export default CountryPage;