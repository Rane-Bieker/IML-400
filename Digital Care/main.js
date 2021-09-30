$(document).ready(function () {
  $("#shark").fadeIn(1000);

  $(function () {
    $(".drag").draggable();
  });

  $("#shk").click(function () {
    $("#camp").fadeOut(1000);
    $("#ruble").fadeOut(1000);
    $("#bird").fadeOut(1000);
    $("#shark").fadeIn(1000);
  });

  $("#cat").click(function () {
    $("#camp").fadeOut(1000);
    $("#shark").fadeOut(1000);
    $("#bird").fadeOut(1000);
    $("#ruble").fadeIn(1000);
  });

  $("#cmp").click(function () {
    $("#ruble").fadeOut(1000);
    $("#shark").fadeOut(1000);
    $("#bird").fadeOut(1000);
    $("#camp").fadeIn(1000);
  });

  $("#brd").click(function () {
    $("#camp").fadeOut(1000);
    $("#shark").fadeOut(1000);
    $("#ruble").fadeOut(1000);
    $("#bird").fadeIn(1000);
  });
});
