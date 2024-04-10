"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employ = /** @class */ (function () {
    function Employ(name) {
        this._name = name;
    }
    Employ.prototype.displayInfo = function () {
        console.log("Employee: ".concat(this._name));
    };
    return Employ;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, department) {
        var _this = _super.call(this, name) || this;
        _this._department = department;
        return _this;
    }
    Manager.prototype.displayInfo = function () {
        console.log("Employee: ".concat(this._name, ", Department: ").concat(this._department));
    };
    return Manager;
}(Employ));
var john = new Employ("John Smith");
john.displayInfo();
var manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
var Order = /** @class */ (function () {
    function Order(orderNumber) {
        this._products = [];
        this._orderNumber = orderNumber;
    }
    Order.prototype.addProduct = function (product) {
        this._products.push(product);
    };
    Order.prototype.getTotalPrice = function () {
        var result = 0;
        for (var _i = 0, _a = this._products; _i < _a.length; _i++) {
            var product = _a[_i];
            result += product.price;
        }
        return result;
    };
    return Order;
}());
var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this.price = price;
    }
    return Product;
}());
var order = new Order(12345);
var product1 = new Product("Phone", 500);
order.addProduct(product1);
var product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice());
