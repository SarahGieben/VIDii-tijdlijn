// JavaScript Document
console.log("Howdy!");

var welkePotato = "aardappel";

/**************************/
/*   Verplaatsen Meneer   */
/*   Met dank aan Sanne   */
/**************************/

const deHoedM = document.querySelector("button:first-of-type");
const deOgenM = document.querySelector("button:nth-of-type(2)");
const deSnorM = document.querySelector("button:nth-of-type(3)");
const deArmenM = document.querySelector("button:nth-of-type(4)");
const deSchoenenM = document.querySelector("button:nth-of-type(5)");

deHoedM.addEventListener("click", zetHoedOp);
deOgenM.addEventListener("click", zetOgenOp);
deSnorM.addEventListener("click", zetSnorOp);
deArmenM.addEventListener("click", zetArmenOp);
deSchoenenM.addEventListener("click", zetSchoenenOp);

function zetHoedOp() {
	deHoedM.classList.toggle("op");
}
function zetOgenOp() {
	deOgenM.classList.toggle("op");
}
function zetSnorOp() {
	deSnorM.classList.toggle("op");
}
function zetArmenOp() {
	deArmenM.classList.toggle("op");
}
function zetSchoenenOp() {
    deSchoenenM.classList.toggle("op");
}




/***************************/
/*     Buttons ophalen     */
/*    Met dank aan Sasja   */
/***************************/

allButtons = document.querySelectorAll("section > button");
// met querySelectorAll haal je alle buttons op

allButtons.forEach((button) => {
    //voor elke button, voer een stukje code uit
    button.addEventListener("click", ()=> {

        var propDieNietOpIs = document.querySelector("section > button:not(.op)");


        if (propDieNietOpIs == null ) {
            // props niet meer klikbaar
            allButtons.forEach( button => {
                button.setAttribute("inert", "true");
            });

            // aardappel klikbaar maken
            var aardappelKnop = document.querySelector("article > button");
            aardappelKnop.addEventListener("click", transform, {once:true});

            // toon info
            const gaPraten = document.querySelector("article:nth-of-type(2) section");
            gaPraten.classList.add('praten');
        }
    })
})



/**************************/
/*     Plastic maken      */
/*                        */
/**************************/

function transform() {
    if (welkePotato == "aardappel") {
        welkePotato = "plastic";
    }
    else if (welkePotato == "plastic") {
        welkePotato = "toystory";
    }

    // potato transformeert
    var aardappelKnop = document.querySelector("article > button");

    if (welkePotato == "plastic") {
        aardappelKnop.classList.add("plastic");
    }
    else if (welkePotato == "toystory") {
        aardappelKnop.classList.remove("plastic");
        aardappelKnop.classList.add("toystory");

        var allButtons = document.querySelectorAll("section > button");

    }

   //kietelen


    // props terug en weer klikbaar
    allButtons.forEach( button => {
        button.classList.remove("op");
        button.removeAttribute("inert")
    });

    //  info weg
    const gaPraten = document.querySelector("article:nth-of-type(2) section");
    gaPraten.classList.remove('praten');

    // info update
    const deH2 = document.querySelector("article:nth-of-type(2) section h2");
    const deP = document.querySelector("article:nth-of-type(2) section p");

    if (welkePotato == "plastic") {
        deH2.innerHTML = "plastic";
        deP.innerHTML = "in delft moest ik kuststof zeggen";
    }
    else if (welkePotato == "toystory") {
        deH2.innerHTML = "vette commercie";
        deP.innerHTML = "weer retro in de verkoop";
    }

    
}
