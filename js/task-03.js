// const findLongestWord = function(string) {
//   let arrayWord = string.split(' ');
//   let longAarrayWord = arrayWord[0];
//   let wordLength = arrayWord[0].length;
//   console.log(arrayWord);
//   for(let i = 1; i < arrayWord.length; i++){
//     // console.log(arrayWord[i]);
//     // console.log(arrayWord[i].length);
//     if(wordLength < arrayWord[i].length){
//       wordLength = arrayWord[i].length
//       // console.log(wordLength);
//       longAarrayWord = arrayWord[i];
//       // console.log(longAarrayWord);
//     }
//   }
//   return longAarrayWord;

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'




// ====================================

const findLongestWord = function(string) {
  let arrayWord = string.split(' ');
  let lognestWord = "";

  for(let word of arrayWord){
    if(word.length > lognestWord.length){
      lognestWord = word;
    }
  }
  return lognestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'