document.addEventListener('DOMContentLoaded', function() {
    // ÚäÇÕÑ DOM
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const findWifiBtn = document.getElementById('findWifiBtn');
    const submitComplaint = document.getElementById('submitComplaint');
    
    // ÇáäãÇĞÌ ÇáãäÈËŞÉ
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const verificationModal = document.getElementById('verificationModal');
    
    // ÃÒÑÇÑ ÇáÅÛáÇŞ
    const closeButtons = document.querySelectorAll('.close');
    
    // İÊÍ äãæĞÌ ÊÓÌíá ÇáÏÎæá
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });
    
    // İÊÍ äãæĞÌ ÇáÊÓÌíá
    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });
    
    // ÒÑ ÇáÈÍË Úä ÔÈßÇÊ æÇí İÇí
    findWifiBtn.addEventListener('click', function() {
        alert('åĞå ÇáãíÒÉ ÊÊØáÈ ÊÓÌíá ÇáÏÎæá ÃæáÇğ');
    });
    
    // ÅÑÓÇá Ôßæì
    submitComplaint.addEventListener('click', function() {
        const complaintText = document.getElementById('complaintText').value;
        if (complaintText.trim() === '') {
            alert('ÇáÑÌÇÁ ÅÏÎÇá äÕ ÇáÔßæì Ãæ ÇáãŞÊÑÍ');
            return;
        }
        alert('Êã ÅÑÓÇá ÔßæÇß ÈäÌÇÍ. ÔßÑÇğ áß Úáì ãáÇÍÙÇÊß!');
        document.getElementById('complaintText').value = '';
    });
    
    // ÅÛáÇŞ ÇáäãÇĞÌ ÇáãäÈËŞÉ
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // ÅÛáÇŞ ÇáäãÇĞÌ ÚäÏ ÇáäŞÑ ÎÇÑÌåÇ
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // äãæĞÌ ÇáÊÓÌíá
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('ßáãÉ ÇáãÑæÑ ÛíÑ ãÊØÇÈŞÉ');
            return;
        }
        
        // åäÇ äÑÓá ÑŞã ÇáåÇÊİ ááÊÍŞŞ
        const phone = document.getElementById('phone').value;
        alert(`Êã ÅÑÓÇá ÑãÒ ÇáÊÍŞŞ Åáì ÇáÑŞã: ${phone}`);
        
        // ÅÎİÇÁ äãæĞÌ ÇáÊÓÌíá æÅÙåÇÑ äãæĞÌ ÇáÊÍŞŞ
        registerModal.style.display = 'none';
        verificationModal.style.display = 'block';
    });
    
    // äãæĞÌ ÇáÊÍŞŞ
    const verificationForm = document.getElementById('verificationForm');
    verificationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const code = document.getElementById('verificationCode').value;
        
        // åäÇ äÊÍŞŞ ãä ÕÍÉ ÇáÑãÒ
        if (code === '123456') { // åĞÇ ááÇÎÊÈÇÑ İŞØ¡ İí ÇáÊØÈíŞ ÇáİÚáí íÊã ÇáÊÍŞŞ ãä ÇáÑãÒ ÇáÕÍíÍ
            alert('Êã ÇáÊÍŞŞ ÈäÌÇÍ! ÍÓÇÈß ÌÇåÒ ááÇÓÊÎÏÇã.');
            verificationModal.style.display = 'none';
            
            // åäÇ íãßäß ÅÚÇÏÉ ÊæÌíå ÇáãÓÊÎÏã Åáì ÇáÕİÍÉ ÇáÑÆíÓíÉ Ãæ áæÍÉ ÇáÊÍßã
        } else {
            alert('ÑãÒ ÇáÊÍŞŞ ÛíÑ ÕÍíÍ. ÇáÑÌÇÁ ÇáãÍÇæáÉ ãÑÉ ÃÎÑì.');
        }
    });
    
    // äãæĞÌ ÊÓÌíá ÇáÏÎæá
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const phone = document.getElementById('loginPhone').value;
        const password = document.getElementById('loginPassword').value;
        
        // åäÇ äÊÍŞŞ ãä ÈíÇäÇÊ ÇáÏÎæá
        if (phone && password) { // İí ÇáÊØÈíŞ ÇáİÚáí íÊã ÇáÊÍŞŞ ãä ŞÇÚÏÉ ÇáÈíÇäÇÊ
            alert('Êã ÊÓÌíá ÇáÏÎæá ÈäÌÇÍ!');
            loginModal.style.display = 'none';
            
            // åäÇ íãßäß ÊæÌíå ÇáãÓÊÎÏã Åáì áæÍÉ ÇáÊÍßã
            // window.location.href = 'dashboard.html';
        } else {
            alert('ÑŞã ÇáåÇÊİ Ãæ ßáãÉ ÇáãÑæÑ ÛíÑ ÕÍíÍÉ');
        }
    });
    
    // ãÍÇßÇÉ äÙÇã ÊÍÏíÏ ÇáãæŞÚ GPS
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log('Êã ÊÍÏíÏ ÇáãæŞÚ:', position.coords.latitude, position.coords.longitude);
                // åäÇ íãßäß ÅÑÓÇá ÇáÅÍÏÇËíÇÊ Åáì ÇáÎÇÏã ááÍÕæá Úáì ÃŞÑÈ ÔÈßÇÊ æÇí İÇí
            },
            function(error) {
                console.error('ÎØÃ İí ÊÍÏíÏ ÇáãæŞÚ:', error.message);
                alert('íÌÈ ÇáÓãÇÍ ÈÊÍÏíÏ ÇáãæŞÚ áÇÓÊÎÏÇã åĞå ÇáãíÒÉ');
            }
        );
    } else {
        alert('ãÊÕİÍß áÇ íÏÚã ÊÍÏíÏ ÇáãæŞÚ');
    }
    
    // ÇáÊÍŞŞ ãä ÇÊÕÇá ÇáÅäÊÑäÊ
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    function updateOnlineStatus() {
        if (!navigator.onLine) {
            alert('ÃäÊ ÛíÑ ãÊÕá ÈÇáÅäÊÑäÊ. íãßäß ÇÓÊÎÏÇã ÇáÊØÈíŞ İí æÖÚ ÚÏã ÇáÇÊÕÇá æáßä ÈÚÖ ÇáãíÒÇÊ ŞÏ áÇ ÊÚãá.');
        }
    }
    
    // ÊÍãíá ÈíÇäÇÊ ÇáÊØÈíŞ ãä ĞÇßÑÉ ÇáÊÎÒíä ÇáãÍáí ÚäÏ ÚÏã ÇáÇÊÕÇá ÈÇáÅäÊÑäÊ
    if (!navigator.onLine) {
        loadOfflineData();
    }
    
    function loadOfflineData() {
        // åäÇ íãßäß ÊÍãíá ÇáÈíÇäÇÊ ÇáãÍİæÙÉ ãÓÈŞÇğ
        console.log('ÌÇÑò ÊÍãíá ÇáÈíÇäÇÊ İí æÖÚ ÚÏã ÇáÇÊÕÇá...');
    }
    
    // ÍİÙ ÇáÈíÇäÇÊ ãÍáíÇğ ÚäÏ ÇáÇÊÕÇá ÈÇáÅäÊÑäÊ
    function saveDataLocally(data) {
        localStorage.setItem('wifiNetworks', JSON.stringify(data));
        console.log('Êã ÍİÙ ÇáÈíÇäÇÊ ãÍáíÇğ');
    }
});