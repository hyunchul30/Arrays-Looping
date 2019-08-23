

$(document).ready(function() {
  $("form#jack").submit(function(event) {
var number=parseInt(prompt($("input#n").val());
var letter=parseInt(prompt($("input#l").val());

$("#beep").show();
    });

    var letter = ["Beep","Boop","stop","nothing"];
    for (var index = 0; index<letter.length; index +=1 ) {

      alert(letter[index]+'!');
    }

$("reset#cancel").onclick(function(event) {

});
