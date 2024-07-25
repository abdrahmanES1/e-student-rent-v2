describe("Index Page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("should display the main heading", () => {
    cy.contains("h1", "Find Your Suitable Home").should("be.visible")
  })

  it("should display the hero image", () => {
    cy.get('img[alt="Hero"]').should("be.visible")
  })

  it("should have Start Your Search button", () => {
    cy.contains("a", "Start Your Search").should("be.visible")
  })

  it("should have Explore Listings button", () => {
    cy.contains("a", "Explore Listings").should("be.visible")
  })

  it("should list all features", () => {
    const features = [
      "Comprehensive Listings Across Major Student Cities",
      "Advanced Search Filters to Fit Your Budget and Preferences",
      "Real-Time Notifications for New Listings",
      "Verified Properties for Safe and Secure Living",
    ]

    features.forEach((feature) => {
      cy.contains("span", feature).should("be.visible")
    })
  })

  it("should display all service cards", () => {
    const services = [
      "Comprehensive Listings",
      "Advanced Search Filters",
      "Real-Time Updates",
      "Enhanced User Experience",
    ]

    services.forEach((service) => {
      cy.contains("h3", service).should("be.visible")
    })
  })

  it("should display the accommodation section", () => {
    cy.contains("h2", "Accommodation for Students").should("be.visible")
    cy.contains(
      "p",
      "Looking for student accommodation for your next year at uni?"
    ).should("be.visible")
  })
})
