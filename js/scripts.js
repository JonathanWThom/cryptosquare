// business



// user interface
$(document).ready(function(){
  $("#encryption").submit(function(event) {
    event.preventDefault();
    var input = $("#userString").val();
    var finalOutput = coded(input);

    $(".output").text(finalOuput);

  });
});
