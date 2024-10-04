function validateLogin(username, password) {
    return username === 'Jack@soprasteria.com' && password === 'Jack';
  }
  
  function handleLogin(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (validateLogin(username, password)) {
      // Redirect to the allocated resources page
      window.location.href = 'insights2.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
  // Export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateLogin, handleLogin };
  }