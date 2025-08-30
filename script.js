const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        if (window.innerWidth <= 800) nav.style.display = 'none';
    });
});

document.getElementById('year').textContent = new Date().getFullYear();
