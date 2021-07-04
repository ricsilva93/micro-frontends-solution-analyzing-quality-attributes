/// <reference types="cypress" />

describe('End-to-end Tests',() =>{

    it('Buy product and check history table containing purchase data', () =>{
        cy.visit('http://localhost:30001/')

        // ** Catalog/Main page **

        // press 'buy' on first item 
        cy.get(':nth-child(1) > .sc-gKAaRy > .MuiButtonBase-root').click({force: true})

        // press 'cart' button on navbar
        cy.get('.sc-pNWdM > .MuiButtonBase-root').click({force: true})

        // ** cart drawer **
        cy.waitFor(0.2)
        // press 'checkout' button
        cy.get('.sc-jrsJWt > .MuiButtonBase-root').click({force: true})

        // **checkout page**
        // choose 'Cash' item
        cy.get(':nth-child(2) > .MuiTypography-root').click()

        // press 'confirm' button
        cy.get(':nth-child(6) > .MuiButtonBase-root').click()

        // ** Main Page **
        // press 'History' button on navbar
        cy.get('.sc-hKFxyN > .MuiButtonBase-root').click()

        // ** Purchase History Page **
        // confirm item is in purchase history table
        cy.contains('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops').should('exist')
    })
})