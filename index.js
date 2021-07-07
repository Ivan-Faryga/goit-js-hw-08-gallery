import galleryItems from "./app.js";
console.log(galleryItems);

// ======================== Step 1 - converting incoming data into Markup ==============================

//получаю доступ к родителю галереи:

const gallery = document.querySelector(".js-gallery");

// переменная для функции создающей разметку:

const imgCardsMarkup = createImgGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imgCardsMarkup);

// функция, которая преображает входящий массив объектов в разметку:

function createImgGalleryMarkup(galleryItems) {
  return galleryItems
    .map((galleryItem) => {
      return `<li class="gallery__item">
                <a
                    class="gallery__link"
                    href="${galleryItem.original}"
                >
                <img
                    class="gallery__image"
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"
                    />
                </a>
            </li>`;
    })
    .join("");
}

// ================================ Step 2 - =======================================================
