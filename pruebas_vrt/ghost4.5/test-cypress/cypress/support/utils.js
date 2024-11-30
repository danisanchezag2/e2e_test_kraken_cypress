function screenshot(feature, scenario, step) {
    cy.screenshot(`${feature} - ${scenario} - ${step}`, { capture: 'fullPage' });
  }

module.exports = { screenshot };
 