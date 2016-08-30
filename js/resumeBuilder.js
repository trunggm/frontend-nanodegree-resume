/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Giang Minh Trung");

 //var awesomeThoughts = "I am Giang Minh Trung and I am AWESOME!"

 //console.log(awesomeThoughts);

//var email = "trung.gm.vn@yahoo.com"

//var gmail = email.replace("yahoo", "gmail");

//console.log(email);

//console.log(gmail);
var name = "Giang Minh Trung";

var role = "front-end developer";

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);

$("#header").append(formattedRole);
