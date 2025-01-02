const payments = [1000, 2000, 3000];
const livingCost = 5400;
if (!(payments instanceof Array) || typeof livingCost !== "number")
    {
       console.log("invalid input");
    }
    else
    {
      var totalIncome = 0;
      for (var i = 0; i < payments.length; i++)
        {
          if (payments[i] >= 3000) totalIncome += payments[i] * 0.8;
          else totalIncome += payments[i];
        }
  const savings = totalIncome - livingCost;
  if (savings >= 0) console.log(savings);
  else console.log("earn more");
}
