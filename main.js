// Write a program to display the cube of the number upto a given integer

var num = parseInt(prompt("Enter a number:"));
for (let i = 0; i < num; i++) {
    // var value = num * num * num;
    var value = num ** 3;
}
console.log(`cube of the number:  ${value}`);