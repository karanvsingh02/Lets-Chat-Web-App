room_name = localStorage.getItem("room_name");
document.getElementById("room_label").innerHTML = "You are in Room " + room_name + "!";
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDhuETb4xEX5yu_l35N_5-W4vqzW9ElEZg",
      authDomain: "classtest-96205.firebaseapp.com",
      databaseURL: "https://classtest-96205-default-rtdb.firebaseio.com",
      projectId: "classtest-96205",
      storageBucket: "classtest-96205.appspot.com",
      messagingSenderId: "11590433415",
      appId: "1:11590433415:web:e5fe99743d5218a3dcd622"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = " ";
}





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


