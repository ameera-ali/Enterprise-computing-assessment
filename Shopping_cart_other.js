
document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartElement = document.querySelector(".cart-items");
    const totalPriceElement = document.querySelector(".total-price");
  
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", () => {
        const foodItem = button.closest(".food-items");
        const title = foodItem.querySelector("h5").innerText;
        const price = parseFloat(foodItem.querySelector(".price").innerText.replace('$', ''));
  
        const cartItem = cartItems.find(item => item.title === title);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cartItems.push({ title, price, quantity: 1 });
        }
  
        updateCart();
      });
    });
  
    function updateCart() {
      cartElement.innerHTML = '';
      let total = 0;
      cartItems.forEach(item => {
        const cartItemElement = document.createElement("li");
        cartItemElement.innerHTML = `${item.title} - $${item.price} x ${item.quantity}`;
        cartElement.appendChild(cartItemElement);
        total += item.price * item.quantity;
      });
      totalPriceElement.innerText = total.toFixed(2);
    }
  });