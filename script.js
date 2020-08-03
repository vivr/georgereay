  const onGalleryImageClick = () => {
        const galleryImageList = document.querySelectorAll(".gallery-item img");
        const galleryImages = [...galleryImageList];

        galleryImages.forEach(image => {
          image.addEventListener("click", event => {
            galleryImageOpen(event.target);
          })
        })
  }

  const galleryImageOpen = image => {
    const imageSrc = image.getAttribute("src");
    const openedImage = `<div class='backdrop'><img src='${imageSrc}' alt='' />
                        <span class="backdrop-close">X</span></div>`;

    document.body.insertAdjacentHTML("beforeend", openedImage);
    galleryImageClose();
  }

  const galleryImageClose = () => {
    const closeButton = document.querySelector(".backdrop-close");

    closeButton.addEventListener("click", () => {
      const backdrop = document.querySelector(".backdrop");
      backdrop.remove();
    })
  }

  onGalleryImageClick();