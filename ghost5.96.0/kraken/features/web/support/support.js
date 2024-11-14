const { setWorldConstructor, setDefaultTimeout, World } = require('@cucumber/cucumber');
const LoginPage = require('../page_objects/login_page');
const TagsPage = require('../page_objects/tags_page');
const MembersPage = require('../page_objects/members_page');
const PostsPage = require('../page_objects/posts_page');
const PagesPage = require('../page_objects/pages_page');
const StaffPage = require('../page_objects/staff_page');

class KrakenWorld {
  constructor(input) {
    let params = input.parameters;
    this.userId = params.id;
    this.device = params.device || {};
    this.testScenarioId = params.testScenarioId;
    this.attach = input.attach;
  }

  async init() {
    this.login = new LoginPage(this.driver);
    this.tags = new TagsPage(this.driver);
    this.members = new MembersPage(this.driver);
    this.posts = new PostsPage(this.driver);
    this.pages = new PagesPage(this.driver);
    this.staff = new StaffPage(this.driver);
  }
}

setWorldConstructor(KrakenWorld);
setDefaultTimeout(30 * 1000);
