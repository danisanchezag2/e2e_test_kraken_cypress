const faker = require('@faker-js/faker');

class TagsPage {
  navigateToTags() {
    cy.get('[data-test-nav="tags"]').click();
  }

  clickNewTagButton() {
    cy.get('[href="#/tags/new/"]').click();
  }

  fillTagNameAndDescription(name, description) {
    cy.get('[data-test-input="tag-name"]').type(name);
    cy.get('[data-test-input="tag-description"]').type(description);
    
  }

  saveTag() {
    cy.get('[data-test-button="save"]').click();
  }

  verifyTagExists(tagName) {
    cy.get('ol.gh-list').contains(tagName).should('exist');
  }

  verifyErrorMessage(errorMessage) {
    cy.get('p.response').contains(errorMessage).should('exist');
  }
}

export default TagsPage;