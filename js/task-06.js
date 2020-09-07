

let input = " ";
const numbers = [];
let total = 0;

while (input) {
  input = prompt('Введите число');
  // console.log(input);
  if (input == null) {
    alert('Отменено пользователем');
    // console.log(input);
    continue
  } else{
    input = Number(input);
    if (!isNaN(input)) {
      numbers.push(input);
      
    }
  }
}

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}


console.log(numbers);
console.log(total);