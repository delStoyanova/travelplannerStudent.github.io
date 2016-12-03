/**
 * Created by Delyana on 26.11.2016 .
 */

function validate() {
    var messages = []; // an array to store the messages of invalid input
    var counter = 5; //counter that keeps track of the possible attempts
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if (username == "UserStudent" && password == "Password00") {
        alert("User name and password are correct, the home page will be shown");
        window.location = "index.html";
        return false;
    }
    else {
        counter--;
        alert("You can try " + counter + " more times.");
        if (counter == 0) {
            document.getElementById("name").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("login").disabled = true;
            return false;
        }
    }
    if (username.length < 6) {
        messages.push("User name should be longer than 6 characters.");
    }

    if (password.length < 6) {
        messages.push("Password should be longer than 6 characters.");
    }
    if (password.search(/[a-z]/) < 0) {
        messages.push("Password should contain at least one lowercase letter.");
    }
    if (password.search(/[A-Z]/) < 0) {
        messages.push("Password should contain at least one uppercase letter.");
    }
    if (password.search(/[0-9]/) < 0) {
        messages.push("Password should contain at least one digit.");
    }
    if (messages.length > 0) {
        alert(messages.join(" "));
        return false;
    }

}
/*$(document).ready(main);
 function main(){
 $("#psw").on("click",function(){
 $(this).effect('bounce', 500);
 });



 }*/




