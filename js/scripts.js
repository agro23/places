// initialization

var places = [];

// Business Logic

function Place (name, date, landmark, season, note) { // Place constructer
  this.name = name;
  this.date = date;
  this.landmark = landmark;
  this.season = season;
  this.note = note;
};

function clearForm(){
  $("#name").val("");
  $("#date").val("");
  $("#landmark").val("");
  $("#season").val("");
  $("#note").val("");
}

function showPlaces(){
  var placesList = "";
  console.log ("These are the places you've visited:");
  for (i=0; i<places.length; i++){
    placesList = placesList + places[i].name + "<br>";
    placesList = placesList + places[i].date + "<br>"
    placesList = placesList + places[i].landmark + "<br>"
    placesList = placesList + places[i].season + "<br>"
    placesList = placesList + places[i].note + "<br>"
    placesList = placesList + "* * * * *" + "<br>"
  }
  $("#viewport").html(placesList+"<br>");
  // loop
  // get list element and show it
}

function addPlaceToList (index, name, date, landmark, season, note) { // input values from form
  var myPlace = new Place(index, name, date, landmark, season, note);
  places.push(myPlace);
  console.log("Added: " + myPlace.name);
}

$(document).ready(function() {

  $('form#place').submit(function(event){
    event.preventDefault();
    addPlaceToList($("#name").val(), $("#date").val(), $("#landmark").val(), $("#season").val(), $("#note").val());
    showPlaces();
    clearForm();
  })
});
