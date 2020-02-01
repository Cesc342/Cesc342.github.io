document.addEventListener("keypress",(e)=>{
    i = 0;
    trobat = false;
    while(i<data[0].length && !trobat){
        if(e.key == data[0][i]){
            data[1][i].play()
            trobat = true;
        }
        i++;
    }
})