// Optional click logging
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Link clicked:', btn.previousElementSibling.previousElementSibling.textContent);
    });
});
