const AbstractPage = require("./abstract-page");
let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class PagesPage extends AbstractPage {
  async navigateToPagesPage() {
    await this.driver.url(this.baseUrl + "#/pages");
    await this.checkPagesPage();
  }

  async clickOnNewButton() {
    await this.driver.$('a[href="#/editor/page/"]').click();
  }

  async setPageTitleValue(title) {
    const postTitle = await this.driver.$('textarea.gh-editor-title');
    await postTitle.waitForDisplayed({ timeout: 5000 });
    await postTitle.setValue(title);
  }

  async setPageDescriptionValue(description) {
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
    const settingsHeader = await this.driver.$('h4=Page settings');
    await settingsHeader.waitForDisplayed({ timeout: 5000 });
    expect(await settingsHeader.getText()).to.equal('Page settings');
  }

  async clickOntheFirstPage() {
    await this.driver.waitUntil(async () => {
      const pages = await this.driver.$$(`a.gh-post-list-title`);
      return pages.length !== 0;
    }, {
      timeout: 5000,
      timeoutMsg: `No pages found in the list`
    });
    
    const pages = await this.getPages();
    await pages[0].click();
  }

  async getPages() {
    return await this.driver.$$(`a.gh-post-list-title`);
  }

  async getDeleteButton() {
    return await this.driver.$('button.settings-menu-delete-button');
  }

  async getDeleteButtonConfirmation() {
    return await this.driver.$('section.modal-content button.gh-btn-red');
  }
  
  async checkPagesPage() {
    const pagesHeader = await this.driver.$('h2.gh-canvas-title');
    await pagesHeader.waitForDisplayed({ timeout: 5000 });
    expect(await pagesHeader.getText()).to.equal('Pages');
  }

}

module.exports = PagesPage;