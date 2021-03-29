// // =========================================Lab: 04=========================================

// alert("Welcome to Engineering Guide Website!"); // this is introductory message
// var userName = prompt("Enter your name Please:"); // assign the user name to vaiable
// var userColor = prompt("Enter you favourite color:"); // assign a user color to variable
// var colorConfirm = confirm("Are you sure this is the color that you want?"); // color confirmation

// if(colorConfirm == true){  // to make sure the color is right
//   document.write('<p style="background-color:' + userColor + '; font-size: 50px"> Welcome ' + userName + ' your color is ' + userColor + '</p>')
// }else{
//   var userColor = prompt("Enter you favourite color:");
//   var colorConfirm = confirm("Are you sure this is the color that you want?");
//   document.write('<p style="background-color:' + userColor + '; font-size: 50px"> Welcome ' + userName + ' your color is ' + userColor + '</p>');
// }

// // =========================================Lab: 05=========================================

// var major = prompt("select you major",'electrical, civil, architectural, mechanical');

// while (major != "electrical" && major != "civil" && major != "architectural" && major != "mechanical"){ // maka sure that the major is right
//   major = prompt("Please enter the correct major!!")
// }

// var ImageNum = prompt("Enter the number of images you want from 1-5");

// while (ImageNum <= 0 || ImageNum >= 6){ // make sure that images in range
   
//   ImageNum = prompt("Please enter from range 1-5")
// }

// console.log(ImageNum); // to check the number of images

// for(var i=1; i<=ImageNum; i++){ // to loop the images

//   if (major == "electrical"){
//     document.write("this is image number: "+ i + '<img src="pic/electrical.jpg">' + "<br>");
//   }else if(major == "civil"){
//     document.write("this is image number: "+ i +'<img src="pic/Civil.jpg">' + "<br>");
//   }else if(major == "architectural"){
//     document.write("this is image number: "+ i +'<img src="pic/Architectural.jpg">' + "<br>");
//   }else if(major == "mechanical"){
//     document.write("this is image number: "+ i +'<img src="pic/mechanical.jpg">' + "<br>");
//   }
// }