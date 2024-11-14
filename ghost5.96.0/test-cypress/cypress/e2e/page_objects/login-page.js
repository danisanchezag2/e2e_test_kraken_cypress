class LoginPage {
    login() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000);
        cy.get('#identification').type("daniela.sancheza@outlook.com");
        cy.wait(2);
        cy.get('#password').type("12345678910");
        cy.get('#ember5').click();
        cy.wait(2000);
    }
    
}
export default LoginPage;
