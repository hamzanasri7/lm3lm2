document.addEventListener('DOMContentLoaded', () => {
    
    // تفعيل التمرير الناعم (Smooth Scroll) عند الضغط على زر البدء
    const startBtn = document.querySelector('.btn-primary');
    
    if(startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault(); // منع السلوك الافتراضي للرابط
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if(targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // يمكنك إضافة تأثيرات بسيطة أخرى هنا إذا أردت مستقبلاً
    console.log("Landing page loaded successfully.");
});