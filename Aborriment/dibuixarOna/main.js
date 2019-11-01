grupOnes = [];
yOnaPrincipal = 0;
meitatPantalla = window.innerHeight / 2;

function dibuixarQuadrat(x,y,color){
span = document.createElement("div");
span.style.position = "absolute";
span.style.top = y+"px";
span.style.left = x+"px";
span.style.width = "3px";
span.style.height = "3px";
span.style.backgroundColor = color;
document.body.appendChild(span);
}

function calcularOna(inp) {
  return Math.sin(inp/900) * 200 + meitatPantalla;
}

function sumaDeTot() {

}

function numRandom(x) {
  return Math.random() * x;
}

function dibuixarOna() {
  i = 0;
  while(grupOnes.length > i){
    grupOnes[i].dibuixar();
    i++;
  }
}

function Ona(n){
  this.x = 0;
  this.n = n;
  this.y
  this.color = "rgb("+ numRandom(255) + "," + numRandom(255) + "," + numRandom(255) + ")";
  this.dibuixar = function() {
    this.y = calcularOna(this.x * this.n);
    dibuixarQuadrat(this.x,this.y,this.color);
    this.x++;
  }
}


i = 0;
numOnes = prompt("Numero Ones");
while(i<numOnes){
  i++;
  grupOnes.push(new Ona(prompt("Frequencio de la ona numero " + i + ": ")));
}

setInterval(dibuixarOna,1);
