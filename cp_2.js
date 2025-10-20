// coding project 2

// fetching products/step 3

function fetchProductsThen() {

fetch ("https://www.course-api.com/javascript-store-products")
}











// handle error/step 6 

function handleError(error) {
console.error(`an error has occured: ${error.message}`);
}

// calling functions/step 7

fetchProductsThen();
fetchProductsAsync();