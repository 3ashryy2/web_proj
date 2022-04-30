function checkForm(){
    var E_name = document.getElementsByID("E-name").value;
    var  eid= document.getElementsByID("EID").value;
    var FromDate = document.getElementsByID("FromDate").value;
    var Todate =document.getElementById("FromDate").value;


    if (E_name == ""){
        alert("error: Employee name can't be empty");
        document.getElementById("E-name").focus;
        return false;
    }
    
    if (eid= ""){
        alert("error: Employee ID can't be empty");
        document.getElementById("EID").focus;
        return false;
    }
    
    if (Todate= ""){
        alert("error: Todate can't be empty");
        document.getElementById("Todate").focus;
        return false;
    }
    
    if (FromDate= ""){
        alert("error: FromDate can't be empty");
        document.getElementById("FromDate").focus;
        return false;
    }
    if(FromDate >= Todate){
        alert("error: invalid Date ");
        document.getElementById("FromDate").focus;
        return false;
    }
    
}