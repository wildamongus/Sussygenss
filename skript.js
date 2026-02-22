// Mobile-friendly dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
    drop.addEventListener('click', () => {
        if(window.innerWidth <= 768){
            const content = drop.querySelector('.dropdown-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Optional: Close dropdowns if clicking outside
window.addEventListener('click', function(e){
    if(!e.target.matches('.dropbtn')){
        dropdowns.forEach(drop => {
            const content = drop.querySelector('.dropdown-content');
            if(window.innerWidth <= 768) content.style.display = 'none';
        });
    }
});
