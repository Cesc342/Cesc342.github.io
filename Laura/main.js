function random(x){
    return Math.round(Math.random() * x);
}

function colors(){
    lloc = document.getElementById("lloc");
    lloc.style.color = `rgb(${random(255)},${random(255)},${random(255)})`;
}

setInterval(colors,800);