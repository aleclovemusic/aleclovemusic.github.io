        // Category card interactions
        const categoryCards = document.querySelectorAll('.category-card');
        const galleries = document.querySelectorAll('.gallery');
        const closeButtons = document.querySelectorAll('.close-gallery');
        const lightbox = document.getElementById('lightbox');
        const photoItems = document.querySelectorAll('.photo-item');

        // Handle category card clicks
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                const targetGallery = document.getElementById(`${category}-gallery`);
                
                // Remove active class from all cards and galleries
                categoryCards.forEach(c => c.classList.remove('active'));
                galleries.forEach(g => g.classList.remove('active'));
                
                // Add active class to clicked card and corresponding gallery
                card.classList.add('active');
                targetGallery.classList.add('active');
                
                // Smooth scroll to gallery
                targetGallery.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Handle close gallery buttons
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all cards and galleries
                categoryCards.forEach(c => c.classList.remove('active'));
                galleries.forEach(g => g.classList.remove('active'));
                
                // Scroll back to categories
                document.querySelector('.categories').scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Handle photo clicks for lightbox: inject the clicked image (or placeholder) into the lightbox
        const lightboxContent = document.querySelector('.lightbox-content');
        photoItems.forEach(item => {
            item.addEventListener('click', () => {
                // Clear previous content
                lightboxContent.innerHTML = '';

                // If the photo-item contains an <img>, show that in the lightbox
                const img = item.querySelector('img');
                if (img) {
                    const lbImg = document.createElement('img');
                    lbImg.src = img.src;
                    lbImg.alt = img.alt || '';
                    lbImg.style.maxWidth = '100%';
                    lbImg.style.maxHeight = '80vh';
                    lbImg.style.objectFit = 'contain';
                    lightboxContent.appendChild(lbImg);
                } else {
                    // Otherwise clone any placeholder content (emoji + caption) or show a fallback message
                    const placeholder = item.querySelector('.photo-placeholder');
                    if (placeholder) {
                        lightboxContent.appendChild(placeholder.cloneNode(true));
                    } else {
                        const p = document.createElement('p');
                        p.textContent = 'Image not available';
                        lightboxContent.appendChild(p);
                    }
                }

                // Show the lightbox
                lightbox.classList.add('active');
            });
        });

        // Close lightbox when clicking outside the content
        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        // Close button (×) in the lightbox
        const lightboxClose = document.querySelector('.lightbox-close');
        if (lightboxClose) {
            lightboxClose.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent the outer lightbox click handler from also firing
                lightbox.classList.remove('active');
            });
        }

        // Prevent lightbox close when clicking on content
        document.querySelector('.lightbox-content').addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
                
                // Also close galleries if open
                const activeGallery = document.querySelector('.gallery.active');
                if (activeGallery) {
                    categoryCards.forEach(c => c.classList.remove('active'));
                    galleries.forEach(g => g.classList.remove('active'));
                }
            }
        });

        // Add loading animation for category transitions
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.add('loading');
                setTimeout(() => {
                    card.classList.remove('loading');
                    // Apply three-in-row logic after gallery loads
                    applyThreeInRowLogic();
                }, 500);
            });
        });

        // Function to detect and handle 3 consecutive landscape photos
        function applyThreeInRowLogic() {
            // Only apply on screens 1024px and wider
            if (window.innerWidth < 1024) return;

            const activeGallery = document.querySelector('.gallery.active');
            if (!activeGallery) return;

            const photoItems = activeGallery.querySelectorAll('.photo-item');
            let consecutiveLandscape = [];

            // Reset all three-in-row classes
            photoItems.forEach(item => item.classList.remove('three-in-row'));

            // Find consecutive landscape photos
            photoItems.forEach((item, index) => {
                if (item.classList.contains('landscape')) {
                    consecutiveLandscape.push(item);
                } else {
                    // Check if we have 3 or more consecutive landscape photos
                    if (consecutiveLandscape.length >= 3) {
                        consecutiveLandscape.forEach(landscapeItem => {
                            landscapeItem.classList.add('three-in-row');
                        });
                    }
                    consecutiveLandscape = [];
                }
            });

            // Check for consecutive landscape photos at the end
            if (consecutiveLandscape.length >= 3) {
                consecutiveLandscape.forEach(landscapeItem => {
                    landscapeItem.classList.add('three-in-row');
                });
            }
        }

        // Apply logic on window resize
        window.addEventListener('resize', debounce(applyThreeInRowLogic, 250));

        // Apply logic on initial load
        window.addEventListener('load', applyThreeInRowLogic);

        // Debounce function to limit resize event calls
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }