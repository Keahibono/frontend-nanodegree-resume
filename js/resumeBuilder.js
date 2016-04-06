var bio = {
  "name": "Paul Keahi Selhorst",
  "role": "Senior Web Developer",
  "contacts": {
    "mobile": "808.728.9918",
    "email": "paulkeahi@gmail.com",
    "github": "Keahibono",
    "twitter": "@PaulKeahi",
    "city": "Kailua, HI"
  },
  "bioPic": "",
  "welcomeMessage": "Aloha and Mahalo",
  "skills": [
    "swimming",
    "programming",
    "web development"
  ]
};

var education = {
  "schools": [
    {
       "name": "DevLeague",
       "location": "Honolulu, HI",
       "degree": "Certificate of Completion",
       "major": "Full-Stack Web Developer",
       "dates": 2015,
       "courses": ["Javascript", "HTML", "CSS", "Node.js"],
       "url": ""
    },
    {
       "name": "Leeward Community College",
       "location": "Pearl City, HI",
       "degree": "",
       "major": "Information & Computer Science",
       "dates": 2015,
       "courses": [],
       "url": ""
    },
    {
       "name": "University of Hawaii",
       "location": "Honolulu, HI",
       "degree": "",
       "major": "Business Administration",
       "dates": 2000,
       "courses": [],
       "url": ""
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "February 2016 - May 2016",
      "url": ""
    },
    {
      "title": "Senior Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "May 2016 - August 2016",
      "url": ""
    },
    {
      "title": "",
      "school": "",
      "dates": "",
      "url": ""
    }
  ]
};

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
  ]
};

var projects = {
  "projects": [
    {
      "title": "PrimeSpot Landing Page",
      "dates": "February 2016 - April 2016",
      "description": "Client had a landing page hosted on Wix, but wanted something much better. I built a responsive site with video backgrounds and a timer to countdown to the mobile application's launch on both Google Play and Apple's iTunes.",
      "images": ["http://primespot.ninja"]
    },
    {
      "title": "White Teeth Landing Page",
      "dates": "January 2016 - Present",
      "description": "Oahu Dental Group recognizes a need for better marketing and customer outreach. After several consultations, client initiates new web properties for teeth whitening program to help build customer base.",
      "images": ["http://whiteteeth.life"]
    },
    {
      "title": "Grumble/Ditto App",
      "dates": "September 2015 - February 2016",
      "description": "Ditto App is a place where users can share their deepest, most intimate thoughts without being bullyed or criticized.",
      "images": ""
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName, formattedRole);

if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = ""

  for (skill in bio.skills){
    formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    console.log(bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}

