document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const excelLink = document.getElementById('excelLink').value;

    if (excelLink) {
        // Store link in local storage and redirect to page 2
        localStorage.setItem('excelLink', excelLink);
        window.location.href = 'display.html';
    } else {
        alert('Please enter a valid Excel sheet link.');
    }
});
