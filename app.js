var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var width = 250;
var height = 50;

var PositionX = (canvasWidth - width) / 2;
var PositionY = (canvasHeight - height) / 2;

context.fillStyle = "red";
context.fillRect (PositionX,PositionY - height,width,height);

context.fillStyle = "white";
context.fillRect (PositionX,PositionY,width,height);

context.fillStyle = "green";
context.fillRect (PositionX,PositionY + height,width,height);

context.beginPath();
context.strokeStyle = "red";
context.moveTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight)
context.lineTo(canvasWidth,canvasHeight);
context.stroke();

context.beginPath();
context.strokeStyle = "red";
context.moveTo(canvasWidth - canvasWidth, canvasHeight)
context.lineTo(canvasWidth,canvasHeight - canvasHeight);
context.stroke();