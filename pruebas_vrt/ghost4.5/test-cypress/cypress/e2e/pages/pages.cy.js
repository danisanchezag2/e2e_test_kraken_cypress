
import { faker } from '@faker-js/faker';
import PagesPage from '../page_objects/pages-page';
import LoginPage from '../page_objects/login-page';
import { screenshot } from '../../support/utils';

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
    screenshot('Pages','EP-09 Create a new page', 'When I navigate to the pages page');
    // And I click the new page button
    pagesPage.clickNewPageButton();
    screenshot('Pages','EP-09 Create a new page', 'And I click the new page button');
    // And I create a new page with title and description
    pagesPage.fillPageTitleAndDescription(randomTitle, randomDescription);
    // And I click the publish button
    pagesPage.clickPublishButton();
    screenshot('Pages','EP-09 Create a new page', 'And I click the publish button');
    // And I click on the button Continue, final review in the new page
    pagesPage.clickContinueButton();
    screenshot('Pages','EP-09 Create a new page', 'And I click on the button Continue, final review in the new page');
    // And I click on the button Publish, right now in the new page
    // Then  I should see the confirmation message in the Pages page
    pagesPage.verifyPageExists(randomTitle);
  });

  it('EP-10 Delete a page', function() {
    // When I navigate to the pages page
    pagesPage.navigateToPages();
    screenshot('Pages','EP-10 Delete a page', 'When I navigate to the pages page');
    // And I click the first page of the list
    pagesPage.clickFirstPage();
    screenshot('Pages','EP-10 Delete a page', 'And I click the first page of the list');
    // And I click on Settings button in the page selected
    pagesPage.clickSettingsButton();
    screenshot('Pages','EP-10 Delete a page', 'And I click on Settings button in the page selected');
    // And I click on the button Delete
    pagesPage.clickDeleteButton();
    screenshot('Pages','EP-10 Delete a page', 'And I click on the button Delete');
    // And I click on the delete button confirmation in the page selected
    pagesPage.clickConfirmDeleteButton();
    screenshot('Pages','EP-10 Delete a page', 'And I click on the delete button confirmation in the page selected');
    // Then I should be redirected to Pages page
    pagesPage.verifyRedirectionToPagesPage();
  });
});