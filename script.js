document.addEventListener('DOMContentLoaded', function() {
    // ����� DOM
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const findWifiBtn = document.getElementById('findWifiBtn');
    const submitComplaint = document.getElementById('submitComplaint');
    
    // ������� ��������
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const verificationModal = document.getElementById('verificationModal');
    
    // ����� �������
    const closeButtons = document.querySelectorAll('.close');
    
    // ��� ����� ����� ������
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });
    
    // ��� ����� �������
    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });
    
    // �� ����� �� ����� ��� ���
    findWifiBtn.addEventListener('click', function() {
        alert('��� ������ ����� ����� ������ �����');
    });
    
    // ����� ����
    submitComplaint.addEventListener('click', function() {
        const complaintText = document.getElementById('complaintText').value;
        if (complaintText.trim() === '') {
            alert('������ ����� �� ������ �� �������');
            return;
        }
        alert('�� ����� ����� �����. ����� �� ��� ��������!');
        document.getElementById('complaintText').value = '';
    });
    
    // ����� ������� ��������
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // ����� ������� ��� ����� ������
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // ����� �������
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('���� ������ ��� �������');
            return;
        }
        
        // ��� ���� ��� ������ ������
        const phone = document.getElementById('phone').value;
        alert(`�� ����� ��� ������ ��� �����: ${phone}`);
        
        // ����� ����� ������� ������ ����� ������
        registerModal.style.display = 'none';
        verificationModal.style.display = 'block';
    });
    
    // ����� ������
    const verificationForm = document.getElementById('verificationForm');
    verificationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const code = document.getElementById('verificationCode').value;
        
        // ��� ����� �� ��� �����
        if (code === '123456') { // ��� �������� ��ء �� ������� ������ ��� ������ �� ����� ������
            alert('�� ������ �����! ����� ���� ���������.');
            verificationModal.style.display = 'none';
            
            // ��� ����� ����� ����� �������� ��� ������ �������� �� ���� ������
        } else {
            alert('��� ������ ��� ����. ������ �������� ��� ����.');
        }
    });
    
    // ����� ����� ������
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const phone = document.getElementById('loginPhone').value;
        const password = document.getElementById('loginPassword').value;
        
        // ��� ����� �� ������ ������
        if (phone && password) { // �� ������� ������ ��� ������ �� ����� ��������
            alert('�� ����� ������ �����!');
            loginModal.style.display = 'none';
            
            // ��� ����� ����� �������� ��� ���� ������
            // window.location.href = 'dashboard.html';
        } else {
            alert('��� ������ �� ���� ������ ��� �����');
        }
    });
    
    // ������ ���� ����� ������ GPS
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log('�� ����� ������:', position.coords.latitude, position.coords.longitude);
                // ��� ����� ����� ���������� ��� ������ ������ ��� ���� ����� ��� ���
            },
            function(error) {
                console.error('��� �� ����� ������:', error.message);
                alert('��� ������ ������ ������ �������� ��� ������');
            }
        );
    } else {
        alert('������ �� ���� ����� ������');
    }
    
    // ������ �� ����� ��������
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    function updateOnlineStatus() {
        if (!navigator.onLine) {
            alert('��� ��� ���� ���������. ����� ������� ������� �� ��� ��� ������� ���� ��� ������� �� �� ����.');
        }
    }
    
    // ����� ������ ������� �� ����� ������� ������ ��� ��� ������� ���������
    if (!navigator.onLine) {
        loadOfflineData();
    }
    
    function loadOfflineData() {
        // ��� ����� ����� �������� �������� ������
        console.log('���� ����� �������� �� ��� ��� �������...');
    }
    
    // ��� �������� ������ ��� ������� ���������
    function saveDataLocally(data) {
        localStorage.setItem('wifiNetworks', JSON.stringify(data));
        console.log('�� ��� �������� ������');
    }
});