// business
function coded(input) {
  var noSpaces = input.replace(/\s+/g, "");
  noSpaces = noSpaces.toLowerCase();
  var length = noSpaces.length;
  var squareRoot = Math.sqrt(length);
  console.log(length);

  var outputArray = [];

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
      outputArray.push(encrypted);
      }
    x++;
    }
    console.log(outputArray);
    var finalOutput = outputArray.join("");
    var superFinalOutput = finalOutput.match(/.{1,5}/g);
    console.log(superFinalOutput);
    var output = superFinalOutput.join(" ");
    console.log(output);


    //replace(/(.{5})/g,"$1$");
    console.log(superFinalOutput);
    return output;
}
// user interface
$(document).ready(function(){
  $("#encryption").submit(function(event) {
    event.preventDefault();
    var input = $("#userString").val();
    var finalOutput = coded(input);

    $(".output").text(finalOutput);

  });
});
