function rand(max)
{
    return Math.floor(Math.random() * max) + 1;
}

let number = rand(99);
let guest, min = 1, max = 100;
console.log("Компьютер 1 загадал число " + number);

while (guest != number)
{
    guest = Math.floor((min + max) / 2);
    console.log("Компьютер 2: попробую число " + guest);
    if(guest > number)
    {
        console.log("Компьютер 1: меньше");
        max = guest;
    }
    else if(guest < number)
    {
        console.log("Компьютер 1: больше");
        min = guest;
    }
    else
    {
        console.log("Компьютер 1: ты угадал!");
    }
}