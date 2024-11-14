import TagsPage from '../page_objects/tags-page';
import LoginPage from '../page_objects/login-page';
import { faker } from '@faker-js/faker';
import { screenshot } from '../../support/utils';

describe('I am logged into Ghost', function() {
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.login();  // "Given I am logged into Ghost"
  });

  it('EP-01 Create a new tag with name and description', function() {
    const randomTagName = faker.person.lastName();
    const randomTagDescription = faker.lorem.paragraph(1);

    // When I go to the tags section
    tagsPage.navigateToTags();
    screenshot('Tags','EP-01 Create a new tag with name and description', 'When I go to the tags section');

    // And I click on the new tag button
    tagsPage.clickNewTagButton();
    screenshot('Tags','EP-01 Create a new tag with name and description', 'And I click on the new tag button');

    // And I fill the tag name and description
    tagsPage.fillTagNameAndDescription(randomTagName, randomTagDescription);
    screenshot('Tags','EP-01 Create a new tag with name and description', 'And I fill the tag name and description');

    // And I click on the save button
    tagsPage.saveTag();
    screenshot('Tags','EP-01 Create a new tag with name and description', 'And I click on the save button');

    // And I come back to the tags page
    tagsPage.navigateToTags();

    // Then I should see the new tag in the list
    tagsPage.verifyTagExists(randomTagName);
  });

  it('EP-02 Create a new tag with more than 500 chars in name and description inputs', function() {
    const randomTagName = faker.person.firstName();
    const longTagDescription = faker.string.alpha(508);

    // When I go to the tags section
    tagsPage.navigateToTags();
    screenshot('Tags','EP-02 Create a new tag with more than 500 chars in name and description inputs', 'When I go to the tags section');

    // And I click on the new tag button
    tagsPage.clickNewTagButton();
    screenshot('Tags','EP-02 Create a new tag with more than 500 chars in name and description inputs', 'And I click on the new tag button');

    // And I fill the tag name and description with more than 500 chars
    tagsPage.fillTagNameAndDescription(randomTagName, longTagDescription);

    // And I click on the save button
    tagsPage.saveTag();
    screenshot('Tags','EP-02 Create a new tag with more than 500 chars in name and description inputs', 'And I click on the save button');

    // Then I should see an error message indicating the input exceeds the character limit
    tagsPage.verifyErrorMessage('Description cannot be longer than 500 characters.');
    screenshot('Tags','EP-02 Create a new tag with more than 500 chars in name and description inputs', 'Then I should see an error message indicating the input exceeds the character limit');
  });
});