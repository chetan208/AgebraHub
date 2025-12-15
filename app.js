
        // ========== SMOOTH SCROLLING ==========
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ========== MOBILE MENU TOGGLE ==========
        function toggleMenu() {
            const menu = document.getElementById('nav-menu');
            menu.classList.toggle('active');
        }

        function closeMenu() {
            const menu = document.getElementById('nav-menu');
            menu.classList.remove('active');
        }

        // ========== TOPIC TAB SWITCHING ==========
        function showTopic(topicId) {
            // Hide all topic contents
            const contents = document.querySelectorAll('.topic-content');
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // Remove active class from all buttons
            const buttons = document.querySelectorAll('.tab-button');
            buttons.forEach(button => {
                button.classList.remove('active');
            });

            // Show selected topic
            document.getElementById(topicId).classList.add('active');

            // Add active class to clicked button
            event.target.classList.add('active');
        }

        // ========== ACTIVE NAV LINK ON SCROLL ==========
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav ul li a');

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href').slice(1) === current) {
                    link.style.color = '#a8d8ff';
                }
            });
        });
    