/*
This is empty on purpose! Your code to build the resume will go here.
 */
var header, workExperience, projectView, educationView, mapDiv, letsConnect;
header = $('#header');
workExperience = $('#workExperience');
projectView = $('#projects');
educationView = $('#education');
mapDiv = $('#mapDiv');
letsConnect = $('#lets-connect');


/* create  4 JS object bio, education, work, project*/
/* 1. bio */
var bio = {
            name: "Giang Minh Trung",
            role: "Developer",
            contacts: {
              moblie: "84 168 501 5121",
              email: "trung.gm.vn@gmail.com",
              github: "trunggm",
              location: "HaNoi, VietNam"
            },
            welcomeMessage: "Well come to my page!",
            skills: ["Math", "Html-Css", "JS", "Machine Learning"],
            biopic: "images/me.jpg",
            display: displayBio,
          };

/* displayBio function */
function displayBio() {
  var name = HTMLheaderName.replace('%data%', this.name);
  var role = HTMLheaderRole.replace('%data%', this.role);
  var mobile = HTMLmobile.replace('%data%', this.contacts.mobile);
  var email = HTMLemail.replace('%data%', this.contacts.email);
  var github = HTMLgithub.replace('%data%', this.contacts.github);
  var location = HTMLlocation.replace('%data%', this.contacts.location);
  var biopic = HTMLbioPic.replace('%data%', this.biopic);
  var welcomeMessage = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);

  // display to index.html
  // display header name - role
  header.prepend(role);
  header.prepend(name);


  for (var key in this.contacts) {
    if (this.contacts.hasOwnProperty(key)) {
      var contactsItem = HTMLcontactGeneric.replace('%contact%', key);
      contactsItem = contactsItem.replace('%data%', this.contacts[key]);
      $('#topContacts').append(contactsItem);
      $('#footerContacts').append(contactsItem);
    }
  }

  // display picture, welcomeMessage, skill
  header.append(biopic);
  header.append(welcomeMessage);
  header.append(HTMLskillsStart);
  if(bio.skills.length>0) {
    bio.skills.forEach(function (item, index) {
      var skillItem = HTMLskills.replace('%data%', item);
      $('#skills').append(skillItem);
    });
  }
}

bio.display();

/* 2. schools */
var education = {
            schools: [
              {
                name: "Hanoi University of Science",
                location: "HaNoi, VietNam",
                degree: "engineer",
                major: "Applied Mathematics",
                date: "2012 - 2017",
                url: "http://hust.edu.vn/web/vi/home"
              }
            ],
            onlineCoures: [
              {
                title: "Machine Learning Foundations: A Case Study Approach",
                school: "University of Washington",
                date: "March 14 – May 2",
                url: "https://www.coursera.org/learn/ml-foundations/home/welcome",
              },
              {
                title: "Machine Learning: Regression",
                school: "University of Washington",
                date: "March 21 – May 9",
                url: "https://www.coursera.org/learn/ml-regression/home/welcome",
              },
              {
                title: "Machine Learning: Classification",
                school: "University of Washington",
                date: "May 30 – July 25",
                url: "https://www.coursera.org/learn/ml-classification/home/welcome",
              },
            ],
            display: function () {
              // display schools
              if(this.schools.length>0) {
                educationView.append(HTMLschoolStart);
                var educationEntry = $('.education-entry');
                this.schools.forEach(function (item, index) {
                  var schoolName = HTMLschoolName.replace('%data%', item.name);
                  schoolName = schoolName.replace('#', item.url);
                  var schoolDegree = HTMLschoolDegree.replace('%data%', item.degree);
                  var schoolDates = HTMLschoolDates.replace('%data%', item.date);
                  var schoolLocation = HTMLschoolLocation.replace('%data%', item.location);
                  var schoolMajor = HTMLschoolMajor.replace('%data%', item.major);

                  // append to education-entry
                  educationEntry.append(schoolName + schoolDegree);
                  educationEntry.append(schoolDates);
                  educationEntry.append(schoolLocation);
                  educationEntry.append(schoolMajor);
                });
              }

              // display onlineCoures
              if(this.onlineCoures.length>0) {
                educationView.append(HTMLonlineClasses);
                this.onlineCoures.forEach(function (item, index) {
                  educationView.append(HTMLschoolStart);
                  var lastEntry = $('.education-entry:last');
                  var itemTitle = HTMLonlineTitle.replace('%data%', item.title);
                  itemTitle = itemTitle.replace('#', item.url);
                  var itemSchool = HTMLonlineSchool.replace('%data%', item.school);
                  var itemDate = HTMLonlineDates.replace('%data%', item.date);
                  var itemLink = HTMLonlineURL.replace('%data%', item.url);
                  itemLink = itemLink.replace('#', item.url);

                  // append to online course
                  lastEntry.append(itemTitle + itemSchool);
                  lastEntry.append(itemDate);
                  lastEntry.append(itemLink);
                });
              }
            },
          };

/* display education*/


education.display();


/* 3. work */
var work = {
            jobs: [
              {
                employer: "JS developer",
                title: "Chrome extension developer",
                location: "HaNoi, VietNam",
                date: "December 28, 2015 - Future",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, corrupti ea iure libero officia autem veritatis architecto accusamus? Debitis, ipsa."
              },

              {
                employer: "Seller",
                title: "Castrol Seller",
                location: "HaNoi, VietNam",
                date: "December 1, 2013 - 2014",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, corrupti ea iure libero officia autem veritatis architecto accusamus? Debitis, ipsa."
              },
            ],
            display: function () {
              if (this.jobs.length>0) {
                this.jobs.forEach(function (item, index) {
                  workExperience.append(HTMLworkStart);
                  var workLastEntry = $('.work-entry:last');
                  var workEmployer = HTMLworkEmployer.replace('%data%', item.employer);
                  var workTitle = HTMLworkTitle.replace('%data%', item.title);
                  var workDate = HTMLworkDates.replace('%data%', item.date);
                  var workLocation = HTMLworkLocation.replace('%data%', item.location);
                  var workDesc = HTMLworkDescription.replace('%data%', item.description);

                  workLastEntry.append(workEmployer + workTitle);
                  workLastEntry.append(workDate);
                  workLastEntry.append(workLocation);
                  workLastEntry.append(workDesc);
                })
              }
            },
          };

// display work
work.display();

/* 4. Project */
var projects = {
            projects: [
              {
                title: "portfilio-udacity",
                date: "August 24 - August 25",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, corrupti ea iure libero officia autem veritatis architecto accusamus? Debitis, ipsa.",
                images: [
                  "http://placekitten.com/300/300"
                ]
              },
              {
                title: "frontend-nanodegree-resume",
                date: "in progress",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, corrupti ea iure libero officia autem veritatis architecto accusamus? Debitis, ipsa.",
                images: [
                  "http://placekitten.com/300/240",
                  "http://placekitten.com/300/240",
                  "http://placekitten.com/300/240"
                ]
              }
            ],
            display: function () {
              if (this.projects.length>0) {
                this.projects.forEach( function (item, index) {
                  projectView.append(HTMLprojectStart);
                  var projectLastEntry = $('.project-entry:last');
                  var projectTitle = HTMLprojectTitle.replace('%data%', item.title);
                  var projectDate = HTMLprojectDates.replace('%data%', item.date);
                  var projectDesc = HTMLprojectDescription.replace('%data%', item.description);

                  projectLastEntry.append(projectTitle);
                  projectLastEntry.append(projectDate);
                  projectLastEntry.append(projectDesc);
                  if (item.images.length>0) {
                    item.images.forEach( function (itemX, index) {
                      var projectImg = HTMLprojectImage.replace('%data%', itemX);
                      projectLastEntry.append(projectImg);
                    });
                  }
                })
              }
            }
          };

// display project
projects.display();

/* display map */
function displayMap () {
  var mapElement = '<div id="map"></div>'
  mapDiv.append(mapElement);
  window.addEventListener('load', initializeMap);
}

displayMap();
