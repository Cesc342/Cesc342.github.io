//Tot aquest script és exclusivament per la CPU

//Diu si el centre esta tepat o no
centraTepat = false;
//Mira si totes les esquines estan ja ocupades
esquines = 0;

function jugadaCPU(){
  //Declaro tots els moviments que es podrien fer
  poderFerTresEnRatlla = ferTresEnRatlla();
  //Busca si el altre jugador va a fer un tres en ratlla i el tapa
  perTeparPossibleTresEnRatlla = taparPossibleTresEnRatlla()
  //Es troba una posicio random
  jugRan = jugadaRandom();
  //Intenta fica cercle en el mig
  perTeparCentre = taparCentre();
  //Busca si el altre jugador té una creu el mitg fica els cercles a les esquines
  perTeparEsquines = teparCostatsSiCreuElCentre();

  //Variable on es guardara la jugada triada
  jugada = "";

  //Busca quina jugada pot fer
  if(poderFerTresEnRatlla != ""){
    jugada = poderFerTresEnRatlla;
  }else if(perTeparPossibleTresEnRatlla != ""){
    jugada = perTeparPossibleTresEnRatlla;
  }else if(perTeparCentre != ""){
    jugada = perTeparCentre;
  }else if(perTeparEsquines != ""){
    jugada = perTeparEsquines;
  }else if(jugRan != ""){
    jugada = jugRan;
  }

  return jugada;
}

function taparCentre(){
  //Varaible on es guardara la posicio
  pos = "";
  //Mira si hi ha algun cercle o creu en el centre
  if(mapaClicks[1][1] == 0){
    pos = "B2";
    centraTepat = true;
  }
  //Retorna posicio
  return pos;
}

function teparCostatsSiCreuElCentre() {
  //Varaible on es guardara la posicio
  pos = "";
  //Mira si les esquines estan tepades i si no estan tepades busca quina pot tapar
  if(!siEsquinesTepades()){
    //Variable on dire si s'ha trobat el lloc
    tornarATriarLloc = true;
    //Mira si pots ficar alguna creu a la esquina
    while (tornarATriarLloc) {
      //Agafa posicio random
      r = Math.random();
      if(r<1/4){
        pos = "A1";
      }else if(r>1/4&&r<2/4){
        pos = "A3";
      }else if (r>2/4&&r<3/4) {
        pos = "C1";
      }else if (r>3/4&&r<1) {
        pos = "C3";
      }

      //Agafa la esquina triada i la passa per mirar en el tauler de clicks
      lloc = taulerAMapaDeClicks(pos);

      //Mira si la esquina triada hi ha ja una creu o un cercle
      tornarATriarLloc = mapaClicks[lloc[0]][lloc[1]]!=0;
    }

  }
  return pos;

}

function taparPossibleTresEnRatlla(){
  //Variable on es guardarà la posicio del cercle que ficarà la cpu
  pos = "";
  //Mira si hi pot haver un tres en retlla en vartical i en horitzontal i de qui ha sigut
  i=0;
  while(i<mapaClicks.length){
    if(mapaClicks[i][0] == 0 && mapaClicks[i][1] == 1 && mapaClicks[i][2] == 1){
      pos = mapaDeClicksATauler(i,0);
    }else if(mapaClicks[i][0] == 1 && mapaClicks[i][1] == 0 && mapaClicks[i][2] == 1){
      pos = mapaDeClicksATauler(i,1);
    }else if(mapaClicks[i][0] == 1 && mapaClicks[i][1] == 1 &&mapaClicks[i][2] == 0){
      pos = mapaDeClicksATauler(i,2);
    }
    if(mapaClicks[0][i] == 0 && mapaClicks[1][i] == 1 && mapaClicks[2][i] == 1){
      pos = mapaDeClicksATauler(0,i);
    }else if(mapaClicks[0][i] == 1 && mapaClicks[1][i] == 0 && mapaClicks[2][i] == 1){
      pos = mapaDeClicksATauler(1,i);
    }else if(mapaClicks[0][i] == 1 && mapaClicks[1][i] == 1 && mapaClicks[2][i] == 0){
      pos = mapaDeClicksATauler(2,i);
    }
    i++;
  }

  //Mira si hi ha un possible tres en ratlla pero de punta a punta *·. o .·*
  if(mapaClicks[0][0] == 0 && mapaClicks[1][1] == 1 && mapaClicks[2][2] == 1){
    pos = mapaDeClicksATauler(0,0);
  }else if(mapaClicks[0][0] == 1 && mapaClicks[1][1] == 0 && mapaClicks[2][2] == 1){
    pos = mapaDeClicksATauler(1,1);
  }else if(mapaClicks[0][0] == 1 && mapaClicks[1][1] == 1 && mapaClicks[2][2] == 0){
    pos = mapaDeClicksATauler(2,2);
  }
  if(mapaClicks[0][2] == 0 && mapaClicks[1][1] == 1 && mapaClicks[2][0] == 1){
    pos = mapaDeClicksATauler(0,2);
  }else if(mapaClicks[0][2] == 1 && mapaClicks[1][1] == 0 && mapaClicks[2][0] == 1){
    pos = mapaDeClicksATauler(1,1);
  }else if(mapaClicks[0][2] == 1 && mapaClicks[1][1] == 1 && mapaClicks[2][0] == 0){
    pos = mapaDeClicksATauler(2,0);
  }

  //Torna la posicio que té de tapar
  return pos;
}



function ferTresEnRatlla() {
  //Variable on es guardarà la posicio del cercle que ficarà la cpu
  pos = "";
  //Mira si hi pot haver un tres en retlla en vartical i en horitzontal i de qui ha sigut
  i=0;
  while(i<mapaClicks.length){
    if(mapaClicks[i][0] == 0 && mapaClicks[i][1] == 2 && mapaClicks[i][2] == 2){
      pos = mapaDeClicksATauler(i,0);
    }else if(mapaClicks[i][0] == 2 && mapaClicks[i][1] == 0 && mapaClicks[i][2] == 2){
      pos = mapaDeClicksATauler(i,1);
    }else if(mapaClicks[i][0] == 2 && mapaClicks[i][1] == 2 &&mapaClicks[i][2] == 0){
      pos = mapaDeClicksATauler(i,2);
    }
    if(mapaClicks[0][i] == 0 && mapaClicks[1][i] == 2 && mapaClicks[2][i] == 2){
      pos = mapaDeClicksATauler(0,i);
    }else if(mapaClicks[0][i] == 2 && mapaClicks[1][i] == 0 && mapaClicks[2][i] == 2){
      pos = mapaDeClicksATauler(1,i);
    }else if(mapaClicks[0][i] == 2 && mapaClicks[1][i] == 2 && mapaClicks[2][i] == 0){
      pos = mapaDeClicksATauler(2,i);
    }
    i++;
  }

  //Mira si hi ha un possible tres en ratlla pero de punta a punta *·. o .·*
  if(mapaClicks[0][0] == 0 && mapaClicks[1][1] == 2 && mapaClicks[2][2] == 2){
    pos = mapaDeClicksATauler(0,0);
  }else if(mapaClicks[0][0] == 2 && mapaClicks[1][1] == 0 && mapaClicks[2][2] == 2){
    pos = mapaDeClicksATauler(1,1);
  }else if(mapaClicks[0][0] == 2 && mapaClicks[1][1] == 2 && mapaClicks[2][2] == 0){
    pos = mapaDeClicksATauler(2,2);
  }
  if(mapaClicks[0][2] == 0 && mapaClicks[1][1] == 2 && mapaClicks[2][0] == 2){
    pos = mapaDeClicksATauler(0,2);
  }else if(mapaClicks[0][2] == 2 && mapaClicks[1][1] == 0 && mapaClicks[2][0] == 2){
    pos = mapaDeClicksATauler(1,1);
  }else if(mapaClicks[0][2] == 2 && mapaClicks[1][1] == 2 && mapaClicks[2][0] == 0){
    pos = mapaDeClicksATauler(2,0);
  }

  //Torna la posicio que té de tapar
  return pos;
}

function jugadaRandom() {
  //Variable que dira si es té de tornar a buscar la posicio
  tornarATriarLloc = true;
  //Variable que guardara la posicio triada
  pos = "";
  //Si hi ha una creu o un cercle torna a buscar una posicio aleatoria
  while(tornarATriarLloc){
    //Declara la variable per fer la eleatorietat
    r = Math.random();
    //Variable on es gaurdarà la posicio
    pos = "";
    //Es tria aletoriament la posicio on es ficara el cercle
    if(r<1/3){
      if(r<(1/3)*(1/3)){
        pos = "A1";
      }else if(r>(1/3)*(2/3)){
        pos = "A2";
      }else{
        pos = "A3";
      }
    }else if(r>2/3){
      if(r<(2/3+(1/3)*(1/3))){
        pos = "C1";
      }else if(r>(2/3+(1/3)*(2/3))){
        pos = "C2";
      }else{
        pos = "C3";
      }
    }else{
      if(r<(1/3+(1/3)*(1/3))){
        pos = "B1";
      }else if(r>(1/3+(1/3)*(2/3))){
        pos = "B2";
      }else{
        pos = "B3";
      }
    }
    //Agafa la posicio triada i la passa per mirar en el tauler de clicks
    lloc = taulerAMapaDeClicks(pos);

    //Mira si el lloc triat hi ha ja una creu o un cercle
    tornarATriarLloc = mapaClicks[lloc[0]][lloc[1]]!=0;
  }
  //torna la posicio triada aleatoriament
  return pos;
}

function siEsquinesTepades() {
  //Variable on es dira si les esquines estan tepades
  esquinesOcupades = false;
  //Es mira si totes les esquines estan tepades
  if(mapaClicks[0][0] != 0 && mapaClicks[2][0] != 0 && mapaClicks[0][2] != 0 && mapaClicks[2][2] != 0){
    esquinesOcupades = true;
  }
  //Torna si estan ocupade o no
  return esquinesOcupades;
}
