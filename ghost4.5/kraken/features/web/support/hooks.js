const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');

Before(async function() {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  await this.init();
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});