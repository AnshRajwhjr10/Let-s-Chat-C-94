var firebaseConfig = {
      apiKey: "AIzaSyA5fQyHUekh4EG62SAtQwTBZ30oIbNIsRA",
      authDomain: "kwitter-799b0.firebaseapp.com",
      databaseURL: "https://kwitter-799b0-default-rtdb.firebaseio.com",
      projectId: "kwitter-799b0",
      storageBucket: "kwitter-799b0.appspot.com",
      messagingSenderId: "971076032245",
      appId: "1:971076032245:web:5bbab96aba06e1a63e57bc"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
