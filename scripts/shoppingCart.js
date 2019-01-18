const shoppingCart = []

const displayShoppingCart = () => {
    const cartEl = document.querySelector("#cartItems")
    cartEl.innerHTML = ""

    let grandTotal = 0

    shoppingCart.forEach((product, idx) => {

    /* Create new quantity div (line 16) in the shopping cart section */  
        cartEl.innerHTML +=
            `
        <section class="shoppingCart__item">
        <div>${product.name}</div>
        <div>Quanity:${product.quantity}</div>       
        <div>${product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</div>

        <button id="${idx}" class="cart_removeButton">Remove</button>
        </section>
        `

        grandTotal += product.price
    })

    cartEl.innerHTML += `
      <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}</h3>
    `

    // Get a reference to all purchase buttons
    const allRemoveButtons = document.querySelectorAll(".cart_removeButton")

    // Add a click event listener to each button
    for (const button of allRemoveButtons) {
        button.addEventListener(
            "click",
            (event) => {
                const indexToRemove = parseInt(event.target.id)
                const currentProduct = shoppingCart[indexToRemove]
                if (currentProduct.quantity > 1) {
                    currentProduct.quantity --
                    displayShoppingCart()
                } else { 
                currentProduct.quantity = 1
                shoppingCart.splice(indexToRemove, 1)
                displayShoppingCart()
                }
            }
            )
    }
}














