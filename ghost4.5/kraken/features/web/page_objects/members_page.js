const AbstractPage = require("./abstract-page");
let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class MembersPage extends AbstractPage {
  async navigateToMembersPage() {
    await this.driver.url(this.baseUrl + "#/members");
    await this.refreshResults();

    await this.driver.waitUntil(async () => {
        const newMemberButton = await this.driver.$('a[href="#/members/new/"]');
        return await newMemberButton.isDisplayed();
    }, {
        timeout: 5000,
        timeoutMsg: `Members page did not load within the expected time`
    });

    const newMemberButton = await this.driver.$('a[href="#/members/new/"]');
    expect(await newMemberButton.isDisplayed()).to.be.true;
  }

  async clickOnNewButton() {
    await this.driver.$('a[href="#/members/new/"]').click();
    const memberHeader = await this.driver.$('h2.gh-canvas-title');
    await memberHeader.waitForDisplayed({ timeout: 5000 });
  }

  async setMemberNameValue(name) {
    const memberName = await this.driver.$("#member-name");
    await memberName.waitForDisplayed({ timeout: 5000 });
    await memberName.setValue(name);
  }

  async setMemberEmailValue(email) {
    const memberEmail = await this.driver.$("#member-email");
    await memberEmail.waitForDisplayed({ timeout: 5000 });
    await memberEmail.setValue(email);
  }

  async clickOnSaveButton() {
    const button = await this.driver.$('button.gh-btn-primary');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }

  async checkMemberNameInList(name) {
    await this.driver.waitUntil(async () => {
        const members = await this.driver.$$(`h3.gh-members-list-name`);
        const memberTexts = await Promise.all(members.map(async (member) => await member.getText()));
        return memberTexts.includes(name);
    }, {
      timeout: 5000,
      timeoutMsg: `Member with name "${name}" was not found in the list within the timeout`
    });
    
    expect(await this.getMemberNames()).to.include(name);
  }

  async getMembers() {
    return await this.driver.$$(`h3.gh-members-list-name`);;
  }
  
  async getMemberNames() {
    const members = await this.getMembers();
    return Promise.all(members.map(async (member) => await member.getText()));
  }

  async clickOntheFirstMember() {
    await this.driver.waitUntil(async () => {
      const members = await this.driver.$$(`h3.gh-members-list-name`);
      return members.length !== 0;
    }, {
      timeout: 5000,
      timeoutMsg: `No members found in the list`
    });
    
    const members = await this.getMembers();
    await members[0].click();
  }

}

module.exports = MembersPage;