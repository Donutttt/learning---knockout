
function FourthViewModel(){

  var self = this;

  self.pointlessHolder = new Holder();

  self.inputName = ko.observable();
  self.inputValue = ko.observable();

  self.addNew = function(){
    self.pointlessHolder.addValue(new ValuePair(self.inputName(), self.inputValue()));
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
