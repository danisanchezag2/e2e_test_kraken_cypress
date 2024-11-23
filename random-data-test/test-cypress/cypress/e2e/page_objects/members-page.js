const { AbstractPage } = require("./abstract-page");

class MembersPage extends AbstractPage {

    constructor() {
        super();
        this.url = '/#/members';
    }
    
    navigateToMembers() {
        cy.get('[data-test-nav="members"]').click();
    }

    visitPage() {
        cy.visit(`${this.baseUrl}${this.url}`);
        cy.wait(1000);
    }

    clickNewMemberButton() {
        cy.get('[data-test-new-member-button="true"]').click();
    }

    fillMemberDetailsAndSave(name, email, note) {
        if (name != '') {
            cy.get('[data-test-input="member-name"]').clear().type(name);
            cy.wait(2000);
        }
        if (email != '') {
            cy.get('[data-test-input="member-email"]').clear().type(email);
            cy.wait(1000);
        }
        if (note != '') {
            cy.get('[data-test-input="member-note"]').clear().type(note);
            cy.wait(1000);
        }
        cy.get('[data-test-button="save"]').click();
        cy.wait(1000);
        return { name, email };
    }

    clearMemberDetailsAndSave() {
        cy.get('[data-test-input="member-name"]').clear();
        cy.get('[data-test-input="member-email"]').clear();
        cy.get('[data-test-input="member-note"]').clear();
        cy.wait(1000);

        cy.get('[data-test-button="save"]').click();
        cy.wait(1000);
    }

    verifyMemberExists(email) {
        cy.get('[data-test-list="members-list-item"]').contains(email).should('exist');
    }

    verifyEmptyStringName(email) {
        cy.get('.gh-members-list-name-container', { timeout: 10000 })
            .each(($el) => {
                // Check if the email matches
                const emailText = $el.find('p.gh-members-list-email').text().trim();
                if (emailText === email) {
                    // Assert that the name field is empty
                    const nameText = $el.find('h3.gh-members-list-name').text().trim();
                    expect(nameText).to.be.empty;
                }
            });
    }

    clickLeave(){
        cy.get('button[data-test-leave-button=""]').click()
    }

    clickFirstMemberInList(){
        cy.get('a[data-test-table-data="details"]').first().click();
    }

    checkNameInList(name){
        cy.get('h3.gh-members-list-name ', { timeout: 10000 })
            .filter(`:contains(${name})`)
            .should('have.length.at.least', 1);
    }

    checkErrorMessageExist(name){
        cy.get('p.response', { timeout: 10000 }).should('exist');
    }
}

module.exports = {
    MembersPage
}