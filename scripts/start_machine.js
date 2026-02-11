// Terminal startup screen with audio
document.addEventListener('DOMContentLoaded', () => {
  // Create terminal overlay
  const terminalOverlay = document.createElement('div');
  terminalOverlay.id = 'terminal-overlay';
  terminalOverlay.classList.add('terminal-screen');
  
  // Create terminal block
  const terminalBlock = document.createElement('div');
  terminalBlock.classList.add('terminal-block');
  
  // Create terminal text content
  const terminalText = document.createElement('div');
  terminalText.classList.add('terminal-text');
  terminalText.textContent = '> System initializing...';
  
  terminalBlock.appendChild(terminalText);
  terminalOverlay.appendChild(terminalBlock);
  document.body.insertBefore(terminalOverlay, document.body.firstChild);
  
  // Play startup sound for 3 seconds
  const audio = new Audio('Comp_Startup.mp3');
  audio.play().catch(err => console.log('Audio autoplay prevented:', err));
  
  // Remove terminal screen after 3 seconds
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
    terminalOverlay.classList.add('fade-out');
    setTimeout(() => {
      terminalOverlay.remove();
    }, 500); // Allow fade-out animation
  }, 5000);
});
