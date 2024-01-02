"use strict"

class Employee {
    constructor(name) {
      this.name = name;
    }
  
    displayInfo() {
      console.log(`Employee: ${this.name}`);
    }
}
  
class Manager extends Employee {
    constructor(name, department) {
      super(name);
      this.department = department;
    }
    displayInfo() {
      console.log(`Employee: ${this.name}, Department: ${this.department}`);
    }
  }
  
const employee = new Employee("John Smith");
employee.displayInfo();
  
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();


class Order {
    constructor(orderNumber) {
      this.orderNumber = orderNumber;
    }
  
    products = [];
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getTotalPrice() {
      let result = 0;
      for (const product of this.products) {
          result += product.price;
      }
      return result;
    }
}
  
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
}
  
const order = new Order(12345);
  
const product1 = new Product("Phone", 400);
order.addProduct(product1);
  
const product2 = new Product("Headphones", 200);
order.addProduct(product2);
  
console.log(order.getTotalPrice());

  