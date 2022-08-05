/*let kanapData  = [];

   
const fetchKanap = async () => {
    await fetch('http://localhost:3000/api/products/')
        .then((res) => res.json ())
        .then((promise) => {
            kanapData = promise ;
            console.log(kanapData);
        })
 };


const kanapDisplay = async () => {
    await fetchKanap ();

   document.getElementById(
       'items',
    ).innerHTML= `<div><img class="image-kanap" src="${kanapData [3].imageUrl}"alt= "image canapé"/></div>`;
};


kanapDisplay ();*/

 //***************************************************************************************

/*main ()

async function main () {
    const articles = await getArticles ()

    for(article of articles) {
        displayArticles(article)
    }
}


function getArticles () {
    fetch('http://localhost:3000/api/products')
    .then(function(httpBodyResponse) {
      return  httpBodyResponse.json ()
    })
    .then(function(articles) {
        console.log(articles)
    })
    
}

function displayArticles () {
    document.getElementById('items')
}*/

// ******************************************************************************************




/*data.forEach(function(element,index) {
        var a = document.createElement("a")
     a.setAttribute("href", "http://localhost:3000/api/products");
     items.appendChild(a);

    var article = document.createElement("article")
    items.appendChild(article);

      var img = document.createElement ("img")
    img.setAttribute("src", "images/", Url.imageUrl +"jpeg" );
    img.setAttribute("alt", "altTxt");
    img.textContent = element.altTxt;
    article.appendChild(img);


     var h3 = document.createElement("productName");
    h3.setAttribute("class", "productName");
    h3.textContent = element.name;

   
    var p = document.createElement("productDescription");
    p.setAttribute("class", "productDescription");
    p.textContent = element.description;

    article.appendChild (img);
    article.appendChild(h3);
    article.appendChild(p)

     });   
}) */

// *********************************************************************************************************



let Url = ("http://localhost:3000/api/products");

fetch(Url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        var items = document.getElementById("items");

        data.forEach(function(kanapData,index) {
    createCard(kanapData, index);
 
})
    })

function createCard(kanapData, index){
    var a = document.createElement("a")
     a.setAttribute("href", "http://localhost:3000/api/products");
     

     
     var article =document.createElement("article");

     var img = document.createElement ("img");
     img.setAttribute("src", kanapData.imageUrl)
     img.setAttribute("alt", "altText");

    var h3 = document.createElement("productName");
    h3.setAttribute("class", "productName");
    h3.textContent = kanapData.name;


     var p = document.createElement("productDescription");
    p.setAttribute("class", "productDescription");
    p.textContent = kanapData.description;

    article.appendChild (img);
    article.appendChild(h3);
    article.appendChild(p)

    a.appendChild(article);
    items.appendChild(a);
}






