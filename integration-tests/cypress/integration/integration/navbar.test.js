/// <reference types="cypress" />

describe('Navbar tests',() =>{
    it('always contains history button', () =>{
        cy.visit('http://localhost:30002/')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // prevents Cypress from failing the test
            // case cart component is not loaded
            return false
          })

        cy.contains('History')
    })

    it('always contains Cart button when cart mfe is available', () =>{
        cy.visit('http://localhost:30002/')

        cy.contains('Cart').should('exist')
    })
})