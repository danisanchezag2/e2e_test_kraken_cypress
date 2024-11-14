const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the tags page', async function () {
    await this.tags.navigateToTagsPage();
});

When('I click on New Tag button', async function () {
    await this.tags.clickOnNewButton();
});

When('I create a new tag with name {kraken-string} and description {kraken-string}', async function (name, description) {
    await this.tags.setTagNameValue(name);
    await this.tags.setTagDescriptionValue(description);
    await this.tags.clickOnSaveButton();
});

When('I create a new tag with name {string} repeated {int} times and description {string} repeated {int} times', async function (charName, nameCount, charDesc, descCount) {
    const name = charName.repeat(nameCount);
    const description = charDesc.repeat(descCount);

    await this.tags.setTagNameValue(name);
    await this.tags.setTagDescriptionValue(description);
    await this.tags.clickOnSaveButton();
});

When('I come back to the tags page', async function () {
    await this.tags.navigateToTagsPage();
});

Then('I should see the tag {kraken-string} in the list', async function (tagName) {
    await this.tags.checkTagNameInList(tagName);
});

Then('I should see an error message indicating the input exceeds the character limit', async function () {
    const descriptionError = 'Description cannot be longer than 500 characters.';
    const nameError = 'Tag names cannot be longer than 191 characters.';

    this.tags.checkErrorMsgInForm(descriptionError);
    this.tags.checkErrorMsgInForm(nameError);
});