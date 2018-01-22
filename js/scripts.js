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

// function showPlaces(){
//   var placesList = "";
//   console.log ("These are the places you've visited:");
//   for (i=0; i<places.length; i++){
//     placesList = placesList + places[i].name + "<br>";
//     placesList = placesList + places[i].date + "<br>"
//     placesList = placesList + places[i].landmark + "<br>"
//     placesList = placesList + places[i].season + "<br>"
//     placesList = placesList + places[i].note + "<br>"
//     placesList = placesList + "* * * * *" + "<br>"
//   }
//   $("#viewport").html(placesList+"<br>");
// }

function showPlacesByName(){
  var placesList = "";
  console.log ("These are the places you've visited:");
  for (i=0; i<places.length; i++){
    placesList = placesList + "<p class='clickable' id='place" + i + "'>" + places[i].name.toUpperCase() + "</p><br>";
  }
  console.log("places list: " + placesList);
  $("#viewport").html(placesList+"<br>");
  // loop
  // get list element and show it
}

function nameClicked(index){
  var myLocation = "";
    myLocation = myLocation + places[index].name + "<br>"
    myLocation = myLocation + places[index].date + "<br>"
    myLocation = myLocation + places[index].landmark + "<br>"
    myLocation = myLocation + places[index].season + "<br>"
    myLocation = myLocation + places[index].note + "<br>"
  $("#recordView").html(myLocation);
}

function addPlaceToList (index, name, date, landmark, season, note) { // input values from form
  var myPlace = new Place(index, name, date, landmark, season, note);
  places.push(myPlace);
  console.log("Added: " + myPlace.name);
}


function sniffer(){
  $(".clickable").click(function(event){
      event.preventDefault();
      x = this.id[this.id.length -1];
      // alert("places n = " + places[x].name);
      $('#recordView').html(places[x].name);
    });
}

$(document).ready(function() {

  $('form#place').submit(function(event){
    event.preventDefault();
    addPlaceToList($("#name").val(), $("#date").val(), $("#landmark").val(), $("#season").val(), $("#note").val());
    // showPlaces();
    showPlacesByName();
    clearForm();
    sniffer();



  });
});
