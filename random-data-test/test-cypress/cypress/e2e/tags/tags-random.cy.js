import TagsPage from '../page_objects/tags-page';
import { faker } from '@faker-js/faker';

describe('Tags random Data Generated Tests', () => {
    const tagsPage = new TagsPage();
    beforeEach(() => {
        tagsPage.signIn();
    });

    it('Create a new tag with name and description with less than 500 characters', function() {
        for (let index = 0; index < 2; index++) {
            const tagName = faker.person.firstName();
            const tagDescription = faker.string.alpha(250);
            // When I go to the tags section
            tagsPage.navigateToTags();
        
            // And I click on the new tag button
            tagsPage.clickNewTagButton();
        
            // And I fill the tag name and description
            tagsPage.fillTagNameAndDescription(tagName, tagDescription);
        
            // And I click on the save button
            tagsPage.saveTag();
        
            // And I come back to the tags page
            tagsPage.navigateToTags();
        
            // Then I should see the new tag in the list
            tagsPage.verifyTagExists(tagName);
          }
      });
    

      it('Create a new tag with name and description with 500 characters', function() {
        for (let index = 0; index < 2; index++) {
            const tagName = faker.person.firstName();
            const tagDescription = faker.string.alpha(500);
            // When I go to the tags section
            tagsPage.navigateToTags();
        
            // And I click on the new tag button
            tagsPage.clickNewTagButton();
        
            // And I fill the tag name and description
            tagsPage.fillTagNameAndDescription(tagName, tagDescription);
        
            // And I click on the save button
            tagsPage.saveTag();
        
            // And I come back to the tags page
            tagsPage.navigateToTags();
        
            // Then I should see the new tag in the list
            tagsPage.verifyTagExists(tagName);
          }
      });

      it('Create a new tag with name and description with more than 500 characters', function() {
        for (let index = 0; index < 2; index++) {
            const tagName = faker.person.firstName();
            const tagDescription = faker.string.alpha(501);
            // When I go to the tags section
            tagsPage.navigateToTags();
        
            // And I click on the new tag button
            tagsPage.clickNewTagButton();
        
            // And I fill the tag name and description
            tagsPage.fillTagNameAndDescription(tagName, tagDescription);
        
            // And I click on the save button
            tagsPage.saveTag();
        
            // Then I should see an error message indicating the input exceeds the character limit
            tagsPage.verifyErrorMessage('Description cannot be longer than 500 characters.');
        }
      });
});
