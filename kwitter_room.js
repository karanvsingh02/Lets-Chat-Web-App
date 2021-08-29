
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



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
