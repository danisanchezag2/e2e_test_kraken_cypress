const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the settings page', async function () {
    await this.staff.navigateToSettingsPage();
    await this.staff.takeScreenshot('staff-page');
});

When('I click on Staff in the left menu', async function () {
    await this.staff.clickOnStaff();
    await this.staff.takeScreenshot('click-staff-option');
});

When('I click on Invite People button', async function () {
    await this.staff.clickOnInviteButton();
    await this.staff.takeScreenshot('click-invite-people-button-staff');
});

When('I create a new staff user with email {kraken-string} and role {string}', async function (email, role) {
    await this.staff.setStaffEmailValue(email);
    await this.staff.selectRole(role);
    await this.staff.clickOnSendInvitation();
    await this.staff.takeScreenshot('creating-new-staff');
});

When('I hide the modal by pressing {string}', async function (key) {
    await this.staff.pressKey(key);
    await this.staff.refreshResults();
    await this.staff.takeScreenshot('hidding-modal-staff');
});

When('I click on the Invited tab', async function () {
    await this.staff.clickOnInvitedTab();
    await this.staff.takeScreenshot('clicking-invited-tab-staff');
});

Then('I should see the staff user with email {kraken-string}', async function (email) {
    await this.staff.checkStaffUser(email);
    await this.staff.takeScreenshot('check-new-staff');
});

Then('I should see the error message {string}', async function (msg) {
    await this.staff.checkErrorMessage(msg);
    await this.staff.takeScreenshot('check-error-msg-staff');
});