function currentTime() {
    const current = new Date();
    const time = current.getHours();
    const minutes = current.getMinutes();
    const weekday = current.getDay();
    const day = current.getDate();
    const month = current.getMonth();
    const year = current.getFullYear();
    document.getElementsByTagName('h3').innerText = `Today is ${time} on ${weekday}, ${day} ${month}, ${year}`;
}

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
    const number = Math.abs(Math.round(document.getElementById('favoriteNumber').value));
    const polygonNames = ['Zero-gon', 'Monogon', 'Digon', 'Triangle', 'Quadrilateral', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon'];
    const name = polygonNames[number] || 'Unknown polygon';
    alert(name);
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