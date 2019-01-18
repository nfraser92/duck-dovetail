/*
    Function to convert a JavaScript object representation
    of a product to an HTML representation
*/
const createProductHTML = product => `
    <section class="product">
      <header class="product__header">
        <h2>${product.name}</h2>
      </header>

      <p class="product__description">
        ${product.description}
      </p>

      <footer class="product__footer">
        Price: ${product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})}

        <button id="${product.id}" class="product__purchaseButton">Purchase</button>
      </footer>

    </section>
`



// Iterate all products
for (product of products) {
    // Create HTML representation
    const theProductHTML = createProductHTML(product)

    // Reference to container
    const containerEl = document.querySelector("#productList")

    // Update HTML of container
    containerEl.innerHTML += theProductHTML
}

// Get a reference to all purchase buttons
const allButtons = document.querySelectorAll(".product__purchaseButton")

// Add a click event listener to each button
for (button of allButtons) {
    button.addEventListener(
        "click",
        (event) => {
            // Find the product whose `id` property is equal to
            // the "id" attribute of the button that was clicked on
            const foundProduct = products.find((product) => {
                return parseInt(event.target.id) === product.id
            })

            // Find products in the shopping cart and return the ID of those products
            const shoppingCartItems = shoppingCart.find((product) => {
                return parseInt(event.target.id) === product.id
            })

            // Only if something was found, add the object to the shopping cart array      
            if (foundProduct !== null && foundProduct !== shoppingCartItems) {
                // Increase quantity in shoping cart by 1, if it does not yet already exist in the shopping cart 
                foundProduct.quantity = 1
                // Push the product into the shopping cart array
                shoppingCart.push(foundProduct)
            } else {
                // If the product already exists in the shopping cart, then increase the quantity by 1 
                foundProduct.quantity++
                // Increase the price of the item in the cart by adding the new item to the existing price 
                foundProduct.price += foundProduct.price
            }
            // Invoke the function to show items in the shopping cart   
            displayShoppingCart()
        }
    )
}
















