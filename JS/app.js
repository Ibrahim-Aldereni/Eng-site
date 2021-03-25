alert("Welcome to Engineering Guide Website!"); // this is introductory message
var userName = prompt("Enter your name Please:"); // assign the user name to vaiable
var userColor = prompt("Enter you favourite color:"); // assign a user color to variable
var colorConfirm = confirm("Are you sure this is the color that you want?"); // color confirmation

if(colorConfirm == true){  // to make sure the color is right
  document.write('<p style="background-color:' + userColor + '; font-size: 50px"> Welcome ' + userName + ' your color is ' + userColor + '</p>')
}else{
  var userColor = prompt("Enter you favourite color:");
  var colorConfirm = confirm("Are you sure this is the color that you want?");
  document.write('<p style="background-color:' + userColor + '; font-size: 50px"> Welcome ' + userName + ' your color is ' + userColor + '</p>');
}

