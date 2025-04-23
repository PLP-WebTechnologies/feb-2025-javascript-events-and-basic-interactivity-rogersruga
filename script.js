let score = 0;

// Event Handling: Button click to increase score
document.getElementById('gameButton').addEventListener('click', () => {
    score++;
    document.getElementById('scoreDisplay').textContent = `Score: ${score}`;
    changeButtonText();
});

// Hover effect
document.getElementById('gameButton').addEventListener('mouseenter', () => {
    document.getElementById('gameButton').style.backgroundColor = '#d1d1d1';
});

document.getElementById('gameButton').addEventListener('mouseleave', () => {
    document.getElementById('gameButton').style.backgroundColor = '';
});

// Keypress detection
document.addEventListener('keypress', (e) => {
    if (e.key === 'a') {
        score += 5;
        document.getElementById('scoreDisplay').textContent = `Score: ${score}`;
    }
});

// Secret action: double-click or long press on the button

// Double-click event
document.getElementById('gameButton').addEventListener('dblclick', () => {
    alert('Double-click detected! Score increased by 10!');
    score += 10;
    document.getElementById('scoreDisplay').textContent = `Score: ${score}`;
    
    // Trigger Confetti Animation
    confetti();
});

// Long press event
let pressTimer;
document.getElementById('gameButton').addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        alert('Long press detected! Score increased by 20!');
        score += 20;
        document.getElementById('scoreDisplay').textContent = `Score: ${score}`;
        
        // Trigger Confetti Animation
        confetti();
    }, 1000); // 1 second
});

document.getElementById('gameButton').addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});

// Interactive Elements: Button text change
function changeButtonText() {
    if (score % 2 === 0) {
        document.getElementById('gameButton').textContent = 'Click me again!';
    } else {
        document.getElementById('gameButton').textContent = 'Keep Going!';
    }
}

// Image gallery (CSS handles hover effect)

// Tabs or accordion-style content
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        let tabId = tab.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`tab${tabId}`).classList.add('active');
    });
});

// Form Validation
document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!email.includes('@')) {
        alert('Please enter a valid email!');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters!');
        return;
    }

    alert('Form submitted successfully!');
});

// Real-time feedback
document.getElementById('password').addEventListener('input', () => {
    let feedback = document.getElementById('realTimeFeedback');
    if (document.getElementById('password').value.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters.';
    } else {
        feedback.textContent = '';
    }
});
