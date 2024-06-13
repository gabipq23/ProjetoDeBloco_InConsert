/// <reference types="cypress" />
import { describe  } from "mocha";

// teste end to end
// verificar se um elemento corresponde ao que era esperado
describe("", () => {
    it("", () => {
        cy.visit('http://localhost:5173')

        cy.get('[data-cy = "menu_post"]').click();

        cy.get('[data-cy = "post_card"]').should('have.length',3)
    })
})