
document.addEventListener("DOMContentLoaded", start);
function start() {
  console.log(start);
}


let dyr = {
  "navn":"gris",
  "type":"pattedyr",
  "billede":"http://mabe-kea.dk/E19/pics/pig.png",
  "levested":"svinefarm"
};
// nøgle/værdiparrene

let navn = dyr.navn;
console.log(navn);
// skriver dyrets navn i konsollen


const destination = document.querySelector("#dyr");
const dyrType = dyr.navn+" som bor i "+dyr.levested;

// her brude jeg kunne skrive flere ting?
destination.querySelector("h3").textContent = dyrType;
destination.querySelector("p:nth-child(4)").textContent += dyr.levested;
destination.querySelector("p:nth-child(3)").textContent += dyr.type;
destination.querySelector("img").src = dyr.billede;


// OK DET DER ER GALT UMIDDELBART er at hele det der ${} show ikke reagerer på en skid. 
// console log kan godt hente variablen 'navn' men viser bare det der '${dyr.navn}'
// fordi det ikke betyder en skid kodningsmæssigt. 







