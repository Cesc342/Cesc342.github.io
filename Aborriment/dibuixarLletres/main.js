noEstaTriat = true;
tipusElement = "";
txt = "";
while (noEstaTriat) {
  inp = prompt("1-Paraula 2-Imatge");
  if(inp == 1){
    tipusElement = "div";
    noEstaTriat = false;
    txt = prompt("Fica una paraula aqui:")
  }else if(inp == 2){
    tipusElement = "img";
    noEstaTriat = false;
    txt = prompt("Fica el link de la imatge aqui:");
  }else{
    alert("Tens de seleccionar 1 o 2");
  }
}

function dibuixarQuadrat(x,y,txt){
span = document.createElement(tipusElement);
span.style.position = "absolute";
span.style.top = y+"px";
span.style.left = x+"px";
if(tipusElement == "div"){
span.innerText = txt;
}else if(tipusElement == "img"){
span.src = txt;
span.style.width = "30px";
span.style.height = "30px";
}
document.body.appendChild(span);
}


function dibuixar(e) {
  dibuixarQuadrat(e.clientX,e.clientY,txt);
}

document.addEventListener("mousemove",dibuixar);
