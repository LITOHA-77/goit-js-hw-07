import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listForRender = document.querySelector(".gallery");
const imageMarkup = createGalleryMarkup(galleryItems);
listForRender.insertAdjacentHTML("beforeend", imageMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

listForRender.addEventListener("click", onListForRenderClick);

function onListForRenderClick(e) {
  e.preventDefault();

  let gallery = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {});
}
