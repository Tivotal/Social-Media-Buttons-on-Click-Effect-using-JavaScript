/* Created by Tivotal */

$(".icons li").click(function () {
  $(this).toggleClass("shadow").siblings();
  $(this).toggleClass("fillColor").siblings();
});
