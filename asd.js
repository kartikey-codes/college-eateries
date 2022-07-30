asd.js

function vald()
{

var user = document.getElementById('nam').value

var pass = document.getElementById('pass').value

var pass1 = document.getElementByName("pass").value;
var pass2 = document.getElementByName("conpass").value;
if(conpass != null)
{
if(pass1 != pass2)
{
window.alert("Password and Confirm Password must be same");
return false;
}

localStorage.setItem("username", "user");
localStorage.setItem("password", "pass");
}

else{
  
if(user!= localStorage.getItem("username") || pass!=localStorage.getItem("password"))
{
window.alert("Username or password is incorrect");
return false;
}
}
}