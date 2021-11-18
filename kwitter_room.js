// Your web app's Firebase configuration

const firebaseConfig = {

      apiKey: "AIzaSyAMXt1W66Ta-8BQ4hb0q_XPQkSECMytI74",
    
      authDomain: "letstalkapp-5cf07.firebaseapp.com",
    
      databaseURL: "https://letstalkapp-5cf07-default-rtdb.firebaseio.com",
    
      projectId: "letstalkapp-5cf07",
    
      storageBucket: "letstalkapp-5cf07.appspot.com",
    
      messagingSenderId: "231883752781",
    
      appId: "1:231883752781:web:7792c176eed93046eee304"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var username = localStorage.getItem("username");

document.getElementById("welcomeusername").innerHTML="Welcome to Chattie, " + username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trendingroomsdiv").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("Room name: " + Room_names);
         row = "<div class='room_name' id=" + Room_names + "onclick='Redirecttoroomname(this.id)'># " + Room_names + "</div><hr>";
         document.getElementById("trendingroomsdiv").innerHTML += row;
      //End code
      });});}
getData();

function addroom() {

      var room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({

            purpose: "adding room"

      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

}

function Redirecttoroomname(name) {

      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";

}

function logout() {

      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";

}