class AbstractPage {
    constructor(driver) {
        this.driver = driver;
        this.baseUrl = "http://localhost:2368/ghost/";
    }
}
  
module.exports = AbstractPage;