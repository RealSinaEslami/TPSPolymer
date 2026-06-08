// contact.js - مدیریت فرم تماس و خبرنامه برای پروژه Tailwind

document.addEventListener('DOMContentLoaded', function() {
    
    // ----- مدیریت فرم تماس -----
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // دریافت مقادیر فرم
            const name = contactForm.querySelector('input[name="name"]')?.value;
            const phone = contactForm.querySelector('input[name="phone"]')?.value;
            const email = contactForm.querySelector('input[name="email"]')?.value;
            const subject = contactForm.querySelector('select[name="subject"]')?.value;
            const message = contactForm.querySelector('textarea[name="message"]')?.value;
            
            // اعتبارسنجی ساده
            if (!name || !phone || !message) {
                showStatus('❌ لطفاً فیلدهای نام، شماره تماس و پیام را پر کنید.', '#dc2626');
                return;
            }
            
            // بررسی شماره تماس (ساده)
            const phoneRegex = /^09[0-9]{9}$/;
            const cleanPhone = phone.replace(/\s/g, '');
            if (!phoneRegex.test(cleanPhone)) {
                showStatus('❌ شماره تماس باید با 09 شروع شود و 11 رقم باشد.', '#dc2626');
                return;
            }
            
            // شبیه‌سازی ارسال به سرور
            const formData = {
                name: name,
                phone: phone,
                email: email,
                subject: subject,
                message: message,
                date: new Date().toISOString()
            };
            
            console.log('داده‌های فرم تماس:', formData);
            
            // نمایش پیام موفقیت (با استایل Tailwind)
            if (formStatus) {
                formStatus.innerHTML = '✅ پیام شما با موفقیت دریافت شد. کارشناسان ما به زودی با شما تماس می‌گیرند.';
                formStatus.classList.remove('text-red-600');
                formStatus.classList.add('text-[#0b3780]', 'font-semibold');
            }
            
            // ریست فرم
            contactForm.reset();
            
            // پاک کردن پیام بعد از 5 ثانیه
            setTimeout(() => {
                if (formStatus) {
                    formStatus.innerHTML = '';
                    formStatus.classList.remove('text-[#0b3780]', 'font-semibold');
                }
            }, 5000);
        });
    }
    
    // تابع نمایش وضعیت
    function showStatus(message, color) {
        if (formStatus) {
            formStatus.innerHTML = message;
            formStatus.style.color = color;
        }
    }
    
    // ----- مدیریت خبرنامه -----
    const newsBtn = document.getElementById('newsBtn');
    const newsEmail = document.getElementById('newsEmail');
    
    if (newsBtn && newsEmail) {
        newsBtn.addEventListener('click', function() {
            const email = newsEmail.value.trim();
            
            if (!email) {
                alert('❌ لطفاً ایمیل خود را وارد کنید.');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                alert('❌ لطفاً یک ایمیل معتبر وارد کنید (مثال: name@domain.com).');
                return;
            }
            
            console.log('ایمیل ثبت شده در خبرنامه:', email);
            alert('✅ با تشکر، ایمیل شما با موفقیت در خبرنامه ثبت شد.');
            newsEmail.value = '';
        });
    }
    
    // ----- اسکرول روان برای لینک‌های داخلی -----
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === "#" || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
    
});