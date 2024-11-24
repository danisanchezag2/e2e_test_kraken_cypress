import { tagsDataSet, tagsDataSetMoreThan500, tags500CharactersDataSet } from '../../data/data-tags-page';
import TagsPage from '../page_objects/tags-page';
import { faker } from '@faker-js/faker';

describe('Tags pseudo Data Generated Tests', () => {
    const tagsPage = new TagsPage();
    beforeEach(() => {
        tagsPage.signIn();
    });

    it('Create a new tag with name and description with less than 500 characters', function() {
        tagsDataSet.forEach((tag, index) => {
            const tagName =  tag.name;
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
        );
      });
    

      it('Create a new tag with name and description with 500 characters', function() {
        tags500CharactersDataSet.forEach((tag, index) => {
            const tagName =  faker.name.firstName();
            const tagDescription = tag.description;
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
      );
      });

      it('Create a new tag with name and description with more than 500 characters', function() {
        tagsDataSetMoreThan500.forEach((tag, index) => {
            const tagName =  tag.name;
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
        });
      });
});
