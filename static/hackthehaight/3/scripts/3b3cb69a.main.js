$(window).load(function() {
  var location = $(document).width() / 2;
  var pixels = "+=" + location + "px";
  $("#two").animate({"left": pixels}, "slow");
});
