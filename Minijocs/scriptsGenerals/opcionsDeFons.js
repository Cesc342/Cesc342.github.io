//Array on es guarden totes les imatges
imatges = [
  ["fotosGenerals/fonsDamati1.png"],
  ["fotosGenerals/fonsTarda1.png"],
  ["fotosGenerals/fonsNit1.png"]
];

function ficarImatge() {
  d = new Date();
  if(d.getHours() >= 7 && d.getHours() < 14){
    document.body.style.backgroundImage = "url(" + linkRandom(imatges[0]) + ")";
  }else if(d.getHours() >= 14 && d.getHours() < 19){
    document.body.style.backgroundImage = "url(" + linkRandom(imatges[1]) + ")";
  }else{
    document.body.style.backgroundImage = "url(" + linkRandom(imatges[2]) + ")";
  }
  ajustarImatgeFons();
}

function linkRandom(arr) {
  //Variable on es guardarà el link random
  n = "";
  //Numero random
  r = Math.random();

  //Es tria aleatoriament
  i = 1;
  while(i <= arr.length){
    if((i/arr.length)-(1/arr.length) < r && r < i/arr.length){
      n = arr[i-1];
    }
    i++;
  }

  //Es torna el link que s'ha triat
  return n;
}

function ajustarImatgeFons() {
  document.body.style.backgroundSize = window.innerWidth + "px";
}
