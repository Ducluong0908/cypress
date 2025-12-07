Cypress.Commands.add('verifyPageLogo', (selector, attr) => {
  cy.get(selector)
    .find(attr)
    .should('have.attr','alt','Magento Commerce');
})

Cypress.Commands.add('verifyHeader', () => {
  cy.get('.page-title')
    .find('h1');
})

Cypress.Commands.add('verifyMessage', (selector, text) => {
  cy.get(selector)
    .should('contains.text', text);
})

Cypress.Commands.add('verifyProducts', () => {
  cy.fixture('products').then((products) => {
    products.forEach((product) => {
      cy.get('.product-name')
        .should('contains.text', product.productName)
    })
  })
})

Cypress.Commands.add('verifyCartNotEmpty', () => {
  cy.get('.empty-cart h2').should('not.exist');
})

Cypress.Commands.add('verifyInputQty', () => {
  cy.fixture('products').then((products) => {
    products.forEach((product) => {
      cy.contains('.product-name', product.productName)
        .parents('.product')
        .find('.stepper-input input.quantity')
        .should('have.value', product.quantity);
    })
  })
})

Cypress.Commands.add('verifyTableHeader', (table) => {
  Object.entries(table).forEach(([index, header]) => {
    cy.get('#productCartTables thead tr').within(() => {
      cy.get('td')
        .eq(index)
        .should('have.text', header)
    })
  })
})

Cypress.Commands.add('verifyProductImg', (table) => {
  Object.entries(table).forEach(([index, img]) => {
    cy.get('#productCartTables tbody').within(() => {
      cy.get('tr')
        .eq(index)
        .find('td img')
        .should('have.attr', 'src', img)
    })
  })
})

Cypress.Commands.add('logCartTable', () => {
  cy.get('#productCartTables tbody tr').each((row, index) => {
    cy.wrap(row).within(() => {
       cy.get('td').eq(1).find('.product-name').invoke('text').then((productName) => {
        cy.get('td').eq(2).find('.quantity').invoke('text').then((qty) => {
          cy.get('td').eq(3).find('.amount').invoke('text').then((price) => {
            cy.get('td').eq(4).find('.amount').invoke('text').then((total) => {
              cy.log(`Row ${index}: ${productName} x ${qty} x ${price} = ${total} `)
            })
          })
        })
      })
    })
  })
})



