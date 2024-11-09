const AbstractPage = require("./abstract-page");
let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class PagesPage extends AbstractPage {
  async navigateToPagesPage() {
    await this.driver.$('[data-test-nav="pages"]').click();
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
    const settingsHeader = await this.driver.$('h4=Page settings');
    await settingsHeader.waitForDisplayed({ timeout: 5000 });
    expect(await settingsHeader.getText()).to.equal('Page settings');
  }

  async clickOntheFirstPage() {
    await this.driver.waitUntil(async () => {
      const pages = await this.driver.$$(`a.gh-post-list-button`);
      return pages.length !== 0;
    }, {
      timeout: 5000,
      timeoutMsg: `No pages found in the list`
    });
    
    const pages = await this.getPages();
    await pages[0].click();
  }

  async getPages() {
    return await this.driver.$$(`a.gh-post-list-button`);
  }

  async getDeleteButton() {
    return await this.driver.$('[data-test-button="delete-post"]');
  }

  async getDeleteButtonConfirmation() {
    return await this.driver.$('[data-test-button="delete-post-confirm"]');
  }
  
  async checkPagesPage() {
    const pagesHeader = await this.driver.$('h2.gh-canvas-title');
    await pagesHeader.waitForDisplayed({ timeout: 5000 });
    expect(await pagesHeader.getText()).to.equal('Pages');
  }

}

module.exports = PagesPage;