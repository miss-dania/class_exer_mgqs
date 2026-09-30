// Make an object with name, age, and food. food is a list of three foods. Inside listFood, loop over this.food and print each food. In the sentence, print the name and the age. Then run node about.js.



let person = {
  name: "dania" ,
  age: "25",
  food: ["tea", "biscuit", "nimko"],
  listFood: function () {
    for (let food of this.food ) {
      console.log(food );
    }
  }
};

console.log("My name is " +person.name  + ", I am " + person.age + ", and I like the following food:");
person.listFood();