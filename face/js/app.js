const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = window.screen.width;
const height = window.screen.height;

function drawCircle(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.fill();
}

// setup canvas
canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

// fun drawing
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, width, height);

let r = 358;
ctx.fillStyle = 'yellow';
drawCircle(width/2,height/2,r);

let h = 30;
let w = 35;
ctx.fillStyle = 'tan';
ctx.fillRect(width / 2 - (w / 2), height /2 - (h / 2), w, h);

h=30;
w=327;
ctx.fillStyle = 'pink';
ctx.fillRect(width / 2 - (w /2), height / 2 + 80, w, h);

r = 30;
ctx.fillStyle = 'blue';
drawCircle(width/2-100,height/2-90,r);

r = 30;
ctx.fillStyle = 'blue';
drawCircle(width/2+100,height/2-90,r);