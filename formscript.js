var ArnorLocs = ["Weather Hills", "Ettenmoors", "Rivendell", "Amun Sul", "Fornost", "Carn Dum"];
var EriadorLocs = ["Shire", "Breeland", "Angmar", "Trollshaws", "Tharbad", "Sarn Ford", "Eryn Vorn", "Moria"];
var GondorLocs = ["Isengard", "Minas Tirith", "Dol Amroth", "Osgiliath", "Belfalas", "Edhellond", "Pinnath Gelin"];
var LindonLocs = ["Ossiriand", "Harlond", "Forlond", "Mithlond", "Himling"];
var MordorLocs = ["Gorgoroth", "Barad Dur", "Durthang", "Narchost", "Nurn", "Orodruin(Mount Doom)"];
var RhovanianLocs = ["Erebor", "Dale", "Esgaroth", "Dol Guldur", "Fangorn", "Elvenking's Halls"];
var RohanLocs = ["Lothlorien", "Edoras", "Aldburg", "Upbourn", "Grimslade", "Helms Deep"];

var LocationSelect = document.getElementById("selectLocation");
var Locations = [];

function clearSelects() {
    while (LocationSelect.length > 0) {
        LocationSelect.remove(0);
    }

}

function handleRegion() {
    var theRegion = document.getElementById("selectRegion").value;
    //   var LocationSelect = document.getElementById("selectLocation");

    clearSelects();
    var newOption = [];

    if (theRegion === "Eriador") {
        Locations = EriadorLocs.slice();
    } else if (theRegion === "Gondor") {
        Locations = GondorLocs.slice();
    } else if (theRegion === "Lindon") {
        Locations = LindonLocs.slice();
    } else if (theRegion === "Mordor") {
        Locations = MordorLocs.slice();
    } else if (theRegion === "Rhovanian") {
        Locations = RhovanianLocs.slice();
    } else if (theRegion === "Rohan") {
        Locations = RohanLocs.slice();
    } else if (theRegion === "Arnor") {
        Locations = ArnorLocs.slice();
    }
    for (var i = 0; i < Locations.length; i++) {
        newOption[i] = document.createElement("option");
        newOption[i].text = Locations[i];
        LocationSelect.add(newOption[i]);
    }
}

function updatePrices() {
    var theTable = document.getElementById("itemsTable");
    console.log(theTable);



    document.getElementById("lumberSub").value = document.getElementById("lumberQuantity").value *
        document.getElementById("lumberPrice").value;

    document.getElementById("oreSub").value = document.getElementById("oreQuantity").value *
        document.getElementById("orePrice").value;

    document.getElementById("ironSub").value = document.getElementById("ironQuantity").value *
        document.getElementById("ironPrice").value;

    document.getElementById("coalSub").value = document.getElementById("coalQuantity").value *
        document.getElementById("coalPrice").value;

    document.getElementById("claySub").value = document.getElementById("clayQuantity").value *
        document.getElementById("clayPrice").value;

    document.getElementById("ropeSub").value = document.getElementById("ropeQuantity").value *
        document.getElementById("ropePrice").value;

    document.getElementById("foodSub").value = document.getElementById("foodQuantity").value *
        document.getElementById("foodPrice").value;

    document.getElementById("total").value = parseInt(document.getElementById("lumberSub").value) +
        parseInt(document.getElementById("oreSub").value) + parseInt(document.getElementById("ironSub").value) +
        parseInt(document.getElementById("coalSub").value) + parseInt(document.getElementById("claySub").value) +
        parseInt(document.getElementById("ropeSub").value) + parseInt(document.getElementById("foodSub").value);

}

function InitPage() {

    updatePrices();

}
