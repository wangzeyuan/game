var pen = null;
var offset = null;
var flag = true;

function gameInit( id ){
	var html = '<canvas id = "five" width = "600px" height="600px"></canvas>';
	if(id){
		$("#"+id).append(html);
	}else{
		$("body").append(html);
	}
	
	pen = $("#five").get(0).getContext("2d");
	//横
	for(var i = 1;i < 15;i++){
		pen.beginPath();
		if(i==3||i==12){
			pen.lineWidth=3;
		}else{
			pen.lineWidth=1;
		}
		pen.moveTo(0,i*40);
		pen.lineTo(600,i*40);
		pen.stroke();
		pen.closePath();
	}
	//竖
	for(var i = 1;i < 15;i++){
		pen.beginPath();
		if(i==3||i==12){
			pen.lineWidth=3;
		}else{
			pen.lineWidth=1;
		}
		pen.moveTo(i*40,0);
		pen.lineTo(i*40,600);
		pen.stroke();
		pen.closePath();
	}
	
	offset=$("#five").offset();
	
	$("#five").mousedown(function(event){
		var x = event.clientX - offset.left;
		var y = event.clientY - offset.top;
		
		var row = Math.floor(y/40);
		var col = Math.floor(x/40);
		
		pen.beginPath();
		if(flag){
			pen.fillStyle = "white";
		}else{
			pen.fillStyle = "black";
		}
		flag = !flag;
		pen.arc(col * 40 + 20,row * 40 + 20,15,0,2 * Math.PI);
		pen.fill();
		pen.closePath();	
	});
}

























