
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
  var city = new Place("SF", false, "11/12/02", ["Coit Tower", "Bridge", "Twin Peaks"], "Fall", "Too many brogrammers.");
  console.log("Name 1 = " + city.name);
  // city = new Place;
  // city.name = "New Orleans";
  // console.log("Name 2 = " + city.name);
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
