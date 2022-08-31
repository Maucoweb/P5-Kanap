(async function () {
    const itemId = getItemId()
    console.log(itemId)
    const kanapData = await getItem(itemId);
    createProduct(kanapData);




})()

//Récupération de l'ID à associer à chaque fiche produit

function getItemId() {

    return new URL(location.href).searchParams.get("id");
}

// Application de l'ID récupéré à l'URL de chaque produit 

function getItem(itemId) {

    return fetch(`http://localhost:3000/api/products/${itemId}`)
        .then(itemData => {
            console.log(itemData);
            return itemData.json()

        })
}

// Fonction affichant les informations pour les différentes fiches de produit

function createProduct(kanapCard) {
    var h1 = document.querySelector("#title")
    h1.setAttribute("id", "title");
    h1.textContent = kanapCard.name;

    var pPrice = document.querySelector("#price")
    pPrice.setAttribute("id", "price");
    pPrice.textContent = kanapCard.price;

    var pDescription = document.querySelector("#description")
    pDescription.setAttribute("id", "description");
    pDescription.textContent = kanapCard.description;


    var img = document.createElement("img");
    img.setAttribute("src", kanapCard.imageUrl);
    var imageContainer = document.querySelector(".item__img");
    console.log(kanapCard)
    imageContainer.appendChild(img);

    var kanapColors = kanapCard.colors;
    console.log(kanapColors)
    var optionValue = document.querySelector("select")


    kanapColors.forEach(function (colorData) {
        var option = document.createElement("option")
        option.setAttribute("value", colorData)
        option.textContent = colorData;
        optionValue.appendChild(option)
        console.log(colorData)

    })



    // const btnAddToBasket = document.querySelector("#addToCart");
    // btnAddToBasket.addEventListener("click", () => {
    //     let addToCart = document.querySelector("#colors", "#quantity")
    //     for (let i = 0; i < addToCart.length; i++) {
    //         const basket = addToCart[i];
    //     }

    const envoyerPanier = document.querySelector("#addToCart");

    envoyerPanier.addEventListener("click", () => {




        var optionsProduit = {
            nomKanap: kanapCard.name,
            id_kanap: kanapCard._id,
            color_kanap: optionValue.value,
            articleQt: quantity.value,
        }

        console.log(optionsProduit);

        let optionProduitLocalStorage = JSON.parse(localStorage.getItem("kanap"));

        if (optionProduitLocalStorage) {
            let asSameProduct = optionsProduit.id_kanap && optionsProduit.color_kanap
            asSameProduct = false
            optionProduitLocalStorage.forEach(function (kanapPanier) {
                if (kanapPanier.id_kanap === optionsProduit.id_kanap && kanapPanier.color_kanap === optionsProduit.color_kanap) {
                    asSameProduct = true;
                    kanapPanier.articleQt += optionsProduit.articleQt
                    console.log(optionProduitLocalStorage)
                }
                localStorage.setItem("kanap", JSON.stringify(optionProduitLocalStorage))
                console.log(optionProduitLocalStorage)

            })

            if (asSameProduct = false) {

                optionProduitLocalStorage.push(optionsProduit);
                localStorage.setItem("kanap", JSON.stringify(optionProduitLocalStorage));
                console.log(optionProduitLocalStorage)
            }
        }
        else {

            optionProduitLocalStorage = [];
            optionProduitLocalStorage.push(optionsProduit);
            localStorage.setItem("kanap", JSON.stringify(optionProduitLocalStorage));

        }
    })
}


//     addToCart.onclick = () => {
//         const panier = {
//             articleQt: quantity.value,
//             colors: optionValue.value,
//         }
//         localStorage.setItem("articleQt", document.querySelector("#quantity").value)
//         localStorage.setItem("colors", document.querySelector("#colors").value)
//         localStorage.setItem("panier", JSON.stringify(panier))

//     }


// }





// const local = JSON.parse(localStorage.getItem("panier"))

// localStorage.setItem("clé","valeur")
// localStorage.getItem("clé")
// localStorage.onclick = () =>{
// JSON.stringify(objet)
// JSON.parse(string)





















// const kanapColors = await getItem(kanapData.colors);
// createOption(kanapColors);
// var kanapColors = document.querySelector("#colors");
// createOption.forEach(function (kanapColors) {
//     var optionValue = new Option(kanapCard.colors);
//     colors.options[colors.options.lenght] = optionValue;
//     colors.addEventListener('change', function () {
//         var tab = [];
//         for (var i = 0; i < colors.options.lenght; i++) {
//             if (colors.options[i].selected === true) tab[i] = i;
//         }

//         console.log(tab);
// })

 // let select = "<select id='couleur'>";
    // kanapCard.colors.forEach((itemData) => {
    //     select += "<option>" + itemData + "</option>";
    // });
    // select += "</select>";
