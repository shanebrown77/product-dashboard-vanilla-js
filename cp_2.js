// coding project 2

// fetching products/step 3

function fetchProductsThen() {
    fetch ("https://www.course-api.com/javascript-store-products")
    .then(response => response.json())
    .then (products => {
        products.forEach(product => {
    
    console.log(`product - ${product.fields.name}`);
    
});
})
   .catch(error => console.error('error loading the product data:', error));

}

// products async/step 4

async function fetchProductsAsync() {
  try {
    let response = await fetch ("https://www.course-api.com/javascript-store-products");
    let data = await response.json();
    displayProducts(data);
  } catch (error) {
    handleError(error);
  }

}

// writing display products/step 5

function displayProducts(products) {
    let container = document.getElementById("product-container");
    products.slice(0,5).forEach((p) => {
    let {name, price, image} = p.fields;
    let card = document.createElement("div");
    let imageUrl = Array.isArray(image) ? image[0].url:image;
        
    card.className = "product-card";
        card.innerHTML = `
        
        <img class= "product-image" src="${imageUrl}" alt="${name}">
        <div class= "product-name">${name}</div>
        <div class="product-price">$${(price/100)

        }
        </div>
        `
        container.appendChild(card);
    });
}

// handle error/step 6 

function handleError(error) {
console.error(`an error has occured: ${error.message}`);
}

// calling functions/step 7

fetchProductsThen();
fetchProductsAsync();