class PostsPage {
    navigateToPosts() {
        cy.get('[data-test-nav="posts"]').click();
      }

    clickNewPostButton() {
        cy.get('[data-test-button="new-post"]').click();
    }

    fillPostDetails(title, content) {
        cy.get('[data-test-input="post-title"]').type(title);
        cy.get('.koenig-editor__editor').type(content);
    }

    clickPublishButton() {
        cy.get('[data-test-button="publish"]').click();
    }
    

}
export default PostsPage;