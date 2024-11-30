const { AbstractPage } = require("./abstract-page");

class PostsPage extends AbstractPage  {
    navigateToPosts() {
        cy.get('body').type('{esc}');
        cy.get('[data-test-nav="posts"]').click();
      }
    clickNewPostButton() {
        cy.get('[data-test-new-post-button]').click();
    }
    fillPostDetails(title, content) {
        cy.get('.gh-editor-title').type(title);
        cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p').type(content);
        cy.wait(1000);
        cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p').type('{enter}');
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
        cy.wait(1000);
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
        cy.wait(2000);
    }
    clickConfirmDeleteButton() {
        cy.get('[data-test-button="delete-post-confirm"]').click();
        cy.wait(1000);
    }
    verifyRedirectionToPostsPage() {
        cy.get('[data-test-screen-title]').contains('Posts').should('exist');        
    }
    addImage(url){
        cy.get('.kg-prose > :nth-child(2)').type(`/image ${url}`);
        cy.wait(1000);
        cy.get('.kg-prose > :nth-child(2)').type('{enter}');
        cy.wait(2000);
    }

    addYoutube(url, nthChild = 2){
        this.addContent('/youtube{enter}', url, nthChild);
    }

    addSpotify(url, nthChild = 2){
        this.addContent('/spotify{enter}', url, nthChild);
    }

    addContent(content, url, nthChild = 2) {
        cy.get(`.kg-prose > :nth-child(${nthChild})`).scrollIntoView();
        cy.get(`.kg-prose > :nth-child(${nthChild})`).click();
        cy.get(`.kg-prose > :nth-child(${nthChild})`).type(content, { force: true });
        cy.wait(200);
        cy.get('[data-testid="embed-url"]').type(`${url}{enter}`);
        cy.wait(2000);
    }

    addYoutubeAndSpotifyUrls(youtubeUrl, spotifyUrl){
        this.addYoutube(youtubeUrl, 2);
        this.addSpotify(spotifyUrl, 3);
    }
    verifyUrlErrorVisible(){
        cy.get('[data-testid="embed-url-error-message"]').contains("Oops, that link didn't work.").should('exist');
        cy.wait(1000);
        cy.get('[data-test-link="posts"]').click();
    }


}
export default PostsPage;
