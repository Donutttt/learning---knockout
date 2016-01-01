var Folder = function(folderName){
  var self = this;
  self.name = folderName;
};

var FolderHolder = function(){
  var self = this;
  self.folders = ko.observableArray();
};

FolderHolder.prototype.addFolder = function(folderName){
  var self = this;
  var newFolder = new Folder(folderName);

  newFolder.id = self.folders.length;
  self.folders.push(newFolder);
};

var WebmailViewModel = function(){
  var self = this;

  self.chosenFolderId = ko.observable();

  self.folderHolder = new FolderHolder();

  self.goToFolder = function(folder){
    self.chosenFolderId(folder);
  };

  self.folderHolder.addFolder("Inbox");
  self.folderHolder.addFolder("Junk");
  self.folderHolder.addFolder("Sent");
};

ko.applyBindings(new WebmailViewModel());
