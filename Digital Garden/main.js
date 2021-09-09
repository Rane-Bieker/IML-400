$(document).ready(function () {
  $("#spark").hover(
    function () {
      $(".angel").fadeIn();
    },
    function () {
      $(".angel").fadeOut();
    }
  );
});
