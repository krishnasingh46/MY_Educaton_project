


// FORM VALIDATION


function sendMail() {

    var fullName = document.getElementById("fullName").value;
    var subject = document.getElementById("subject").value;
    var email_id = document.getElementById("email_id").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.color = "red";

    var text;
    if (fullName.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (email_id.indexOf("@","gmail") == -1 || email_id.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 5) {
        text = "Please Enter Correct Subject (more than 5 char)";
        error_message.innerHTML = text;
        return true;
    }

    if (message.length <= 10) {
        text = "Please Enter message in More Than 10 Characters";
        error_message.innerHTML = text;
        return send();
    }
    return send();

}

function send() {
    var params = {
        from_name: document.getElementById("fullName").value,
        subject: document.getElementById("subject").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,


    }

    emailjs.send("service_e0qkszc", "template_c6c2687", params).then(function (res) {
        alert("Your Message is Successfully Sent! ");
    })



 
}
