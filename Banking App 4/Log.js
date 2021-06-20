function signIn() {
    if (localStorage.allCustomers) {
        existing = JSON.parse(localStorage.allCustomers)
        allClient = existing
        for (var i = 0; i < allClient.length; i++) {
            if (accountNumber.value == allClient[i].accNo || accountNumber.value==allClient[i].phoneNumber && pin.value == allClient[i].Password) {
                // alert("Login Successful")
                localStorage.login = JSON.stringify(i);
                window.location.href = 'personalPortal.html'
                // personalPortal
                return
            }
        }
        alert("invalid details")
    } else {
        alert('You do not have an account with us')
    }
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