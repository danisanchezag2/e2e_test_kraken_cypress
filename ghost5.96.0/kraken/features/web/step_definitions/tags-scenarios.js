const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the tags page', async function () {
    await this.tags.navigateToTagsPage();
    await this.tags.takeScreenshot('tags-page');
});

When('I click on New Tag button', async function () {
    await this.tags.clickOnNewButton();
    await this.tags.takeScreenshot('new-tag');
});

When('I create a new tag with name {kraken-string} and description {kraken-string}', async function (name, description) {
    await this.tags.setTagNameValue(name);
    await this.tags.setTagDescriptionValue(description);
    await this.tags.clickOnSaveButton();
    await this.tags.takeScreenshot('creating-tag');
});

When('I create a new tag with name {string} repeated {int} times and description {string} repeated {int} times', async function (charName, nameCount, charDesc, descCount) {
    const name = charName.repeat(nameCount);
    const description = charDesc.repeat(descCount);

    await this.tags.setTagNameValue(name);
    await this.tags.setTagDescriptionValue(description);
    await this.tags.clickOnSaveButton();
    await this.tags.takeScreenshot('creating-wrong-tag');
});

When('I come back to the tags page', async function () {
    await this.tags.navigateToTagsPage();
    await this.tags.takeScreenshot('redirection-tags-page');
});

Then('I should see the tag {kraken-string} in the list', async function (tagName) {
    await this.tags.checkTagNameInList(tagName);
    await this.tags.takeScreenshot('check-new-tag');
});

Then('I should see an error message indicating the input exceeds the character limit', async function () {
    const descriptionError = 'Description cannot be longer than 500 characters.';
    const nameError = 'Tag names cannot be longer than 191 characters.';

    this.tags.checkErrorMsgInForm(descriptionError);
    this.tags.checkErrorMsgInForm(nameError);
    await this.tags.takeScreenshot('check-error-msg-tag');
});