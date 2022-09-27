const $Mobile_GalleryContainer = document.querySelector(
    ".gallery__image-container"
  ),
  $ModalBck = document.querySelector(".modal-navbar__background");

export const MOBILE_EVENTS = {
  gallery__next: {
    gallery: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
    action: (classTarget) => {
      const { gallery } = MOBILE_EVENTS[classTarget];
      let bckImg = getComputedStyle($Mobile_GalleryContainer).backgroundImage,
        currentImg = gallery.filter((img) => bckImg.includes(img)),
        nextIndex = gallery.indexOf(currentImg[0]) + 1,
        nextImg =
          nextIndex === gallery.length ? gallery[0] : gallery[nextIndex];
      $Mobile_GalleryContainer.style.backgroundImage = `url('./images/${nextImg}')`;
    },
  },
  gallery__previous: {
    gallery: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
    action: (classTarget) => {
      const { gallery } = MOBILE_EVENTS[classTarget];
      let bckImg = getComputedStyle($Mobile_GalleryContainer).backgroundImage,
        currentImg = gallery.filter((img) => bckImg.includes(img)),
        prevIndex = gallery.indexOf(currentImg[0]) - 1,
        prevImg =
          prevIndex < 0 ? gallery[gallery.length - 1] : gallery[prevIndex];
      $Mobile_GalleryContainer.style.backgroundImage = `url('./images/${prevImg}')`;
    },
  },
  header__menu: {
    action: (classTarget) => {
      $ModalBck.classList.toggle("--invisible");
    },
  },
  "modal-navbar__close": {
    action: (classTarget) => {
      $ModalBck.classList.toggle("--invisible");
    },
  },
};
