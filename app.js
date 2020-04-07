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

var positionX = 150;
var positionY = 225;
var size = 150;

context.beginPath();
context.moveTo(positionX, positionY);
context.lineTo(positionX + size, positionY);
context.lineTo(positionX + size / 2, positionY - size);
context.lineTo(positionX, positionY);
context.strokeStyle = "rgba(128,128,128,.5)";
context.stroke();
context.fillStyle = "black";
context.fill();

context.beginPath();
context.moveTo(canvasWidth / 2,canvasHeight - canvasHeight);
context.lineTo(canvasWidth / 2,canvasHeight);
context.strokeStyle = "green";
context.stroke();

context.beginPath();
context.moveTo(canvasWidth - canvasWidth,canvasHeight / 2);
context.lineTo(canvasWidth,canvasHeight / 2);
context.strokeStyle = "red";
context.stroke();
