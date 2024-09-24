let cart =[];

function addToCart(id, itemName, price) {
    cart.push({id,itemName,price})

    // Update the cart display
    updateCart();
}

function removeFromCart(itemName) {
    cart = cart.filter(function(item) {
        return(
            item.itemName !== itemName
        )
    })
    
    updateCart()
}

// Function to update the cart display
function updateCart() {
    let cartItemsDiv = document.getElementById('cart-items');
    let cartTotalDiv = document.getElementById('total');

    // Clear previous cart display
    cartItemsDiv.innerHTML = '';
    
    // Calculate the total price
    let totalPrice = 0;


    // Generate cart items HTML
    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `<span>
            <p>${item.itemName} - $${item.price}</p>
            <button id="remove" onclick="removeFromCart('${item.itemName}')">X</button>
        </span>`;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += item.price;
        // console.log(cart)
    });

    // Update total price
    cartTotalDiv.textContent = `Total: $${totalPrice}`;
}