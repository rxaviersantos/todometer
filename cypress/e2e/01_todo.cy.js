<reference types="Cypress" />;

context("Todos", () => {
  it("Adds todos", () => {
    cy.visit("http://localhost:3000");
  });
});
