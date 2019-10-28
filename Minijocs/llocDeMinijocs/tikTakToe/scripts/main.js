//Declara un mapa de 0, 1 i 2 de click per saber on estan els cercles i les creus i
//on no hi han. Serveix perquè la CPU sapiga on esta cada cosa situada en el tauler.
//0 = No hi ha res
//1 = Hi ha una creu
//2 = Hi ha un cercle
mapaClicks = [[0,0,0],[0,0,0],[0,0,0]];

//Assegura encara més si algú a guanyat
continuar = true;

function jugar(x) {
  //La funcio no funcionara quan l'usuari clici en un lloc que hi ha una creu o cercle
  //o quan ja s'ha acabat la partida
  p = taulerAMapaDeClicks(x);
  if(mapaClicks[p[0]][p[1]] == 0 && continuar){
    /////////RONDA JUGADOR/////////////
    //Agafa tot el tauler on estan les imatges
    tauler = agafarTauler();
    //Marca la creu de el jugador/usuari on clica
    mercarCreu(x);

    /////////////RONDA CPU//////////////

    //Comença mirant si ja a guanyat algú
    guanyador = quiHaGuanyat();
    if(continuar){
      //Marca el cercle en la posicio on el cpu vol
      //PD: com que sempre acabarà ultim és millor veure abanç si guanya elgú
      //que fer que el CPU tiri.
      mercarCercle(jugadaCPU());
    }else{
      //Diu qui ha guanyat
      if(guanyador == 0){
        alert("Heu empetat");
      }else if(guanyador == 1){
        alert("Ha guanyat el Jugador 1");
      }else if(guanyador == 2){
        alert("Ha guanyat la CPU");
      }
      reiniciar(mapaClicks);
      reiniciarStyles();
    }

    //Ara es mira si el CPU a guanyat en la seva ronda
    guanyador = quiHaGuanyat();
    if(!continuar){
      //Diu qui ha guanyat
      if(guanyador == 0){
        alert("Heu empetat");
      }else if(guanyador == 1){
        alert("Ha guanyat el Jugador 1");
      }else if(guanyador == 2){
        alert("Ha guanyat la CPU");
      }
      reiniciar(mapaClicks);
      reiniciarStyles();
    }
  }
}

function agafarTauler() {
  //Crea el arrey amb el tauler
  tauler = [[null,null,null],[null,null,null],[null,null,null]];

  //Colocar cada imatge de forma ordenada per aconseguir un tauler
  //de escacs per triar de forma més ordenada
  i = 0;
  while (i<tauler.length) {
    tauler[i][0] = document.getElementById("A"+(i+1));
    tauler[i][1] = document.getElementById("B"+(i+1));
    tauler[i][2] = document.getElementById("C"+(i+1));
    i++;
  }

  //Torna el tauler amb totes les seves etiquetes de imatges ja agafades
  return tauler;
}

function reiniciarStyles() {
  //Agafa tot el tauler
  tauler = agafarTauler();

  //Fica tots els bordes com estaven originalment
  i = 0
  while (tauler.length>i) {
    tauler[i][0].style.border = "1px solid grey";
    tauler[i][1].style.border = "1px solid grey";
    tauler[i][2].style.border = "1px solid grey";
    i++;
  }
}

function reiniciar() {
  //Agafa el tauler
  tauler = agafarTauler();
  //Reinicia el tauler on les imatges i també el mapa de clicks
  i = 0
  while (tauler.length<i) {
    o = 0;
    while (tauler[i].length<o) {
      tauler[i][o].style.border = "1px solid grey";
      tauler[i][o].src = "";
      mapaClicks[i][o] = 0;
      o++;
    }
    i++;
  }
}

function mercar(x){
  //Agafa el element que esta sobre el lloc del retoli
  lloc = document.getElementById(x);

  //Marca una mica més el borde ficant-lo més gruixut
  lloc.style.border = "2px solid black";
}

function mercarCreu(x) {
  //Miro si la zona clicada ja estava mercada
  pos = taulerAMapaDeClicks(x);
  if(mapaClicks[pos[0]][pos[1]] == 0){
    //Agafa el element que el usuari a clickat
    lloc = document.getElementById(x);

    //Marco el lloc on s'ha ficat la creu en el mapad de clicks
    mercarCreuEnElMapaDeClicks(x);

    //Fica la imatge de la creu el lloc on s'ha clicat
    lloc.src = "https://cesc342.github.io/Minijocs/fotosGenerals/creu.png";
  }
}

function mercarCercle(x) {
  //Miro si la zona clicada ja estava mercada
  pos = taulerAMapaDeClicks(x);
  if(mapaClicks[pos[0]][pos[1]] == 0){
    //Agafa el element que el CPU a "clickat"
    lloc = document.getElementById(x);

    //Marco el lloc on s'ha ficat el cercle en el mapad de clicks
    mercarCercleEnElMapaDeClicks(x);

    //Fica la imatge de el cercle el lloc on a "clicat" la cpu
    lloc.src = "https://cesc342.github.io/Minijocs/fotosGenerals/cercle.png";
  }
}

function taulerAMapaDeClicks(x) {
  //Crea variable posicio i fica ja la segona variable perquè ja
  //és un nombre però es resta un numera per el fet de que en un
  //array la posicio 1 s'agafa amb el 0
  posicio = [0,(x[1]-1)];

  //Declaro primera variable de la posicio convertin les lletres
  //en numeros segons l'abacedari
  if(x[0] == "A"){
    posicio[0] = 0;
  }else if(x[0] == "B"){
    posicio[0] = 1;
  }else{
    posicio[0] = 2;
  }

  return posicio;
}

function mercarCreuEnElMapaDeClicks(x) {
  //Canvia les lletres de la posicio en el tauler en numeros perquè
  //pugui així manipular la array
  posicio = taulerAMapaDeClicks(x);

  //Passo les posicions en x i y per entendreu millor
  x = posicio[0];
  y = posicio[1];

  //Marco que hi ha una creu en aquella posicio en l'array
  //La creu es guardara com un 1.
  mapaClicks[x][y] = 1;
}

function mercarCercleEnElMapaDeClicks(x) {
  //Canvia les lletres de la posicio en el tauler en numeros perquè
  //pugui així manipular la array
  posicio = taulerAMapaDeClicks(x);

  //Passo les posicions en x i y per entendreu millor
  x = posicio[0];
  y = posicio[1];

  //Marco que hi ha un cercle en aquella posicio en l'array
  //El cercle es guardara com un 2.
  mapaClicks[x][y] = 2;
}

function quiHaGuanyat() {
  //Variable que determinara qui guanyarà amb numeros del mapa de clicks
  quiHaG = 0;

  //es crea variable per veure si totes les parceles ja estan ocupades
  num = 0;
  //Es suma 1 cada vegada que troba una parcela que NO esta buida
  i = 0;
  while(i<mapaClicks.length){
    o = 0;
    while(o<mapaClicks[i].length){
      if(mapaClicks[i][o] != 0){
        num++;
      }
      o++;
    }
    i++;
  }

  //si num == 9 significara que en totes les parceles hi ha algo i es declarara empat
  if(num == 9){
    quiHaG = 0;
    continuar = false;
  }


  //Mira si hi ha un tres en retlla en vartical i en horitzontal i de qui ha sigut
  i=0;
  while(i<mapaClicks.length){
    if(mapaClicks[i][0] == 1 && mapaClicks[i][1] == 1 && mapaClicks[i][2] == 1){
      quiHaG = 1;
      continuar = false;
    }else if(mapaClicks[i][0] == 2 && mapaClicks[i][1] == 2 && mapaClicks[i][2] == 2){
      quiHaG = 2;
      continuar = false;
    }
    if(mapaClicks[0][i] == 1 && mapaClicks[1][i] == 1 && mapaClicks[2][i] == 1){
      quiHaG = 1;
      continuar = false;
    }else if(mapaClicks[0][i] == 2 && mapaClicks[1][i] == 2 && mapaClicks[2][i] == 2){
      quiHaG = 2;
      continuar = false;
    }
    i++;
  }

  //Mira si s'ha fet tres en ratlla pero de punta a punta *·. o .·*
  if(mapaClicks[0][0] == 1 && mapaClicks[1][1] == 1 && mapaClicks[2][2] == 1){
    quiHaG = 1;
    continuar = false;
  }else if(mapaClicks[0][0] == 2 && mapaClicks[1][1] == 2 && mapaClicks[2][2] == 2){
    quiHaG = 2;
    continuar = false;
  }
  if(mapaClicks[0][2] == 1 && mapaClicks[1][1] == 1 && mapaClicks[2][0] == 1){
    quiHaG = 1;
    continuar = false;
  }else if(mapaClicks[0][2] == 2 && mapaClicks[1][1] == 2 && mapaClicks[2][0] == 2){
    quiHaG = 2;
    continuar = false;
  }
  //Torna qui a guanyat
  return quiHaG;
}

function mapaDeClicksATauler(x,y) {
  //Declaro variable pos per després ficar la posició
  pos = "";

  //Canvia la x a una lletra i la y es concatena sumantli un per
  //la mania de les arrays.
  if(x == 0){
    pos = "A"+(y+1);
  }else if(x == 1){
    pos = "B"+(y+1);
  }else if(x == 2){
    pos = "C"+(y+1);
  }
  return pos;
}
