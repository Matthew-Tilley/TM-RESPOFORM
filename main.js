/* Listen for form submit */

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){

    e.preventDefault();

    let name = getInputVal("name");
    let company = getInputVal("company");
    let email = getInputVal("email");
    let phone = getInputVal("phone");
    let message = getInputVal("message");

    console.log(name);
    console.log(company);
    console.log(email);
    console.log(phone);
    console.log(message);
}


/* Function to get form values */

function getInputVal(id){
    return document.getElementById(id).value;
}
