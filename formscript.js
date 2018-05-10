var Locations = [];
var LocationSelect = document.getElementById("selectLocation");
var EriadorLocs = ["Shire", "Breeland", "Angmar", "Trollshaws"];
var GondorLocs = ["Isengard", "Minas Tirith", "Dol Amroth", "Osgiliath", "Helms Deep"];
var LindonLocs = ["Ossiriand", "Harlond", "Forlond"];
var MordorLocs = ["Gorgoroth", "Barad Dur", "Durthang", "Narchost"];
var RhovanianLocs = ["Erebor", "Dale", "Dol Guldur", "Fangorn"];
var RohanLocs = ["Lothlorien", "Edoras", "Aldburg", "Upbourn", "Grimslade"];
var newOption = [];

// function clearSelects() {

// }
// clearSelects();

function handleRegion() {
    var theRegion = document.getElementById("selectRegion").value;
    // var theLocation = document.getElementById("selectLocation").value;

    while (LocationSelect.length > 0) {
        LocationSelect.remove(0);
    }
    while (newOption.length > 0) {
        newOption.remove(0);
    }

    if (theRegion==="Eriador") {
        Locations = EriadorLocs;
    } else if (theRegion==="Gondor"){
        Locations = GondorLocs;
    } else if (theRegion==="Lindon") {
        Locations = LindonLocs;
    } else if (theRegion==="Mordor") {
        Locations = MordorLocs;
    } else if (theRegion==="Rhovanian") {
        Locations = RhovanianLocs;
    } else if (theRegion==="Rohan") {
        Locations = RohanLocs;
    }
    for (var i=0; i<Locations.length; i++) {
        newOption[i] = document.createElement("option");
        newOption[i].text = Locations[i];
        LocationSelect.add(newOption[i]);
    }
}
