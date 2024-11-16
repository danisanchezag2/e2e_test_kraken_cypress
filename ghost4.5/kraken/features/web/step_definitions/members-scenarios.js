const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the members page', async function () {
    await this.members.navigateToMembersPage();
    await this.members.takeScreenshot('members-page');
});

When('I click on New Member button', async function () {
    await this.members.clickOnNewButton();
    await this.members.takeScreenshot('new-member');
});

When('I click on the first member of the list', async function () {
    await this.members.clickOntheFirstMember();
    await this.members.takeScreenshot('click-first-member');
});

When('I create a new member with name {kraken-string} and email {kraken-string}', async function (name, email) {
    await this.members.setMemberNameValue(name);
    await this.members.setMemberEmailValue(email);
    await this.members.clickOnSaveButton();
    await this.members.takeScreenshot('creating-member');
});

When('I edit the member with name {kraken-string} and email {kraken-string}', async function (name, email) {
    await this.members.setMemberNameValue(name);
    await this.members.setMemberEmailValue(email);
    await this.members.clickOnSaveButton();
    await this.members.takeScreenshot('editing-member');
});

When('I come back to the members page', async function () {
    await this.members.navigateToMembersPage();
    await this.members.takeScreenshot('redirection-members-page');
});

Then('I should see the member {kraken-string} in the list', async function (name) {
    await this.members.checkMemberNameInList(name);
    await this.members.takeScreenshot('check-member');
});