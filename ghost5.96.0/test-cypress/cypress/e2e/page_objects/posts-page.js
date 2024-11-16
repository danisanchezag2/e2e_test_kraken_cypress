class PostsPage {
    navigateToPosts() {
        cy.get('[data-test-nav="posts"]').click();
      }
    clickNewPostButton() {
        cy.get('[data-test-new-post-button]').click();
    }
    fillPostDetails(title, content) {
        cy.get('.gh-editor-title').type(title);
        cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p').type(content);
    }
    clickPublishButton() {
        cy.get('.gh-editor-header > .gh-editor-publish-buttons [data-test-button="publish-flow"]').click();
        cy.wait(2000);
    }
    
    clickContinuePublish() {
        cy.get('[data-test-button="continue"]').click();
        cy.wait(1000);
    }
    clickConfirmPublish(){
        cy.get('[data-test-button="confirm-publish"]').click();
        cy.wait(4000);
    }
    verifyPostExists(title) {
        cy.get('[data-test-publish-flow="complete"]').contains(title).should('exist');
    }
    clickFirstPost() {
        cy.get('.gh-posts-list-item').first().click();
    }
    clickSettingsButton() {
        cy.get('[data-test-psm-trigger]').click();
    }
    clickDeleteButton() {
        cy.get('.settings-menu-delete-button > .gh-btn > span').scrollIntoView();
        cy.wait(2000);
        cy.get('[data-test-button="delete-post"]').click();
        cy.wait(5000);
    }
    clickConfirmDeleteButton() {
        cy.get('[data-test-button="delete-post-confirm"]').click();
        cy.wait(1000);
    }
    verifyRedirectionToPostsPage() {
        cy.get('[data-test-screen-title]').contains('Posts').should('exist');        
    }
}
export default PostsPage;
