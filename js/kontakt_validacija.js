function validateForm() {
    var imePrezime = document.getElementById("ime_prezime").value;
    var kontaktTelefon = document.getElementById("kontakt_telefon").value;
    var emailAdresa = document.getElementById("email_adresa").value;
    var nazivPreduzeca = document.getElementById("preduzece").value;
    var naslov = document.getElementById("naslov_poruke").value;
    var poruka = document.getElementById("poruka").value;
  
    if (imePrezime === "" || kontaktTelefon === "" || emailAdresa === "" || nazivPreduzeca === "" || naslov === "" || poruka === "") {
        alert("Molimo popunite sva polja!");
        return false;
    }

    var telefonRegex = /^\+?[1-9]\d{0,2}\d{1,3}\d{4,14}$/;
    if (!telefonRegex.test(kontaktTelefon)) {
        alert("Molimo unesite ispravan broj telefona!");
        return false;
    }

    /*
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
      
    if (!isValidEmail(emailAdresa)) {
        alert("Molimo unesite ispravnu e-mail adresu.");
        return false;
    }
    */
  
    return true;
  }
  