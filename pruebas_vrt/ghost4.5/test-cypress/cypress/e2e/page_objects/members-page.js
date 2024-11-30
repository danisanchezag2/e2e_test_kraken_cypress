
import { faker } from '@faker-js/faker';

class MembersPage {
  navigateToMembers() {
    cy.get('#members_svg__Regular').click();
    cy.wait(1000);
  }

  clickNewMemberButton() {
    cy.get('[href="#/members/new/"]').first().click();
  }

  fillMemberDetailsAndSave() {
    const randomName = faker.internet.userName();
    const randomEmail = faker.internet.email();
    cy.get('#member-name').type(randomName);
    cy.wait(2000);
    cy.get('#member-email').clear().type(randomEmail);
    cy.wait(1000);
    cy.get('[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.wait(1000);
    return { randomName, randomEmail };
  }

  verifyMemberExists(email) {
    cy.get('.gh-members-list-item').contains(email).should('exist');
  }

  clickFirstMember() {
    cy.get('.gh-members-list-item').first().click();
  }
}

export default MembersPage;