// =========================================Lab: 04=========================================

alert("Welcome to Engineering Guide Website!"); // this is introductory message
var userName = prompt("Enter your name Please:"); // assign the user name to vaiable
var userColor = prompt("Enter you favourite color:"); // assign a user color to variable
var colorConfirm = confirm("Are you sure this is the color that you want?"); // color confirmation

function update(){ // this is for lab 07
  document.getElementById("color").innerHTML = userName + " your color is => " + userColor ;
  document.getElementById("color").style.backgroundColor = userColor;
  document.getElementById("color").style.fontSize = "50px";
}

if(colorConfirm == true){  // to make sure the color is right

  update();

}else{
  userColor = prompt("Enter you favourite color:");
  colorConfirm = confirm("Are you sure this is the color that you want?");

  update();
}

// =========================================Lab: 05=========================================

var major = prompt("select you major",'electrical, civil, architectural, mechanical');

while (major != "electrical" && major != "civil" && major != "architectural" && major != "mechanical"){ // maka sure that the major is right
  major = prompt("Please enter the correct major!!")
}

var ImageNum = prompt("Enter the number of images you want from 1-5");

while (ImageNum <= 0 || ImageNum >= 6){ // make sure that images in range
   
  ImageNum = prompt("Please enter from range 1-5")
}

console.log(ImageNum); // to check the number of images

function addPhoto(major){ // this is for lab 07, and this function will create image tag and but the source of it
  var photo = document.createElement('img');
  photo.setAttribute('src', 'pic/'+major+'.jpg');
  var element = document.getElementById("color");
  element.after(photo);
}

for(var i=1; i <= ImageNum; i++){ // to loop the images

  if (major == "electrical"){
    addPhoto(major);
  }else if(major == "civil"){
    addPhoto(major);
  }else if(major == "architectural"){
    addPhoto(major);
  }else if(major == "mechanical"){
    addPhoto(major);
  }
}






