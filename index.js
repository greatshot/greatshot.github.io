//canvas context 
const canvas = document.getElementById('can');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight/1.4;

const centerY = canvas.height/2;
const centerX = canvas.width/2;

const face = {
    x: centerX,
    y: centerY,
    size: 2,
    dx: 5,
    dy: 3,
    dsize: 1.5,
}

function drawface (x, y, sze) {
    let sz = parseInt(sze);
    ctx.beginPath();
    ctx.arc(x, y, sz/.7 + 250, 0, Math.PI *2, true);
    ctx.moveTo(x + sz+175, y);
    ctx.arc(x, y, sz+175, 0, Math.PI, false);
    ctx.moveTo(x - sz - 80, y - sz - 50);
    ctx.arc(x - sz - 100, y - sz - 50, 20, 0, Math.PI * 2);
    ctx.moveTo(x + 1.4*sz + 100, y - 1.4*sz - 50);
    ctx.arc(x + 1.4*sz + 80, y - 1.4*sz- 50, 20, 0, Math.PI * 2);
    ctx.stroke();
} 



 function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawface(face.x, face.y, face.size);

    face.x += face.dx;
    face.y += face.dy;
    face.size += face.dsize;

    if(face.x + face.size + 250 > canvas.width || face.x - face.size - 250 < 1) {
        face.dx *= -1;
    }

    if(face.y + face.size + 260 > canvas.height || face.y - face.size - 260 < 1) {
        face.dy *= -1;
    }
    if(face.size > 63 || face.size < 2) {
        face.dsize *= -1;
    }


    requestAnimationFrame(update);
    console.log(face.size);
 }

 update();