function changeImage(src) {
  document.getElementById("main-image").src = src;
}

function increaseQuantity() {
  let qty = document.getElementById("qty");
  qty.value = parseInt(qty.value) + 1;
}

function decreaseQuantity() {
  let qty = document.getElementById("qty");
  if (parseInt(qty.value) > 1) {
    qty.value = parseInt(qty.value) - 1;
  }
}