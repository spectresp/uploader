describe([], function() {

// display form validation errors
var errors = {};
var errorDteailTag = "<ul class='errors-inline' id='errorDetail_ " + field.id + "' ></ul>";



// insert errors into the form fields
function displayFieldErrors() {
  var messages = errors[field.name];

  if(messages && messages.length > 0) {
    // find existing errro secotion on field
    var errorDetail = $("#errorDetail_" + field.id).get(0);
    // if it doesnt exist, create it
    if(!errorDetail) {
      $(field.before(errorDetailTag));
      errorDetail = $("#errorDetail_" + field.id).get(0);
    }
    for (var ii = 0; ii < messages.length; ii++) {
      $(errorDetail).html('').append("<li>" + messages[ii] + "</li>");
    } // for
  } // if
} // displayFieldErrors


// display errors itself
function displayErros() {
  var haveErrors = false;
  $("input:invalid").removeClass("invalid");

  // iterate through error fields, specified in the array
  for (var fieldName in errors) {
    haveErrors = true;
    $("input[name='" + fieldName + "']").addClass("invalid");
  } // for

  // if we have errors, then add a message to the errors div
  $("#errors").html(haveErrors ? "Errors were found." : "")
    .css("display", haveErrors ? "block" : "none");
} // displayErrors


// on startup bind field error functions on form fields
var triggerFormValidation = function() {
  console.log('formvalidation, trggerFormValidation');

  $(":input").focus(function(evt) {
    displayFieldErrors(this);
  }).blur(function(evt) {
    $("#errorDetail_" + this.id).remove();
  });


  // when form filled and submit pressed, validate all the fields
  $("#taskentry").bind("submit", function() {
    errors = {
      "task[name]": ["Task name is required"],
      "task[due]":  ["Due date is invalid"]
    }
  });

  displayErros();

  // bind validation itself into the function
  $("#taskentry").validate(
    submitHandler: function() {

    },
    submitHandler: function() {

    }
  });

} // triggerFormValidation


// run
triggerFormValidation.apply(this);

});