const AbstractPage = require("./abstract-page");
let expect;

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

class LoginPage extends AbstractPage {
  constructor(driver) {
    super(driver);
    this.url = this.baseUrl + "#/signin";
  }

  async navigateToLogin() {
    await this.driver.url(this.url);
  }

  async setEmailValue(email) {
    const emailInput = await this.driver.$("#identification");
    await emailInput.waitForDisplayed({ timeout: 5000 });
    await emailInput.setValue(email);
  }

  async setPasswordValue(password) {
    const passwordInput = await this.driver.$("#password");
    await passwordInput.waitForDisplayed({ timeout: 5000 });
    await passwordInput.setValue(password);
  }

  async clickSignInButton() {
    const signInButton = await this.driver.$("[data-test-button='sign-in']");
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