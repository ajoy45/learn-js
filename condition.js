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

