
function FourthViewModel(){

  var self = this;

  self.pointlessHolder = new Holder();

  self.inputName = ko.observable();
  self.inputValue = ko.observable();

  self.selectChoice = ko.observable();

  self.menuChoices = ko.observableArray(
    [
      {id: 1, title: "First"},
      {id: 2, title: "Another One"},
      {id: 3, title: "Another One"}
    ]
  );

  self.addNew = function(){
    self.pointlessHolder.addValue(new ValuePair(self.inputName(), self.inputValue()));
  };

  self.updateSelect = function(){
    console.log("Select changed to id: " + self.selectChoice());
  };

  self.removePair = function(pair){
    self.pointlessHolder.values.remove(pair);
  };
}

var Holder = function(){
  var self = this;
  self.values = ko.observableArray();
};

Holder.prototype.addValue = function(valueToAdd){
  var self = this;
  self.values.push(valueToAdd);
  console.log(self.values().length);
};

var ValuePair = function(name, value){
  var self = this;
  this.name = name;
  this.value = value;
};

ko.applyBindings(new FourthViewModel());
