const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Вариант 1
const galleryRef = document.querySelector('.gallery');

const makeGalleryCard = (images) => { 
  const imageRef = document.createElement('img');
  imageRef.src = images.url;
  imageRef.alt = images.alt;
  imageRef.width = 320;
  imageRef.classList.add('gallery__item');

  return imageRef;
};

const elements = images.map(makeGalleryCard);

galleryRef.append(...elements);