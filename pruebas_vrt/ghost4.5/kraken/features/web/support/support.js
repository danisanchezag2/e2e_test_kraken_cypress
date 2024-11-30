const { setWorldConstructor, setDefaultTimeout, World } = require('@cucumber/cucumber');
const LoginPage = require('../page_objects/login_page');
const MembersPage = require('../page_objects/members_page');
const PostsPage = require('../page_objects/posts_page');
const PagesPage = require('../page_objects/pages_page');

class KrakenWorld {
  constructor(input) {
    let params = input.parameters;
    this.userId = params.id;
    this.device = params.device || {};
    this.testScenarioId = params.testScenarioId;
    this.attach = input.attach;
  }

  async init() {
    this.login = new LoginPage(this.driver, this.currentScenario);
    this.members = new MembersPage(this.driver, this.currentScenario);
    this.posts = new PostsPage(this.driver, this.currentScenario);
    this.pages = new PagesPage(this.driver, this.currentScenario);
  }
}

setWorldConstructor(KrakenWorld);
setDefaultTimeout(30 * 1000);
