var firebaseConfig = {
  apiKey: "AIzaSyDRxjRP8ZKxV53hZyylJ09MJthhhEmaKPw",
  authDomain: "walkie-talkie-4fae1.firebaseapp.com",
  databaseURL: "https://walkie-talkie-4fae1-default-rtdb.firebaseio.com",
  projectId: "walkie-talkie-4fae1",
  storageBucket: "walkie-talkie-4fae1.appspot.com",
  messagingSenderId: "513842031814",
  appId: "1:513842031814:web:aff6fdec975414890a3bc7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

User_name = localStorage.getItem("user_name");
document.getElementById("Useranme").innerHTML = "Welcome" + User_name + "!";

function addroom()
{
   room_name = document.getElementById("room_name").value ;
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding roomname"
   });
   localStorage.setItem("room_name", room_name);
   
  window.location = "walkiepage.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("Room name = " + Room_names);
row = "<div class='room_name' id="+Room_names + "onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

 //End code
 });
});
}
getData();
function logout()
{
  window.location = "index.html";
}
