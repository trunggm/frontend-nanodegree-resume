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

//var formattedName = HTMLheaderName.replace("%data%", name);

//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);

//$("#header").prepend(formattedName);

// array length
var array = ["trunggm", 23, {name: "trung", lastname: "giang"}];

console.log(array.length);

// create bio object
var bio = {
            name: "Giang Minh Trung",
            role: "Front-End Developer",
            contact_info: {
              email: "trung.gm.vn@gmail.com",
              mobile: "84-168-5015-121",
              github: "trunggm",
              facebook: "trung.gm.vn"
            },
            picture_url: "images/me.jpg",
            wellcom_msg: "Well come to Homepage!",
            skills: ["Math", "Python", "Machine Learning", "Data Science"]
          }
// add a city

bio.city = "HaNoi, VietNam";

$("#main").append(bio.city);

// formated lines

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contact_info.email);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact_info.mobile);

var formattedGithub = HTMLgithub.replace("%data%", bio.contact_info.github);

var formattedPic = HTMLbioPic.replace("%data%", bio.picture_url);

var formattedWellcome = HTMLwelcomeMsg.replace("%data%", bio.wellcom_msg);

var formattedSkill = [];

for(x in bio.skills) {
  formattedSkill.push(HTMLskills.replace("%data%", bio.skills[x]));
}


$("#header").prepend(formattedSkill);

$("#header").prepend(HTMLskillsStart);

$("#header").prepend(formattedWellcome);

$("#header").prepend(formattedPic);

$("#header").prepend(formattedGithub);

$("#header").prepend(formattedMobile);

$("#header").prepend(formattedEmail);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);

// add education object
var education = {
                  name: "DHBK",
                  degree: "Student",
                  date: "2011",
                  location: "HaNoi, VietNam",
                  major: "Math"
                }

// add work object
var work = {
              employer: "Developer",
              title: "Front-End",
              date: "2015",
              location: "HaNoi, VietNam",
              desc: "front end developer."
            }
work["position"]="Monday";
// change to formatted and add to html
var formattedWorkEmployer = HTMLworkEmployer.replace("%data", work.employer);

var formattedWorkTitle = HTMLworkTitle.replace("%data", work.title);

var formattedWorkDate = HTMLworkDates.replace("%data", work.date);

var formattedWorkLocation = HTMLworkLocation.replace("%data", work.location);

var formattedWorkDesc = HTMLworkDescription.replace("%data", work.desc);

var formattedSchoolName = HTMLschoolName.replace("%data", education.name);

var formattedSchoolDegree = HTMLschoolDegree.replace("%data", education.degree);

var formattedSchoolDate = HTMLschoolDates.replace("%data", education.date);

var formattedSchoolLocation = HTMLschoolLocation.replace("%data", education.location);

var formatedSchollMajor = HTMLschoolMajor.replace("%data", education.major);

// append to work position and education position
$("#main").append(work["position"]);

$("#main").append(education.name);
