document.addEventListener('DOMContentLoaded', function () {
    const productsSection = document.getElementById('products');
    const cards = document.querySelectorAll('#products .card');
    const orderSection = document.getElementById('order');
    const orderButtons = document.querySelectorAll('#products .btn-success');
    const orderForm = document.querySelector('#order form');
    const submitButton = orderForm.querySelector('button[type="submit"]');
    const homeSection = document.getElementById('home');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        if (isInViewport(productsSection)) {
            cards.forEach((card, index) => {
                card.style.setProperty('--card-index', index); // Set CSS variable for animation delay
                card.classList.add('fadeInUp');
            });
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            orderSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission for demonstration
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

// Pilih semua kartu
const cards = document.querySelectorAll('.card');

// Tambahkan event listener untuk klik pada setiap kartu
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Hapus kelas 'clicked' dari semua kartu lainnya
        cards.forEach(c => c.classList.remove('clicked'));

        // Tambahkan kelas 'clicked' ke kartu yang diklik
        card.classList.add('clicked');
    });
});


AOS.init({
    duration: 800, // Durasi animasi dalam milidetik
    once: true,    // Animasi terjadi sekali saja
});
