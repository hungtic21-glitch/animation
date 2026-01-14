// --- CHỨC NĂNG 3: HIỆU ỨNG XUẤT HIỆN KHI CUỘN (SCROLL REVEAL) --- [cite: 14, 49]
const revealElements = document.querySelectorAll('.scroll-reveal');

window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
        const speed = 100;
        // Sử dụng getBoundingClientRect theo yêu cầu bài tập 
        const rect = el.getBoundingClientRect().top; 
        if (rect < window.innerHeight - speed) {
            el.classList.add('visible');
        }
    });
});

// --- CHỨC NĂNG 5: CHẾ ĐỘ SÁNG/TỐI (DARK/LIGHT MODE) --- [cite: 22, 56]
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Sử dụng classList.toggle để chuyển đổi 
        body.classList.toggle('light-mode'); 
        
        // Đổi icon cho đúng trạng thái 
        if (body.classList.contains('light-mode')) {
            themeToggle.innerHTML = '🌙'; 
        } else {
            themeToggle.innerHTML = '☀️';
        }
    });
}

// --- ĐIỂM CỘNG: CUSTOM CURSOR (CON TRỎ CHUỘT TRANG TRÍ) --- [cite: 23, 57]
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
// --- CHỨC NĂNG 1: SCROLL SPY (Menu tự động sáng) ---
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Nếu cuộn qua 1/3 section thì coi như đã vào section đó
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active'); // Thêm class active cho menu tương ứng
        }
    });
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Tự động chuyển slide sau 5 giây
setInterval(nextSlide, 5000);