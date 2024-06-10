
//write a testcase that confirms that image have alt tags
describe("Image",()=>{
it("login sucessful",()=>{
    cy.visit("https://roles.staging.rigohr.com/login")
    cy.get("#userName").type("sapana@rigonepal.com").should('be.visible')
    cy.get("#password").type("Admin@12")
    cy.get(".login-submit").click();
    cy.url().should("contain","https://roles.staging.rigohr.com/hr/dashboard")
    
})        
it("all the image have alt tags",()=>{
    cy.visit("https://roles.staging.rigohr.com/hr/dashboard")
    cy.get('img').each(($img)=>{
        const altText =$img.attr('alt');
        expect(altText).to.be.oneOf(['rigo-logo','company-logo','employee-avatar']);
    })
})
it("logout sucessfull",()=>{
    cy.visit("https://roles.staging.rigohr.com/hr/dashboard")
    cy.get(".css-1gbfbiu").click()
    cy.contains('Sign Out').click()
    cy.url().should("contain","https://roles.staging.rigohr.com/login")
})

it("login again",()=>{
    cy.visit("https://roles.staging.rigohr.com/hr/dashboard")
    cy.get("#userName").type("sapana@rigonepal.com").should('be.visible')
    cy.get("#password").type("Admin@12")
    cy.get(".login-submit").click();
    cy.url().should("contain","https://roles.staging.rigohr.com/hr/dashboards")  

})
})
