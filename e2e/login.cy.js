//test case for login with valid and invalid credential.
describe('Login', () => {

    it('Employee right username and right password login', () =>{
    cy.visit('https://roles.staging.rigohr.com/login')
    cy.get("#userName").type("sapana@rigonepal.com");
    cy.get("#password").type("Admin@12");
    cy.get(".login-submit").click();
    cy.url().should("contain", "https://roles.staging.rigohr.com/hr/dashboard");
    })
    
    describe('LoginFail', () => {
      it('Employee failed login', () =>{
      cy.visit('https://roles.staging.rigohr.com/login')
      cy.get("#userName").type("rigo@rigonepal.com");
      cy.get("#password").type('ddd{enter}');
      cy.get(".login-submit").click();
      cy.url().should('contain','https://roles.staging.rigohr.com/login')
      cy.get('[role="alert"]').should('contain.text', "The user name or password is incorrect.");
      
      })
      })
      
    })