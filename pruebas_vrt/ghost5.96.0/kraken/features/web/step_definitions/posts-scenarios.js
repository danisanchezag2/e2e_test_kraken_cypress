const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the posts page', async function () {
    await this.posts.navigateToPostsPage();
    await this.posts.takeScreenshot('posts-page');
});

When('I click on New Post button', async function () {
    await this.posts.clickOnNewButton();
    await this.posts.takeScreenshot('new-post');
});

When('I create a new post with title {kraken-string} and description {kraken-string}', async function (title, email) {
    await this.posts.setPostTitleValue(title);
    await this.posts.setPostDescriptionValue(email);
    await this.posts.clickOnPublishButton();
    await this.posts.takeScreenshot('creating-post');
});

When('I click on the button Continue, final review', async function () {
    await this.posts.clickOnContinueButton();
    await this.posts.takeScreenshot('continue-button-post');
});

When('I click on the button Publish post, right now', async function () {
    await this.posts.clickOnConfirmButton();
    await this.posts.takeScreenshot('confirm-button-post');
});

Then('I should see the confirmation message', async function () {
    await this.posts.checkConfirmationMessage();
    await this.posts.takeScreenshot('confirmation-message-post');
});

When('I click on the first post of the list', async function () {
    await this.posts.pressKey('Escape');
    await this.posts.clickOntheFirstPost();
    await this.posts.takeScreenshot('confirmation-message-post');
});

When('I click on Settings button', async function () {
    await this.posts.clickOnSettingsButton();
    await this.posts.takeScreenshot('clicking-settings-button-post');
});

When('I scroll to the bottom of the settings menu', async function () {
    const deleteButton = await this.posts.getDeleteButton()
    await deleteButton.scrollIntoView();
    await this.posts.takeScreenshot('scrolling-to-botton-post');
});

When('I click on the delete button', async function () {
    const deleteButton = await this.posts.getDeleteButton()
    await deleteButton.click();
    await this.posts.takeScreenshot('clicking-delete-button-post');
});

When('I click on the delete button confirmation', async function () {
    const deleteButton = await this.posts.getDeleteButtonConfirmation()
    await deleteButton.click();
    await this.posts.takeScreenshot('confirming-delete-button-post');
});

Then('I should be redirected to Posts page', async function () {
    await this.posts.checkPostPage();
    await this.posts.takeScreenshot('redirection-posts-page');
});