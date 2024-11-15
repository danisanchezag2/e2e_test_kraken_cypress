class PostsPage {
    navigateToPosts() {
        cy.get('[href="#/posts/"]').first().click();
      }
    clickNewPostButton() {
        cy.get('[href="#/editor/post/"]').first().click();
    }
    fillPostDetails(title, content) {
        cy.get('.gh-editor-title').type(title);
        cy.get('.koenig-editor__editor').click().type(content);
        cy.wait(10000);
    }
    clickPublishButton() {
        cy.get('.gh-publishmenu-trigger').click();
        cy.wait(4000);
    }
    
    clickContinuePublish() {
        cy.get('.gh-publishmenu-button').click();
       cy.wait(2000);
    }

    clickConfirmPublish(){
        cy.get('.gh-publishmenu-button').click();
        cy.wait(1000);
    }
 
    verifyPostExists(title) {
        cy.get('.gh-notification-content').contains("Published").should('exist');
    }
    clickFirstPost() {
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
        cy.wait(1000);
    }
    verifyRedirectionToPostsPage() {
        cy.get('.active').contains('Posts').should('exist');        
    }
}
export default PostsPage;
