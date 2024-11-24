const { AbstractPage } = require("./abstract-page");

class TagsPage extends AbstractPage {
  navigateToTags() {
    cy.get('[data-test-nav="tags"]').click();
  }

  clickNewTagButton() {
    cy.get('[href="#/tags/new/"]').click();
  }

  fillTagNameAndDescription(name, description) {
    
    cy.get('[data-test-input="tag-name"]').scrollIntoView().type(name);
    cy.get('[data-test-input="tag-description"]').type(description);
    cy.wait(1000);
    
  }

  saveTag() {
    cy.get('[data-test-button="save"]').scrollIntoView().click();
  }

  verifyTagExists(tagName) {
    cy.contains(tagName).scrollIntoView().should('exist');
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