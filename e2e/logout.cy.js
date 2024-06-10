
//testcase to sucessfully check the logout functionality
describe("logout sucessfully",()=>{
    it("logout",()=>{
        cy.visit("https://roles.staging.rigohr.com/login")
        cy.get(".css-1gbfbiu").click()
        cy.contains("Sign Out").click()
    })
})

//to check the allowance request with valid and invalid credentials

describe("allowance request ",()=>{
    it("allowance request with valid credentials",()=>{
    cy.visit("")
    cy.get().click()
    cy.contains("Allowance Request").click()
})
})