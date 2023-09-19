/// <reference types="cypress" />

describe("I should open the login component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:30012");
  });

  it("should render the login form", () => {
    cy.get("form").should("exist");
    cy.get("input[name='username']").should("exist");
    cy.get("input[name='password']").should("exist");
    cy.get("button[type='submit']").should("exist");
  });

  it("should show error message when submitting with empty fields", () => {
    cy.get("button[type='submit']").click();
    cy.contains("El username es requerido").should("exist");
    cy.contains("El password es requerido").should("exist");
  });

  it("should show error message for invalid username", () => {
    cy.get("input[name='username']").type("invalid_username");
    cy.get("input[name='password']").type("password1");
    cy.get("button[type='submit']").click();
    cy.contains("username must be a valid email").should("exist");
  });

  it("should show error message for invalid password", () => {
    cy.get("input[name='username']").type("valid_username");
    cy.get("input[name='password']").type("pas");
    cy.get("button[type='submit']").click();
    cy.contains("El minimo debe ser 4 caracteres").should("exist");
  });
});
