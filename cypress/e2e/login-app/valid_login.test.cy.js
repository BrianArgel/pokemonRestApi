/// <reference types="cypress" />

describe("LoginContainer Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:30012");
  });

  it("should log in with valid credentials", () => {
    cy.get("input[name='username']").type("usuario1@m");
    cy.get("input[name='password']").type("password1");
    cy.get("button[type='submit']").click();
    cy.url().should("eq", "http://localhost:30012/"); 
    cy.contains("PokeMundial").should("exist"); 
  });
});
