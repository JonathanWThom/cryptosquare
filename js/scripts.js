// business
function coded(input) {
  var noSpaces = input.replace(/\s+/g, "");
  noSpaces = noSpaces.toLowerCase();
  var length = noSpaces.length;
  var squareRoot = Math.sqrt(length);

  if (squareRoot % 1 != 0) {
    var column = (Math.floor(squareRoot) + 1)
    console.log(column);
  } else {
    var column = squareRoot;
    console.log(column);
  }
}


// user interface
$(document).ready(function(){
  $("#encryption").submit(function(event) {
    event.preventDefault();
    var input = $("#userString").val();
    var finalOutput = coded(input);

    $(".output").text(finalOuput);

  });
});
