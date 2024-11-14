const { When, Then } = require('@cucumber/cucumber');

When('I navigate to the pages page', async function () {
    await this.pages.navigateToPagesPage();
});

When('I click on New Page button', async function () {
    await this.pages.clickOnNewButton();
});

When('I create a new page with title {kraken-string} and description {kraken-string}', async function (title, description) {
    await this.pages.setPageTitleValue(title);
    await this.pages.setPageDescriptionValue(description);
    await this.pages.clickOnPublishButton();
});

When('I click on the button Continue, final review in the new page', async function () {
    await this.pages.clickOnContinueButton();
});

When('I click on the button Publish, right now in the new page', async function () {
    await this.pages.clickOnConfirmButton();
});

Then('I should see the confirmation message in the Pages page', async function () {
    await this.pages.checkConfirmationMessage();
});

When('I click on the first page of the list', async function () {
    await this.pages.clickOntheFirstPage();
});

When('I click on Settings button in the page selected', async function () {
    await this.pages.clickOnSettingsButton();
});

When('I scroll to the bottom of the settings menu in the page selected', async function () {
    const deleteButton = await this.pages.getDeleteButton()
    await deleteButton.scrollIntoView();
});

When('I click on the delete button in the page selected', async function () {
    const deleteButton = await this.pages.getDeleteButton()
    await deleteButton.click();
});

When('I click on the delete button confirmation in the page selected', async function () {
    const deleteButton = await this.pages.getDeleteButtonConfirmation()
    await deleteButton.click();
});

Then('I should be redirected to Pages page', async function () {
    await this.pages.checkPagesPage();
});