const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the posts page', async function () {
    await this.posts.navigateToPostsPage();
});

When('I click on New Post button', async function () {
    await this.posts.clickOnNewButton();
});

When('I create a new post with title {kraken-string} and description {kraken-string}', async function (title, email) {
    await this.posts.setPostTitleValue(title);
    await this.posts.setPostDescriptionValue(email);
    await this.posts.clickOnPublishButton();
});

When('I click on the button Continue, final review', async function () {
    await this.posts.clickOnContinueButton();
});

When('I click on the button Publish post, right now', async function () {
    await this.posts.clickOnConfirmButton();
});

Then('I should see the confirmation message', async function () {
    await this.posts.checkConfirmationMessage();
});

When('I click on the first post of the list', async function () {
    await this.posts.pressKey('Escape');
    await this.posts.clickOntheFirstPost();
});

When('I click on Settings button', async function () {
    await this.posts.clickOnSettingsButton();
});

When('I scroll to the bottom of the settings menu', async function () {
    const deleteButton = await this.posts.getDeleteButton()
    await deleteButton.scrollIntoView();
});

When('I click on the delete button', async function () {
    const deleteButton = await this.posts.getDeleteButton()
    await deleteButton.click();
});

When('I click on the delete button confirmation', async function () {
    const deleteButton = await this.posts.getDeleteButtonConfirmation()
    await deleteButton.click();
});

Then('I should be redirected to Posts page', async function () {
    await this.posts.checkPostPage();
});