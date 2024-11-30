const AbstractPage = require("./abstract-page");
let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class PostsPage extends AbstractPage {
  async navigateToPostsPage() {
    await this.driver.$('[data-test-nav="posts"]').click();
    await this.checkPostPage();
  }

  async clickOnNewButton() {
    await this.driver.$('a[href="#/editor/post/"]').click();
  }

  async setPostTitleValue(title) {
    const postTitle = await this.driver.$('textarea.gh-editor-title');
    await postTitle.waitForDisplayed({ timeout: 5000 });
    await postTitle.setValue(title);
  }

  async setPostDescriptionValue(description) {
    const postDescription = await this.driver.$('div.kg-prose[contenteditable="true"]');
    await postDescription.waitForDisplayed({ timeout: 5000 });
    await postDescription.setValue(description);
  }

  async clickOnPublishButton() {
    const button = await this.driver.$('[data-test-button="publish-flow"]');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }
  
  async clickOnContinueButton() {
    const button = await this.driver.$('[data-test-button="continue"]');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }

  async clickOnConfirmButton() {
    const button = await this.driver.$('[data-test-button="confirm-publish"]');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }

  async checkConfirmationMessage() {
    const msg = await this.driver.$(`header.modal-header span`);
    expect(await msg.getText()).to.equal("Boom! It's out there.");
  }

  async clickOnSettingsButton() {
    await this.driver.waitUntil(async () => {
      const settingButton = await this.driver.$$(`button[title="Settings"]`);
      return settingButton.length !== 0;
    }, {
      timeout: 5000,
      timeoutMsg: `No Settings button found`
    });

    await this.driver.$('button[title="Settings"]').click();
    const settingsHeader = await this.driver.$('h4=Post settings');
    await settingsHeader.waitForDisplayed({ timeout: 5000 });
    expect(await settingsHeader.getText()).to.equal('Post settings');
  }

  async clickOntheFirstPost() {
    await this.driver.waitUntil(async () => {
      const posts = await this.driver.$$(`a.gh-post-list-title`);
      return posts.length !== 0;
    }, {
      timeout: 5000,
      timeoutMsg: `No posts found in the list`
    });
    
    const posts = await this.getPosts();
    await posts[0].click();
  }

  async getPosts() {
    return await this.driver.$$(`a.gh-post-list-title`);
  }

  async getDeleteButton() {
    return await this.driver.$('[data-test-button="delete-post"]');
  }

  async getDeleteButtonConfirmation() {
    return await this.driver.$('[data-test-button="delete-post-confirm"]');
  }
  
  async checkPostPage() {
    const postsHeader = await this.driver.$('h2.gh-canvas-title');
    await postsHeader.waitForDisplayed({ timeout: 5000 });
    expect(await postsHeader.getText()).to.equal('Posts');
  }

  async pressKey(key) {
    await this.driver.keys(key);
  }

}

module.exports = PostsPage;