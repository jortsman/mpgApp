//mpg calculator with do/while

var again = "yes";
do {
  var miles = prompt('How many miles did you drive? \n Make sure you enter a number.');
  parseFloat(miles);
  var gallons = prompt('How many gallons were used? \n Again, please enter a number.');
  parseFloat(gallons);
  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    var mpg = miles/gallons;
    parseInt(mpg);
    alert('Your calculated miles per gallon is ' + mpg);
  } else {
    alert('One of your entries is incorrect.');
  }
  again = prompt('Do you want to try again?', 'yes');
} while (again == "yes");
