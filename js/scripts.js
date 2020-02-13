function passGender(gender){
  var dob = Document.getElementById('birthdate').value;
  var day = new Date(dob).getDay();

  if(gender=='M'){
    akanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var akan = akanNames[day];
    alert (akan);

  } else if(gender=='F'){
    akanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    alert (akan);
  }
}
