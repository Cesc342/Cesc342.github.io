function jugar(x){
  //Reinicia Totes Les imatge;
  reiniciar();

  //Fa actuar cpu
  maTriadaCpu = cpu();

  //Agafa imatges
  maCpu = document.getElementById("C"+maTriadaCpu);
  maJ = document.getElementById(x);

  //Variables amb colors del border de les imatges
  colorCpu = "";
  colorJ = "";

//Tria qui guanya
  txt = quiHaGuanyat(x,maTriadaCpu);

//Tria colors segons qui guanya i pert
  if(txt == "E"){
    colorCpu = "orange";
    colorJ = "orange";
  }else if(txt == "G"){
    colorCpu = "red";
    colorJ = "green";
  }else if(txt == "P"){
    colorCpu = "green";
    colorJ = "rgb(255,0,0)";
  }else{
    console.error("ERROR: 11->22");
  }

  //Fica color el border de les imatges
  maCpu.style.border = "3px solid " + colorCpu;
  maJ.style.border = "3px solid " + colorJ;
}

function quiHaGuanyat(j,c) {
  if(j == c){
    return "E";
  }else if((j==0 && c==1)||(j==1 && c==2)||(j==2 && c==0)){
    return "P";
  }else if ((j==1 && c==0)||(j==2 && c==1)||(j==0 && c==2)) {
    return "G";
  }else{
    console.error("ERROR");
  }
}

function cpu(){
  r = Math.random();
  if(r < (1/3)){
    return 0;
  }else if(r>(2/3)){
    return 2;
  }else{
    return 1;
  }
}

function reiniciar(){
  //Fa arrays per ficari les imatge
  mansCpu = [null,null,null];
  mansJ = [null,null,null];

  //Agafa les imatges
  i = 0;
  while(i<mansCpu.length){
    mansCpu[i] = document.getElementById("C"+i);
    mansJ[i] = document.getElementById(i);
    i++;
  }

  //I fica que no tinguin border
  i = 0;
  while (i<mansCpu.length) {
    mansJ[i].style.border = "";
    mansCpu[i].style.border = "";
    i++;
  }
}

function assenyalar(x) {
  ma = document.getElementById(x);
  ma.style.border = "2px solid grey";
}
