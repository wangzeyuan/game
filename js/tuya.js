var pen = null;
var type ="pen";
var isdraw = false;
var offset = 0;

$(function(){
	pen = $("#can").get(0).getContext("2d");
	offset = $("#can").offset();
	
	$("#can").mousedown(function( event ){
		isdraw = true;
		pen.moveTo(event.clientX-offset.left,event.clientY-offset.top);
	});
	
	$("#can").mousemove(function( event ){
		if(isdraw){
			pen.lineTo(event.clientX-offset.left,event.clientY-offset.top);
			pen.stroke();
		}
	});
	
	$("#can").mouseup(function(event){
		isdraw = false;
	});
	
	$("#can").mouseleave(function(event){
		isdraw = false;
	});
});
