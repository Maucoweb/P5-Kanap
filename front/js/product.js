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

    const kanapColors = kanapCard.colors;
    console.log(kanapColors)

    kanapColors.forEach(function (color) {
        var color = document.createElement("option")
        var optionValue = document.querySelector("select")
        color.setAttribute("value", [color, kanapCard.colors])
        console.log(color)
        color.textContent = color;
        optionValue.appendChild(color)


    })
}
























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
