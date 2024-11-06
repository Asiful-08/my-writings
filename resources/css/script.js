document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const article = this.closest('.writing-piece');
            const fullContent = article.querySelector('.full-content');
            const excerpt = article.querySelector('.excerpt');
            
            if (fullContent.style.display === 'none' || fullContent.style.display === '') {
                fullContent.style.display = 'block';
                excerpt.style.display = 'none';
                this.textContent = 'Read Less';
            } else {
                fullContent.style.display = 'none';
                excerpt.style.display = 'block';
                this.textContent = 'Read More';
            }
        });
    });
});