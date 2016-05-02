//BIO object
var bio = {
  "name": "Paul Keahi",
  "role": "Senior Web Developer",
  "contacts": {
    "mobile": "808.728.9918",
    "email": "paulkeahi@gmail.com",
    "github": "Keahibono",
    "twitter": "@PaulKeahi",
    "location": "Kailua, HI"
  },
  "welcomeMessage": "Aloha and Mahalo",
  "skills": [
    "body surfing",
    "programming",
    "web development"
  ],
  "biopic": "./images/palm-tree-pk.jpg",
  "display": function b(){
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

      $("#header").prepend(formattedName, formattedRole);

      var formattedConMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedConEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedConGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedConTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedConLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
      var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

      $("#topContacts, #footerContacts").append(formattedConMobile, formattedConEmail, formattedConGithub, formattedConTwitter, formattedConLocation);

      $("#header").append(formattedBioPic, formattedWelcomeMsg);

      //bio.skills
      if (bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);

        var formattedSkill = ""

        for (skill in bio.skills){
          formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
          $("#skills").append(formattedSkill);
        }
      }
      //last Name toUpperCase()
      $("#main").append(internationalizeButton);
  }
};

//EDUCATION object
var education = {
  "schools": [
    {
       "name": "DevLeague",
       "location": "Honolulu, HI",
       "degree": "Certificate of Completion",
       "majors": "Full-Stack Web Developer",
       "dates": "April - October 2015",
       "url": "http://www.devleague.com/",
       "courses": ["Javascript", "HTML", "CSS", "Node.js"],
    },
    {
       "name": "Leeward Community College",
       "location": "Pearl City, HI",
       "degree": "",
       "major": "Information & Computer Science",
       "dates": "Januray 2014 - December 2015",
       "url": "http://www.leeward.hawaii.edu/"
    },
    {
       "name": "University of Hawaii",
       "location": "Honolulu, HI",
       "degree": "",
       "major": "Business Administration",
       "dates": "May 1999 - Decmber 2000",
       "url": "https://www.hawaii.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "January 2016 - Present",
      "url": "https://profiles.udacity.com/u/paulkeahiselhorst"
    }
  ],
  "display": function s(){

    if (education.schools.length > 0){

      $("#education").append(HTMLschoolStart);

      for (school in education.schools){
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        // var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

        $(".education-entry").append(formattedSchool, formattedDates, formattedLocation, formattedMajor);
      }
    }

    if (education.onlineCourses.length > 0){

      for (school in education.onlineCourses){
        var formattedClass = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);

        $(".education-entry").append(HTMLonlineClasses, formattedClass, formattedSchool, formattedOnlineDates, formattedURL);
      }
    }
  }
};

//WORK object
var work = {
  "jobs": [
    {
      "employer": "Grumble App, Inc.",
      "title": "Co-Founder",
      "location": ["Honolulu, HI", "Kailua, HI"],
      "dates": "September 2015 - February 2016",
      "description": "Business Administration duties with emphasis on market research and promotion."
    },
    {
      "employer": "State of Hawaii",
      "title": "Peer Mentor/Student Ambassador",
      "location": "Pearl City, HI",
      "dates": "March 2014 - May 2015",
      "description": "Assisted faculty and administration staff with student outreach and assimilation."
    },
    {
      "employer": "Square One Roofing",
      "title": "Owner/Operator",
      "location": "Kailua, HI",
      "dates": "October 2012 - May 2014",
      "description": "Assisted homeowners with their insurance claims and processing while managing re-construction project."
    }
  ],
  "display": function w(){
      if (work.jobs.length > 0){
        $("#workExperience").append(HTMLworkStart);

        for (job in work.jobs){
          var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
          var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
          var formattedEmployerTitle = formattedEmployer + formattedTitle;

          $(".work-entry:last").append(formattedEmployerTitle);

          var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
          var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

          $(".work-entry:last").append(formattedDates);
          $(".work-entry:last").append(formattedDescription);
        }
      }
  }
};

//PROJECTS object
var projects = {
  "projects":[
    {
      "title": "PrimeSpot Landing Page",
      "dates": "February 2016 - April 2016",
      "description": "Client had a landing page hosted on Wix, but wanted something much better. I built a responsive site with video backgrounds and a timer to countdown to the mobile application's launch on both Google Play and Apple's iTunes.",
      "image": "./images/primespot.jpg"
    },
    {
      "title": "White Teeth Landing Page",
      "dates": "January 2016 - Present",
      "description": "Oahu Dental Group recognizes a need for better marketing and customer outreach. After several consultations, client initiates new web properties for teeth whitening program to help build customer base.",
      "image": "./images/whiteTeethVideoLanding.jpg"
    },
    {
      "title": "Grumble/Ditto App",
      "dates": "September 2015 - February 2016",
      "description": "Ditto App is a place where users can share their deepest, most intimate thoughts without being bullyed or criticized.",
      "image": "./images/dittoApp.jpg"
    }
  ],
  "display": function p() {
    for (project in projects.projects){
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

function inName(){
  var nameArray = bio.name.split(" ");

  if (nameArray.length < 3){
    var lastName = nameArray.pop();
    var firstName = nameArray.pop();

    var properFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    var lastUpper = lastName.toUpperCase();

  }
  return properFirstName + " " + lastUpper;
}

$("#mapDiv").append(googleMap);