// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');
        if (window.innerWidth <= 768) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            });
        }
    });
});
