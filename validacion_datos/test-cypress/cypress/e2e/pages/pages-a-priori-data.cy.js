const { screenshot } = require('../../support/utils');
const { PagesPage } = require('../page_objects/pages-page');

const pageData = require('../../fixtures/pages.json');
const pageDataWithYoutube = require('../../fixtures/pages-with-youtube.json');
const pageDataLongDescription = require('../../fixtures/pages-with-long-desc.json');

describe('Pages - Data A-Priori', function() {
    const page = new PagesPage();

    beforeEach(() => {
        page.signIn();
    });
    
    it('Create a new page', function() {
        pageData.slice(0, 2).forEach((data) => {
            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(data.title, data.description);
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(data.title);
        })
    });
    
    it('Create a new page with an unsplash image', function() {
        pageData.slice(2, 4).forEach((data) => {
            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(data.title, data.description);
            page.clickOnFeatureUnsplashImage();
            page.selectOneUnsplashImg();
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(data.title);
        })
    });

    it('Create a new page with an image', function() {
        pageData.slice(4, 6).forEach((data) => {
            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(data.title, data.description);
            page.addImage(data.image);
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(data.title);
        })
    });

    it('Create a new page with youtube video', function() {
        pageDataWithYoutube.slice(0, 2).forEach((data) => {
            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(data.title, data.description);
            page.addYoutube(data.youtube);
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(data.title);
        })
    });

    it('Create a new page with long description (more than 10000 chars) and youtube video', function() {
        pageDataLongDescription.slice(2, 4).forEach((data) => {
            page.navigateToPages();
            page.clickNewPageButton();
            page.fillPageTitleAndDescription(data.title, data.description);
            page.addYoutube(data.youtube);
            page.clickPublishButton();
            page.clickContinueButton();
            page.clickPublishPageButton();
            page.verifyPageExists(data.title);
        })
    });

    it('Edit an existing page', function() {
        pageData.slice(0, 1).forEach((data) => {
            page.navigateToPages();
            page.clickFirstPage();
            page.fillPageTitleAndDescription(data.title, data.description);
            page.publishUpdate();
            page.verifyGreenNotification();
        })
    });

    it('Edit an existing page with no title', function() {
        pageData.slice(0, 1).forEach((data) => {
            page.navigateToPages();
            page.clickFirstPage();
            page.fillPageTitleAndDescription(data.title, data.description);
            page.clearTitle();
            page.publishUpdate();
            page.verifyGreenNotification();
        })
    });
    
})

