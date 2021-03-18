// Basic 1:
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
var Person = /** @class */ (function () {
    function Person(pName, age, jobTitle) {
        this.pName = pName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.showMessage = function () {
        return "<p>Hello there, my name is " + this.pName + " and I am " + this.age + " years old, and I am a " + this.jobTitle + ".</p>";
    };
    return Person;
}());
var person1 = new Person("John Doe", 34, "Web Developer");
document.getElementById("output").innerHTML = person1.showMessage();
