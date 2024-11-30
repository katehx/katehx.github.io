// Prices for each item
const prices = {
    shirt: 15.00,
    hoodie: 30.00,
    hat: 10.00,
};

// Sizes for shirts and hoodies
const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

// Function to calculate totals
function calculateTotals() {
    let shirtsTotal = 0;
    let hoodiesTotal = 0;
    let hatsTotal = 0;

    // Calculate shirts subtotal
    sizes.forEach(size => {
        const quantity = parseInt(document.getElementById(`${size}-shirts`).value) || 0;
        shirtsTotal += quantity * prices.shirt;
    });

    // Calculate hoodies subtotal
    sizes.forEach(size => {
        const quantity = parseInt(document.getElementById(`${size}-hoodies`).value) || 0;
        hoodiesTotal += quantity * prices.hoodie;
    });

    // Calculate hats subtotal
    const hatsQuantity = parseInt(document.getElementById('hats').value) || 0;
    hatsTotal = hatsQuantity * prices.hat;

    // Update subtotals
    document.getElementById('shirts-subtotal').textContent = `$${shirtsTotal.toFixed(2)}`;
    document.getElementById('hoodies-subtotal').textContent = `$${hoodiesTotal.toFixed(2)}`;
    document.getElementById('hats-subtotal').textContent = `$${hatsTotal.toFixed(2)}`;

    // Update total
    const total = shirtsTotal + hoodiesTotal + hatsTotal;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Attach event listeners to all input fields
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotals);
});

// Initialize totals on page load
calculateTotals();
