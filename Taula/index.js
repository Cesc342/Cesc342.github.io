n = 0;
doc = document.getElementById(data[0][0]);

document.addEventListener("keypress",(e)=>{
    i = 0;
    trobat = false;
    while(i<data[0].length && !trobat){
        if(e.key == data[0][i]){
            doc.style.border = "5px outset rgb(29, 29, 29)";
            doc.style.backgroundColor = "rgb(90, 90, 90)";
            doc = document.getElementById(data[0][i]);
            doc.style.border = "5px inset rgb(29, 29, 29)";
            doc.style.backgroundColor = "rgb(60, 60, 60)";
            data[1][i].play();
            n = i;
            trobat = true;
        }
        i++;
    }
})