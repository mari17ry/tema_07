
document.addEventListener("DOMContentLoaded", start);
let dyr = [
  {"navn":"gris","type":"pattedyr","billede":"http://mabe-kea.dk/E19/pics/frog.png", "levested":"svinefarm"},
  {"navn":"frø","type":"snaskedreng","billede":"http://mabe-kea.dk/E19/pics/pig.png", "levested":"hvor der er vådt"},
  {"navn":"ræv","type":"pattedyr","billede":"http://mabe-kea.dk/E19/pics/fox.png", "levested":"i naturen og byer"},
  {"navn":"sild","type":"fisk","billede":"http://mabe-kea.dk/E19/pics/sild.jpg", "levested":"vand"},
  {"navn":"krokodille","type":"dino","billede":"http://mabe-kea.dk/E19/pics/kroko.jpg", "levested":"sumpet og varmt"}
];

const dyrType = document.querySelector("#dyrinfo");
console.log(dyr);



function start() {
  dyr.forEach(dyr => {
    dyrType.innerHTML += `<p>${dyr.navn} som er ${dyr.type} og ser sådan ud ${dyr.billede} og lever her ${dyr.levested}</p>`
  })
  
  
}



// -------------------------------------------------------------------



// console.log(dyr[0,1,2,3,4].navn);



// const dyrType = dyr.navn+" som bor i "+dyr.levested;
// const destination = document.querySelector("#dyr");




destination.querySelector("h3").textContent = dyrType;
destination.querySelector("p:nth-child(4)").textContent += dyr.levested;
destination.querySelector("p:nth-child(3)").textContent += dyr.type;
destination.querySelector("img").src = dyr.billede;

// -----------------------------------------------------------------------------------

// OK DET DER ER GALT UMIDDELBART er at hele det der ${} show ikke reagerer på en skid. 
// console log kan godt hente variablen 'navn' men viser bare det der '${dyr.navn}'
// fordi det ikke betyder en skid kodningsmæssigt. 
// OKAY FIX tror måske kun det virker med `` og ikke '' !!!!!!!!!!! shift og tryk knappen 2 gange







