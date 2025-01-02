const numbers = [3, 6, 1, 4, 7, 3, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log("Sorted numbers:", numbers);
