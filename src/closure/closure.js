/* const moneyBox = (coins) => {

    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Moneybox: $${saveCoins}`);

}

moneyBox(5)
moneyBox(15) */


const moneyBox2 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
} 

let myMoneyBox = moneyBox2();

myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)