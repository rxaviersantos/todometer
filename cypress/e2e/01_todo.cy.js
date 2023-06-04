// <reference types="Cypress" />;

context("Todos", () => {
  it("Adds todos", () => {
    cy.visit(Cypress.env("baseURL"));
    cy.clearLocalStorage();

    // Verificando elemento vazio
    cy.getByTestId("").should("have.length", 0);

    // Adicionando tarefa
    cy.getByTestId("add-todo-input").type("Learn Cypress!");
    cy.getByTestId("add-todo-button").click();

    cy.getByTestId("add-todo-input").type("Escrever testes");
    cy.getByTestId("add-todo-button").click();

    cy.getByTestId("add-todo-input").type("Teste automatizado");
    cy.getByTestId("add-todo-button").click();

    cy.getByTestId("todo").should("have.length", 3);
  });
});
