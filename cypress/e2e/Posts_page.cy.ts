// describe("Component", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000/posts") // Update with the correct path to your component if necessary
//   })

//   it("should display the search input", () => {
//     cy.get('input[type="search"]')
//       .should("be.visible")
//       .and("have.attr", "placeholder", "Search accommodations...")
//   })

//   it("should display the Add Accommodation button", () => {
//     cy.contains("button", "Add Accommodation").should("be.visible")
//   })

//   it("should display the dropdown filter", () => {
//     cy.get("div").contains("DropDownFilter").should("be.visible")
//   })

//   it("should display multiple PostCards", () => {
//     cy.get("div").contains("PostCard").should("have.length.at.least", 3)
//   })
// })
