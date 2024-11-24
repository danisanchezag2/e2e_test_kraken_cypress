const { screenshot } = require('../../support/utils');
const { PagesPage } = require('../page_objects/pages-page');
import { faker } from '@faker-js/faker';

describe('Pages - Random', function() {
    const page = new PagesPage();

    beforeEach(() => {
        page.signIn();
    });
    
    it('Create a new page', function() {
        for (let index = 0; index < 2; index++) {
            const newTitle = faker.lorem.words(5);
            const newDescription = faker.lorem.words(10).repeat(1000).substring(0, 1000);

            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(newTitle, newDescription);
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(newTitle);
        }
    });
    
    it('Create a new page with an unsplash image', function() {
        for (let index = 0; index < 2; index++) {
            const newTitle = faker.lorem.words(5);
            const newDescription = faker.lorem.words(10).repeat(1000).substring(0, 1000);

            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(newTitle, newDescription);
            page.clickOnFeatureUnsplashImage();
            page.selectOneUnsplashImg();
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(newTitle);

        }
    });

    it('Create a new page with an image', function() {
        for (let index = 0; index < 2; index++) {
            const newTitle = faker.lorem.words(5);
            const newDescription = faker.lorem.words(10).repeat(1000).substring(0, 1000);

            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(newTitle, newDescription);
            page.addImage('img-random.jpg');
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(newTitle);
        }
    });

    it('Create a new page with youtube video', function() {
        for (let index = 0; index < 2; index++) {
            const newTitle = faker.lorem.words(5);
            const newDescription = faker.lorem.words(10).repeat(1000).substring(0, 1000);
            const newYoutube = faker.internet.url();

            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(newTitle, newDescription);
            page.addYoutube(newYoutube);
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(newTitle);
        }
    });

    it('Create a new page with long description (more than 10000 chars) and youtube video', function() {
        for (let index = 0; index < 2; index++) {
            const newTitle = faker.lorem.words(5);
            const newDescription = faker.lorem.words(10).repeat(1000).substring(0, 10000);
            const newYoutube = faker.internet.url();

            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(newTitle, newDescription);
            page.addYoutube(newYoutube);
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(newTitle);
        }
    });

    it('Edit an existing page', function() {
        for (let index = 0; index < 1; index++) {
            const newTitle = faker.lorem.words(5);
            const newDescription = faker.lorem.words(10).repeat(1000).substring(0, 1000);

            page.navigateToPages();
            page.clickFirstPage();
            page.fillPageTitleAndDescription(newTitle, newDescription);
            page.publishUpdate();
            page.verifyGreenNotification();
        }
    });

    it('Edit an existing page with no title', function() {
        for (let index = 0; index < 1; index++) {
            const newTitle = faker.lorem.words(5);
            const newDescription = faker.lorem.words(10).repeat(1000).substring(0, 1000);

            page.navigateToPages();
            page.clickFirstPage();
            page.fillPageTitleAndDescription(newTitle, newDescription);
            page.clearTitle();
            page.publishUpdate();
            page.verifyGreenNotification();
        }
    });
    
})

