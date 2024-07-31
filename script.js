document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    function addNewContent(sectionId, title, content) {
        const section = document.getElementById(sectionId);
        const newArticle = document.createElement('article');
        newArticle.classList.add('new-content');
        newArticle.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        section.appendChild(newArticle);
    }

    addNewContent('ai', 'Machine Learning Breakthroughs', 'Recent advancements in machine learning...');
});
