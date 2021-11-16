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
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
      message = document.getElementById("message").value ;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0
      });
      document.getElementById("msg").value = "";  
  } 