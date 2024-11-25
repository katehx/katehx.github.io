function currentTime() {
    const current = new Date();
    const hours = current.getHours();
    const minutes = current.getMinutes().toString().padStart(2, '0');
    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = weekdayNames[current.getDay()];
    const day = current.getDate();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[current.getMonth()];
    const year = current.getFullYear();
    document.querySelector('h3').innerText = `Today is ${hours}:${minutes} on ${weekday}, ${day} ${month}, ${year}`;
}
window.onload = currentTime;


// Call the function on page load
currentTime();

// Process user information
function processUserInfo() {
    const userName = document.getElementById('userName').value;
    const userMood = document.getElementById('userMood').value;
    const greetingMessage = `The Hamster Brand welcomes you, ${userName}! We're glad you are doing ${userMood}!`;
    document.getElementById('greetingMessage').innerText = greetingMessage;
}

// Process polygon information
function processPolygonInfo() {
    const inputNumber = document.getElementById('favoriteNumber').value;
    const roundedNumber = Math.abs(Math.round(inputNumber));
    const polygonNames = ['Zero-gon', 'Monogon', 'Digon', 'Triangle', 'Quadrilateral', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon'];
    const polygonName = polygonNames[roundedNumber] || 'Unknown polygon';
    alert(`The polygon with ${roundedNumber} sides is called: ${polygonName}`);
}


// Example brand-specific functions
function randomHamsterFact() {
    alert("Hamsters can store food in their cheeks to eat later!");
}

function calculateHamsterRunSpeed() {
    alert("A hamster can run up to 5 miles per night on its wheel!");
}

function generateHamsterName() {
    alert("Your hamster's name is Nibbles the Brave!");
}

function suggestHamsterDiet() {
    alert("Hamsters love fresh vegetables and grains. Don't forget the occasional treat!");
}

function planHamsterAdventure() {
    alert("Your hamster is ready for a fun tunnel maze adventure!");
}

