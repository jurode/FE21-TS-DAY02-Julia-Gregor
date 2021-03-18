// Basic 1:
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
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
var Person = /** @class */ (function () {
    function Person(pName, age, jobTitle) {
        this.pName = pName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.showMessage = function () {
        return "<p>Hello there, my name is " + this.pName + " and I am " + this.age + " years old, and I am a " + this.jobTitle + "</p>";
    };
    return Person;
}());
var person1 = new Person("John Doe", 34, "Web Developer");
document.getElementById("output").innerHTML = person1.showMessage();
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2(pName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, pName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Person2.prototype.showMessage = function () {
        return " " + _super.prototype.showMessage.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation + ".";
    };
    return Person2;
}(Person));
var person2 = new Person2("Jane Doe", 28, "Web Developer", 4000, "Vienna");
document.getElementById("output").innerHTML = person2.showMessage();
