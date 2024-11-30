class AbstractPage {
    constructor() {
        this.baseUrl = 'http://localhost:2370/ghost';
    }

    signIn() {
        cy.visit(`${this.baseUrl}/#/signin`);
        cy.wait(1000);
        cy.get('#identification').type("o.torress@uniandes.edu.co");
        cy.wait(2);
        cy.get('#password').type("Control12345.");
        cy.get('#ember5').click();
        cy.wait(2000);
      }
}

module.exports = {
    AbstractPage
}