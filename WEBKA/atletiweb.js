

function displayDate(){
    document.getElementById("showDate").innerHTML=Date();


}
function button_1()
{
    document.getElementById("r1").checked=true;
    document.getElementById("r2").checked=false;
    document.getElementById("h1").innerHTML ="STORE:" ;
    document.getElementById("nav").innerHTML ="EQUIPMENTS" ;
    document.querySelector("aside").innerHTML ="sport bag:" ;

    document.querySelector("#p1").innerHTML ="T-shirt" ;
    document.querySelector("#p2").innerHTML ="shorts:" ;

}

function button_2()
{
    document.getElementById("r2").checked=true;
    document.getElementById("r1").checked=false;
    document.getElementById("h1").innerHTML ="TIENDA:" ;
    document.getElementById("nav").innerHTML ="EQUIPO" ;
    document.querySelector("aside").innerHTML ="bolsa de deporte:" ;
    document.querySelector("#p1").innerHTML ="camiseta:" ;
    document.querySelector("#p2").innerHTML ="pantalones cortos:" ;
}

function f3(){
    const trophies = ["LA LIGA SANTANDER", "UEFA LEAGUE EUROPE", "COPA DEL REY", "UEFA SUPER CUP", "AUDI CUP"];
    var text = "";
    var i;
    for (i = 0; i < trophies.length; i++) {
        text += trophies[i] + "<br>";
    }
    document.getElementById("f3").innerHTML = text;
}

function f4(){
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "TRAINING";
            break;
        case 1:
            day = "TRAINING";
            break;
        case 2:
            day = "CHAMPIONS LEAGUE";
            break;
        case 3:
            day = "RELAX";
            break;
        case 4:
            day = "PHYSICAL TRAINING";
            break;
        case 5:
            day = "TRAINING ";
            break;
        case  6:
            day = "REAL MADRID VS ATLETICO at 18:00";
    }
    document.getElementById("f4").innerHTML = "Today is " + day;
}
function f5(){
    var b;
    var d;
    if(b=='8707'){
        console.log()
    }

}
function getnumber(v) {

    if(v == '+7777' || v == '+7776' || v == '+7771' || v == '+7705'){
        beeline.style.display = 'block';
        tele2.style.display = 'none';
        activ.style.display = 'none';

        tarif='b';
    }

    if(v == '+7707' || v == '+7747' ){
        beeline.style.display = 'none';
        tele2.style.display = 'block';
        activ.style.display = 'none';

        tarif='t';

    }

    if(v == '+7701' || v == '+7702' || v == '+7775' || v == '+7778'){
        beeline.style.display = 'none';
        tele2.style.display = 'none';
        activ.style.display = 'block';

        tarif='ac';
    }
    if(v==null){
        beeline.style.display = 'none';
        tele2.style.display = 'none';
        activ.style.display = 'none';


    }



}
function aqsha() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;

    if (x < 1390) {
        tele2_1.style.display = 'none';
        tele2_2.style.display = 'none';
        tele2_3.style.display = 'none';
        activ_1.style.display = 'none';
        activ_2.style.display = 'none';
        activ_3.style.display = 'none';
        beeline_1.style.display = 'none';
        beeline_2.style.display = 'none';
        beeline_3.style.display = 'none';




    }
    if (1390 <= x && x <= 1890) {
        tele2_1.style.display = 'block';
        tele2_2.style.display = 'none';
        tele2_3.style.display = 'none';
        activ_1.style.display = 'block';
        activ_2.style.display = 'none';
        activ_3.style.display = 'none';
        beeline_1.style.display = 'block';
        beeline_2.style.display = 'none';
        beeline_3.style.display = 'none';



    }
    if (1890 <= x && x <= 2590) {
        tele2_1.style.display = 'block';
        tele2_2.style.display = 'block';
        tele2_3.style.display = 'none';
        activ_1.style.display = 'block';
        activ_2.style.display = 'block';
        activ_3.style.display = 'none';
        beeline_1.style.display = 'block';
        beeline_2.style.display = 'block';
        beeline_3.style.display = 'none';


    }
    if (2590 <= x ) {
        tele2_1.style.display = 'block';
        tele2_2.style.display = 'block';
        tele2_3.style.display = 'block';
        activ_1.style.display = 'block';
        activ_2.style.display = 'block';
        activ_3.style.display = 'block';
        beeline_1.style.display = 'block';
        beeline_2.style.display = 'block';
        beeline_3.style.display = 'block';


    }
    rush.style.display='none';
}