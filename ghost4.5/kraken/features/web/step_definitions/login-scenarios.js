const { Given } = require('@cucumber/cucumber');

Given('I am logged into Ghost', async function () {
    await this.login.navigateToLogin();
    await this.login.setEmailValue('o.torress@uniandes.edu.co');
    await this.login.setPasswordValue('Control12345.');
    await this.login.clickSignInButton();
    await this.login.initialPageDisplayed();
});