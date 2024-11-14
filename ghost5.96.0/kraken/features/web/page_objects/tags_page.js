const AbstractPage = require("./abstract-page");
let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class TagsPage extends AbstractPage {
  async navigateToTagsPage() {
    await this.driver.$('[data-test-nav="tags"]').click();
    const tagsHeader = await this.driver.$('h2.gh-canvas-title');
    await tagsHeader.waitForDisplayed({ timeout: 5000 });
    expect(await tagsHeader.getText()).to.equal('Tags');
  }

  async clickOnNewButton() {
    await this.driver.$('a[href="#/tags/new/"]').click();
    const tagsHeader = await this.driver.$('h2.gh-canvas-title');
    await tagsHeader.waitForDisplayed({ timeout: 5000 });
    expect(await tagsHeader.getText()).to.equal('New tag');
  }

  async setTagNameValue(name) {
    const tagName = await this.driver.$("#tag-name");
    await tagName.waitForDisplayed({ timeout: 5000 });
    await tagName.setValue(name);
  }

  async setTagDescriptionValue(description) {
    const tagDescription = await this.driver.$("#tag-description");
    await tagDescription.waitForDisplayed({ timeout: 5000 });
    await tagDescription.setValue(description);
  }

  async clickOnSaveButton() {
    const button = await this.driver.$('[data-test-button="save"]');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }

  async checkTagNameInList(name) {
    const tags = await this.driver.$$(`a.gh-tag-list-title h3.gh-tag-list-name`);
    const tagTexts = await Promise.all(tags.map(async (tag) => await tag.getText()));
    expect(tagTexts).to.include(name);
  }

  async checkErrorMsgInForm(errMsg) {
    const errorMessages = await this.driver.$$('p.response');
    const messagesText = await Promise.all(errorMessages.map(async (msg) => await msg.getText()));

    expect(messagesText).to.include(errMsg);
  }
}

module.exports = TagsPage;