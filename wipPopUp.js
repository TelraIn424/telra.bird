const splashScreen = document.getElementById('splash-screen');
const enterButton = document.getElementById('enter-btn');

enterButton.addEventListener('click', () => {
    // Fade out effect
    splashScreen.style.opacity = '0';
    
    // Hide and millisecond
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }
    , 500); 
});