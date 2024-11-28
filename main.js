document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen-elemen yang diperlukan
    const productsSection = document.getElementById('products');
    const cards = document.querySelectorAll('#products .card');
    const orderSection = document.getElementById('order');
    const orderButtons = document.querySelectorAll('#products .btn-success');
    const orderForm = document.querySelector('#order form');
    const submitButton = orderForm.querySelector('button[type="submit"]');
    const homeSection = document.getElementById('home');

    // Fungsi untuk memeriksa apakah elemen berada di dalam viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fungsi untuk memeriksa visibilitas elemen
    function checkVisibility() {
        if (isInViewport(productsSection)) {
            cards.forEach((card, index) => {
                card.style.setProperty('--card-index', index); // Mengatur variabel CSS untuk delay animasi
                card.classList.add('fadeInUp');
            });
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    // Menambahkan event listener untuk tombol order
    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            orderSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Menambahkan event listener untuk tombol submit pada form order
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah pengiriman form untuk demonstrasi
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Menambahkan event listener untuk tombol submit pada form konsultasi
    const consultationForm = document.querySelector('#consultation form');
    const consultationButton = consultationForm.querySelector('button[type="submit"]');
    consultationButton.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah pengiriman form untuk demonstrasi
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Fungsi toggle untuk FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Fungsi untuk modal
    const loginLink = document.querySelector('.nav-link.login');
    const registerLink = document.querySelector('.nav-link.register');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeButtons = document.querySelectorAll('.close');

    loginLink.addEventListener('click', function () {
        loginModal.style.display = 'block';
    });

    registerLink.addEventListener('click', function () {
        registerModal.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // Menambahkan event listener untuk scroll
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

// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 800, // Durasi animasi dalam milidetik
    once: true,    // Animasi terjadi sekali saja
});
