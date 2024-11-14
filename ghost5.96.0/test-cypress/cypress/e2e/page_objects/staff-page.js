
class StaffPage {
    navigateSettings() {
        cy.get('[data-test-nav="settings"]').click();
    }
    clickStaff() {
        cy.get('#staff').click();
    }
    clickInvitePeople() {
        cy.get('[data-testid="users"] > .items-start > :nth-child(2) > .cursor-pointer > span').click();
    }
    fillStaffDetails(email) {
        cy.get('[data-testid="invite-user-modal"] input').type(email);
        cy.get('#author').click();
    }
    clickSendInvitation() {
        cy.get('[data-testid="invite-user-modal"] > .justify-between').scrollIntoView();
        cy.wait(2000);
        cy.get('[data-testid="invite-user-modal"] div.gap-3 button').click();
    }
    verifyStaffExists(email) {
        cy.get('[data-testid="user-list"]').contains(email).should('exist');
    }
    hideStaffModal() {
        cy.get('body').type('{esc}');
        cy.reload();
    }
    clickInvitedTab() {
        cy.get('div[data-testid="users"] button#invited').click();
    }
    verifyStaffExists(email) {
        cy.get('div[data-testid="users"] div[data-testid="user-invite"] div span').contains(email).should('exist');
    }
    verifyErrorMessage() {
        cy.get('.text-red').contains('Please enter a valid email address.').should('exist');
    }

}
export default StaffPage;