const $DskModalGallery = document.querySelector(".modal-gallery__background"),
  $DskModalGallery_Container = document.querySelector(
    ".modal-gallery__image-container"
  );

export const DSK_EVENTS = {
  "gallery__image-container": {
    action: (e) => {
      $DskModalGallery.style.display = "flex";
    },
  },
  "modal-gallery__close": {
    action: (e) => {
      $DskModalGallery.style.display = "none";
    },
  },
  "modal-gallery__next": {
    gallery: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
    action: (classTarget) => {
      const { gallery } = DSK_EVENTS[classTarget];
      const $DskModalGalleryContainer = document.querySelector(
        ".modal-gallery__image-container"
      );
      let bckImg = getComputedStyle($DskModalGalleryContainer).backgroundImage,
        currentImg = gallery.filter((img) => bckImg.includes(img)),
        nextIndex = gallery.indexOf(currentImg[0]) + 1,
        nextImg =
          nextIndex === gallery.length ? gallery[0] : gallery[nextIndex];
      $DskModalGallery_Container.style.backgroundImage = `url('./images/${nextImg}')`;
    },
  },
  "modal-gallery__previous": {
    gallery: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
    action: (classTarget) => {
      const { gallery } = DSK_EVENTS[classTarget];
      const $DskModalGalleryContainer = document.querySelector(
        ".modal-gallery__image-container"
      );
      let bckImg = getComputedStyle($DskModalGalleryContainer).backgroundImage,
        currentImg = gallery.filter((img) => bckImg.includes(img)),
        prevIndex = gallery.indexOf(currentImg[0]) - 1,
        prevImg =
          prevIndex < 0 ? gallery[gallery.length - 1] : gallery[prevIndex];
      $DskModalGallery_Container.style.backgroundImage = `url('./images/${prevImg}')`;
    },
  },
  "modal-gallery__thumnail": {
    gallery: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
    action: (classTarget, eTarget) => {
      const { gallery } = DSK_EVENTS[classTarget];
      let index = eTarget.id.replace("m", "") - 1;
      $DskModalGallery_Container.style.backgroundImage = `url('./images/${gallery[index]}')`;
    },
  },
  gallery__thumnail: {
    gallery: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
    action: (classTarget, eTarget) => {
      const { gallery } = DSK_EVENTS[classTarget],
        $DskGallery_Container = document.querySelector(
          ".gallery__image-container"
        );
      let index = eTarget.id - 1;
      $DskGallery_Container.style.backgroundImage = `url('./images/${gallery[index]}')`;
    },
  },
};
