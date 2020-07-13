//capture de la date en cours 
const mnt = new Date();

//Tableau qui stockera les info concernant l'alarme 
tab=[];

//capture de l'heure en  cours
h=mnt.getHours();
m=mnt.getMinutes();
s=mnt.getSeconds();

//Verification console.log(h,m,s);

//Affichage de l'heure 
document.getElementById('heure').innerHTML=h;
document.getElementById('minute').innerHTML=m;
document.getElementById('seconde').innerHTML=s;

//function permettant le reglage de l'alarme
function setDate(){
     
const mnt = new Date();

h=mnt.getHours();
m=mnt.getMinutes();
s=mnt.getSeconds();

//console.log(h,m,s);
document.getElementById('heure').innerHTML=h;
document.getElementById('minute').innerHTML=m;
document.getElementById('seconde').innerHTML=s;

//alarme
     for(i=0;i<tab.length;i++)
     {
          if(tab[i][0]+":0"==h+":"+m+":"+s)
          {
               tab[i][2]="passé";
               document.getElementById('alarme').innerHTML="<tr><td>Nom</td><td>Heure</td><td>Statut</td><td>Temps restant</td></tr>";
               for(i=0;i<tab.length;i++)
               {
                    document.getElementById('alarme').innerHTML+="<tr><td>"+tab[i][1]+"</td><td>"+tab[i][0]+"</td><td>"+tab[i][2]+"</td><td>"+tab[i][2]+"</td></tr>"
                    alert(tab[i][1]);
               }
               
          }
          //console.log(tab[0]);
     }
}
//
var timer
function chrono1(){
     //Récupération des champs 
     var chr = document.getElementById('minuteur').value;
     var chr2 = document.getElementById('affichage').value;
     var decompte = chr;

     //Décrementation du compteur et affichage en consequence
     timer = setInterval(function Aar()
     {
          //Verification console.log(decompte);

          document.getElementById('affichage').innerHTML = decompte;
          decompte--;
          if(decompte == 0)
          {
               setTimeout(function ab()
               {
               document.getElementById('affichage').innerHTML = "c'est termine";
               console.log(decompte);
               clearInterval(timer);
               },1000);
          }
     },1000);
     
}
function myStopFunction() {
     clearTimeout(timer);
     
   }

function myStopFunction1() {
     document.getElementById('affichage').innerHTML = "";
     document.getElementById('minuteur').value= "";
     
   }


//Enregistrement des données de l'alarme et renvoi dans un tableau
function rec()
{
     const mnt = new Date();

     h=mnt.getHours();
     m=mnt.getMinutes();
     s=mnt.getSeconds();

     

     tps = document.getElementById('tps').value;
     event = document.getElementById('event').value;
    
     document.getElementById('alarme').innerHTML="<tr><td>Nom</td><td>Heure</td><td>Statut</td><td>Temps restant</td></tr>";
     
     //t = [tps,event,"en cours"];
     const i = tab.push([tps,event,"en cours"]) - 1;

     
     
     let target = new Date(mnt.getFullYear(), mnt.getMonth(), mnt.getDate(), tab[i][0][0] + tab[i][0][1], tab[i][0][3] + tab[i][0][4], 00);
     let x = target - mnt ;
     let y = x / 1000;
     let z= Math.round(y);

    
     
     //console.log(z);

     
     tab[i].push(z);

     setInterval(function()
     {
          if (h < 10) {
               h = "0" + h;
          }
          if (s < 10) {
               s = "0" + s;
          }
           if (m < 10) {
               m = "0" + m;
          }

          document.getElementById('alarme').innerHTML="";
          document.getElementById('alarme').innerHTML="<tr><td>Nom</td><td>Heure</td><td>Statut</td><td>Temps restant</td></tr>";

          
              

          tab.forEach(element => {
               console.log(element);
               if(element[3]>0)
               {
                    element[3] = element[3]-1;
                    show = element[3]+"s";
                
               }
               else
               {
                    element[3]="--";
                    show = element[3];
                    element[2] = "Passer";
               }
               
               document.getElementById('alarme').innerHTML+="<tr><td>"+element[1]+"</td><td>"+element[0]+"</td><td>"+element[2]+"</td><td>"+show+"</td></tr>";
          
          });


         
     },1000);

     
     
     //console.log(tab[i][0],tps);
     

}

//Chronometre 


var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}

function chronoTour(){

     time = document.getElementById("chronotime").innerHTML
     var n = $( "#affichage1 p" ).length;
     

     //document.getElementById("affichage1").innerHTML = time
     	
     $("#affichage1").append("<p>Vous avez effectuer "+n+" Tour "+time+"</p>");
     

     
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}



setDate();
setInterval(setDate,1000);