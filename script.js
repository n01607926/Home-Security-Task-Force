//home page: feedback form validation
var form=document.getElementById("feedback");
function validate(check){
  //function for checking if checked
  function checkboxes(){
    var checkboxes = document.getElementsByClassName('checkbox');
    var checked = false;
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checked = true;
        break;
      }
    }
    
    return checked;
  }
  var check=checkboxes();
  var fName=document.getElementById("FName").value;
  if (check==true && fName!=""){
    alert("Thank You for providing feeback!");
    event.preventDefault();
  }
  else if (check==false){
    alert("Please select one of the options. Thank You.");
    preventDefault();
    event.preventDefault();
  }
  else if(fName==""){
    alert("please fill out the appropriate fields. ");
    event.preventDefault();
  }
};
