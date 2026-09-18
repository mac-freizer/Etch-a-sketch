const container = document.getElementById('container'); // Adjusted to your HTML ID
const resizeBtn = document.getElementById('resize-btn'); // Assuming you added this button to HTML

function createGrid(squaresPerSide) {
  // Clear existing grid
  container.innerHTML = '';

  // Calculate percentage size for flexbox
  const squareSize = 100 / squaresPerSide;
  const totalSquares = squaresPerSide * squaresPerSide;

  // Generate new grid
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square'); // Using your existing class name
    
    // Apply dynamic sizing
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    
    // Your original hover event listener
    square.addEventListener('mouseover', () => {
        square.classList.add('hovered');
    });
    // Assuming 'square' represents a div element inside your grid
square.addEventListener('mouseover', (e) => {
  const target = e.target;

  // Requirement 1: Apply a random color on every hover
  target.style.backgroundColor = getRandomRGB();

  // Requirement 2: Retrieve the current opacity, defaulting to 0 if not yet set
  let currentOpacity = parseFloat(target.style.opacity) || 0;

  // Increase opacity by 0.1 (10%) up to a maximum of 1.0 (fully colored)
  if (currentOpacity < 1) {
    target.style.opacity = currentOpacity + 0.1;
  }
});
    
    container.appendChild(square);
  }
}

// Button event listener
resizeBtn.addEventListener('click', () => {
  let userInput = prompt("Enter the number of squares per side (Maximum 100):");
  
  if (userInput !== null && userInput.trim() !== "") {
    let size = parseInt(userInput);
    
    if (size > 100) {
      alert("Limiting to 100x100 to prevent browser performance issues.");
      size = 100;
    } else if (size <= 0 || isNaN(size)) {
      alert("Please enter a valid positive number.");
      return; 
    }
    
    createGrid(size);
  }
});
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Initialize standard 16x16 (256 squares) on load
createGrid(16);