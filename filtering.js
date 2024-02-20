function filterMusic(category) {
    const musicItems = document.querySelectorAll('.music-item');

    musicItems.forEach(item => {
        const itemCategory = item.dataset.category;

        if (category === 'all' || itemCategory === category) {
            // Display items matching the selected category or show all if 'All' is selected
            item.style.display = 'grid';
        } else {
            // Hide items not matching the selected category
            item.style.display = 'none';
        }
    });

    // Display a message if no matching items found
    const noMatchMessage = document.getElementById('noMatchMessage');
    if (category !== 'all' && document.querySelectorAll('.music-item:not([style*="display: none"])').length === 0) {
        noMatchMessage.style.display = 'grid';
    } else {
        noMatchMessage.style.display = 'none';
    }
}
