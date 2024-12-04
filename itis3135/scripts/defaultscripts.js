// current time, day of week, and date
function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString(undefined, options);
    document.getElementById('date-display').innerText = `Today is ${time} on ${date}`;
  }
  
  function handleUserForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mood = document.getElementById('mood').value;
    const greeting = `Kinetic Hamster ⚡︎ Small Pet Supplies welcomes you, ${name}! We're glad you are doing ${mood}!`;
    document.getElementById('greeting').innerText = greeting;
  }
  
  function showPolygonName() {
    const favNumberField = document.getElementById('fav-number');
    let favNumber = parseFloat(favNumberField.value);
  
    if (isNaN(favNumber)) {
      alert("Please enter a valid number.");
      return;
    }
  
    favNumber = Math.abs(Math.round(favNumber));
    const polygonNames = [
      "monogon",
      "digon",
      "trigon",
      "tetragon",
      "pentagon",
      "hexagon",
      "heptagon",
      "octagon",
      "nonagon",
      "decagon"
    ];
  
    if (favNumber > 0 && favNumber <= 10) {
      alert(`A polygon with ${favNumber} sides is called a ${polygonNames[favNumber - 1]}.`);
    } else {
      alert("Please enter a number between 1 and 10.");
    }
  }
  
  // company functions
  function functionOne() {
    alert("Hamsters are excellent climbers!");
  }
  
  function functionTwo() {
    alert("Did you know hamsters can store food in their cheeks?");
  }
  
  function functionThree() {
    alert("Fun fact: Hamsters blink one eye at a time!");
  }
  
  function functionFour() {
    alert("Our hamster wheels are designed for speed!");
  }
  
  // event listeners
  document.addEventListener("DOMContentLoaded", () => {
    displayDateTime();
  
    // user form event data
    const userForm = document.getElementById('user-form');
    userForm.addEventListener('submit', handleUserForm);
  
    // polygon data
    const polygonSubmitButton = document.getElementById('polygon-submit');
    polygonSubmitButton.addEventListener('click', showPolygonName);
  
    // company functions
    document.getElementById('function-one').addEventListener('click', functionOne);
    document.getElementById('function-two').addEventListener('click', functionTwo);
    document.getElementById('function-three').addEventListener('click', functionThree);
    document.getElementById('function-four').addEventListener('click', functionFour);
  });