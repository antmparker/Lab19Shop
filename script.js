/**
 * Created by anthonymparker on 3/6/17.
 */
var animal = ["Toucan","Gorilla","Elephant","Tiger","African Grey Parrot","Komodo Dragon"];
var orderAnimal = [];
var total=[];
var price = [10000.00, 400000, 28200, 50000, 2000, 30000];
function displayOrder() {
    orderString = "";
    totalPrice = 0;

    for (var i = 0; i < orderAnimal.length; i++) {
        orderString += orderAnimal[i] + " $" + total[i] + "\n";
        totalPrice += total[i];
    }

    alert(orderString + "\nTotal Amount Owed: " + "$" + totalPrice);
    animal = [];
}

function order(kind) {
    alert("Ordered " + animal[kind] + " " + "$" + price[kind]);
    orderAnimal.push(animal[kind]);
    total.push(price[kind]);
}