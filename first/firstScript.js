var viewModel = function(){

    var self = this;

    self.sliderTest = ko.observable(0);

    self.varTest = ko.observable();

    self.functionTest = ko.computed(function(){
      return self.varTest() + ' from a function';
    });
};

var newTest = new viewModel();

ko.applyBindings(newTest);

console.log("firstScript finished");
