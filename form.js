const form = document.getElementById('contact');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (firstName === '') {
        alert('Please enter your first name.');
        return;
      }
      if (lastName === '') {
        alert('Please enter your last name.');
        return;
      }
      if (email === '') {
        alert('Please enter your email address.');
        return;
      }
      if (message === '') {
        alert('Please enter a message.');
        return;
      }
      form.submit();
});