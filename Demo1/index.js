function func1(){
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let fullName = firstName + " " + lastName;
    alert("Full Name: " + fullName);
    console.log("Full Name:" + fullName);
}