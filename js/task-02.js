const calculateEngravingPrice = function(message, pricePerWord) {
  let newCalculateEngravingPrice = message.split(' ');
  // console.log(newCalculateEngravingPrice);
  let c = newCalculateEngravingPrice.length;
  // console.log(c);
  let d = c * pricePerWord;
  // console.log(d);
  return d;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120