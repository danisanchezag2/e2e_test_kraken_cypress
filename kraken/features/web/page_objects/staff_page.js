const AbstractPage = require("./abstract-page");
let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class StaffPage extends AbstractPage {
  constructor(driver) {
    super(driver);
    this.url = this.baseUrl + "#/settings/staff";
  }

  async navigateToSettingsPage() {
    await this.driver.$('[data-test-nav="settings"]').click();
    const modal = await this.driver.$('.admin-x-settings');
    await modal.waitForDisplayed({ timeout: 5000 });
    expect(await modal.isDisplayed()).to.be.true;
  }

  async clickOnStaff() {
    const button = await this.driver.$('a#staff');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }

  async clickOnInviteButton() {
    const button = await this.driver.$('div[data-testid="users"] div.items-start button');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }

  async setStaffEmailValue(email) {
    const staffEmail = await this.driver.$('[data-testid="invite-user-modal"] input');
    await staffEmail.waitForDisplayed({ timeout: 5000 });
    await staffEmail.setValue(email);
  }

  async selectRole(role) {
    const staffRole = await this.driver.$(`[data-testid="invite-user-modal"] [value="${role}"]`);
    await staffRole.waitForDisplayed({ timeout: 5000 });
    await staffRole.click();
  }

  async clickOnSendInvitation() {
    const button = await this.driver.$('[data-testid="invite-user-modal"] div.gap-3 button');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }
  
  async pressKey(key) {
    await this.driver.keys(key);
  }

  async refreshResults() {
    await this.driver.execute(() => location.reload(true));
    await this.driver.pause(2000);
  }

  async clickOnInvitedTab() {
    const button = await this.driver.$('div[data-testid="users"] button#invited');
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }

  async checkStaffUser(email) {
    await this.driver.waitUntil(async () => {
        const staffTexts = await this.getStaffNames();
        console.log(staffTexts);
        
        return staffTexts.includes(email);
    }, {
      timeout: 5000,
      timeoutMsg: `Staff user with email "${email}" was not found in the list within the timeout`
    });
    
    expect(await this.getStaffNames()).to.include(email);
  }

  async getStaffNames() {
    const staff = await this.driver.$$(`div[data-testid="users"] div[data-testid="user-invite"] div span`);
    return Promise.all(staff.map(async (s) => await s.getText()));
  }

  async checkErrorMessage(errMsg) {
    const errorMessage = await this.driver.$('[data-testid="invite-user-modal"] span.text-red');
    const messagesText = await errorMessage.getText();

    expect(messagesText).to.include(errMsg);
  }

}

module.exports = StaffPage;