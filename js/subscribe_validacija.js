function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validateForm() {
    var emailInput = document.getElementById('email_subscribe');
    var email = emailInput.value;
    
    if (email === "") {
      alert('Polje je prazno! Pokušajte ponovo.')
      return;
    }

    if (!validateEmail(email)) {
      alert('Unesite validnu e-mail adresu.');
      emailInput.focus();
      return;
    }
    
   
    document.getElementById('subscribeForm').reset();
  }