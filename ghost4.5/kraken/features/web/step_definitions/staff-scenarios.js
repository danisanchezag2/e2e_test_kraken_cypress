const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the settings page', async function () {
    await this.staff.navigateToSettingsPage();
});

When('I click on Staff in the left menu', async function () {
    await this.staff.clickOnStaff();
});

When('I click on Invite People button', async function () {
    await this.staff.clickOnInviteButton();
});

When('I create a new staff user with email {kraken-string} and role {string}', async function (email, role) {
    await this.staff.setStaffEmailValue(email);
    await this.staff.selectRole(role);
    await this.staff.clickOnSendInvitation();
});

When('I hide the modal by pressing {string}', async function (key) {
    await this.staff.pressKey(key);
    await this.staff.refreshResults();
});

When('I click on the Invited tab', async function () {
    await this.staff.clickOnInvitedTab();
});

Then('I should see the staff user with email {kraken-string}', async function (email) {
    await this.staff.checkStaffUser(email);
});

Then('I should see the error message {string}', async function (msg) {
    await this.staff.checkErrorMessage(msg);
});