$(document).ready(function () {
  $(document).on("mousemove", function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    $(".img_move").css("top", mouseY + 20 + "px");
    $(".img_move").css("left", mouseX + 20 + "px");
  });
});
