document.addEventListener('DOMContentLoaded', () => {
    
    const contactBtn = document.getElementById('contactBtn');

    // إضافة حدث عند الضغط على زر التواصل
    contactBtn.addEventListener('click', () => {
        
        // تأثير بصري سريع عند الضغط
        contactBtn.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            contactBtn.style.transform = 'scale(1)';
            
            // يمكنك تغيير هذا الرابط ليفتح حسابك على الواتساب أو بريدك الإلكتروني
            // مثلاً: window.location.href = "mailto:contact@jamesadams.com";
            alert('شكراً لتواصلك! سيتم تحويلك إلى صفحة المراسلة قريباً.');
            
        }, 150);
    });

});