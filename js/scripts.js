$(document).ready(function() {
  $("form#transportationSurvey").submit(function(event) {
    event.preventDefault();


    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode= $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });

    $("#work-responses").show();

    $('#transportationSurvey').hide();

  });

});
