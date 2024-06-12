/* defining isaplha function */
function isAlpha(str) {
    let regex = /^[a-zA-Z]+$/;
    return regex.test(str)
}


/* Client side validation function for the contact form */
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var phone = document.getElementById('phone').value;

    if (isAlpha(name) === false) {
        alert("Name should contain alphabets only!");
        return false;
    }
    else if (name.length==1) {
        alert("Fake! Name can't be a single letter..");
        return false;
    }
    else if (phone != ""){
        if (isNaN(phone)) {
            alert("Phone number should consist of numbers only!");
            return false;
        }
        else if (phone.length<10||phone.length>10) {
            alert("Phone number should be of 10 digits!");
            return false;
        }
    }
    else {
        alert("Demo! The submission has not happened. Please send your message to rudransit@gmail.com through mail..")
    }

}

/* More about me button click function */
function more() {
    window.location.replace("./about.html");
}

/* Client side validation function for the contact form */
function snedMessage() {
    var name1 = document.getElementById("name1").value;
    var email1 = document.getElementById("email1").value;
    var message1 = document.getElementById("message1").value;

    if (isAlpha(name1) === false) {
        alert("Name should contain alphabets only!");
        return false;
    }
    else if (name1.length==1) {
        alert("Fake! Name can't be a single letter..");
        return false;
    }
    else {
        alert("Demo! The submission has not happened. Please send your message to rudransit@gmail.com through mail..")
    }
}