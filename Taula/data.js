links = [
    "audiosB/YoNoTengoPito.mp3",
    "audiosB/Aaa1.mp3",
    "audiosB/Aaa2.mp3",
    "audiosB/FrancoFrancoFranco.mp3",
    "audiosB/SoyFalangista.mp3",
    "audiosB/SHaMataoPaco.mp3",
    "audiosB/Every60SecondsInAfrica.mp3",
    "audiosB/OhShtARat1.mp3",
    "audiosB/OhShtARat2.mp3",
    "audiosB/OrgasmosTortuga.mp3",
    "audiosB/SeHaDetectadoUnaAmenaza.mp3",
    "audiosB/StopItGetSomeHelp.mp3",
    "audios/ElAfiladorSeñora.mp3",
    "audios/HostiaPilotes.mp3",
    "audios/LaHoraDeLaPaja.mp3",
    "audios/ESTEFANIA.mp3",
    "audiosB/SlapChop01.mp3",
    "audiosB/SlapChop02.mp3",
    "audiosB/SlapChop03.mp3",
    "audiosB/SlapChop04.mp3",
    "audiosB/SlapChop05.mp3",
    "audiosB/SlapChop06.mp3",
    "audiosB/SlapChop07.mp3",
    "audiosB/SlapChop08.mp3",
    "",
    "audiosB/SlapChop09.mp3",
    "audiosB/SlapChop10.mp3",
    "audiosB/SlapChop11.mp3",
    "audios/FEnElChatPorChimuelo.mp3",
    "audios/Calvo01.mp3",
    "audios/Calvo02.mp3",
    "audios/Calvo03.mp3",
    "audios/Calvo04.mp3",
    "audios/Calvo05.mp3",
    "audios/Abduscan.mp3",
    "audios/LasPajasEsoEs.mp3",
    "",
    "audios/DicLogo.mp3",
    "audios/HomaEWa.mp3",
    "audios/Nani.mp3",
    "audios/YEET.mp3",
    "audios/HereWeGoAgain.mp3",
    "audios/Marica.mp3",
    "audios/SeHaMataoMiHijo.mp3",
    "audios/LesVoyACortarElPito.mp3",
    "audios/Mercadona.mp3",
    "audiosB/UnNinoVoloSobreMi.mp3",
    "audiosB/TuRaboEsMuyPeligroso.mp3"
]

audios = [];
for(i in links){
    audios.push(new Audio(links[i]));
}

teclat = ["º","1","2","3","4","5","6","7","8","9","0","'","¡","q","w","e","r","t","y","u","i","o","p","","+","a","s","d","f","g","h","j","k","l","ñ","","ç","<","z","x","c","v","b","n","m",",",".","-"];

data = [teclat,audios];

lloc = [document.getElementById("lloc1"),document.getElementById("lloc2"),document.getElementById("lloc3"),document.getElementById("lloc4"),document.getElementById("lloc5")];
for(i in teclat){
    td = document.createElement("td");
    td.innerText = teclat[i].toUpperCase();
    td.id = i;
    td.addEventListener("click",(e)=>{
        lloc = e.target;
        data[1][lloc.id].play();
    })
    if(i<=12){
        lloc[0].appendChild(td);
    }else if(i>12 && i<=24){
        lloc[1].appendChild(td);
    }else if(i>24 && i <= 36){
        lloc[2].appendChild(td);
    }else{
        lloc[3].appendChild(td);
    }
}