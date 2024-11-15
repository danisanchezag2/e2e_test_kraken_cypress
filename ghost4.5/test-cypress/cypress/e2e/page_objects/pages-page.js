class PagesPage {
    navigateToPages() {
        cy.get('[href="#/pages/"]').click();
      }
    clickNewPageButton() {
        cy.get('[href="#/editor/page/"]').click();
    }
    fillPageTitleAndDescription(title, description) {
        cy.get('.gh-editor-title').type(title);
        cy.get('.koenig-editor__editor').click().type(description);
    }

    clickPublishButton() {
        cy.get('.gh-publishmenu-trigger').click();
    }

    clickContinueButton() {
        cy.get('.gh-publishmenu-button').click();
        cy.wait(3000);
    }

    clickPublishPageButton() {
        cy.get('.gh-editor-back-button ').click();
    }

    verifyPageExists(title) {
        cy.get('.gh-notification-content').contains("Published").should('exist');
    }
    clickFirstPage() {
        cy.get('.gh-posts-list-item').first().click();
    }
    clickSettingsButton() {
        cy.get('[title="Settings"]').click();
    }
    clickDeleteButton() {
        cy.get('.settings-menu-delete-button').scrollIntoView();
        cy.wait(2000);
        cy.get('.settings-menu-delete-button').click();
    }
    clickConfirmDeleteButton() {
        cy.get('.gh-btn-red').click();
    }
    verifyRedirectionToPagesPage() {
        cy.get('.active').contains('Pages').should('exist');        
    }
}
export default PagesPage;