/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
            biopic: "../images/me.jpg",
            display: {}
          };

/* 2. schools */
var education = {
            schools: [
              {
                name: "Hanoi University of Science",
                location: "HaNoi, VietNam",
                degree: "engineer",
                major: "",
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
            display: {}
          };


/* 3. work */
var work = {
            jobs: [
              {
                employer: "JS developer",
                title: "Chrome extension developer",
                location: "HaNoi, VietNam",
                date: "in progress",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, corrupti ea iure libero officia autem veritatis architecto accusamus? Debitis, ipsa."
              },
            ],
            display: {}
          };


/* 4. Project */
var projects = {
            projects: [
              {
                title: "portfilio-udacity",
                date: "August 24 - August 25",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, corrupti ea iure libero officia autem veritatis architecto accusamus? Debitis, ipsa.",
                images: "http://placekitten.com/300/300",
              },
              {
                title: "frontend-nanodegree-resume",
                date: "in progress",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, corrupti ea iure libero officia autem veritatis architecto accusamus? Debitis, ipsa.",
                images: "http://placekitten.com/300/240",
              }
            ],
            display: {}
          };
