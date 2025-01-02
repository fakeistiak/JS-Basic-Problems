var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const unique = [];

for (let i = 0; i < numbers.length; i++)
    {
      let duplicate = false;
      for (let j = 0; j < unique.length; j++)
        {
          if (numbers[i] === unique[j])
            {
              duplicate = true;
              break;
            }
        }
           if (!duplicate)
            {
              unique.push(numbers[i]);
            }
    }

console.log(unique);
