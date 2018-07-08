 /*  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBtZzY8yyAy2gEKTquWhFDwMZeBGCYXBQU",
    authDomain: "contactform-f82aa.firebaseapp.com",
    databaseURL: "https://contactform-f82aa.firebaseio.com",
    projectId: "contactform-f82aa",
    storageBucket: "contactform-f82aa.appspot.com",
    messagingSenderId: "254956803548"
  }; */

  firebase.initializeApp(config);



// Reference messages collection

let messagesRef = firebase.database().ref("messages");



/* Listen for form submit */

document.getElementById("contactForm").addEventListener("submit", submitForm);



// Submit form
function submitForm(e){

    e.preventDefault();

    let name = getInputVal("name");
    let company = getInputVal("company");
    let email = getInputVal("email");
    let phone = getInputVal("phone");
    let message = getInputVal("message");

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds.
    setTimeout(function(){
        document.querySelector(".alert").style.display = "none";
    },3000);

    // Clear form
    document.getElementById("contactForm").reset();  

}



/* Function to get form values */

function getInputVal(id){
    return document.getElementById(id).value;
}



// Save message to FireBase
function saveMessage(name, company, email, phone, message){
    
    let newMessagesRef = messagesRef.push();

    newMessagesRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });

}
