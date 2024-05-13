
table = ['images/anapec.png','images/aups.png','images/atlantis.png','images/ecl.png','images/planet.png','images/sage.png']
i=0;
let counter=[];
let images=[];
let click = -1;

while(true){
    random= Math.floor(Math.random()*12)+1;
    if(!(counter.includes(random))){
        document.querySelector("#image"+random+" .back").style.backgroundImage =('url("'+ table[i] +'")'); 
        counter.push(random);

        images[random]=table[i];

        i++;
        if(i==6) i=0;
        if(counter.length == 12) break;
    }
}

function rotate(id){
    document.getElementById("image"+id).classList.add('rotate');
    click = click*(-1);

    if(click==1){
        firstId = id ;
    }
    if(click==-1){
        if(firstId==id){
            click = click *(-1);
        }
        else{
            secondId = id ;
    
            if(images[firstId]==images[secondId]){
                console.log("---------------------is the same---------------------")
            }
            else{
                console.log("is not the same")
            }
        }
    }
}
