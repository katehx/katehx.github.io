//prices for each item
const prices = {
    shirt: 15.00,
    hoodie: 30.00,
    hat: 10.00
};
//size options for each item
const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

function calculateTotals() {
    // initialize total variables
    let shirtsTotal = 0;
    let hoodiesTotal = 0;
    let hatsTotal = 0;

    //loop through each of the sizes selected for shirts
    sizes.forEach((size) => {
        const quantity = parseInt(document.getElementById(`${size}-shirts`).value) || 0;
        shirtsTotal += quantity * prices.shirt; //multiply total calculated shirts by price to get total price for shirts
    });

    //loop through each of the sizes selected for hoodies
    sizes.forEach((size) => {
        const quantity = parseInt(document.getElementById(`${size}-hoodies`).value) || 0;
        hoodiesTotal += quantity * prices.hoodie; //multiply total calculated hoodies by price to get total price for hoodies
    });

    //no loop needed since hats only have one size options
    const hatsQuantity = parseInt(document.getElementById('hats').value) || 0; //get total number of hats
    hatsTotal = hatsQuantity * prices.hat; // get total hat price by multiplying total by price

    //set text for subtotal to the calculated total, round to 2 decimal if needed
    document.getElementById('shirts-subtotal').textContent = `$${shirtsTotal.toFixed(2)}`;
    document.getElementById('hoodies-subtotal').textContent = `$${hoodiesTotal.toFixed(2)}`;
    document.getElementById('hats-subtotal').textContent = `$${hatsTotal.toFixed(2)}`;
    // calculate total between all 3 products by adding together
    const total = shirtsTotal + hoodiesTotal + hatsTotal;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`; // set text for order total 
}

// add event listeners to each number input to trigger recalculation whenever a number is changed
document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener('input', calculateTotals);
});

calculateTotals();
