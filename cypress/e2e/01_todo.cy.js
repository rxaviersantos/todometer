// <reference types="Cypress" />;

context("Todos", () => {
  it("Adds todos", () => {
    cy.visit(Cypress.env("baseURL"));
    cy.clearLocalStorage();

    cy.getByTestId("").should("have.length", 0);
  });
});
