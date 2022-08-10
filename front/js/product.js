(async function () { 
    const itemId = getItemId ()
    console.log(itemId)
    const item = await getItem (itemId)
    displayId (itemId)
    
    }) ()
    

    
    function getItemId () {
        
        return new URL (location.href).searchParams.get("id");
    }

    function getItem (itemId) {
        
return fetch(`http://localhost:3000/api/products/${itemId}`)
    .then(itemId => {
        console.log(itemId);
        return itemId.json();
        
    })
    
    .then(itemId => {
        console.log(itemId);
      itemId.for(function(displayId) {
    itemId(displayId);


      })
        


        })

        
    }

  

   
        



   
    