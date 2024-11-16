const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the pages page', async function () {
    await this.pages.navigateToPagesPage();
    await this.pages.takeScreenshot('pages-page');
});

When('I click on New Page button', async function () {
    await this.pages.clickOnNewButton();
    await this.pages.takeScreenshot('new-page');
});

When('I create a new page with title {kraken-string} and description {kraken-string}', async function (title, description) {
    await this.pages.setPageTitleValue(title);
    await this.pages.setPageDescriptionValue(description);
    await this.pages.clickOnPublishButton();
    await this.pages.takeScreenshot('publish-button-page');
});

When('I click on the button Publish, right now in the new page', async function () {
    await this.pages.clickOnConfirmButton();
    await this.pages.takeScreenshot('confirm-button-page');
});

Then('I should see the confirmation message in the Pages page', async function () {
    await this.pages.checkConfirmationMessage();
    await this.pages.takeScreenshot('confirmation-message-page');
});

When('I click on the first page of the list', async function () {
    await this.pages.clickOntheFirstPage();
    await this.pages.takeScreenshot('clicking-first-page');
});

When('I click on Settings button in the page selected', async function () {
    await this.pages.clickOnSettingsButton();
    await this.pages.takeScreenshot('clicking-settings-button-page');
});

When('I scroll to the bottom of the settings menu in the page selected', async function () {
    const deleteButton = await this.pages.getDeleteButton()
    await deleteButton.scrollIntoView();
    await this.pages.takeScreenshot('scrolling-to-botton-page');
});

When('I click on the delete button in the page selected', async function () {
    const deleteButton = await this.pages.getDeleteButton()
    await deleteButton.click();
    await this.pages.takeScreenshot('clicking-delete-button-page');
});

When('I click on the delete button confirmation in the page selected', async function () {
    const deleteButton = await this.pages.getDeleteButtonConfirmation()
    await deleteButton.click();
    await this.pages.takeScreenshot('confirming-delete-button-page');
});

Then('I should be redirected to Pages page', async function () {
    await this.pages.checkPagesPage();
    await this.pages.takeScreenshot('redirection-pages-page');
});