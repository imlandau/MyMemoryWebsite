var First = document.getElementById("First")
    var Last = document.getElementById("Last")
    var DOB = document.getElementById("DOB")
    var Phone = document.getElementById("Phone")
    var Relationship = document.getElementById("Relationship")
    
    var firebaseRef = firebase.database().ref().child("Patients");
    var uid = firebase.auth().currentUser.uid;
    firebaseRef.on('value', function(datasnapshot){
    firebaseRef.innerText = datasnapshot.val();
    });


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("nav_div").style.display = "block";
    document.getElementById("nav_div2").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("person_div").style.display = "none";



    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "You are currently signed in as test: " + uid + email_id;
      document.getElementById("name").innerHTML = "This is to see information:";
      document.getElementById("check").innerHTML = "First Name : " + First;


    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("nav_div").style.display = "none";
    document.getElementById("person_div").style.display = "none";
    document.getElementById("nav_div2").style.display = "none";
    document.getElementById("login_div").style.display = "block";





  }
});


function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function addPerson(){
    document.getElementById("login_div").style.display = "none";
    document.getElementById("user_div").style.display = "none";
    document.getElementById("person_div").style.display = "block";
    document.getElementById("nav_div2").style.display = "none";


    document.getElementById("name").innerHTML = "This is to see information:";

  
}

function home(){
    document.getElementById("login_div").style.display = "none";
    document.getElementById("person_div").style.display = "none";
    document.getElementById("user_div").style.display = "block";
    document.getElementById("nav_div2").style.display = "block";


  
}

 function signOut() {
   firebase.auth().signOut();
    firebase.auth().signOut();

      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      document.getElementById("user_div").style.display = "none";
      document.getElementById("nav_div").style.display = "none";
      document.getElementById("nav_div2").style.display = "none";
      document.getElementById("person_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";


      });
    }

    function onLoad() {
      gapi.load('auth2', function() {
        gapi.auth2.init();
      });
    }
    
    
    