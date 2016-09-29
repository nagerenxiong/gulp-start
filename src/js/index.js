$(".drag").mousedown(function(event) {
	console.log(event);
	var tLeft=$(event.currentTarget).offset().left;
	var tTop=$(event.currentTarget).offset().top;

	$("body").append($(event.currentTarget).clone(true));
	$("body>.drag").addClass('dragMove').css({
		"position":'absolute',
		"left":tLeft,
		"top":tTop,
		"margin":0
	})
});
$(".drag").mousemove(function(event) {


});
$(".drag").mouseup(function(event) {
	$("body>.drag").remove();
});