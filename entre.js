// --- 1. تغيير خلفية القائمة العلوية عند التمرير (Scroll) ---
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- 2. التحكم في قائمة الهامبرغر (Hamburger Menu) للهواتف ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// فتح وإغلاق القائمة عند الضغط على الزر
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// إغلاق القائمة تلقائياً عند النقر على أي رابط بداخلها
document.querySelectorAll('#nav-menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});