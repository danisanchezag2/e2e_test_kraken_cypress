
import { faker } from '@faker-js/faker';
import PagesPage from '../page_objects/pages-page';
import LoginPage from '../page_objects/login-page';
describe('Given I am logged into Ghost', function() {
  const pagesPage = new PagesPage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.login();  // "Given I am logged into Ghost"
  });

  it('EP-09 Create a new page', function() {
    const randomTitle = faker.lorem.sentence();
    const randomDescription = faker.lorem.paragraph();
    // When I navigate to the pages page
    pagesPage.navigateToPages();
    // And I click the new page button
    pagesPage.clickNewPageButton();
    // And I create a new page with title and description
    pagesPage.fillPageTitleAndDescription(randomTitle, randomDescription);
    // And I click the publish button
    pagesPage.clickPublishButton();
    // And I click on the button Continue, final review in the new page
    pagesPage.clickContinueButton();
    // And I click on the button Publish, right now in the new page
    pagesPage.clickPublishPageButton();
    // Then  I should see the confirmation message in the Pages page
    pagesPage.verifyPageExists(randomTitle);
  });

  it('EP-10 Delete a page', function() {
    // When I navigate to the pages page
    pagesPage.navigateToPages();
    // And I click the first page of the list
    pagesPage.clickFirstPage();
    // And I click on Settings button in the page selected
    pagesPage.clickSettingsButton();
    // And I click on the button Delete
    pagesPage.clickDeleteButton();
    // And I click on the delete button confirmation in the page selected
    pagesPage.clickConfirmDeleteButton();
    // Then I should be redirected to Pages page
    pagesPage.verifyRedirectionToPagesPage();
  });
});