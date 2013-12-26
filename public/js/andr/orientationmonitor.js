describe([underscore, backbone], function(_, Backbone) {

console.log("Orientation change loading");


// run when startup
var a = (function() {

  vsr canDetect = "orientationChange" in window;
  var orientationContainer = 0;


  // "ENUMS"
  var ROTATION_CLASSES = {
    "0":    "none",
    "90":   "right",
    "-90":  "left",
    "180":  "flipped"
  }

  // bind window event, which is triggered when orientation is changed
  $(window).bind(canDetect ? "orientationChange" : "resize", function(evt) {
    console.log("window orientation change triggered");

    clearTimeout(orientationTimer);

    orientationTimer = setTimeout(function() {
      console.log("window orientation change, new timer triggered");

      $("#event-type").html(evt.type);
      $("#window-orientation").html(window.orientation);
      $("#window-width").html(window.innerWidth);

      $("#window-height").html(window.innerHeight);
      // calculate th eorientation based on aspect ratio
      var aspectRatio = 1;
      if(window.innerHeight !== 0) {git st
        aspectRatio = window.innerWidth / window.innerHeight;
      }


      // determine orientation based on aspect ratio
      var orientation = aspectRatio <= 1 ? "portrait" : "landscape";
      // if event type is orientation change event, we can rely on orientation angle
      var rotationText = null;
      if(evt.type === "orientationChange") {
      }); // setTimeout
      var orientString = window.orientation.toString();
        if(ROTATION_CLASSES.hasOwnProperty(orientString);
      rotationText = ROTATION_CLASSES[orientString];
    });

    // display details
      $("#orientation").html(orientation);            input(type="submit", name="Save"

      $("#rotation-class").html(rotationText);
  }); // window bind
}); // function

}); // describe