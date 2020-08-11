$(document).ready(function() {
  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#highlight").click(function() {
    $("p1").removeClass();
    $("p1").addClass("highlight");
    //why won't the highlight go away?
  });
});
