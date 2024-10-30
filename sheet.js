// Fetch and display the Excel data from the link
document.addEventListener('DOMContentLoaded', function() {
    const excelLink = localStorage.getItem('excelLink');
    if (!excelLink) {
        alert('No Excel link found! Please go back and provide a link.');
        return;
    }

    // Placeholder: Fetch the Excel data and parse it
    loadExcelData(excelLink);

    function loadExcelData(link) {
        // Assume the link provides JSON data of the Excel file
        fetch(link)
            .then(response => response.json()) // assuming the response is JSON for the demo
            .then(data => {
                displayExcelData(data);
            })
            .catch(error => {
                console.error('Error loading Excel data:', error);
                document.getElementById('sheetData').innerText = 'Failed to load data.';
            });
    }

    function displayExcelData(data) {
        const sheetData = document.getElementById('sheetData');
        sheetData.innerHTML = ''; // Clear existing content
        data.sheets.forEach((sheet, index) => {
            const sheetDiv = document.createElement('div');
            sheetDiv.className = 'sheet';
            sheetDiv.innerText = sheet.name;
            sheetDiv.onclick = () => displaySubSheet(sheet.data);
            sheetData.appendChild(sheetDiv);
        });
    }

    function displaySubSheet(subSheetData) {
        const sheetData = document.getElementById('sheetData');
        sheetData.innerHTML = '<table><tbody>';
        subSheetData.forEach(row => {
            const rowElem = document.createElement('tr');
            row.forEach(cell => {
                const cellElem = document.createElement('td');
                cellElem.innerText = cell;
                rowElem.appendChild(cellElem);
            });
            sheetData.appendChild(rowElem);
        });
        sheetData.innerHTML += '</tbody></table>';
    }
});
