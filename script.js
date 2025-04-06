document.addEventListener('DOMContentLoaded', function() {
    var viewCount = 0;
    var viewAdBtn = document.getElementById('view-ad-btn');
    var countDisplay = document.getElementById('count');

    viewAdBtn.addEventListener('click', function() {
        // هنا يمكنك تضمين كود تشغيل إعلان الفيديو من AdSense
        // على سبيل المثال، فتح نافذة منبثقة تحتوي على الإعلان

        viewCount++;
        countDisplay.textContent = viewCount;
    });
});
