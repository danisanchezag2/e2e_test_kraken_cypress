const fs = require('fs');

class AbstractPage {
    constructor(driver, currentScenario) {
        this.driver = driver;
        this.currentScenario = currentScenario;
        this.baseUrl = "http://localhost:2371/ghost/";
        this.imgPath = "../kraken-screenshots/";
    }

    async refreshResults() {
        await this.driver.execute(() => location.reload(true));
        await this.driver.pause(2000);
    }

    async takeScreenshot(stepName) {
        const moduleName = this.constructor.name.toLowerCase();
        const scenarioName = this.currentScenario || 'unknown-scenario';
        const fileName = `${scenarioName}||${moduleName}||${stepName}.png`;
        const screenshotPath = `${this.imgPath}/${fileName}`;
        
        if (!fs.existsSync(this.imgPath)) {
            fs.mkdirSync(this.imgPath);
        }

        await this.driver.saveScreenshot(screenshotPath);
    }
}
  
module.exports = AbstractPage;