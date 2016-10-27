// business
function coded(input) {
  var noSpaces = input.replace(/\s+/g, "");
  noSpaces = noSpaces.toLowerCase();
  var length = noSpaces.length;
  var squareRoot = Math.sqrt(length);
  console.log(length);


  if (squareRoot % 1 != 0) {
    var column = (Math.floor(squareRoot) + 1)
  } else {
    var column = squareRoot;
  }

  console.log(column);

  var x = 0;
  for (index = 0; index < column; index++) {
    for (i = x; i < length; i += column) {
      var encrypted = noSpaces.charAt(i);
      console.log(encrypted);
      }
    x++;
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
