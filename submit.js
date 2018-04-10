
// FIREBASE IS ALREADY INSTANTIATED IN REGISTER.HTML

// Reference messages collection
//var uid = firebase.auth().currentUser.uid;
//var personRef = firebase.database().ref('Patients').child(uid).child('family');
  
//var personRef = firebase.database().ref('Patients');

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
  var phone = getInputVal('phone');
  
  console.log(fname, lname, relationship, dob, address, phone);

  // Save person
  savePerson(fname, lname, relationship, dob, address, phone);

 /* // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000); */

  // Clear form
  document.getElementById('addPersonForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function savePerson(fname, lname, relationship, dob, address, phone){
  
  var uid = firebase.auth().currentUser.uid;
  var personRef = firebase.database().ref('Patients').child(uid).child('family');
  
  var newPersonRef = personRef.push();
  newPersonRef.set({
    firstName:fname,
    lastName:lname,
    relation:relationship,
    dob:dob,
    mail:address,
    phone:phone
  });
}