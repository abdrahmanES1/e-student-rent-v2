describe("template spec", () => {
  beforeEach(() => {
    cy.clearAllCookies()
    // Visit the page containing the form
    cy.visit("http://localhost:3000/login")
  })

  afterEach(() => {
    cy.clearAllCookies()
  })

  it("should show validation errors if fields are empty", () => {
    // Submit the form without filling in any fields
    cy.get('button[type="submit"]').click()

    // Check for validation errors
    cy.get("form").contains("Password is required")
    cy.get("form").contains("Email is required")
  })

  it("should show validation errors if fields are wrong", () => {
    // Visit the page containing the form
    cy.visit("http://localhost:3000/login")
    // Fill in the username
    cy.get('input[type="email"]').type("wrongadmin@gmail.com")

    // Fill in the password
    cy.get('input[type="password"]').type("wrongpassword")

    // Submit the form with wrong data
    cy.get('button[type="submit"]').click()

    cy.contains("Something went wrong.").should("be.visible")
  })

  it("should submit the login form", () => {
    // Fill in the username
    cy.get('input[type="email"]').type("landlord@gmail.com")

    // Fill in the password
    cy.get('input[type="password"]').type("1234567890")

    // Submit the form
    cy.get('button[type="submit"]').click()

    // You can also check for any success message
    cy.contains("Check your email").should("be.visible")

    // Optionally, you can check for form submission results or redirection
    // For example, if you expect to be redirected to a dashboard:
    cy.url().should("include", "/dashboard")
  })

})
