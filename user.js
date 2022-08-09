// On the contact us page, ask the user for the following details(5 marks):
// Company Name
// Phone number
// Location
// Booking dates -- i should choose date from a calendar
function closeOnSelectDemo(){
 datepicker.unselectAll();
 datepicker.closeOnSelect = true;
 console.log(datepicker.closeOnSelect);
 datepicker.onClose = function(){
 datepicker.closeOnSelect = false;
 datepicker.onClose = null;
 }
 datepicker.show();
 
}
  3
// In your own words, explain how the script for moving the carousel works.


// It works with a series of images, text, or custom markup. It also includes 
// support for previous/next controls and indicators.

4
// What will the code below output to the console and why?
var myObject = {
    name: "Adalab",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();


"AdaLab"
// It will stay for some minutes and then output the object
 