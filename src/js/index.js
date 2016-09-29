var tLeft,tTop,pageX,pageY;
$(".drag").mousedown(function(event) {
	console.log(event);
	 tLeft= $(event.currentTarget).offset().left;
	 tTop= $(event.currentTarget).offset().top;
	 pageX=event.pageX;
	 pageY=event.pageY;
	$("body").append($(event.currentTarget).clone(true));
	$("body>.drag").addClass('dragMove').css({
		"position": 'absolute',
		"left": tLeft,
		"top": tTop,
		"margin": 0
	})
});
$(".drag").mousemove(function(event) {
      var mPageX=event.pageX-pageX+tLeft;
      var mPageY=event.pageY-pageY+tTop;
      console.log(event.pageX);
      console.log(pageX);
      console.log(tLeft);
      $(".dragMove").css('left',mPageX);
      $(".dragMove").css('top',mPageY);
});
$(".drag").mouseup(function(event) {
	$("body>.drag").remove();
});
$(document).mouseup(function(){
	$("body>.drag").remove();
})

　
// function moveDrag(tLeft, tTop) {　　　　
// 	this.tLeft = tLeft;　　　　
// 	this.tTop = tTop;　　
// }　　
// moveDrag.prototype.move = function() {

// };