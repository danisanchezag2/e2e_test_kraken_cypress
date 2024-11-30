import PostsPage from '../page_objects/posts-page';
import { faker } from '@faker-js/faker';
import { generateYoutubeUrl, generateSpotifyUrl } from '../../data/data-post-page';

describe('Random Data Generated Tests', () => {
    const postsPage = new PostsPage();
    beforeEach(() => {
        postsPage.signIn();
    });

  it('should create multiple posts with random data title and content', () => {
    for (let index = 0; index < 2; index++) {
      const randomTitle = faker.lorem.sentence();
      const randomDescription = faker.lorem.paragraph();
      // When I navigate to the posts page
      postsPage.navigateToPosts();

      // And I click the new post button
      postsPage.clickNewPostButton();

      // And I create a new post with title and description
      postsPage.fillPostDetails(randomTitle, randomDescription);
      postsPage.clickPublishButton();

      // And I click on the button Continue, final review
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      
      // Then I should see the new post in the list
      postsPage.verifyPostExists(randomTitle);
    }
  });

  it('should create multiple posts with random data title, content and image', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomImg = faker.image.avatar();
        // When I navigate to the posts page
        postsPage.navigateToPosts();

        // And I click the new post button
        postsPage.clickNewPostButton();

        // And I create a new post with title and description
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // And I add an image to the post
        postsPage.addImage(randomImg);
        postsPage.clickPublishButton();

        // And I click on the button Continue, final review
        postsPage.clickContinuePublish();
        postsPage.clickConfirmPublish();
        
        // Then I should see the new post in the list
        postsPage.verifyPostExists(randomTitle);
    }
  });

  it('should create multiple posts with random data title, content and malformatted YouTube link', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomYoutube = `https://www.youtube.com/watch?v=${faker.word.adjective()}`;
        // When I navigate to the posts page
        postsPage.navigateToPosts();

        // And I click the new post button
        postsPage.clickNewPostButton();

        // And I create a new post with title and description
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // And I add a YouTube link to the post
        postsPage.addYoutube(randomYoutube);
        
        // Then I should see an error with the YouTube link
        postsPage.verifyUrlErrorVisible();
    }
  });

  it('should create multiple posts with random data title, content and YouTube link', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomYoutube = generateYoutubeUrl();
        // When I navigate to the posts page
        postsPage.navigateToPosts();

        // And I click the new post button
        postsPage.clickNewPostButton();

        // And I create a new post with title and description
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // And I add a YouTube link to the post
        postsPage.addYoutube(randomYoutube.url);
        // And I click the publish button
        postsPage.clickPublishButton();

        // And I click on the button Continue, final review
        postsPage.clickContinuePublish();
        postsPage.clickConfirmPublish();
        
        // Then I should see the new post in the list
        postsPage.verifyPostExists(randomTitle);
    }
  });

  it('should create multiple posts with random data title, content and Spotify track', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomSpotify = generateSpotifyUrl();
        // When I navigate to the posts page
        postsPage.navigateToPosts();

        // And I click the new post button
        postsPage.clickNewPostButton();

        // And I create a new post with title and description
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // And I add a Spotify link to the post
        postsPage.addSpotify(randomSpotify.url);
        // And I click the publish button
        postsPage.clickPublishButton();

        // And I click on the button Continue, final review
        postsPage.clickContinuePublish();
        postsPage.clickConfirmPublish();
        
        // Then I should see the new post in the list
        postsPage.verifyPostExists(randomTitle);
    }
  });

  it('should create multiple posts with random data title, content and malformatted Spotify track', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomSpotify = `https://open.spotify.com/track/${faker.word.adjective()}`;
        // When I navigate to the posts page
        postsPage.navigateToPosts();

        // And I click the new post button
        postsPage.clickNewPostButton();

        // And I create a new post with title and description
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // And I add a Spotify link to the post
        postsPage.addSpotify(randomSpotify);
        
        // Then I should see an error with the Spotify link
        postsPage.verifyUrlErrorVisible();
    }
  });

  it('should create multiple posts with random data title, content, YouTube track and Spotify track', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomSpotify = generateSpotifyUrl();
        const randomYoutube = generateYoutubeUrl();
        // When I navigate to the posts page
        postsPage.navigateToPosts();

        // And I click the new post button
        postsPage.clickNewPostButton();

        // And I create a new post with title and description
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // And I add YouTube and Spotify links to the post
        postsPage.addYoutubeAndSpotifyUrls(randomYoutube.url, randomSpotify.url);
        // And I click the publish button
        postsPage.clickPublishButton();

        // And I click on the button Continue, final review
        postsPage.clickContinuePublish();
        postsPage.clickConfirmPublish();
        
        // Then I should see the new post in the list
        postsPage.verifyPostExists(randomTitle);
    }
  });

});