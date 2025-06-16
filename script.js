document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const sessionBtns = document.querySelectorAll('.session-btn');
    const notificationSound = document.getElementById('notificationSound');

    // State Variables
    let timerId = null;
    let timeRemaining = 1500; // Default to 25 minutes (in seconds)
    let isPaused = true;
    let currentSessionTime = 1500;

    // --- Functions ---
    
    function updateDisplay() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
        document.title = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} - Pomodoro`;
    }

    function startTimer() {
        if (isPaused) {
            isPaused = false;
            startBtn.classList.add('hidden');
            pauseBtn.classList.remove('hidden');

            timerId = setInterval(() => {
                timeRemaining--;
                updateDisplay();
                if (timeRemaining <= 0) {
                    clearInterval(timerId);
                    notificationSound.play();
                    alert("Session finished!");
                }
            }, 1000);
        }
    }

    function pauseTimer() {
        isPaused = true;
        clearInterval(timerId);
        startBtn.classList.remove('hidden');
        pauseBtn.classList.add('hidden');
    }

    function resetTimer() {
        pauseTimer();
        timeRemaining = currentSessionTime;
        updateDisplay();
    }

    function selectSession(e) {
        sessionBtns.forEach(btn => btn.classList.remove('active'));
        const selectedBtn = e.target;
        selectedBtn.classList.add('active');

        currentSessionTime = parseInt(selectedBtn.dataset.time, 10);
        
        // Update body class for background color change
        document.body.className = '';
        if (selectedBtn.textContent === 'Work') document.body.classList.add('work-session');
        else if (selectedBtn.textContent === 'Short Break') document.body.classList.add('short-break-session');
        else if (selectedBtn.textContent === 'Long Break') document.body.classList.add('long-break-session');
        
        resetTimer();
    }

    // --- Event Listeners ---
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    sessionBtns.forEach(btn => btn.addEventListener('click', selectSession));

    // --- Initial Setup ---
    updateDisplay();
    document.body.classList.add('work-session');
});