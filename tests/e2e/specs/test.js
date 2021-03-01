// https://docs.cypress.io/api/introduction/api.html

describe("1. Create and add a todo with a priority", () => {
  it("Displays the todo and its priority in the 'Your Todos' list ", () => {
    cy.visit("/");

    cy.get("[data-test='todoText']")
      .type("New todo")
      .should("have.value", "New todo");

    //github.com/cypress-io/cypress/issues/107
    cy.get("[data-test='prioritySelect']").type("Important", { force: true });

    cy.get("[data-test='submitButton']").click();

    cy.contains("New todo");
  });
});

describe("Create and add without a priority", () => {
  it("New todo is not submitted and displayed", () => {
    cy.visit("/");

    cy.get("[data-test='todoText']")
      .type("New todo")
      .should("have.value", "New todo");

    cy.get("[data-test='prioritySelect']").should("have.value", "");

    cy.get("[data-test='submitButton']")
      .click()
      .then();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Oops! Fields can't be blank, how will you know what todo?"
      );
    });
  });
});
