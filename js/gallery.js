const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
];

const gallery = document.querySelector('.gallery');

function createGalleryItem(image) {
  const item = document.createElement('li');
  item.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.alt = image.description;
  img.setAttribute('data-source', image.original);

  link.appendChild(img);
  item.appendChild(link);

  return item;
}

function renderGallery() {
  const items = images.map(createGalleryItem);
  gallery.innerHTML = '';
  gallery.append(...items);
}

renderGallery();

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    const largeImageUrl = e.target.dataset.source;
    const instance = basicLightbox.create(`
          <img src="${largeImageUrl}" width="800" height="600">
        `);
    instance.show();
  }
});
