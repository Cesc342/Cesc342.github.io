//Mapa de clicks
//0 = res
//1 = creu
//2 = cercle
mapaClicks = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];

//Variable que diu la ronda on estàs jugant
ronda = 1;

//Diu si el es continua o no
continuar = true;

//Diu si la cpu ja a jugat
cpuHaJugat = true;

function jugar(x){
  //Si es diu que el joc no continui el ejoc no continua
  if(continuar && cpuHaJugat && !fileraOcupada(x)){
    //Encara no ha jugat la cpu
    cpuHaJugat = false;

    //Fica la cleu on el usuari a clicat
    ficarCreu(x);

    //Es mira si ha guanyat algú
    guanyador = quiHaGuanyat();
    //Si surt que a guanyat algú o s'ha empetat treu l'output de qui ha guanyat
    if(guanyador != null){
      if(guanyador == 0){
        alert("Heu empetat");
      }else if(guanyador == 1){
        alert("A guanyat el Jugador 1");
      }else if(guanyador == 2){
        alert("A guanyat la CPU");
      }
    }

    //Es torna a mirar si es pot continuar la jugada perquè si el jugador guanya la CPU no continui amb la seva ronda
    if(continuar){
      ficarCercla(jugadaCPU());

      //Es mira si ha guanyat algú
      guanyador = quiHaGuanyat();
      //Si surt que a guanyat algú o s'ha empetat treu l'output de qui ha guanyat
      if(guanyador != null){
        if(guanyador == 0){
          alert("Heu empetat");
        }else if(guanyador == 1){
          alert("A guanyat el Jugador 1");
        }else if(guanyador == 2){
          alert("A guanyat la CPU");
        }
      }
      //Diu que la cpu ja ha jugat
      cpuHaJugat = true;
    }
  }

}

////////////////// MARCAR I DESMARCAR //////////////////

function mercar(x){
  //Si la fila ja esta ocupada
  if(!fileraOcupada(x)){
    //Agafa la posicio del tauler buscant el lloc on el ratoli esta passant per sobre
    pos = buscarLloc(x);
    //Marca el borde
    ficarCanto(pos);
  }
}

function desmarcar(x){
  //Si la fila ja esta ocupada
  if(!fileraOcupada(x)){
    //Agafa la posicio del tauler buscant el lloc on s'ha anat el ratoli
    pos = buscarLloc(x);
    //Marca el borde
    treureCanto(pos);
  }
}

/// SUB ///

function ficarCanto(pos){
  //Agafa imatge
  img = document.getElementById(pos);
  //Marca el canto
  img.style.border = "2px solid black";
}

function treureCanto(pos){
  //Agafa imatge
  img = document.getElementById(pos);
  //Desmarca el canto
  img.style.border = "1px solid black";
}

////////////////// TRANSFORMAR POSICIONS //////////////////

function mapaClicksATauler(y,x){
  //Variable on es guardarà la posicio
  pos = "";
  //Diu si hi ha error;
  error = false;
  //Es passa a la posicio y a lletres
  if(y == 0){
    pos = "A";
  }else if(y == 1){
    pos = "B";
  }else if(y == 2){
    pos = "C";
  }else if(y == 3){
    pos = "D";
  }else if(y == 4){
    pos = "E";
  }else if(y == 5){
    pos = "F";
  }else if(y == 6){
    pos = "G";
  }else{
    error = true;
    pos = "";
  }
  //Es concatena amb la x ja que en el tauler també és un numero si no hi ha un error
  pos = pos + x;
  //Si ja havia donat error o la x és més gran de lo que tenia de ser hi haura un error
  error = error || x >= 7;
  if (error) {
    pos = "";
  }
  return pos;
}

function taulerAMapaClicks(pos){
  //Lloc on es guardar la posicio per el mapa de clicks
  p=[0,0];
  //es dirà si hi ha un error
  error = false;
  //Ja que el segona parauala de pos sempre és un numero es pot passar directament a pos
  p[1] = pos[1];

  //Es transforma la lletra en numero per la primera variable de pos
  if(pos[0] == "A"){
    p[0] = 0;
  }else if(pos[0] == "B"){
    p[0] = 1;
  }else if(pos[0] == "C"){
    p[0] = 2;
  }else if(pos[0] == "D"){
    p[0] = 3;
  }else if(pos[0] == "E"){
    p[0] = 4;
  }else if(pos[0] == "F"){
    p[0] = 5;
  }else if(pos[0] == "G"){
    p[0] = 6;
  }else{
    error = true;
  }
  //No envia res si hi ha error
  if(error){
    p = [null,null];
  }
  //Es torna les posicions per la array
  return p;
}

////////////////// FICAR CERCLE/CREU //////////////////

function ficarCercla(x){
  //Posicio on anirà el cercle
  pos = buscarLloc(x);
  //Transllada la posicio triada a la de mapa de clicks
  p = taulerAMapaClicks(pos);
  //Marca el lloc triat en el mapa de Clicks
  mapaClicks[p[0]][p[1]] = 2;
  //Agafa la imatge
  img = document.getElementById(pos);
  //Canvia la foto
  img.src = "imatges/cercle.png";
}

function ficarCreu(x){
  //Posicio on anirà el cercle
  pos = buscarLloc(x);
  //Es desmarca perquè no es quedi la imatge de la creu marcada de per vida
  desmarcar(x);
  //Transllada la posicio triada a la de mapa de clicks
  p = taulerAMapaClicks(pos);
  //Marca el lloc triat en el mapa de Clicks
  mapaClicks[p[0]][p[1]] = 1;
  //Agafa la imatge
  img = document.getElementById(pos);
  //Canvia la foto
  img.src = "imatges/creu.png";
  //Es torna a marcar per ensnyar on es ficara la següent pessa si la tira el mateix lloc
  mercar(x);
}

////////////////// BUSCAR LLOC ON FICAR CERCLE O CREU //////////////////
// MISATGE: L'ERROR ESTÀ AQUÍ //
function buscarLloc(x){
  //Variable on es guardarà la posicio
  pos = "";
  //Mira si el lloc s'ha trobat o no
  llocTrobat = false;
  //While que mira quina posicio de y esta buida per ficar el següent signe
  //PD: Comença amb 7 perquè comença la "i" restan i després segueix amb el codi i poder guardar la i mirada
  i = 7;
  while(i>=0 && !llocTrobat){
    i--;
    if(i>=0){
      llocTrobat = (mapaClicks[i][x] == 0);
    }
  }
  //Si la filera esta plena no es farà rès
  if(i>=0){
    //Transforma la posicio del array a la del tauler
    pos = mapaClicksATauler(i,x);
  }else{
    pos = "";
  }
  //tornar la posicio per el tauler si la filera no estava plena
  return pos;
}


////////////////// QUI HA GUANYAT //////////////////
function quiHaGuanyat(){
  //Variable on es guardarà qui ha guanyat
  quiHG = null;
  //Guarda si tots el llocs estan ocupats
  siTotsOcupats = totsOcupats();
  //Busca si ha guanyat algú en vartical i es guarda qui
  guaVertical = vertical();
  //Busca si ha guanyat algú en horitzontal i es guarda qui
  guaHoritzontal = horitzontal();
  //Busca si ha guanyat algú en diagonal direccio esquerra .·;* i es guarda qui
  guaDiagonalEsquerra = diagonalEsquerra();
  //Busca si ha guanyat algú en diagonal direccio dreta *;·. i es guarda qui
  guaDiagonalDreta = diagonalDreta();

  //Si tots estan ocupats i ningu a guanyat es declara empat
  if(siTotsOcupats){
    quiHG = 0;
    continuar = false;
  }

  //Mira si ha gaunyat elgú
  if(guaVertical != 0){
    //Si s'ha detectat un guanyador en vertical es marca el gaunyador i s'acaba el joc
    quiHG = guaVertical;
    continuar = false;
  }else if(guaHoritzontal != 0){
    //Si s'ha detectat un guanyador en horitzontal es marca el gaunyador i s'acaba el joc
    quiHG = guaHoritzontal;
    continuar = false;
  }else if(guaDiagonalEsquerra != 0){
    //Si s'ha detectat un guanyador en diagonal direccio esquerra .·;* es marca el gaunyador i s'acaba el joc
    quiHG = guaDiagonalEsquerra;
    continuar = false;
  }else if(guaDiagonalDreta != 0){
    //Si s'ha detectat un guanyador en diagonal direccio dreta *;·. es marca el gaunyador i s'acaba el joc
    quiHG = guaDiagonalDreta;
    continuar = false;
  }

  return quiHG;
}

/// SUB ///

function totsOcupats() {
  estanOcpuats = false;
  //Suma cada posicio que esta ocupada
  n = 0;
  i = 0;
  while(i<mapaClicks.length){
    o = 0;
    while(o < mapaClicks[i].length){
      if(mapaClicks[i][o] != 0){
        n++;
      }
      o++;
    }
    i++;
  }
  //Mira si de veritat estan tots ocupats
  if(n == 49){
    estanOcpuats = true;
    quiHG = 0;
  }

  return estanOcpuats;
}

function vertical() {
  //Variable on es guardarà el guanyador
  guanyadorVertical = 0;
  //Es mira si hi ha en cualsavol posicio possible un 4 en ratlle vertical
  i = 0;
  while(i < 4){
    o = 0;
    while(o < mapaClicks[i].length){
      if(mapaClicks[i][o] == 1 && mapaClicks[(i+1)][o] == 1 && mapaClicks[(i+2)][o] == 1 && mapaClicks[(i+3)][o] == 1){
        guanyadorVertical = 1;
      }else if(mapaClicks[i][o] == 2 && mapaClicks[(i+1)][o] == 2 && mapaClicks[(i+2)][o] == 2 && mapaClicks[(i+3)][o] == 2){
        guanyadorVertical = 2;
      }
      o++;
    }
    i++;
  }
  //Retorna qui ha guanyat
  return guanyadorVertical;
}

function horitzontal() {
  //Variable on es guardarà el guanyador
  guanyadorVertical = 0;
  //Es mira si hi ha en cualsavol posicio possible un 4 en ratlle horitzontal
  i = 0;
  while(i < 4){
    o = 0;
    while(o < mapaClicks[i].length){
      if(mapaClicks[o][i] == 1 && mapaClicks[o][(i+1)] == 1 && mapaClicks[o][(i+2)] == 1 && mapaClicks[o][(i+3)] == 1){
        guanyadorVertical = 1;
      }else if(mapaClicks[o][i] == 2 && mapaClicks[o][(i+1)] == 2 && mapaClicks[o][(i+2)] == 2 && mapaClicks[o][(i+3)] == 2){
        guanyadorVertical = 2;
      }
      o++;
    }
    i++;
  }
  //Retorna qui ha guanyat
  return guanyadorVertical;
}

function diagonalEsquerra() {
  //Variable on es guardarà el guanyador
  guanyadorVerticalEsquerra = 0;
  //Mira si hi ha una linea diagonal de esquerra adalt a dreta abaix
  i = 0;
  while(i<4){
    o = 0;
    while (o<4) {
      if(mapaClicks[i][o] == 1 && mapaClicks[(i+1)][(o+1)] == 1 && mapaClicks[(i+2)][(o+2)] == 1 && mapaClicks[(i+3)][(o+3)] == 1){
        guanyadorVerticalEsquerra = 1;
      }else if(mapaClicks[i][o] == 2 && mapaClicks[(i+1)][(o+1)] == 2 && mapaClicks[(i+2)][(o+2)] == 2 && mapaClicks[(i+3)][(o+3)] == 2){
        guanyadorVerticalEsquerra = 2;
      }
      o++;
    }
    i++;
  }
  //Retorna el guanyador
  return guanyadorVerticalEsquerra;
}

function diagonalDreta() {
  //Variable on es guardarà el guanyador
  guanyadorVerticalDreta = 0;
  //Mira si hi ha una linea diagonal de esquerra adalt a dreta abaix
  i = 0;
  while(i<4){
    o = 0;
    while (o<4) {
      if(mapaClicks[i][(o+3)] == 1 && mapaClicks[(i+1)][(o+2)] == 1 && mapaClicks[(i+2)][(o+1)] == 1 && mapaClicks[(i+3)][o] == 1){
        guanyadorVerticalDreta = 1;
      }else if(mapaClicks[i][(o+3)] == 2 && mapaClicks[(i+1)][(o+2)] == 2 && mapaClicks[(i+2)][(o+1)] == 2 && mapaClicks[(i+3)][o] == 2){
        guanyadorVerticalDreta = 2;
      }
      o++;
    }
    i++;
  }
  //Retorna el guanyador
  return guanyadorVerticalDreta;
}
