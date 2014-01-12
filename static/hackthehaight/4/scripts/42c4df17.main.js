$(window).load(function() {
  var location = ($(document).width() / 2) - 35;

  var four = $("#four");
  var lt = $("#lt");
  var three = $("#three");

  var pixels = "+=" + location + "px";

  lt.animate({"left": pixels}, 1000, "swing", function() {
    lt.hide();
  });

  three.animate({"right": pixels}, 1000, "swing", function() {
    three.hide();
    four.css('display', 'inline');
    four.show();
  });
});
