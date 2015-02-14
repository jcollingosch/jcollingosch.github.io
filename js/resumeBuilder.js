
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
	biopic: "images/Profile.jpeg",
	display: function() {
		//display name & role
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName, formattedRole);

		//display contacts
		for(c in bio.contacts){
			var formattedContact = HTMLcontactGeneric.replace("%contact%", c);
			$("#topContacts").append(formattedContact);
		}

		//display bio pic
		var formattedPic = HTMLbioPic.replace("$data%", bio.biopic);
		$("#header").append(formattedPic);

		//display welcome
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);

		//display skills
		$("header").appedn(HTMLskillsStart);
		for(skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", skill);
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

