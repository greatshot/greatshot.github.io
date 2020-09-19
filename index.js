//canvas context 
const canvas = document.getElementById('can');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth/1.05;
canvas.height = window.innerHeight/1.5;

const centerY = canvas.height/2;
const centerX = canvas.width/2;

ctx.beginPath();
ctx.arc(centerX, centerY, 250, 0, Math.PI *2, true);
ctx.moveTo(centerX + 175, centerY);
ctx.arc(centerX, centerY, 175, 0, Math.PI, false);
ctx.moveTo(centerX - 80, centerY -50);
ctx.arc(centerX -100, centerY-50, 20, 0, Math.PI * 2);
ctx.moveTo(centerX + 100, centerY - 50);
ctx.arc(centerX +80, centerY-50, 20, 0, Math.PI * 2);

ctx.stroke();