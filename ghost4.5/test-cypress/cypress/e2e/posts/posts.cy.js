
import LoginPage from '../page_objects/login-page';
import PostsPage from '../page_objects/posts-page';
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
    postsPage.fillPostTitleAndDescription(randomTitle, randomDescription);
    // And I click on the button Continue, final review
    postsPage.clickContinueButton();
    // And I click on the button Publish post, right now
    postsPage.clickPublishPostButton();
    // Then I should see the confirmation message
    postsPage.verifyPostPublished();
  });

  it('EP-06 Delete a post', function() {
    // When I navigate to the posts page
    // And I click on the first post of the list
    // And I click on Settings button
    // And I scroll to the bottom of the settings menu
    // And I click on the delete button
    // And I click on the delete button confirmation
    // Then I should be redirected to Posts page
   
  });
});