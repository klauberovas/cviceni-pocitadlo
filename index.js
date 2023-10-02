// fce která vybere elm s číslem a prodlouží ho na dva znaky přidáním O
const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.textContent = String(number).padStart(2, '0');
};

let value = 0;
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

// Přičítá se k value a volá se fce updateCounter s novou hodnotou value
btnUp.addEventListener('click', () => {
  if (value < 99) {
    value += 1;
    updateCounter(value);
  }
});

//Když mačkám down odečítá se od value a volá se fce updateCounter  s novou hodnotou value
btnDown.addEventListener('click', () => {
  if (value > 0) {
    value -= 1;
    updateCounter(value);
  }
});
//začneme od čísla v let value = 0, kdyby se nevolala začneme od čísla 15 zadaného v HTML a nejde mačkat dolů, protože počítáme s hodnotou nula a ta není > 0
updateCounter(value);
