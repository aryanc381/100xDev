class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(Animal) {
        console.log("I am an animal")
    }
    speak() {
        console.log("Hi there, " + this.name + " with " + this.legCount + " legs says " + this.speaks);
    }
}
console.log(Animal.myType())
let dog = new Animal("Hiccup", 4, "bhow bhow");
dog.speak();

console.log("Before adding property to an object: ", dog);
dog = Object.assign({}, dog, {runs: "very fast"});
console.log("After adding property to the object: ", dog);