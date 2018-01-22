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
  var killButtons = "";
  console.log ("These are the places you've visited:");
  for (i=0; i<places.length; i++){
    // placesList = placesList + "<col-lg-11><p class='clickable' id='place" + i + "'>" + places[i].name.toUpperCase() + "</p>"+"<col-lg-1 id='kill'>X</col>";
    placesList = placesList + "<p class='clickable' id='place" + i + "'>" + places[i].name.toUpperCase() + "</p>";
    killButtons = killButtons + '<button type="button" name="button" class="btn-danger killMe" id="kill'+i+'"' + '>X</button>';
}
  console.log("places list: " + placesList);
  $("#viewport").html(placesList+"<br>");
  $("#killButtons").html(killButtons + "<br");
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

function killClicked(){
  $(".killMe").click(function(event){
    event.preventDefault();
    x = this.id[this.id.length -1]; // x is the index of the kill button
    console.log("killButtons x: " + x);
    console.log("Places String is: " + places[x].name);
    console.log("Killbuttons is: " + killButtons);
    places.splice(x, 1);
    showPlacesByName();
    killClicked();
  });
};
// }

$(document).ready(function() {

  $('form#place').submit(function(event){
    event.preventDefault();
    addPlaceToList($("#name").val(), $("#date").val(), $("#landmark").val(), $("#season").val(), $("#note").val());
    showPlacesByName();
    clearForm(); // when we refactor we will use a reset function
    placeClicked();
    killClicked();
  });

  $(".killMe").click(function(event){
    event.preventDefault();
    x = this.id[this.id.length -1]; // x is the index of the kill button
    console.log("killButtons x: " + x);
    console.log("Places String is: " + places[x].name);
    places.splice(x, 1);
    showPlacesByName();
  });

});
