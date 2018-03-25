// Initialize Firebase (ADD YOUR OWN DATA)

  var config = {
    apiKey: "AIzaSyDEBKcey17N2rQ_Ien0MtUnlFhiVoKpT3I",
    authDomain: "mymemory-f092f.firebaseapp.com",
    databaseURL: "https://mymemory-f092f.firebaseio.com",
    projectId: "mymemory-f092f",
    storageBucket: "mymemory-f092f.appspot.com",
    messagingSenderId: "473904450980"
  };
  firebase.initializeApp(config);

// Reference messages collection
var personRef = firebase.database().ref('Patients');

// Listen for form submit
document.getElementById('addPersonForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var relationship = getInputVal('relationship');
  var dob = getInputVal('DOB');
  var address = getInputVal('address');
  
  console.log(fname, lname, relationship, dob, address);

  // Save person
  savePerson(fname, lname, relationship, dob, address);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('addPersonForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function savePerson(fname, lname, relationship, dob, address){
  var newPersonRef = personRef.push();
  newPersonRef.set({
    fname:fname,
    lname:lname,
    relationship:relationship,
    dob:dob,
    address:address
  });
}