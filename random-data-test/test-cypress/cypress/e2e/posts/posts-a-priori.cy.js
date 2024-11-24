import PostsPage from '../page_objects/posts-page';
import { signIn } from '../../support/utils';
import { postsFormDataSet, malformattedYoutubeUrlsDataSet, youtubeDataSet, spotifyDataSet, malformattedSpotifyDataSet, postsDataSet } from '../../data/data-post-page';

describe('A priori Data Generated Tests', () => {
    const postsPage = new PostsPage();
    beforeEach(() => {
        postsPage.signIn();
    });

  it('should create multiple posts with a priori data title and content', () => {

    postsFormDataSet.forEach((post, index) => {
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

  it('should create multiple posts with a priori data title,content and image', () => {
    postsFormDataSet.forEach((post, index) => {
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

  it('should create multiple posts with a priori youtube link malformatted', () => {
    malformattedYoutubeUrlsDataSet.forEach((youtubeUrl, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(`Post for: ${youtubeUrl}`, `Description for ${youtubeUrl}`);
      // Añadir youtube malformado al post
      postsPage.addYoutube(youtubeUrl);
      // Verificar error con link de youtube
      postsPage.verifyUrlErrorVisible();
    });

  });

  it('should create multiple posts with a priori data title,content and youtube link', () => {
    youtubeDataSet.forEach((youtubeUrl, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      var postTitle = `Post for: ${youtubeUrl.title}`;
      postsPage.fillPostDetails(postTitle, `Description for ${youtubeUrl.title}`);
      // Añadir imagen al post
      postsPage.addYoutube(youtubeUrl.url);
      // Hacer clic en el botón de publicar
      postsPage.clickPublishButton();

      // Hacer clic en el botón Continuar, revisión final
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(postTitle);
    });  
  });

    it('should create multiple posts with a priori data title,content and spotify track', () => {
+
      spotifyDataSet.forEach((spotifyUrl, index) => {
        // Navegar a la página de posts
        postsPage.navigateToPosts();

        // Hacer clic en el botón de nuevo post
        postsPage.clickNewPostButton();

        // Crear un nuevo post con título y descripción
        var postTitle = `Post for: ${spotifyUrl.title}`;
        postsPage.fillPostDetails(postTitle, `Description for ${spotifyUrl.title}`);
        // Añadir spotifyUrl
        postsPage.addSpotify(spotifyUrl.url);
        // Hacer clic en el botón de publicar
        postsPage.clickPublishButton();

        // Hacer clic en el botón Continuar, revisión final
        postsPage.clickContinuePublish();
        postsPage.clickConfirmPublish();
        postsPage.verifyPostExists(postTitle);
      });  
    });

  it('should create multiple posts with a priori data title,content and malformatted spotify track', () => {
    malformattedSpotifyDataSet.forEach((spotifyTrack, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      var spotifyTitle = `Post for: ${spotifyTrack.title}`;
      postsPage.fillPostDetails(spotifyTitle, spotifyTrack.title);
      // Añadir spotify malformado al post
      postsPage.addSpotify(spotifyTrack.url);
      // Verificar error con link de youtube
      postsPage.verifyUrlErrorVisible();
    });

  });

  it('should create multiple posts with a priori data title,content, youtube track and spotify track', () => {

    postsDataSet.forEach((post, index) => {
      // Navegar a la página de posts
      postsPage.navigateToPosts();

      // Hacer clic en el botón de nuevo post
      postsPage.clickNewPostButton();

      // Crear un nuevo post con título y descripción
      postsPage.fillPostDetails(post.title, post.content);
      // Añadir youtube y spotify al post
      postsPage.addYoutubeAndSpotifyUrls(post.youtubeUrl, post.spotifyUrl);
      // Hacer clic en el botón de publicar
      postsPage.clickPublishButton();

      // Hacer clic en el botón Continuar, revisión final
      postsPage.clickContinuePublish();
      postsPage.clickConfirmPublish();
      postsPage.verifyPostExists(post.title);
    }); 

   });

});
