function addUser(){
var user_name = document.getElementById("Username").value;
console.log("User name is: " + user_name);
localStorage.setItem("user_name" , user_name);

if (user_name == null){
    window.location = "index.html";
}
else {
        window.location = "kwitter_room.html";
}
}