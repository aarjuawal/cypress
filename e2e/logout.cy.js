
//testcase to sucessfully check the logout functionality
describe("logout sucessfully",()=>{
    it("logout",()=>{
        cy.visit("https://roles.staging.rigohr.com/login")
        cy.get(".css-1gbfbiu").click()
        cy.contails("Sign Out").click
    })
})