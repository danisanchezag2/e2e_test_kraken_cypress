const AbstractPage = require("./abstract-page");
let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class LoginPage extends AbstractPage {
  constructor(driver, currentScenario) {
    super(driver, currentScenario);
    this.url = this.baseUrl + "#/signin";
  }

  async navigateToLogin() {
    await this.driver.url(this.url);
  }

  async setEmailValue(email) {
    const emailInput = await this.driver.$("input[name='identification']");
    await emailInput.waitForDisplayed({ timeout: 5000 });
    await emailInput.setValue(email);
  }

  async setPasswordValue(password) {
    const passwordInput = await this.driver.$("input[name='password']");
    await passwordInput.waitForDisplayed({ timeout: 5000 });
    await passwordInput.setValue(password);
  }

  async clickSignInButton() {
    const signInButton = await this.driver.$("button.login");
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();
  }

  async initialPageDisplayed() {
    const dashboard = await this.driver.$('div.gh-dashboard');
    await dashboard.waitForDisplayed({ timeout: 5000 });
    expect(await dashboard.isDisplayed()).to.be.true;
  }
}

module.exports = LoginPage;