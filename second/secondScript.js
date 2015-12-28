function Animal(name, noise){
  var self = this;
  this.name = name;
  this.noise = noise;
}

function AnimalViewModel(){

  var self = this;
  self.newName = "";
  self.newNoise = "";

  self.selectedAnimal = 0;

  self.zooAnimals = ko.observableArray([
    new Animal("Cat", "Meow"),
    new Animal("Dog", "Bark")
  ]);

  self.addAnimal = function(){
    self.zooAnimals.push(new Animal(self.newName, self.newNoise));
  };

}

ko.applyBindings(new AnimalViewModel());
