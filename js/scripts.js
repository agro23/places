
// Business Logic

function Place(name, visited, date, landmark, season, note) { // Place constructer
  this.name = name;
  this.visited = visited;
  this.date = date;
  this.landmark = landmark;
  this.season = season;
  this.note = note;
};


function testCity(){ // make, fill and show a place
  // var myPlace = new Place("SF", false, "11/12/02", ["Coit Tower", "Bridge", "Twin Peaks"], "Fall", "Too many brogrammers.");
  // console.log("Name 1 = " + myPlace.name);
  // var myPlace = new Place("New Orleans", false, "01/01/10", ["French Quarter", "Jazz Club"], "Winter", "Lots of drunks.");
  // console.log("Name 2 = " + myPlace.name);

  locations = [];
  var myPlace = new Place("SF", false, "11/12/02", ["Coit Tower", "Bridge", "Twin Peaks"], "Fall", "Too many brogrammers.");
  locations.push(myPlace);
  var myPlace = new Place("New Orleans", false, "01/01/10", ["French Quarter", "Jazz Club"], "Winter", "Lots of drunks.");
  locations.push(myPlace);
  console.log("Name 2 = " + locations[1].name);
  console.log(locations);

}


// function addPlaceToList (index, name, visited, date, landmark, season, note) { // input values from form
//   // placeIndex is the variable name of the instance of each new Place
//   placeIndex+index = new Place; // new place instance
//   placeIndex.name = name;
//   placeIndex.visited = visited;
//   placeIndex.date = date;
//   placeIndex.landmark = landmark;
//   placeIndex.season = season;
//   placeIndex.note = note;
// }

$(document).ready(function() {

  testCity();

  // $('form#place').submit(event){
  //   event.preventDefault();
  //
  // }
});
