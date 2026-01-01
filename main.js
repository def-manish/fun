const noBtn = document.querySelector('.no-btn');
        
        // Position No button initially
        positionNoButton();
        
        // Move the No button when mouse gets near it
        noBtn.addEventListener('mouseenter', moveNoButton);
        noBtn.addEventListener('touchstart', moveNoButton);

        function positionNoButton() {
            const container = document.querySelector('.container');
            const containerRect = container.getBoundingClientRect();
            noBtn.style.position = 'absolute';
            noBtn.style.right = '50px';
            noBtn.style.left = 'auto';
            noBtn.style.top = 'auto';
        }

        function moveNoButton(e) {
            e.preventDefault();
            
            // Get viewport dimensions
            const maxX = window.innerWidth - noBtn.offsetWidth - 20;
            const maxY = window.innerHeight - noBtn.offsetHeight - 20;
            
            // Random position anywhere on the page
            const randomX = Math.random() * maxX + 10;
            const randomY = Math.random() * maxY + 10;
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
            noBtn.style.right = 'auto';
        }

        function handleYes() {
            document.getElementById('questionSection').classList.add('hidden');
            document.getElementById('yesResponse').classList.add('show');
            document.getElementById('resetBtn').classList.add('show');
        }

        function handleNo() {
            document.getElementById('questionSection').classList.add('hidden');
            document.getElementById('noResponse').classList.add('show');
            document.getElementById('resetBtn').classList.add('show');
        }

        function resetQuestion() {
            document.getElementById('questionSection').classList.remove('hidden');
            document.getElementById('yesResponse').classList.remove('show');
            document.getElementById('noResponse').classList.remove('show');
            document.getElementById('resetBtn').classList.remove('show');
            
            // Reset No button position
            positionNoButton();
        }
