
    var firstName = document.getElementById("First")
    var firstName = document.getElementById("Last")
    var firstName = document.getElementById("DOB")
    var firstName = document.getElementById("Phone")
    var firstName = document.getElementById("Relationship")
    
    var firebaseRef = firebase.database().ref().child("Patients");
    
    firebaseRef.on('value', function(datasnapshot){
    firebaseRef.innerText = datasnapshot.val();
    });
    
    function check(){
      var firebaseRef = firebase.database().ref();
      
      var message = First.value;
      
      firebaseRef.push().set(message);
    }