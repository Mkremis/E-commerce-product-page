const $HeaderCartNot = document.querySelector(".header__cart--notification"),
  $Input = document.querySelector(".input__number"),
  $CartModal_cont = document.querySelector(".cart-modal__details-container"),
  $CartModal_empty = document.querySelector(".cart-modal__empty"),
  $CartModal_checkout = document.querySelector(".cart-modal__checkout");

export const ALL_EVENTS = {
  input__plus: {
    action: (classTarget) => {
      let newValue = parseInt($Input.value) + 1;
      $Input.value = newValue;
    },
  },
  input__minus: {
    action: (classTarget) => {
      let newValue = parseInt($Input.value) - 1;
      $Input.value = newValue < 0 ? 0 : newValue;
    },
  },
  details__button: {
    action: (classTarget, eTarget) => {
      $HeaderCartNot.style.display = "block";
      if ($Input.value > 0) {
        $HeaderCartNot.textContent = $Input.value;
        localStorage.setItem("cart", $Input.value);
      } else {
        $HeaderCartNot.textContent = "0";
        $HeaderCartNot.style.display = "none";
        localStorage.removeItem("cart");
      }
    },
  },
  "header__cart-img": {
    action: (classTarget, eTarget) => {
      const $modalCart = document.querySelector(".cart-modal"),
        $modalPrice = document.querySelector(".cart-modal__price"),
        $totalPrice = document.querySelector(".cart-modal__total-price"),
        $priceNow = document.querySelector(".price_now");
      let price = parseInt($priceNow.textContent.replace("$", "")),
        quantity = parseInt(localStorage.getItem("cart")),
        totalPrice = price * quantity;
      $modalCart.classList.toggle("--invisible");
      if (quantity > 0) {
        $modalPrice.textContent = `${$priceNow.textContent} x ${quantity}`;
        $totalPrice.textContent = `$${totalPrice}`;
      } else {
        document
          .querySelector(".cart-modal__details-container")
          .classList.toggle("--invisible");
        $CartModal_empty.classList.toggle("--invisible");
        $CartModal_checkout.classList.toggle("--invisible");
      }
    },
  },

  "cart-modal__delete": {
    action: (classTarget, eTarget) => {
      localStorage.setItem("cart", "0");
      $HeaderCartNot.textContent = "0";
      $HeaderCartNot.style.display = "none";
      $Input.value = "0";
      $CartModal_cont.classList.toggle("--invisible");
      $CartModal_empty.classList.toggle("--invisible");
      $CartModal_checkout.classList.toggle("--invisible");
    },
  },
};
