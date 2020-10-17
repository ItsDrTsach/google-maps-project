describe("Google Maps Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should be able to search and get to a city wiht auto-complete", () => {
    cy.get("h1").contains("For me");
  });
});
