
import LoginPage from '../page_objects/login-page';
import PostsPage from '../page_objects/posts-page';
import { faker } from '@faker-js/faker';
describe('Given I am logged into Ghost', function() {
  const postsPage = new PostsPage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.login();  // "Given I am logged into Ghost"
  });

  it('EP-05 Create a new post with title and description', function() {
    // When I navigate to the posts page
    postsPage.navigateToPosts();
    // And I click the new post button
    postsPage.clickNewPostButton();
    // And I create a new post with title and description
    const randomTitle = faker.lorem.sentence();
    const randomDescription = faker.lorem.paragraph();
    postsPage.fillPostDetails(randomTitle, randomDescription);
    postsPage.clickPublishButton();
    // And I click on the button Continue, final review
    postsPage.clickContinuePublish();
    // And I click on the button Publish post, right now
    postsPage.clickConfirmPublish();
    // Then I should see the confirmation message
    postsPage.verifyPostExists(randomTitle);
  });

  it('EP-06 Delete a post', function() {
    // When I navigate to the posts page
    postsPage.navigateToPosts();
    // And I click on the first post of the list
    postsPage.clickFirstPost();
    // And I click on Settings button
    postsPage.clickSettingsButton();    
    // And I click on the delete button
    postsPage.clickDeleteButton();
    // And I click on the delete button confirmation
    postsPage.clickConfirmDeleteButton();
    // Then I should be redirected to Posts page
    postsPage.verifyRedirectionToPostsPage();
   
  });
});