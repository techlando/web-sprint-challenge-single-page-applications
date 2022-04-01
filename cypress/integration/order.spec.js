it("sanity check", () => {
    expect(8 + 5).to.equal(13)
})

describe("order a pizza", () => {
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    it("can visit home page", () => {
        cy.contains("Please Order some pizza!")
    })
    it("can order a pizza", () => {
        cy.get(`[data-test-id="order-pizza"]`).click()
        const submitBtn = () => cy.get(`[data-test-id="order-button"]`)
        cy.get(`[data-test-id="name"]`).type("lando commando")
        cy.get(`[data-test-id="sausage"]`).click()
        cy.get(`[data-test-id="pepperoni"]`).click()
        cy.get(`[data-test-id="size"]`).select("Medium-14inches")
        cy.get(`[data-test-id="special"]`).type("drop off at door")
        submitBtn().click()
    })
})