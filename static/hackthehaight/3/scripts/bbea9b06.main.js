$(window).load(function() {
  var location = $(document).width() / 2;
  var pixels = "+=" + location + "px";
  var three = $("#three");
  var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  var counter = 0;
  var speed = 800;

  var animate = [
    function() {
      three.fadeOut(speed, animate[1]);
    },
    function () {
      counter++;
      counter = counter % colors.length;
      three.css("color", colors[counter]);
      three.fadeIn(speed, animate[0]);
    }
  ];
  animate[0]();
});
