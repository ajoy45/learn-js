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