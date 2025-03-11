// 1.page 83
const price = 4500;
if (price > 3000) {
    const discount = (price / 100) * 5;
    const pay = price - discount;
    console.log(pay);
}
else if (price > 6000) {
    const discount = (price / 100) * 15;
    const pay = price - discount;
    console.log(pay);
}
else {
    console.log(price)
}

2.
const bill = 700;
const age = 95;
if (age < 12) {
    console.log("you get food free");
}
else if (age > 60) {
    const discount = (bill / 100) * 50;
    const pay = bill - discount;
    console.log(pay)
}
else {
    console.log(bill)
}
3.
const bankBalance = 5001;
if (bankBalance < 1000) {
    console.log("deposit koro")
}
else if (bankBalance >= 1000 && bankBalance <= 5000) {
    console.log("enjoy your life")
}
else if (bankBalance > 5000) {
    console.log("biye kor")
}
4.
const marks = 79;
if (marks < 50) {
    console.log("fail")
}
else if (marks >= 50 && marks < 80) {
    console.log("pass")
}
else if (marks >= 80) {
    console.log("A+")
}
5.
const pageNumber = 500;
if (pageNumber < 100) {
    console.log("Small book")
}
else if (pageNumber >= 100 && pageNumber <= 500) {
    console.log("Mid-size-book")
}
else if (pageNumber > 500) {
    console.log("heart-attack-size book")
}
6.
const temperature = 23;
if (temperature < 0) {
    console.log("Ice")
}
else if (temperature >= 0 && temperature <= 20) {
    console.log("Cool Cool")
}
else if (temperature > 20) {
    console.log("Hot")
}
7.
const playerLevel = 53;
if (playerLevel < 10) {
    console.log("novice")
}
else if (playerLevel >= 10 && playerLevel <= 50) {
    console.log("expert")
}
else if (playerLevel > 50) {
    console.log("pro gamer")
}
// page 86
1.
const isInvite = true;
const myPocketMoney = 900;
if (isInvite) {
    if (myPocketMoney > 1000) {
        console.log("i will buy a gift")
    }
    else {
        console.log("i have no money")
    }
}
else {
    console.log("i will remove you from my friend list")
}
2.
const isTakeTea = true;
const isTakeBiscute = false;
if (isTakeTea) {
    if (isTakeBiscute) {
        console.log("tea is not ready")
    }
    else {
        console.log("tea is ready")
    }

}
else {
    console.log("bose bose star jolsa dekho")
}
3.
const isActive = true;
const subscription = "premium"
if (isActive) {
    if (subscription == "premium") {
        console.log("show the premium feature")
    }
    else {
        console.log("show the free version")
    }
}
4.
const isFood = false;
const isFoodApp = true;
if (isFood) {
    console.log("food is becoming hot")
}
else {
    if (isFoodApp) {
        console.log("please give me the food")
    }
    else {
        console.log("today i become empty")
    }
}
5.
const partyMember = 400;
const isgift = true;
if (partyMember > 100) {
    if (isgift) {
        console.log("lets party all night")
    }
    else {
        console.log("i will part only myself")
    }
}
else {
    console.log("today party is off")
}
// page 90
1.
let cashback;
const buy = 4000;
cashback = buy > 3000 ? 50 : 0;
console.log(cashback)
2.
const myAge = 32;
myAge > 15 ? console.log("Teenager") : console.log("child");
3.
let isLoggedIn = true;
isLoggedIn == true ? console.log("welcome back") : console.log("please login");
4.
let carTank = "full";
carTank == "full" ? console.log("ready for long drive") : console.log("fill the tank");
5.
let pass = true;
pass ? console.log("party time") : console.log("next semister party time");
6.
const sunny = false;
if (!sunny) {
    console.log("stay home")
}
7.
const expensive = false;
if (!expensive) {
    console.log("i will buy this item")
}

