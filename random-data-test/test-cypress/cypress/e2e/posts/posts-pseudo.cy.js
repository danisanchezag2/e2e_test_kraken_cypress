import PostsPage from '../page_objects/posts-page';
import { signIn } from '../../support/utils';
import { generateRandomPosts, generateMalformatedYoutubeUrl, generateYoutubeUrl, generateSpotifyUrl, generateMalformatedSpotifyUrl } from '../../data/data-post-page';

describe('Pseudo Data Generated Tests', () => {
    const postsPage = new PostsPage();
    beforeEach(() => {
        postsPage.signIn();
    });

  it('should create multiple posts with pseudo data title and content', () => {
    const posts = generateRandomPosts(3); // Generar 3 posts aleatorios

    posts.forEach((post, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(post.title, post.content);
      postsPage.clickPublishButton();

      // Hacer clic en el botón Continuar, revisión final
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    });
  });

  it('should create multiple posts with pseudo data title,content and image', () => {
    const posts = generateRandomPosts(3); // Generar 3 posts aleatorios

    posts.forEach((post, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(post.title, post.content);
      // Añadir imagen al post
      postsPage.addImage(post.image);
      // Hacer clic en el botón de publicar
      postsPage.clickPublishButton();

      // Hacer clic en el botón Continuar, revisión final
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    });
  });

  it('should create multiple posts with pseudo data title,content and youtube link malformatted', () => {
    const posts = generateRandomPosts(1); // Generar un post aleatorio
    posts.forEach((post, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(post.title, post.content);
      // Añadir youtube malformado al post
      const youtubeUrl = generateMalformatedYoutubeUrl();
      postsPage.addYoutube(youtubeUrl);
      // Verificar error con link de youtube
      postsPage.verifyUrlErrorVisible();
    });

  });

  it('should create multiple posts with pseudo data title,content and youtube link', () => {
    const posts = generateRandomPosts(2); // Generar 2 posts aleatorios

    posts.forEach((post, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(post.title, post.content);
      // Añadir imagen al post
      const youtubeUrl = generateYoutubeUrl();
      postsPage.addYoutube(youtubeUrl.url);
      // Hacer clic en el botón de publicar
      postsPage.clickPublishButton();

      // Hacer clic en el botón Continuar, revisión final
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    });  
  });

  it('should create multiple posts with pseudo data title,content and spotify track', () => {
    const posts = generateRandomPosts(2); // Generar 2 posts aleatorios

    posts.forEach((post, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(post.title, post.content);
      // Añadir spotifyUrl
      const spotifyUrl = generateSpotifyUrl();
      postsPage.addSpotify(spotifyUrl.url);
      // Hacer clic en el botón de publicar
      postsPage.clickPublishButton();

      // Hacer clic en el botón Continuar, revisión final
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    });  
  });

  it('should create multiple posts with pseudo data title,content and malformatted spotify track', () => {
    const posts = generateRandomPosts(1); // Generar 5 posts aleatorios
    posts.forEach((post, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(post.title, post.content);
      // Añadir spotify malformado al post
      const spotifyUrl = generateMalformatedSpotifyUrl();
      postsPage.addSpotify(spotifyUrl.url);
      // Verificar error con link de youtube
      postsPage.verifyUrlErrorVisible();
    });

  });

  it('should create multiple posts with pseudo data title,content, youtube track and spotify track', () => {
    const posts = generateRandomPosts(2); // Generar 2 posts aleatorios

    posts.forEach((post, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(post.title, post.content);
      // Añadir spotifyUrl
      const spotifyUrl = generateSpotifyUrl();
      const youtubeUrl = generateYoutubeUrl();
      // Añadir youtube y spotify al post
      postsPage.addYoutubeAndSpotifyUrls(youtubeUrl.url, spotifyUrl.url);
      // Hacer clic en el botón de publicar
      postsPage.clickPublishButton();

      // Hacer clic en el botón Continuar, revisión final
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    }); 

  });

});
