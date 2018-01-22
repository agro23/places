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

function showPlacesByName(){
  var placesList = "";
  console.log ("These are the places you've visited:");
  for (i=0; i<places.length; i++){
    placesList = placesList + "<p class='clickable' id='place" + i + "'>" + places[i].name.toUpperCase() + "</p>";
  }
  console.log("places list: " + placesList);
  $("#viewport").html(placesList+"<br>");
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

function placeClicked(){
  $(".clickable").click(function(event){
    event.preventDefault();
    x = this.id[this.id.length -1];
    var record = "";
      record = record + places[x].name + "<br>"
      record = record + places[x].date + "<br>"
      record = record + places[x].landmark + "<br>"
      record = record + places[x].season + "<br>"
      record = record + places[x].note + "<br>"
    $('#recordView').html(record);
  });
}

$(document).ready(function() {

  $('form#place').submit(function(event){
    event.preventDefault();
    addPlaceToList($("#name").val(), $("#date").val(), $("#landmark").val(), $("#season").val(), $("#note").val());
    showPlacesByName();
    clearForm(); // when we refactor we will use a reset function
    placeClicked();
  });
});
