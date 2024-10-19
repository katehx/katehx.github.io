document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("complexTable");
    const rows = table.getElementsByTagName("tr");
    let totalYears = 0;

    for (let i = 1; i < rows.length; i++) {
        if (cells.length > 0) {
            const yearsOfService = parseInt(cells[3].textContent); 
            if (!isNaN(yearsOfService)) {
                totalYears += yearsOfService; 
            }
        }
    }

    document.getElementById("totalYears").textContent = totalYears;
});
