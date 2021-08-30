const amounts = [61.00, 52.25, 112.99, 5.00]; 

const total = 0;

for (let amount of amounts) { //this way of writing a loop automatically loops through all the items in the array "amounts"
  total += amount;
}
console.log("Order total is: " + total);