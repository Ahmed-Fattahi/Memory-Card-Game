
table = ['images/anapec.png','images/aups.png','images/atlantis.png','images/ecl.png','images/planet.png','images/sage.png']
i=0
let counter=[];

let click = -1;

while(true){
    random= Math.floor(Math.random()*12)+1;
    if(!(counter.includes(random))){
        document.querySelector("#image"+random+" .back").style.backgroundImage =('url("'+ table[i] +'")'); 
        counter.push(random);

        i++;
        if(i==6) i=0;
        if(counter.length == 12) break;
    }
}
function rotate(id){
    document.getElementById(id).classList.add('rotate');
    click = click*(-1);
}




