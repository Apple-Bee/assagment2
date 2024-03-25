// Fetch the content of the text file
fetch('/material/logo.txt')
    .then(response => response.text())
    .then(text => {
        // Insert the content into the HTML
        document.getElementById('text-1').innerText = text;
    })
    .catch(error => console.error('Error fetching text content:', error));

    fetch('/material/content.txt')
    .then(response => response.text())
    .then(text => {
        // Insert the content into the HTML
        document.getElementById('text-2').innerText = text;
    })
    .catch(error => console.error('Error fetching text content:', error));

    fetch('/material/adress.txt')
    .then(response => response.text())
    .then(text => {
        // Insert the content into the HTML
        document.getElementById('text-3').innerText = text;
    })
    .catch(error => console.error('Error fetching text content:', error));
