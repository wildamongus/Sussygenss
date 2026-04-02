// Clickable team cards to show info (can replace alert with modal later)
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('More info coming soon!');
    });
});

// Optional: clickable link-card hover effect (makes them feel interactive)
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.querySelector('a').href;
        window.open(link, '_blank');
    });
});
