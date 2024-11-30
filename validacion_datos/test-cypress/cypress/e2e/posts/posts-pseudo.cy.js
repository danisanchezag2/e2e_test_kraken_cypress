import PostsPage from '../page_objects/posts-page';
import { signIn } from '../../support/utils';
import { generateRandomPosts, generateMalformatedYoutubeUrl, generateYoutubeUrl, generateSpotifyUrl, generateMalformatedSpotifyUrl } from '../../data/data-post-page';

describe('Pseudo Data Generated Tests', () => {
    const postsPage = new PostsPage();
    beforeEach(() => {
        postsPage.signIn();
    });

  it('should create multiple posts with pseudo data title and content', () => {
    const posts = generateRandomPosts(3); // Generate 3 random posts

    posts.forEach((post, index) => {
      // When I navigate to the posts page
      postsPage.navigateToPosts();

      // And I click the new post button
      postsPage.clickNewPostButton();

      // And I create a new post with title and description
      postsPage.fillPostDetails(post.title, post.content);
      postsPage.clickPublishButton();

      // And I click on the button Continue, final review
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    });
  });

  it('should create multiple posts with pseudo data title, content and image', () => {
    const posts = generateRandomPosts(3); // Generate 3 random posts

    posts.forEach((post, index) => {
      // When I navigate to the posts page
      postsPage.navigateToPosts();

      // And I click the new post button
      postsPage.clickNewPostButton();

      // And I create a new post with title and description
      postsPage.fillPostDetails(post.title, post.content);
      // And I add an image to the post
      postsPage.addImage(post.image);
      // And I click the publish button
      postsPage.clickPublishButton();

      // And I click on the button Continue, final review
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    });
  });

  it('should create multiple posts with pseudo data title, content and malformatted YouTube link', () => {
    const posts = generateRandomPosts(1); // Generate 1 random post
    posts.forEach((post, index) => {
      // When I navigate to the posts page
      postsPage.navigateToPosts();

      // And I click the new post button
      postsPage.clickNewPostButton();

      // And I create a new post with title and description
      postsPage.fillPostDetails(post.title, post.content);
      // And I add a malformatted YouTube link to the post
      const youtubeUrl = generateMalformatedYoutubeUrl();
      postsPage.addYoutube(youtubeUrl);
      // Verify error with YouTube link
      postsPage.verifyUrlErrorVisible();
    });

  });

  it('should create multiple posts with pseudo data title, content and YouTube link', () => {
    const posts = generateRandomPosts(2); // Generate 2 random posts

    posts.forEach((post, index) => {
      // When I navigate to the posts page
      postsPage.navigateToPosts();

      // And I click the new post button
      postsPage.clickNewPostButton();

      // And I create a new post with title and description
      postsPage.fillPostDetails(post.title, post.content);
      // And I add a YouTube link to the post
      const youtubeUrl = generateYoutubeUrl();
      postsPage.addYoutube(youtubeUrl.url);
      // And I click the publish button
      postsPage.clickPublishButton();

      // And I click on the button Continue, final review
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    });  
  });

  it('should create multiple posts with pseudo data title, content and Spotify track', () => {
    const posts = generateRandomPosts(2); // Generate 2 random posts

    posts.forEach((post, index) => {
      // When I navigate to the posts page
      postsPage.navigateToPosts();

      // And I click the new post button
      postsPage.clickNewPostButton();

      // And I create a new post with title and description
      postsPage.fillPostDetails(post.title, post.content);
      // And I add a Spotify link to the post
      const spotifyUrl = generateSpotifyUrl();
      postsPage.addSpotify(spotifyUrl.url);
      // And I click the publish button
      postsPage.clickPublishButton();

      // And I click on the button Continue, final review
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    });  
  });

  it('should create multiple posts with pseudo data title, content and malformatted Spotify track', () => {
    const posts = generateRandomPosts(1); // Generate 1 random post
    posts.forEach((post, index) => {
      // When I navigate to the posts page
      postsPage.navigateToPosts();

      // And I click the new post button
      postsPage.clickNewPostButton();

      // And I create a new post with title and description
      postsPage.fillPostDetails(post.title, post.content);
      // And I add a malformatted Spotify link to the post
      const spotifyUrl = generateMalformatedSpotifyUrl();
      postsPage.addSpotify(spotifyUrl.url);
      // Verify error with Spotify link
      postsPage.verifyUrlErrorVisible();
    });

  });

  it('should create multiple posts with pseudo data title, content, YouTube track and Spotify track', () => {
    const posts = generateRandomPosts(2); // Generate 2 random posts

    posts.forEach((post, index) => {
      // When I navigate to the posts page
      postsPage.navigateToPosts();

      // And I click the new post button
      postsPage.clickNewPostButton();

      // And I create a new post with title and description
      postsPage.fillPostDetails(post.title, post.content);
      // And I add YouTube and Spotify links to the post
      const spotifyUrl = generateSpotifyUrl();
      const youtubeUrl = generateYoutubeUrl();
      postsPage.addYoutubeAndSpotifyUrls(youtubeUrl.url, spotifyUrl.url);
      // And I click the publish button
      postsPage.clickPublishButton();

      // And I click on the button Continue, final review
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    }); 

  });

});
