$(".arrow").click(function() {
  var target = $(this).next();
  target.collapse('toggle');
});
