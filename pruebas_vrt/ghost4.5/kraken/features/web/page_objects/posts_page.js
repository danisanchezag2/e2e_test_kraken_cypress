const AbstractPage = require("./abstract-page");
let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class PostsPage extends AbstractPage {
  async navigateToPostsPage() {
    await this.driver.$('a[href="#/posts/"]').click();
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
    const postDescription = await this.driver.$('div.koenig-editor__editor[contenteditable="true"]');
    await postDescription.waitForDisplayed({ timeout: 5000 });
    await postDescription.setValue(description);
  }

  async clickOnPublishButton() {
    const button = await this.driver.$('div.gh-publishmenu-trigger');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }
  
  async clickOnConfirmButton() {
    const button = await this.driver.$('button.gh-publishmenu-button');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }

  async checkConfirmationMessage() {
    const msg = await this.driver.$('.gh-notification-title');
    await msg.waitForDisplayed({ timeout: 5000 });
    expect(await msg.getText()).to.equal('Published');
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
    return await this.driver.$('button.settings-menu-delete-button');
  }

  async getDeleteButtonConfirmation() {
    return await this.driver.$('section.modal-content button.gh-btn-red');
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