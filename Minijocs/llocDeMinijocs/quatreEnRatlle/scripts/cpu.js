//SCRIPT NOMÉS PER LA CPU//

function jugadaCPU(){
  jugada = 0;
  //Busca si es pot fer un tres en ratlla
  jugadaFerQuatreEnRatlla = ferQuatreEnRatlla();
  //Busca si pot tapar un tres en ratlle del altre jugador
  jugadaTaparQuatreEnRatlla = taparQuatreEnRatlla();
  //Es tria una jugada aleatoria
  jugadaJugadaRandom = jugadaRandom();

  //Seleccion una jugada fican més preferencies a unes que a les altres
  if(jugadaFerQuatreEnRatlla != null){
    jugada = jugadaFerQuatreEnRatlla;
  }else if(jugadaTaparQuatreEnRatlla != null){
    jugada = jugadaTaparQuatreEnRatlla;
  }else{
    jugada = jugadaJugadaRandom;
  }

  //Torna la jugada seleccionada
  return jugada;
}


////////////////// FER QUATRE EN RATLLA //////////////////
function ferQuatreEnRatlla() {
  //Variable on es guardarà el numero de la filera
  filera = null;
  //Es mira si es pot tepar un quatre en ratlle verticalment i es grava la fila retornada
  filVertical = possibleVertical();
  //Es mira si es pot tepar un quatre en ratlle horitzontalment i es grava la fila retornada
  filHoritzontal = possibleHoritzontal();
  //Es mira si es pot tepar un quatre en ratlle diagonalment cap a la esquerra *;·. i es grava la fila retornada
  filDiagonalEsquerra = possibleDiagonalEsquerra();
  //Es mira si es pot tepar un quatre en ratlle diagonalment cap a la dreta .·;* i es grava la fila retornada
  filDiagonalDreta = possibleDiagonalDreta();

  //Es si es té de tepar alguna filera
  if(filVertical != null){
    filera = filVertical;
  }else if(filHoritzontal != null){
    filera = filHoritzontal;
  }else if(filDiagonalEsquerra != null){
    filera = filDiagonalEsquerra;
  }else if(filDiagonalDreta != null){
    filera = filDiagonalDreta;
  }

  //Es torna la filera seleccionada
  return filera;
}

/// SUB ///
function possibleVertical() {
  //Variable on es guardarà el lloc on es ficarà el cercle per fer el quatre en ratlle
  filera = null;

  //Busca possibles quatre en ratlle en vertical
  //Y
  i = 0;
  while(i<5){
    //X
    o = 0;
    while(o < mapaClicks[i].length){
      if(mapaClicks[i][o] == 0 && mapaClicks[i+1][o] == 2 && mapaClicks[i+2][o] == 2 && mapaClicks[i+3][o] == 2){
        filera = o;
      }
      o++;
    }
    i++;
  }

  //Trona la filera on té de ficar el cercle
  return filera;
}

function possibleHoritzontal() {
  //Variable on es guardarà el lloc on es ficarà el cercle per fer el quatre en ratlle
  filera = null;

  //Busca possibles quatre en ratlle en horitzontal
  //Y
  i = 0;
  while (i<mapaClicks.length-1) {
    //X
    o = 0;
    while(o<4){
      if((mapaClicks[i][o] == 0 && mapaClicks[i][(o+1)] == 2 && mapaClicks[i][(o+2)] == 2 && mapaClicks[i][(o+3)] == 2) && mapaClicks[i+1][o] != 0){
        filera = o;
      }else if((mapaClicks[i][o] == 2 && mapaClicks[i][(o+1)] == 0 && mapaClicks[i][(o+2)] == 2 && mapaClicks[i][(o+3)] == 2) && mapaClicks[i+1][o+1] != 0){
        filera = o+1;
      }else if((mapaClicks[i][o] == 2 && mapaClicks[i][(o+1)] == 2 && mapaClicks[i][(o+2)] == 0 && mapaClicks[i][(o+3)] == 2) && mapaClicks[i+1][o+2] != 0) {
        filera = o+2;
      }else if((mapaClicks[i][o] == 2 && mapaClicks[i][(o+1)] == 2 && mapaClicks[i][(o+2)] == 2 && mapaClicks[i][(o+3)] == 0) && mapaClicks[i+1][o+3] != 0){
        filera = o+3;
      }
      o++;
    }
    i++;
  }

  //Mira la ultima filera de abaix de tot
  //X
  o = 0
  while(o<4){
    if(mapaClicks[6][o] == 0 && mapaClicks[6][(o+1)] == 2 && mapaClicks[6][(o+2)] == 2 && mapaClicks[6][(o+3)] == 2){
      filera = o;
    }else if(mapaClicks[6][o] == 2 && mapaClicks[6][(o+1)] == 0 && mapaClicks[6][(o+2)] == 2 && mapaClicks[6][(o+3)] == 2){
      filera = o+1;
    }else if(mapaClicks[6][o] == 2 && mapaClicks[6][(o+1)] == 2 && mapaClicks[6][(o+2)] == 0 && mapaClicks[6][(o+3)] == 2){
      filera = o+2;
    }else if(mapaClicks[6][o] == 2 && mapaClicks[6][(o+1)] == 2 && mapaClicks[6][(o+2)] == 2 && mapaClicks[6][(o+3)] == 0){
      filera = o+3;
    }
    o++;
  }

  //Torna filera on es té de ficar el següent cercle
  return filera;
}

function possibleDiagonalDreta() {
  //Variable on es guardarà el lloc on es ficarà el cercle per fer el quatre en ratlle
  filera = null;

  //Buscar possible quatre en ratlla de direccio diagonal cap a dreta .·;*
  //Y
  i = 3;
  while (i < 6) {
    //X
    o = 0;
    while (o < 4) {
      if((mapaClicks[i][o] == 0 && mapaClicks[i-1][o+1] == 2 && mapaClicks[i-2][o+2] == 2 && mapaClicks[i-3][o+3] == 2) && mapaClicks[i+1][o] != 0){
        filera = o;
      }else if((mapaClicks[i][o] == 2 && mapaClicks[i-1][o+1] == 0 && mapaClicks[i-2][o+2] == 2 && mapaClicks[i-3][o+3] == 2) && mapaClicks[i][o+1] != 0){
        filera = o+1;
      }else if((mapaClicks[i][o] == 2 && mapaClicks[i-1][o+1] == 2 && mapaClicks[i-2][o+2] == 0 && mapaClicks[i-3][o+3] == 2) && mapaClicks[i-1][o+2] != 0){
        filera = o+2;
      }else if((mapaClicks[i][o] == 2 && mapaClicks[i-1][o+1] == 2 && mapaClicks[i-2][o+2] == 2 && mapaClicks[i-3][o+3] == 0) && mapaClicks[i-2][o+3] != 0){
        filera = o+3;
      }
      o++;
    }
    i++;
  }

  //Mira posible tres en ratlla que estan a la ultima linea
  //X
  o = 0;
  while(o<4){
    if(mapaClicks[6][o] == 0 && mapaClicks[5][o+1] == 2 && mapaClicks[4][o+2] == 2 && mapaClicks[3][o+3] == 2){
      filera = o;
    }else if((mapaClicks[6][o] == 2 && mapaClicks[5][o+1] == 0 && mapaClicks[4][o+2] == 2 && mapaClicks[3][o+3] == 2) && mapaClicks[6][o+1] != 0){
      filera = o+1;
    }else if((mapaClicks[6][o] == 2 && mapaClicks[5][o+1] == 2 && mapaClicks[4][o+2] == 0 && mapaClicks[3][o+3] == 2) && mapaClicks[5][o+2] != 0){
      filera = o+2;
    }else if((mapaClicks[6][o] == 2 && mapaClicks[5][o+1] == 2 && mapaClicks[4][o+2] == 2 && mapaClicks[3][o+3] == 0) && mapaClicks[4][o+3] != 0){
      filera = o+3;
    }
    o++;
  }

  //Es torna la filera on es té de tirar el cercle
  return filera;
}

function possibleDiagonalEsquerra() {
  //Variable on es guardarà el lloc on es ficarà el cercle per fer el quatre en ratlle
  filera = null;

  //Buscar possible quatre en ratlla de direccio diagonal cap a esquerra .·;*
  //Y
  i = 3;
  while (i < 6) {
    //X
    o = 0;
    while (o < 4) {
      if((mapaClicks[i][o+3] == 0 && mapaClicks[i-1][o+2] == 2 && mapaClicks[i-2][o+1] == 2 && mapaClicks[i-3][o] == 2) && mapaClicks[i+1][o+3] != 0){
        filera = o+3;
      }else if((mapaClicks[i][o+3] == 2 && mapaClicks[i-1][o+2] == 0 && mapaClicks[i-2][o+1] == 2 && mapaClicks[i-3][o] == 2) && mapaClicks[i][o+2] != 0){
        filera = o+2;
      }else if((mapaClicks[i][o+3] == 2 && mapaClicks[i-1][o+2] == 2 && mapaClicks[i-2][o+1] == 0 && mapaClicks[i-3][o] == 2) && mapaClicks[i-1][o+1] != 0){
        filera = o+1;
      }else if((mapaClicks[i][o+3] == 2 && mapaClicks[i-1][o+2] == 2 && mapaClicks[i-2][o+1] == 2 && mapaClicks[i-3][o] == 0) && mapaClicks[i-2][o] != 0){
        filera = o;
      }
      o++;
    }
    i++;
  }

  //Mira posible tres en ratlla que estan a la ultima linea
  //X
  o = 0;
  while(o<4){
    if(mapaClicks[6][o+3] == 0 && mapaClicks[5][o+2] == 2 && mapaClicks[4][o+1] == 2 && mapaClicks[3][o] == 2){
      filera = o+3;
    }else if((mapaClicks[6][o+3] == 2 && mapaClicks[5][o+2] == 0 && mapaClicks[4][o+1] == 2 && mapaClicks[3][o] == 2) && mapaClicks[6][o+2] != 0){
      filera = o+2;
    }else if((mapaClicks[6][o+3] == 2 && mapaClicks[5][o+2] == 2 && mapaClicks[4][o+1] == 0 && mapaClicks[3][o] == 2) && mapaClicks[5][o+1] != 0){
      filera = o+1;
    }else if((mapaClicks[6][o+3] == 2 && mapaClicks[5][o+2] == 2 && mapaClicks[4][o+1] == 2 && mapaClicks[3][o] == 0) && mapaClicks[4][o] != 0){
      filera = o;
    }
    o++;
  }

  //Es torna la filera on es té de tirar el cercle
  return filera;
}


////////////////// JUGADA RANDOM //////////////////
function jugadaRandom() {
  //Variable on es guardarà la filera triada
  filera = null;
  //Variable que dirà si es té de seguir buscan el lloc o no
  continuarBuscan = true;
  //Busca filera on ficar el cercle
    while(continuarBuscan){
    //Alegeix aleatoriament
    r = Math.random();
    if(r<1/7){
      filera = 0;
    }else if(r>1/7 && r<2/7){
      filera = 1;
    }else if(r>2/7 && r<3/7){
      filera = 2;
    }else if(r>3/7 && r<4/7){
      filera = 3;
    }else if(r>4/7 && r<5/7){
      filera = 4;
    }else if(r>5/7 && r<6/7){
      filera = 5;
    }else if(r>6/7 && r<1){
      filera = 6;
    }

    //Si la filera triada NO està ocupada el loop es parara
    if(!fileraOcupada(filera)){
      continuarBuscan = false;
    }
  }

  //es torna la filera no ocupada i que s'ha triat
  return filera;
}

/// SUB ///
function fileraOcupada(x) {
  //Variable que dirà si tota la filera esta ocupada o no
  ocupada = false;
  //Variable on es guardara el numero de celes ocupades de la filera
  numOcupats = 0;

  //Conta quantes celes estan ocupades en una fila vertical
  //Y
  i = 0;
  while(i<mapaClicks[x].length){
    if(mapaClicks[i][x] != 0){
      numOcupats++;
    }
    i++;
  }

  //Mira si tota la filera esta ocupada
  if(numOcupats >= 7){
    ocupada = true;
  }

  return ocupada;
}


////////////////// TAPAR QUATRE EN RATLLA //////////////////
function taparQuatreEnRatlla() {
  //Variable on es guardarà el numero de la filera
  filera = null;
  //Es mira si es pot tepar un quatre en ratlle verticalment i es grava la fila retornada
  filEnemicVertical = possibleEnemicVertical();
  //Es mira si es pot tepar un quatre en ratlle horitzontalment i es grava la fila retornada
  filEnemicHoritzontal = possibleEnemicHoritzontal();
  //Es mira si es pot tepar un quatre en ratlle diagonalment cap a la esquerra *;·. i es grava la fila retornada
  filEnemicDiagonalEsquerra = possibleEnemicDiagonalEsquerra();
  //Es mira si es pot tepar un quatre en ratlle diagonalment cap a la dreta .·;* i es grava la fila retornada
  filEnemicDiagonalDreta = possibleEnemicDiagonalDreta();

  //Es si es té de tepar alguna filera
  if(filEnemicVertical != null){
    filera = filEnemicVertical;
  }else if(filEnemicHoritzontal != null){
    filera = filEnemicHoritzontal;
  }else if(filEnemicDiagonalEsquerra != null){
    filera = filEnemicDiagonalEsquerra;
  }else if(filEnemicDiagonalDreta != null){
    filera = filEnemicDiagonalDreta;
  }

  //Es torna la filera seleccionada
  return filera;
}

/// SUB ///
function possibleEnemicVertical() {
  //Variable on es guardarà el lloc on es ficarà el cercle per tepar el quatre en ratlle
  filera = null;

  //Busca possibles quatre en ratlle enemic en vertical
  //Y
  i = 0;
  while(i<4){
    //X
    o = 0;
    while(o < mapaClicks[i].length){
      if(mapaClicks[i][o] == 0 && mapaClicks[i+1][o] == 1 && mapaClicks[i+2][o] == 1 && mapaClicks[i+3][o] == 1){
        filera = o;
      }
      o++;
    }
    i++;
  }

  //Trona la filera on té de ficar el cercle
  return filera;
}

function possibleEnemicHoritzontal() {
  //Variable on es guardarà el lloc on es ficarà el cercle per tepar el quatre en ratlle
  filera = null;

  //Busca possibles quatre en ratlle enemic en horitzontal
  //Y
  i = 0;
  while (i<mapaClicks.length-1) {
    //X
    o = 0;
    while(o<4){
      if((mapaClicks[i][o] == 0 && mapaClicks[i][(o+1)] == 1 && mapaClicks[i][(o+2)] == 1 && mapaClicks[i][(o+3)] == 1) && mapaClicks[i+1][o] != 0){
        filera = o;
      }else if((mapaClicks[i][o] == 1 && mapaClicks[i][(o+1)] == 0 && mapaClicks[i][(o+2)] == 1 && mapaClicks[i][(o+3)] == 1) && mapaClicks[i+1][o+1] != 0){
        filera = o+1;
      }else if((mapaClicks[i][o] == 1 && mapaClicks[i][(o+1)] == 1 && mapaClicks[i][(o+2)] == 0 && mapaClicks[i][(o+3)] == 1) && mapaClicks[i+1][o+2] != 0) {
        filera = o+2;
      }else if((mapaClicks[i][o] == 1 && mapaClicks[i][(o+1)] == 1 && mapaClicks[i][(o+2)] == 1 && mapaClicks[i][(o+3)] == 0) && mapaClicks[i+1][o+3] != 0){
        filera = o+3;
      }
      o++;
    }
    i++;
  }

  //Mira la ultima filera de abaix de tot
  //X
  o = 0
  while(o<4){
    if(mapaClicks[6][o] == 0 && mapaClicks[6][(o+1)] == 1 && mapaClicks[6][(o+2)] == 1 && mapaClicks[6][(o+3)] == 1){
      filera = o;
    }else if(mapaClicks[6][o] == 1 && mapaClicks[6][(o+1)] == 0 && mapaClicks[6][(o+2)] == 1 && mapaClicks[6][(o+3)] == 1){
      filera = o+1;
    }else if(mapaClicks[6][o] == 1 && mapaClicks[6][(o+1)] == 1 && mapaClicks[6][(o+2)] == 0 && mapaClicks[6][(o+3)] == 1){
      filera = o+2;
    }else if(mapaClicks[6][o] == 1 && mapaClicks[6][(o+1)] == 1 && mapaClicks[6][(o+2)] == 1 && mapaClicks[6][(o+3)] == 0){
      filera = o+3;
    }
    o++;
  }

  //Torna filera on es té de ficar el següent cercle
  return filera;
}

function possibleEnemicDiagonalDreta() {
  //Variable on es guardarà el lloc on es ficarà el cercle per tepar el quatre en ratlle
  filera = null;

  //Buscar possible quatre en ratlla enemic de direccio diagonal cap a dreta .·;*
  //Y
  i = 3;
  while (i < 6) {
    //X
    o = 0;
    while (o < 4) {
      if((mapaClicks[i][o] == 0 && mapaClicks[i-1][o+1] == 1 && mapaClicks[i-2][o+2] == 1 && mapaClicks[i-3][o+3] == 1) && mapaClicks[i+1][o] != 0){
        filera = o;
      }else if((mapaClicks[i][o] == 1 && mapaClicks[i-1][o+1] == 0 && mapaClicks[i-2][o+2] == 1 && mapaClicks[i-3][o+3] == 1) && mapaClicks[i][o+1] != 0){
        filera = o+1;
      }else if((mapaClicks[i][o] == 1 && mapaClicks[i-1][o+1] == 1 && mapaClicks[i-2][o+2] == 0 && mapaClicks[i-3][o+3] == 1) && mapaClicks[i-1][o+2] != 0){
        filera = o+2;
      }else if((mapaClicks[i][o] == 1 && mapaClicks[i-1][o+1] == 1 && mapaClicks[i-2][o+2] == 1 && mapaClicks[i-3][o+3] == 0) && mapaClicks[i-2][o+3] != 0){
        filera = o+3;
      }
      o++;
    }
    i++;
  }

  //Mira posible tres en ratlla que estan a la ultima linea
  //X
  o = 0;
  while(o<4){
    if(mapaClicks[6][o] == 0 && mapaClicks[5][o+1] == 1 && mapaClicks[4][o+2] == 1 && mapaClicks[3][o+3] == 1){
      filera = o;
    }else if((mapaClicks[6][o] == 1 && mapaClicks[5][o+1] == 0 && mapaClicks[4][o+2] == 1 && mapaClicks[3][o+3] == 1) && mapaClicks[6][o+1] != 0){
      filera = o+1;
    }else if((mapaClicks[6][o] == 1 && mapaClicks[5][o+1] == 1 && mapaClicks[4][o+2] == 0 && mapaClicks[3][o+3] == 1) && mapaClicks[5][o+2] != 0){
      filera = o+2;
    }else if((mapaClicks[6][o] == 1 && mapaClicks[5][o+1] == 1 && mapaClicks[4][o+2] == 1 && mapaClicks[3][o+3] == 0) && mapaClicks[4][o+3] != 0){
      filera = o+3;
    }
    o++;
  }

  //Es torna la filera on es té de tirar el cercle
  return filera;
}

function possibleEnemicDiagonalEsquerra() {
  //Variable on es guardarà el lloc on es ficarà el cercle per tepar el quatre en ratlle
  filera = null;

  //Buscar possible quatre en ratlla enemic de direccio diagonal cap a esquerra .·;*
  //Y
  i = 3;
  while (i < 6) {
    //X
    o = 0;
    while (o < 4) {
      if((mapaClicks[i][o+3] == 0 && mapaClicks[i-1][o+2] == 1 && mapaClicks[i-2][o+1] == 1 && mapaClicks[i-3][o] == 1) && mapaClicks[i+1][o+3] != 0){
        filera = o+3;
      }else if((mapaClicks[i][o+3] == 1 && mapaClicks[i-1][o+2] == 0 && mapaClicks[i-2][o+1] == 1 && mapaClicks[i-3][o] == 1) && mapaClicks[i][o+2] != 0){
        filera = o+2;
      }else if((mapaClicks[i][o+3] == 1 && mapaClicks[i-1][o+2] == 1 && mapaClicks[i-2][o+1] == 0 && mapaClicks[i-3][o] == 1) && mapaClicks[i-1][o+1] != 0){
        filera = o+1;
      }else if((mapaClicks[i][o+3] == 1 && mapaClicks[i-1][o+2] == 1 && mapaClicks[i-2][o+1] == 1 && mapaClicks[i-3][o] == 0) && mapaClicks[i-2][o] != 0){
        filera = o;
      }
      o++;
    }
    i++;
  }

  //Mira posible tres en ratlla que estan a la ultima linea
  //X
  o = 0;
  while(o<4){
    if(mapaClicks[6][o+3] == 0 && mapaClicks[5][o+2] == 1 && mapaClicks[4][o+1] == 1 && mapaClicks[3][o] == 1){
      filera = o+3;
    }else if((mapaClicks[6][o+3] == 1 && mapaClicks[5][o+2] == 0 && mapaClicks[4][o+1] == 1 && mapaClicks[3][o] == 1) && mapaClicks[6][o+2] != 0){
      filera = o+2;
    }else if((mapaClicks[6][o+3] == 1 && mapaClicks[5][o+2] == 1 && mapaClicks[4][o+1] == 0 && mapaClicks[3][o] == 1) && mapaClicks[5][o+1] != 0){
      filera = o+1;
    }else if((mapaClicks[6][o+3] == 1 && mapaClicks[5][o+2] == 1 && mapaClicks[4][o+1] == 1 && mapaClicks[3][o] == 0) && mapaClicks[4][o] != 0){
      filera = o;
    }
    o++;
  }
  
  //Es torna la filera on es té de tirar el cercle
  return filera;
}
