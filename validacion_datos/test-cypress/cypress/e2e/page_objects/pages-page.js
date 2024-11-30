const { AbstractPage } = require("./abstract-page");

class PagesPage extends AbstractPage {

  constructor() {
    super();
    this.url = '/#/pages';
}

  navigateToPages() {
    cy.get('[data-test-nav="pages"]').click({force: true});
  }

  visitPage() {
    cy.visit(`${this.baseUrl}${this.url}`);
    cy.wait(1000);
}

  clickNewPageButton() {
    cy.get('[href="#/editor/page/"]').first().click({force: true});
  }

  fillPageTitleAndDescription(title, description) {
    cy.get('.gh-editor-title').clear().type(title);
    cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p')
      .first()
      .invoke('text', description)
      .trigger('input', { force: true });
    cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p').first().type(`{enter}`, { force: true });
  }

  clearTitle() {
    cy.get('.gh-editor-title').clear();
  }

  clearDescription() {
    cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p')
      .first()
      .clear();
  }

  addYoutube(url) {
    cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p').last().type(`/youtube {enter}`);

    cy.get('input[placeholder="Paste URL to add embedded content..."]')
      .type(`${url}{enter}`);

    cy.wait(2000);
  }

  addImage(filePath) {
    cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p')
      .last()
      .type(`/image {enter}`);
  
    cy.get('input[name="image-input"]')
      .attachFile(filePath, { force: true });
  
    cy.wait(2000);
  }


  clickOnFeatureUnsplashImage() {
    cy.get('.gh-editor-feature-image-unsplash').click({ force: true });
    cy.get(1000);
  }

  selectOneUnsplashImg() {
    cy.get('.gh-unsplash-photo-footer .gh-unsplash-button').then(($elements) => {
      const randomIndex = Math.floor(Math.random() * $elements.length);
      cy.wrap($elements[randomIndex]).click({force: true});
    });
  
    cy.wait(2000);
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

  publishUpdate(){
    cy.get('button[data-test-button="publish-save"]').first().click();
  }

  verifyGreenNotification() {
    cy.get('.gh-notification-title').contains('Page updated').should('exist');
  }

  // clickFirstPageLink() {
  //   cy.get('a[data-test-nav="pages"]').first().click();
  // }

  // clickPageLink() {
  //   cy.get('a[data-test-nav="pages"]').click();
  // }

  // clickFirstPagesListElement(){
  //   cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').first().click();
  // }

  // clickNavigateToPageEditor() {
  //   cy.get('a[href="#/editor/page/"]').click();
  // }

  // clearTitle(){
  //   cy.get('textarea[placeholder="Page title"]').clear();
  // }

  // title(text) {
  //   cy.get('textarea[placeholder="Page title"]').type(text);
  // }

  // typeDescription(description){
  //   cy.get('div[data-placeholder="Begin writing your page..."]').type(description);
  // }

  // clearDescription(){
  //   cy.get('div[data-placeholder="Begin writing your page..."]').clear();
  // }

  // type(value) {
  //   cy.get("div.koenig-editor__editor-wrapper > div").last().scrollIntoView();
  //   cy.get("div.koenig-editor__editor-wrapper > div")
  //     .last()
  //     .type(`${value}{enter}`, { force: true });
  // }
  // addYoutube(url) {
  //   this.type(`/youtube ${url}{enter}`);
  // }

  // publishAndBackToEditor() {
  //   cy.get('button[data-test-button="publish-flow"]').click();
  //   cy.get('button[data-test-button="continue"]').click();
  //   cy.get('button[data-test-button="confirm-publish"]').click();
  //   cy.get('button[data-test-button="back-to-editor"]').click();

  // }

  // publishUpdate(){
  //   cy.get('button[data-test-button="publish-save"]').click();
  // }

  // gotoPagesList(){
  //   cy.get('a[data-test-link="pages"]').click();
  // }

  // clickNavigationPage(){
  //   cy.get('a[href="#/pages/"]').click();
  // }

  // checkTitleInList(title){
  //   cy.get("h3.gh-content-entry-title")
  //     .filter(`:contains("${title}")`)
  //     .should("have.length.at.least", 1);
  // }

  // checkEmptyTitleInList(){
  //   cy.get("h3.gh-content-entry-title")
  //     .filter(`:contains("Untitled")`)
  //     .should("have.length.at.least", 1);
  // }
}

module.exports = {
  PagesPage
}