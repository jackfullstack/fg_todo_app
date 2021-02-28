// https://docs.cypress.io/api/introduction/api.html

// Tests:
//1. When user inputs valid text and selects a priority, it is sumitted to the TODOLIST
//2. When user inputs only the TODO text, but selects no priority, an alert is thrown and TODO item is not submitted and displayed in TODOLIST
//3. When user only selects priosity but enters no TODO text, an alert is thrown on Submit and the TODO item is not submitted to the TODOLIST
//4. When user enters anything into the TODO input or select box and clicks on the clear button, the values of those inputs are reset to initial state values
//5. When user selects to delete an item from TODOLIST, the item no longer displays on the TODOLIST
//6. When the user selects to delete all items from the TODOLIST, the TODO list displays no TODO items

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

    //github.com/cypress-io/cypress/issues/107
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
