
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_label").innerHTML = "Welcome " + user_name + "!";

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

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      purpose:"add a new room name"
    });
    
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
  }

function getData() {
  firebase.database().ref("/").on('value', function(snapshot){
    document.getElementById("listofrooms").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
        {childKey  = childSnapshot.key;
          Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name){

  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "Login_Page.html";
}