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

        allButtons.forEach((button) => {
            button.classList.add("none")
        })
        const gaPraten = document.querySelector("article:nth-of-type(2) section");

        gaPraten.classList.add('praten');

    }

    // potato transformeert
    var aardappelKnop = document.querySelector("article > button");

    if (welkePotato == "plastic") {
        aardappelKnop.classList.add("plastic");
    }
    else if (welkePotato == "toystory") {
        aardappelKnop.classList.remove("plastic");
        aardappelKnop.classList.add("toystory");

        

    }

   //kietelen


    // props terug en weer klikbaar
    allButtons.forEach( button => {
        button.classList.remove("op");
        button.removeAttribute("inert")
    });

    //  info weg
    const gaPraten = document.querySelector("article:nth-of-type(2) section");

    if(welkePotato == "aardappel"){
        gaPraten.classList.remove('praten');

    }else if(welkePotato == "plastic"){
        gaPraten.classList.remove('praten');

    }

    // info update
    const deH2 = document.querySelector("article:nth-of-type(2) section h2");
    const deP = document.querySelector("article:nth-of-type(2) section p");
    const deP2 = document.querySelector("article:nth-of-type(2) section p:nth-of-type(2)");

    if (welkePotato == "plastic") {
        deH2.innerHTML = "1960";
        deP.innerHTML = "Ik ben van plastic geworden vanwege veiligheid en gezondheid. Maar ik ben bij de iets jongere jeugd pas bekend geworden toen ik in een film mocht spelen.";
        deP2.innerHTML = "klik op mijn lichaam om mij te zien uit een film!";
    }
    else if (welkePotato == "toystory") {
        deH2.innerHTML = "1995";
        deP.innerHTML = "Ja nu herken je me wel hè. Dat klopt de film heet Toystory waar ik in speelde. Na het succes van de eerste film uit 1995, kwamen er nog 3 andere films uit.";
        deP2.innerHTML = "";
    }

    
}
