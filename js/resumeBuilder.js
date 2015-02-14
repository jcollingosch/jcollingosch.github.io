
var bio = {
	name: "Collin Gosch",
	role: "Aspiring Data Sceintist",
	contacts: { 
				mobile: "(480)-310-1514",
				email: "jcollingosch@gmail.com",
				github: "jcollingosch",
				twitter: "@jcollingosch",
				location: "Phoenix, AZ"
			},
	welcomeMessage: "temp welcome message",
	skills: ["R",
			 "SQL",
			 "Machine Learning",
			 "Statistics"],
	biopic: "images/Profile.jpg",
	display: function() {
		//display name & role
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName, formattedRole);

		//display contacts
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);

		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);

		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGitHub);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		//display bio pic
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedPic);

		//display welcome
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);

		//display skills
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

bio.display();

var education = {
	schools: [
		{
			name: "Arizona State University",
			location: "Tempe, AZ",
			degree: "BSE",
			major: "Industrial Engineering",
			dates: "May 2012",
			url: "http://cidse.engineering.asu.edu/forstudent/undergraduate/majors/industrial-engineering-bse/"
		},
		{
			name: "Arizona State University",
			location: "Tempe, AZ",
			degree: "MS",
			major: "Industrial Engineering",
			dates: "May 2013",
			url: "http://cidse.engineering.asu.edu/forstudent/graduate/industrial-engineering/"
		}
	],
	onlineCourses: [
		{
			title: "Machine Learnin",
			school: "Coursera",
			date: "2013",
			url: "https://www.coursera.org/course/ml"
		}
	],
	display: function() {

	}
}

var work = {
	jobs : [
		{
			employer: "PayPal", 
	     	title: "Quantitative Analyst", 
	     	location: "Scottsdale, AZ", 
	     	dates: "Oct '14 - Feb '15",
	     	description: "job description"
		},
		{
			employer: "DriveTime", 
	     	title: "Quantitative Analyst", 
	     	location: "Phoenix, AZ", 
	     	dates: "May '13 - Oct '14",
	     	description: "job description"
		}
	],
	display: function() {

	}
}

var projects = {
	projects: [
		{
			title: "temp project",
			dates: "Feb '15 - Present",
			description: "temp description",
			images: ""
		}
	],
	display: function() {

	}
}

