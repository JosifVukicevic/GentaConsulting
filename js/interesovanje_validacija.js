function validateInterest() {

    var emailAddressInput = document.getElementById('email_address_interest');
    var emailAddress = emailAddressInput.value;

    var fullNameInput = document.getElementById('fullname_interest');
    var fullName = fullNameInput.value;

    if (emailAddress === "") {
        alert("Molimo popunite sva polja!");
        return false;
    }
    else if (fullName === "") {
        alert("Molimo popunite sva polja!");
        return false;
    }
    else {
        return true;
    }
   
}