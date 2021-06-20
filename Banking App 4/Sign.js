let allClient = []
function signUp() {
    // allClient=[]
    customers = {}
    customers.firstName = fName.value;
    customers.lastName = lName.value;
    customers.phoneNumber = phone.value;
    customers.mail = mail.value;
    customers.Home = home1.value
    customers.Occupation = occupa.value
    customers.Password = pin.value;
    customers.Gender= male.value
    customers.Gender= female.value
    customers.Gender= other.value
    customers.accNo = '101' + Math.floor(Math.random()*100000000)
    customers.amount = 10000
   
    if (localStorage.allCustomers) {
        existing = JSON.parse(localStorage.allCustomers)
        allClient = existing
        if (allClient != "") {
            for (var i = 0; i < allClient.length; i++) {
                if (phone.value == allClient[i].phoneNumber) {
                    alert("Phone Number Already Exists, Try a different phone number")
                    return
                } else {
                    sj.innerHTML= `welcome ${fName.value} Sign in successful, <p> Your account Number is  ${customers.accNo}`
                    allClient.push(customers)
                    localStorage.allCustomers = JSON.stringify(allClient)
                    fName.value = '';
    lName.value = '';
    phone.value = '';
    mail.value = '';
    pin.value ='';
    occupa.value='';
    home1.value='';
                    // window.location.href='signin.html'
                    return
                }
            }
        } else {
            sj.innerHTML= `welcome ${fName.value} Sign in successful, <p> Your account Number is  ${customers.accNo}`
            allClient.push(customers);
            localStorage.allCustomers = JSON.stringify(allClient);
            fName.value = '';
    lName.value = '';
    phone.value = '';
    mail.value = '';
    pin.value ='';
    occupa.value='';
    home1.value='';
            // window.location.href='signin.html'
            return;
        }
        
        // allClient.push(customers)
        // localStorage.allCustomers = JSON.stringify(allClient)
    } else {
        sj.innerHTML= `welcome ${fName.value} Sign in successful, <p> Your account Number is  ${customers.accNo}`
        allClient.push(customers)
        localStorage.allCustomers = JSON.stringify(allClient)
        fName.value = '';
    lName.value = '';
    phone.value = '';
    mail.value = '';
    pin.value ='';
    occupa.value='';
    home1.value='';
        // window.location.href='signin.html'
    }
    fName.value = '';
    lName.value = '';
    phone.value = '';
    mail.value = '';
    pin.value ='';
    occupa.value='';
    home1.value='';
    // windows.open('personalPortal.html')
   // if(lName.value=="" || fName.value=="" || mail.value==""){
//      alert("ehd")
  //  }
  
}
function myfunc(){
      window.location.href='Homme.html'
    }
    function GetingStarted(){
      window.location.href='Signningup.html'
    }
    function GoingIn(){
      window.location.href='Log.html'
    }