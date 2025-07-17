// add item carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//deletar item carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if( index !== -1) {
        userCart.splice(index, 1);
        console.log("Item removed from cart.");
        return;
    }
    console.log("Item not found in cart.");
}

// remove item carrinho
async function removeItem(userCart, item) {
    const indexFind = userCart.findIndex(cartItem => cartItem.name === item);
    if (indexFind === -1) {
       console.log("Item not found in cart.");
       return;
    }
    if (userCart[indexFind].quantity > 1) {
        userCart[indexFind].quantity -= 1;
        console.log("Item quantity decreased by 1.");
        return;
    }
    if (userCart[indexFind].quantity === 1) {
        userCart.splice(indexFind, 1);
        console.log("Item removed from cart.");
        return;
    }

}

// calcular o total 
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\n Total:", result);
}

async function displayCart(userCart) {
    console.log("\n Items in cart:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}, R$: ${item.price} | Quantity: ${item.quantity}x | Subtotal: R$: ${item.subtotal()}`);
    });
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };