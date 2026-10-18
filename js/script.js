function calculateAge(){
    let dob = document.getElementById("dob").value;

    if(dob ===""){
        document.getElementById("result").innerHTML=
        "Please enter your date of birth.";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear()- birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    
    if (
        month < 0 || (month === 0 && today.getDate() < birthDate.getDate())
    ){
        age--;
    }

    document.getElementById("result").innerHTML = "Your age is "+ age +" years.";
    }