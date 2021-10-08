//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBLM7E8yXne5mK4oiwr6s9Z4RHl7d2rr0k",
  authDomain: "kwitter-project-e6708.firebaseapp.com",
  databaseURL: "https://kwitter-project-e6708-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-e6708",
  storageBucket: "kwitter-project-e6708.appspot.com",
  messagingSenderId: "620258256746",
  appId: "1:620258256746:web:d1abb640fbebff0010e713"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    
    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";
  }

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
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
  window.location = "kwitter.html";
}
