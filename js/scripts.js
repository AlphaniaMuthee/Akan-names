function passGender(gender){
  var dob = document.getElementById("birthdate").value;
  var day = new Date(dob).getDay();
  //alert(day);
  //alert(gender);
  if(gender == "M"){
    akanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    //alert(akanNames);
    var akan = akanNames[day];
    alert(akan);

  }else {
    akanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var akan = akanNames[day];
    alert(akan);
  }
}
