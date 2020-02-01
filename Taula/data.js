links = [
    "audios/ElAfiladorSeñora.mp3",
    "audios/HostiaPilotes.mp3",
    "audios/ESTEFANIA.mp3",
    "audios/LaHoraDeLaPaja.mp3",
    "audios/LasPajasEsoEs.mp3",
    "audios/Link01.mp3",
    "audios/Link02.mp3",
    "audios/Link03.mp3",
    "audios/Link04.mp3",
    "audios/Link05.mp3",
    "audios/Link06.mp3",
    "audios/Link07.mp3",
    "audios/Link08.mp3",
    "audios/Link09.mp3",
    "audios/Calvo01.mp3",
    "audios/Calvo02.mp3",
    "audios/Calvo03.mp3",
    "audios/Calvo04.mp3",
    "audios/Calvo05.mp3",
    "audios/DicLogo.mp3",
    "audios/HomaEWa.mp3",
    "audios/Nani.mp3",
    "audios/YEET.mp3"
]

audios = [];
for(i in links){
    audios.push(new Audio(links[i]));
}

teclat = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m",",",".","-"];

data = [teclat,audios];

lloc = [document.getElementById("lloc1"),document.getElementById("lloc2"),document.getElementById("lloc3")];
for(i in teclat){
    td = document.createElement("td");
    td.innerText = teclat[i].toUpperCase();
    td.id = teclat[i];
    if(i<=9){
        lloc[0].appendChild(td);
    }else if(i>9 && i <= 19){
        lloc[1].appendChild(td);
    }else{
        lloc[2].appendChild(td);
    }
}