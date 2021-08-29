function addUser(){
    user_name = document.getElementById("Username").value;
console.log("User is: " + user_name);
    localStorage.setItem("user_name" , user_name);
if (user_name == null){
    console.log("please enter a username")
}
    else {
        window.location = "kwitter_room.html";
}
}