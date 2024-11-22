function signIn() {
  cy.visit('http://localhost:2370/ghost/#/signin');
  cy.wait(1000);
  cy.get('#identification').type("o.torress@uniandes.edu.co");
  cy.wait(2);
  cy.get('#password').type("Control12345.");
  cy.get('#ember5').click();
  cy.wait(2000);
}

function screenshot(feature, scenario, step) {
  cy.screenshot(`${feature} - ${scenario} - ${step}`, { capture: 'fullPage' });
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function mezclarAccionesAleatorio(array) {
  let indiceActual = array.length,
    indiceAleatorio;

  while (indiceActual !== 0) {
    indiceAleatorio = Math.floor(Math.random() * indiceActual);
    indiceActual--;

    [array[indiceActual], array[indiceAleatorio]] = [
      array[indiceAleatorio],
      array[indiceActual],
    ];
  }

  return array;
}
module.exports = {
  signIn,
  screenshot,
  randomIntFromInterval,
  mezclarAccionesAleatorio,
};
  