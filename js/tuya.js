var pen = null;
var type ="pen";
var isdraw = false;
var offset = 0;

$(function(){
	pen = $("#can").get(0).getContext("2d");
	pen.strokeStyle = "black";
	offset = $("#can").offset();
	
	drawPen();
	
	$("#pen").click(function(){
		drawPen();
	});
	
	$("#line").click(function(){
		drawLine();
	});
	
	$("#rect").click(function(){
		drawRect();
	});
	
	$("#linewidth").change(function(){
		pen.lineWidth = $(this).val();		
	});
	
	$("#color").change(function(){
		pen.strokeStyle = $(this).val();
	});
});

function drawRect(){
	var x = y = 0;
	$("#can").unbind().mousedown(function( event ){
		isdraw = true;
		pen.beginPath();
		x = event.clientX-offset.left;
		y = event.clientY-offset.top;
	}).mouseup(function(event){
		if(isdraw){
			pen.rect(x,y,event.clientX-offset.left-x,event.clientY-offset.top-y);
			pen.stroke();
			pen.closePath();
		}
		isdraw = false;
	}).mouseleave(function(event){
		isdraw = false;
	});	
}

function drawLine(){
	$("#can").unbind().mousedown(function( event ){
		isdraw = true;
		pen.beginPath();
		pen.moveTo(event.clientX-offset.left,event.clientY-offset.top);
	}).mouseup(function(event){
		if(isdraw){
			pen.lineTo(event.clientX-offset.left,event.clientY-offset.top);
			pen.stroke();
			pen.closePath();
		}
		isdraw = false;
	}).mouseleave(function(event){
		isdraw = false;
	});
}

function drawPen(){
	$("#can").unbind().mousedown(function( event ){
		isdraw = true;
		pen.beginPath();
		pen.moveTo(event.clientX-offset.left,event.clientY-offset.top);
	}).mousemove(function( event ){
		if(isdraw){
			
			pen.lineTo(event.clientX-offset.left,event.clientY-offset.top);
			pen.stroke();
			
		}
	}).mouseup(function(event){
		isdraw = false;
		pen.closePath();
	}).mouseleave(function(event){
		isdraw = false;
	});
}
