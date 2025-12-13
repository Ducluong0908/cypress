import BasePage from "./BasePage";

class CartPage extends BasePage {
    constructor() {
        super();
        this.tableHeader = '#productCartTables thead tr td'
        this.tableRows = '#productCartTables tbody tr'
    }

    verifyHeaderColumns(expectedHeader) {
        cy.get(this.tableHeader)
            .should('have.length', expectedHeader.length) //Check number of column
            .then(($headers) => {
                const actualHeaders = [...$headers].map(header => header.innerText.trim()); //Map header text into an array list
                expect(actualHeaders).to.deep.equal(expectedHeader); //Assert the content of 2 arrays are the same
            })
    }

    verifyProductImages(productName, expectedImage) {
        cy.contains(this.tableRows, productName)
            .find('.product-image')
            .should('have.attr', 'src')
            .and('include', expectedImage);
    }

    getProductName(rowIndex) {
        return cy.get(this.tableRows)
                .eq(rowIndex)
                .find('.product-name')
                .invoke('text')
                .then((text) => text.trim());
    }

    getQty(rowIndex) {
        return cy.get(this.tableRows)
                .eq(rowIndex)
                .find('.quantity')
                .invoke('text')
                .then((text) => text.trim());
    }

    getPrice(productName) {
        return cy.contains(this.tableRows, productName)
                .find('.amount')
                .eq(0)
                .invoke('text')
                .then((text) => text.trim());
    }

    getTotal(productName) {
        return cy.contains(this.tableRows, productName)
                .find('.amount')
                .eq(1)
                .invoke('text')
                .then((text) => text.trim());
    }

    verifyNumberOfRows(expectedNumber) {
        cy.get(this.tableRows).should('have.length', expectedNumber);
    }
}

export default CartPage;