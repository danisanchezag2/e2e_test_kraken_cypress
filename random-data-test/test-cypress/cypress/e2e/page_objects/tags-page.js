const { AbstractPage } = require("./abstract-page");

class TagsPage extends AbstractPage {
  navigateToTags() {
    cy.get('[data-test-nav="tags"]').click();
    cy.wait(1000);
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
    cy.wait(2000);
  }

  verifyTagExists(tagName) {
    cy.get('ol.gh-list').contains(tagName).should('exist');
  }

  verifyErrorMessage(errorMessage) {
    cy.get('p.response').contains(errorMessage).should('exist');
    cy.get('[data-test-link="tags-back"]').click();
    cy.wait(1000);
    cy.get('.modal-footer > .gh-btn-red > span').click();
    cy.wait(1000);
  }
}

export default TagsPage;