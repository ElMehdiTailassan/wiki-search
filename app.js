// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

//selectionner le formulaire

const form = document.querySelector("form")
const input = document.querySelector("input")
const errorMsg = document.querySelector(".error-msg")

//etre a l'ecoute du submit du formulaire

form.addEventListener("submit", handleSubmit)

//la fonction handleSubmit prendre en parametre l'object e rendu par le eventListner
function handleSubmit(e) {
    //je veux prevenir le comportement par defaut 
    e.preventDefault()

    //si notre input value est evalué a false cad la chaine de caractère est vide
    if(input.value === ""){
        errorMsg.textContent = "Merci de remplir l input";
        return;
    } else {
        errorMsg.textContent = "";
        wikiApiCall(input.value);
    }


    //async cava nous permettre d'attendre la reponse de requete de l'api avant de continuer l'execution du js restant
    async function wikiApiCall(searchInput){

        //await fetch : j'attend la repose de fetch ; fetch veut dire aller chercher 
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`);


        const data = await response.json();

        console.log(data);

        //je lui passe les resultats de la recherche 

        createCards(data.query.search)

    }

    function createCards(data) {

        //si la reponse est vide cad le tableau de retour de  ma recherche ne contient rien j'affiche un message  : aucun resultat

        if(!data.length){
            errorMsg.textContent = "Aucun resultat DESOLE"
            return;
        }
        //sinon on vient creer nos cartes 
        //pour chaque element on créer une carte 

        const card = document.createElement("div");
        card.className = "result-item";
        card.innerHTML = `
        <h3 class="result-title">
            <a href="" target="_blank">${el.title}</a>
        </h3>
        `




    }

}