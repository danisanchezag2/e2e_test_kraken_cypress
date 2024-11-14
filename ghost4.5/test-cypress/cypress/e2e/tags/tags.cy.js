import TagsPage from '../page_objects/tags-page';
import LoginPage from '../page_objects/login-page';
import { faker } from '@faker-js/faker';

describe('I am logged into Ghost', function() {
  const tagsPage = new TagsPage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.login();  // "Given I am logged into Ghost"
  });

  it('Crear un nuevo tag desde el panel de Tags', function() {
    const randomTagName = faker.person.lastName();
    const randomTagDescription = faker.lorem.paragraph(1);

    // When I go to the tags section
    tagsPage.navigateToTags();

    // And I click on the new tag button
    tagsPage.clickNewTagButton();

    // And I fill the tag name and description
    tagsPage.fillTagNameAndDescription(randomTagName, randomTagDescription);

    // And I click on the save button
    tagsPage.saveTag();

    // And I come back to the tags page
    tagsPage.navigateToTags();

    // Then I should see the new tag in the list
    tagsPage.verifyTagExists(randomTagName);
  });

  it('Create a new tag with more than 500 chars in name and description inputs', function() {
    const randomTagName = faker.person.firstName();
    const longTagDescription = faker.string.alpha(508);

    // When I go to the tags section
    tagsPage.navigateToTags();

    // And I click on the new tag button
    tagsPage.clickNewTagButton();

    // And I fill the tag name and description with more than 500 chars
    tagsPage.fillTagNameAndDescription(randomTagName, longTagDescription);

    // And I click on the save button
    tagsPage.saveTag();

    // Then I should see an error message indicating the input exceeds the character limit
    tagsPage.verifyErrorMessage('Description cannot be longer than 500 characters.');
  });
});