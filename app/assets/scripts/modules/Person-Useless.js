
/*
function Person(fullNBame, favColor) {
    this.name = fullName;
    this.favorateColor = favColor;

    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favorate color is " + this.favorateColor + ".");
    }
}
*/

class Person {
    constructor(fullNBame, favColor) {
        this.name = fullName;
        this.favorateColor = favColor;
    }

    greet() {
        console.log("Hello, my name is " + this.name + " and my favorate color is " + this.favorateColor + ".");
    }
}

/*
module.exports = Person;
*/
export default Person;