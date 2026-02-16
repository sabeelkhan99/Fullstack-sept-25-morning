const PI = 3.14;

function fun() {
    console.log('Inside fun');
}

fun();

class Car{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const c1 = new Car('BMW', 1000);

console.log(c1);