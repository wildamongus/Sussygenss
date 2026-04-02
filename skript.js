const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

const images = Array.from(galleryItems).map(img => img.src);

galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        currentIndex = index;
    });
});

closeBtn.onclick = () => modal.style.display = 'none';

document.getElementById('prev').onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
};

document.getElementById('next').onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
};
