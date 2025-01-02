const apiKey = 'AIzaSyCuN42Fb6wmRUCBy9NsLJGBmprLsDXhYWU';
const spreadsheetId = '1esG15uxdWLtVEKAXmgw4lLYLnhSnbD5sqs3clW-AFqk';
const range = 'FIRSTVolunteering!A1:K100';

function formatNumber(number) {
    return parseFloat(number.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 });
}

function calculateTotals(rows) {
    let totalDays = 0;
    let totalHours = 0;
    let totalDistance = 0;

    rows.forEach((row) => {
        const startDate = new Date(row[4]); // Start Date (Column D)
        const endDate = row[5] ? new Date(row[5]) : startDate; // End Date (Column E)
        const multiDay = row[6] && row[6].toLowerCase() === 'true'; // Multi-day Event (Column F)
        const hours = parseFloat(row[9]) || 0; // Hours (Column J)
        const distance = (parseFloat(row[3]) || 0) * 2; // Round-trip distance (Column C)

        // Ensure valid dates
        if (isNaN(startDate)) return;

        // Calculate days
        let days = 1; // Default to 1 day
        if (multiDay && endDate >= startDate) {
            days = Math.max((endDate - startDate) / (1000 * 60 * 60 * 24) + 1, 1); // Multi-day calculation
        }

        totalDays += days;
        totalHours += hours;
        totalDistance += distance;
    });

    return {
        events: rows.length, // Total number of rows
        days: Math.round(totalDays),
        hours: Math.round(totalHours),
        distance: formatNumber(totalDistance)
    };
}

function processAndRenderData(data) {
    const tableHead = document.querySelector('#volunteering-data thead tr');
    const tableBody = document.querySelector('#volunteering-data tbody');
    const statsContainer = document.querySelector('#stats-container');

    tableHead.innerHTML = ''; // Clear previous headers
    tableBody.innerHTML = ''; // Clear previous rows

    // Set table headers
    const headers = ['Event', 'State', 'Start Date', 'End Date', 'Multi-day Event', 'Role', 'Program', 'Hours'];
    headers.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        tableHead.appendChild(th);
    });

    // Populate table rows and filter necessary columns
    const rows = data.slice(1);
    rows.forEach((row) => {
        const tr = document.createElement('tr');
        [
            row[0], // Event
            row[2], // State
            row[4], // Start Date
            row[5], // End Date
            row[6], // Multi-day Event
            row[7], // Role
            row[8], // Program
            row[9] // Hours
        ].forEach((cell, index) => {
            const td = document.createElement('td');

            // Style the "Multi-day Event" column
            if (index === 4) {
                const isMultiDay = cell && cell.toLowerCase() === 'true';
                td.innerHTML = isMultiDay
                    ? '<span class="checkmark">&#10003;</span>'
                    : '<span class="cross">&#10007;</span>';
            } else if (index === 6) { // Style the "Program" column
                if (cell === 'FLL' || cell === 'FTC' || cell === 'FRC') {
                    td.innerHTML = `<span class="program ${cell}">${cell}</span>`;
                } else {
                    td.textContent = cell || ''; // Default text for other cases
                }
            } else {
                td.textContent = cell || ''; // Handle empty cells
            }

            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });

    // Calculate statistics
    const totals = calculateTotals(rows);

    // Display stats in bubbles
    statsContainer.innerHTML = `
        <div class="stats-bubble"><strong>Total Events:</strong> ${totals.events}</div>
        <div class="stats-bubble"><strong>Total Days:</strong> ${totals.days}</div>
        <div class="stats-bubble"><strong>Total Hours:</strong> ${totals.hours}</div>
        <div class="stats-bubble"><strong>Total Distance Traveled:</strong> ${totals.distance} miles</div>
    `;
}

async function fetchSheetData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.values) {
            processAndRenderData(data.values);
        } else {
            console.error('No data found in the specified range.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch data when the page loads
fetchSheetData();