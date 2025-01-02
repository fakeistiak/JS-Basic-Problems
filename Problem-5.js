const numbers=[]
for(let i=0;i<50;i++)
{
    if(i%3==0 && i%5==0)
    {
        if(i!==0)
        {
            numbers.push(i);
        }
    }
}
console.log(numbers);

