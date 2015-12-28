function Animal(name, noise, meal) {
  var self = this;

  self.name = name;
  self.noise = noise;
  self.meal = meal;
}

function Meal(name, price) {
  var self = this;

  self.name = name;
  self.price = price;
}

var mealHolder = function() {
  this.meals = ko.observableArray([]);
  this.addMeal("Default Meal", "£0.00");
};

mealHolder.prototype.addMeal = function(name, price) {
  var newMeal = new Meal(name, price);
  newMeal.id = this.meals.length;
  this.meals.push(newMeal);
};

mealHolder.prototype.getMeal = function(mealName) {
  for (var i = 0; i < this.meals.length; i++) {
    if (this.meals[i].name === mealName){
      return this.meals[i];
    }
  }
  return this.meals[0];
};

var animalHolder = function() {
  this.animals = [];
};

animalHolder.prototype.addAnimal = function(name, noise, meal) {
  var newMeal;

  if (meal.price) {
    newMeal = meal;
  } else {
    newMeal = mealHolder.getMeal(meal);
  }

  var newAnimal = new Animal(name, noise, newMeal);

  this.animals.push(newAnimal);
};

function AnimalViewModel() {
  this.MainAnimalHolder = new animalHolder();
  this.MainMealHolder = new mealHolder();

  this.MainMealHolder.addMeal("Tuna", "£2.00");
  this.MainMealHolder.addMeal("Prawns", "£3.50");

  this.MainAnimalHolder.addAnimal("Tibbers", "Meow", this.MainMealHolder.getMeal("Prawns"));
  this.MainAnimalHolder.addAnimal("Yin", "Screech", this.MainMealHolder.getMeal("Tuna"));

  this.newAnimalName = "";
  this.newAnimalNoise = "";
  this.selectedMeal = 0;

  this.addAnimal = function(){
    console.log("add animal test " + this.MainAnimalHolder.animals.length);//test
    this.MainAnimalHolder.addAnimal(this.newAnimalName, this.newAnimalNoise, this.MainMealHolder.meals[this.selectedMeal]);
  };
}


ko.applyBindings(new AnimalViewModel());
