var Lab3 = function() {
  //Your URL must be of the form: xxx.xxx/lab3/index.html  
  var self = this;
  self.h1 = $('body div h1');
  self.nameInput = element(by.model('userForm.name'));
  self.imageInput = element(by.model('userForm.url'));
  self.emailInput = element(by.model('userForm.email'));
  self.addButton = element(by.buttonText('Add New'));

  self.userList = element.all(by.repeater('user in users'));
  self.avatars = element.all(by.css('avatar'));
  self.userNames = element.all(by.repeater('user in users').column('user.name'));
  self.userEmails = element.all(by.repeater('user in users').column('user.email'));


}

module.exports = new Lab3();
