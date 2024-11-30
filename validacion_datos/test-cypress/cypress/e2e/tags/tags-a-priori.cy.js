import { tagsDataSet, tagsDataSetMoreThan500, tags500CharactersDataSet } from '../../data/data-tags-page';
import TagsPage from '../page_objects/tags-page';

describe('Tags a priori Data Generated Tests', () => {
    const tagsPage = new TagsPage();
    beforeEach(() => {
        tagsPage.signIn();
    });

    it('Create a new tag with name and description with less than 500 characters', function() {
        tagsDataSet.forEach((tag, index) => {

            // When I go to the tags section
            tagsPage.navigateToTags();
        
            // And I click on the new tag button
            tagsPage.clickNewTagButton();
        
            // And I fill the tag name and description
            tagsPage.fillTagNameAndDescription(tag.name, tag.description);
        
            // And I click on the save button
            tagsPage.saveTag();
        
            // And I come back to the tags page
            tagsPage.navigateToTags();
        
            // Then I should see the new tag in the list
            tagsPage.verifyTagExists(tag.name);
          }
        );
      });
    

      it('Create a new tag with name and description with 500 characters', function() {
        tags500CharactersDataSet.forEach((tag, index) => {

          // When I go to the tags section
          tagsPage.navigateToTags();
      
          // And I click on the new tag button
          tagsPage.clickNewTagButton();
      
          // And I fill the tag name and description
          tagsPage.fillTagNameAndDescription(tag.name, tag.description);
      
          // And I click on the save button
          tagsPage.saveTag();
      
          // And I come back to the tags page
          tagsPage.navigateToTags();
      
          // Then I should see the new tag in the list
          tagsPage.verifyTagExists(tag.name);
        }
      );
      });

      it('Create a new tag with name and description with more than 500 characters', function() {
        tagsDataSetMoreThan500.forEach((tag, index) => {

          // When I go to the tags section
          tagsPage.navigateToTags();
      
          // And I click on the new tag button
          tagsPage.clickNewTagButton();
      
          // And I fill the tag name and description
          tagsPage.fillTagNameAndDescription(tag.name, tag.description);
      
          // And I click on the save button
          tagsPage.saveTag();

          // Then I should see an error message indicating the input exceeds the character limit
          tagsPage.verifyErrorMessage('Description cannot be longer than 500 characters.');
        });
      });
});
