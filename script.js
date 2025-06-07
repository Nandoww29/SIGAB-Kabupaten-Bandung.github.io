document.addEventListener("DOMContentLoaded", function () {
  // Script navbar hide/show on scroll
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');

  // Ambil tinggi navbar aktual
  const navbarHeight = navbar.offsetHeight;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScroll && currentScroll > navbarHeight) {
      // Scroll ke bawah: sembunyikan navbar sepenuhnya
      navbar.style.top = `-${navbarHeight}px`;
    } else {
      // Scroll ke atas: tampilkan navbar
      navbar.style.top = "0";
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Script hero section slide otomatis
  const slides = document.querySelectorAll('.hero-slide');
  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  setInterval(showNextSlide, 4000); // ganti slide tiap 4 detik
});
var map = L.map('map').setView([-7.000, 107.600], 12);

            
            document.getElementById('dark-toggle').addEventListener('click', function () {
                document.body.classList.toggle('dark-mode');
              
                // Ganti ikon tombol 🌙 ↔ ☀️
                this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
              });
              
              let currentSlide = 0;
              const slides = document.querySelectorAll('.hero-slide');
              setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
              }, 5000);