function writeUserData(userId, firstName, lastName, emailAddress, phoneNumber) {

    var firstNameField = document.getElementById("FfirstName");
    var lastNameField = document.getElementById("FlastName");
    var emailAddressField = document.getElementById("FemailAddress");
    var phoneNumberField = document.getElementById("FphoneNumber");
    var signUpButton = document.getElementById("signUpButton");

    var firstName = firstNameField.value;
    var lastName = lastNameField.value;
    var emailAddress = emailAddressField.value;
    var phoneNumber = phoneNumberField.value;

    


    console.log("Info: " + firstName + " " + lastName + " " + emailAddress + " " + phoneNumber);

    firebase.database().ref('Users').push({
        firstName: firstName,
        lastName: lastName,
        userName: emailAddress,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber
    });

    firstNameField.value = "";
    lastNameField.value = "";
    emailAddressField.value = "";
    phoneNumberField.value = "";
    signupButton.innerHTML = "Thanks";
    signupButton.onclick = "";
    signupButton.className = "button button-green";

};