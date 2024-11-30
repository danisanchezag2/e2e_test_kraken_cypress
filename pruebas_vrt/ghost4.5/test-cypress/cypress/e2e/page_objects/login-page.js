class LoginPage {
    login() {
        cy.visit('http://localhost:2371/ghost/#/signin');
        cy.wait(1000);
        cy.get('[name="identification"]').type("daniela.sancheza@outlook.com");
        cy.wait(2);
        cy.get('[name="password"]').type("12345678910");
        cy.get('.gh-btn-login').click();
        cy.wait(5000);
    }
    
}
export default LoginPage;
