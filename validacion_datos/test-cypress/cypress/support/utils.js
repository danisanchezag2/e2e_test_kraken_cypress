function screenshot(feature, scenario, step) {
  cy.screenshot(`${feature} - ${scenario} - ${step}`, { capture: 'fullPage' });
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
  screenshot,
  mezclarAccionesAleatorio,
};
  