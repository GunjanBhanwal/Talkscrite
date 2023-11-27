function submitForm(event) {
    event.preventDefault();
    
    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Store values in sessionStorage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('message', message);

    // Redirect to the display page
    window.location.href = 'messages.html';
}
