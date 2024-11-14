class PagesPage {
    navigateToPages() {
        cy.get('[data-test-nav="pages"]').click();
      }
    clickNewPageButton() {
        cy.get('[href="#/editor/page/"]').click();
    }
    fillPageTitleAndDescription(title, description) {
        cy.get('.gh-editor-title').type(title);
        cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p').type(description);
    }

    clickPublishButton() {
        cy.get('.gh-editor-header > .gh-editor-publish-buttons > .darkgrey > span').click();
    }

    clickContinueButton() {
        cy.get('[data-test-button="continue"]').click();
    }

    clickPublishPageButton() {
        cy.get('[data-test-button="confirm-publish"]').click();
    }

    verifyPageExists(title) {
        cy.get('[data-test-publish-flow="complete"]').contains(title).should('exist');
    }
    clickFirstPage() {
        cy.get('.gh-posts-list-item').first().click();
    }
    clickSettingsButton() {
        cy.get('[data-test-psm-trigger]').click();
    }
    clickDeleteButton() {
        cy.get('[data-test-button="delete-post"]').click();
    }
    clickConfirmDeleteButton() {
        cy.get('[data-test-button="delete-post-confirm"]').click();
    }
    verifyRedirectionToPagesPage() {
        cy.get('[data-test-screen-title]').contains('Pages').should('exist');        
    }
}
export default PagesPage;