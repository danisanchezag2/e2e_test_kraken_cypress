const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the members page', async function () {
    await this.members.navigateToMembersPage();
});

When('I click on New Member button', async function () {
    await this.members.clickOnNewButton();
});

When('I click on the first member of the list', async function () {
    await this.members.clickOntheFirstMember();
});

When('I create a new member with name {kraken-string} and email {kraken-string}', async function (name, email) {
    await this.members.setMemberNameValue(name);
    await this.members.setMemberEmailValue(email);
    await this.members.clickOnSaveButton();
});

When('I edit the member with name {kraken-string} and email {kraken-string}', async function (name, email) {
    await this.members.setMemberNameValue(name);
    await this.members.setMemberEmailValue(email);
    await this.members.clickOnSaveButton();
});

When('I come back to the members page', async function () {
    await this.members.navigateToMembersPage();
});

Then('I should see the member {kraken-string} in the list', async function (name) {
    await this.members.checkMemberNameInList(name);
});