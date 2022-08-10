(async function () {
    const itemId = getItemId()
    console.log(itemId)
    displayItem(await getItem(itemId));

})()



function getItemId() {

    return new URL(location.href).searchParams.get("id");
}

function getItem(itemId) {

    return fetch(`http://localhost:3000/api/products/${itemId}`)
        .then(itemId => {
            console.log(itemId);
            return itemId.json()

        })


}

function displayItem(kanap) {
    var img = document.createElement("img");
    img.setAttribute("src", kanap.imageUrl);
    var imageContainer = document.querySelector(".item__img");

    imageContainer.appendChild(img);
}







