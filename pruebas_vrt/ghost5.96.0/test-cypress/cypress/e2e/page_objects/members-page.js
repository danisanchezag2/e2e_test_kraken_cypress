
import { faker } from '@faker-js/faker';

class MembersPage {
  navigateToMembers() {
    cy.get('[data-test-nav="members"]').click();
  }

  clickNewMemberButton() {
    cy.get('[data-test-new-member-button="true"]').click();
  }

  fillMemberDetailsAndSave() {
    const randomName = faker.internet.userName();
    const randomEmail = faker.internet.email();
    cy.get('[data-test-input="member-name"]').type(randomName);
    cy.wait(2000);
    cy.get('[data-test-input="member-email"]').clear().type(randomEmail);
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(1000);
    return { randomName, randomEmail };
  }

  verifyMemberExists(email) {
    cy.get('[data-test-list="members-list-item"]').contains(email).should('exist');
  }

  clickFirstMember() {
    cy.get('[data-test-list="members-list-item"]').first().click();
  }
}

export default MembersPage;