(function() {

//Connect Firebase
const firebase = firebase.auth();
var config = {
    apiKey: "AIzaSyDEBKcey17N2rQ_Ien0MtUnlFhiVoKpT3I",
    authDomain: "mymemory-f092f.firebaseapp.com",
    databaseURL: "https://mymemory-f092f.firebaseio.com/",
    storageBucket: "gs://mymemory-f092f.appspot.com",

};

firebase.initializeApp(config);

var rootRef = firebase.database("Patients");

//Get Elements
const txtEmail = document.getElementById('txtEmail')
    const txtPassword = document.getElementById('txtPassword')
 //   const btnLogin = document.getElementById('btnLogin')
    const btnLogout = document.getElementById('btnLogout')

    
        const email = txtEmail.value;
        const pass = txtPassword.value;
    


   
   document.getElementById("btnLogin").addEventListener("click", login);
        
    function login(){
 alert ("Test")
    //Add Login Event
    console.log('#someButton was touched');
    
       //Sign In
       
        firebase.signInWithEmailAndPassword(email, pass);
        
    }
    
    
    //Adds realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
        
    });
    
});