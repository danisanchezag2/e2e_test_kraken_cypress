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
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(randomTitle, randomDescription);
      postsPage.clickPublishButton();

      // Hacer clic en el botón Continuar, revisión final
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(randomTitle);
    }
  });

  it('should create multiple posts with random data title,content and image', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomImg = faker.image.avatar();
        // Navegar a la página de posts
        postsPage.navigateToPosts();

        // Hacer clic en el botón de nuevo post
        postsPage.clickNewPostButton();

        // Crear un nuevo post con título y descripción
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // Añadir imagen al post
        postsPage.addImage(randomImg);
        postsPage.clickPublishButton();

        // Hacer clic en el botón Continuar, revisión final
        postsPage.clickContinuePublish();
        postsPage.clickConfirmPublish();
        postsPage.verifyPostExists(randomTitle);
    }
  });

  it('should create multiple posts with random data title,content and youtube link malformatted', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomYoutube = `https://www.youtube.com/watch?v=${faker.word.adjective()}`;
        // Navegar a la página de posts
        postsPage.navigateToPosts();

        // Hacer clic en el botón de nuevo post
        postsPage.clickNewPostButton();

        // Crear un nuevo post con título y descripción
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // Añadir youtube link al post
        postsPage.addYoutube(randomYoutube);
        // Verificar error con link de youtube
        postsPage.verifyUrlErrorVisible();
    }
  });

  it('should create multiple posts with random data title,content and youtube link', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomYoutube = generateYoutubeUrl();
        // Navegar a la página de posts
        postsPage.navigateToPosts();

        // Hacer clic en el botón de nuevo post
        postsPage.clickNewPostButton();

        // Crear un nuevo post con título y descripción
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // Añadir youtube link al post
        postsPage.addYoutube(randomYoutube.url);
        // Hacer clic en el botón de publicar
        postsPage.clickPublishButton();

        // Hacer clic en el botón Continuar, revisión final
        postsPage.clickContinuePublish();
        postsPage.clickConfirmPublish();
        postsPage.verifyPostExists(postTitle);
    }
  });

  it('should create multiple posts with random data title,content and spotify track', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomSpotify = generateSpotifyUrl();
        // Navegar a la página de posts
        postsPage.navigateToPosts();

        // Hacer clic en el botón de nuevo post
        postsPage.clickNewPostButton();

        // Crear un nuevo post con título y descripción
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // Añadir spotify link al post
        postsPage.addSpotify(randomSpotify.url);
        // Hacer clic en el botón de publicar
        postsPage.clickPublishButton();

        // Hacer clic en el botón Continuar, revisión final
        postsPage.clickContinuePublish();
        postsPage.clickConfirmPublish();
        postsPage.verifyPostExists(postTitle);
    }
  });

  it('should create multiple posts with random data title,content and malformatted spotify track', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomSpotify = `https://open.spotify.com/track/${faker.word.adjective()}`;
        // Navegar a la página de posts
        postsPage.navigateToPosts();

        // Hacer clic en el botón de nuevo post
        postsPage.clickNewPostButton();

        // Crear un nuevo post con título y descripción
        postsPage.fillPostDetails(randomTitle, randomDescription);
        // Añadir spotify link al post
        postsPage.addSpotify(randomSpotify);
        // Verificar error con link de youtube
        postsPage.verifyUrlErrorVisible();
    }
  });

  it('should create multiple posts with random data title,content, youtube track and spotify track', () => {
    for (let index = 0; index < 2; index++) {
        const randomTitle = faker.lorem.sentence();
        const randomDescription = faker.lorem.paragraph();
        const randomSpotify = generateSpotifyUrl();
        const randomYoutube = generateYoutubeUrl();
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(randomTitle, randomDescription);
      // Añadir spotifyUrl
      const spotifyUrl = generateSpotifyUrl();
      const youtubeUrl = generateYoutubeUrl();
      // Añadir youtube y spotify al post
      postsPage.addYoutubeAndSpotifyUrls(randomYoutube.url, randomSpotify.url);
      // Hacer clic en el botón de publicar
      postsPage.clickPublishButton();

      // Hacer clic en el botón Continuar, revisión final
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(randomTitle);
    }
  });

});
