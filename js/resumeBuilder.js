//$("#main").append("Collin Gosch");

var name = "Collin Gosch"
var role = "Aspiring Data Sceintist"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName, formattedRole);
