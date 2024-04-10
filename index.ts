"use strict"

class Employ{
    protected _name;

    constructor(name){
        this._name = name;
    }
    displayInfo(){
        console.log(`Employee: ${this._name}`);
    }
}

class Manager extends Employ{
    private _department;

    constructor(name, department){
        super(name);
        this._department = department;
    }
    displayInfo() {
        console.log(`Employee: ${this._name}, Department: ${this._department}`);
    }
}

const john = new Employ("John Smith");
john.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

class Order{
    private _orderNumber;
    private _products = [];

    constructor(orderNumber){
        this._orderNumber = orderNumber;
    }

    addProduct(product){
        this._products.push(product);
    }

    getTotalPrice(){
        let result = 0;
        for (const product of this._products) {
            result += product.price;
        }
        return result;

    }
}

class Product{
    private _name;
    public price;

    constructor(name, price){
        this._name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); 

