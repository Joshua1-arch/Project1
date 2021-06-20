editDets.style.display="none"
let allClients = [];
existing = JSON.parse(localStorage.allCustomers);
allClients = existing;
for (var i = 0; i < allClients.length; i++) {
    if (JSON.parse(localStorage.login) == i) {
        // alert('Welcome, ' + allClients[i].firstName)
        
    }
    showingAccount.innerHTML=allClients[i].accNo;
        // 
        showingAccount1.innerHTML=allClients[i].firstName + " " + allClients[i].lastName;

}
function showBalance() {
    for (var i = 0; i < allClients.length; i++) {
        if (JSON.parse(localStorage.login) == i) {
            show.value =`${allClients[i].amount}`;
        }
    }
}
showBalance()
function Editing(){
    // editDets.style.display="block"
    editDets.style.display = 'block';
    second.style.display='none'
    for (var i = 0; i < allClients.length; i++) {
        if (JSON.parse(localStorage.login) == i) {
            accNumber.disabled = true;
            fName.value = allClients[i].firstName;
            lName.value = allClients[i].lastName;
            phone.value = allClients[i].phoneNumber;
            occupate.value=allClients[i].Occupation;
            Addres.value=allClients[i].Home
            email.value = allClients[i].mail;
            pin.value = allClients[i].uPin;
            accNumber.value = allClients[i].accNo;
            amount.value = allClients[i].amount;
}
}
}
function stop(){
    editDets.style.display="none"
    second.style.display='block'
}
function clearDets() {
            allClients.splice(JSON.parse(localStorage.login), 1);
            localStorage.allCustomers = JSON.stringify(allClients)
            alert('Account Deleted successfully');
            window.location.href = 'Homme.html'
}
function saveEdit() {
    
    edited = {};
    edited.firstName = fName.value;
    edited.lastName = lName.value;
    edited.phoneNumber = phone.value;
    edited.mail = email.value;
    edited.uPin = pin.value;
    edited.Occupation = occupate.value;
    edited.Home = Addres;
    edited.accNo = accNumber.value;
    edited.amount = amount.value;
    for (var i = 0; i < allClients.length; i++) {
        if (edited.phoneNumber == allClients[i].phoneNumber && JSON.parse(localStorage.login) != i) {
            alert('Phone number already exist, please try another phone number')
            return
        } else {
            allClients.splice(JSON.parse(localStorage.login), 1, edited)
            localStorage.allCustomers = JSON.stringify(allClients)
            alert('Edit successful')
            return
        }
    }
    
}

function withdral() {
    newAmount = {}
    withdraAmount = prompt('How much do you wish to withdraw')
    user = prompt('Enter your account pin')
    for (var i = 0; i < allClients.length; i++) {
        if (JSON.parse(localStorage.login) == i && allClients[i].Password == user) {
            newAmount.firstName = allClients[i].firstName;
            newAmount.lastName = allClients[i].lastName;
            newAmount.phoneNumber = allClients[i].phoneNumber;
            newAmount.mail = allClients[i].mail;
            newAmount.Password = allClients[i].Password;
            newAmount.Occupation = allClients[i].Occupation;
            newAmount.Home = allClients[i].Home;
            newAmount.accNo = allClients[i].accNo
            newAmount.amount = eval(allClients[i].amount - withdraAmount)
            show.value =  newAmount.amount;
            // allClients[i].amount = newAmount.amount;
            allClients.splice(JSON.parse(localStorage.login), 1, newAmount)
            localStorage.allCustomers = JSON.stringify(allClients)
            return
        }
    }
}
function deposited(){
    newDeposit={}
    var AmountToDeposit=prompt("how much do you want to Transfer?")
    var pins=prompt("input your pin")
    for(var i = 0;i <  allClients.length;i++){
        if (JSON.parse(localStorage.login) == i &&  allClients[i].Password == pins) {
            newDeposit.firstName =  allClients[i].firstName;
            newDeposit.lastName =  allClients[i].lastName;
            newDeposit.phoneNumber =  allClients[i].phoneNumber;
            newDeposit.mail =  allClients[i].mail;
            newDeposit.uPin =  allClients[i].uPin;
            newDeposit.accNo =  allClients[i].accNo;
            newDeposit.Password = allClients[i].Password;
            newDeposit.Occupation = allClients[i].Occupation;
            newDeposit.amount = eval( AmountToDeposit + allClients[i].amount)
            show.value = `${newDeposit.amount}`;
             allClients.splice(JSON.parse(localStorage.login), 1, newDeposit)
            localStorage. allCustomers = JSON.stringify( allClients)
            return;



        }
    }
}
function Manager(){
    window.location.href="Admin.html"
}
function TransferAmmount(){
    newTransfer={}
    var AmountToTransfer=prompt("how much do you want to Transfer?")
    var AccountToTransfer=prompt("Beneficiary Account Number")
    var pin=prompt("input your pin")
    for(var i = 0;i <  allClients.length;i++){
        if (JSON.parse(localStorage.login) == i &&  allClients[i].Password == pin &&  allClients[i].AccountNumber == AccountToTransfer) {
            newTransfer.firstName =  allClients[i].firstName;
            newTransfer.lastName =  allClients[i].lastName;
            newTransfer.phoneNumber =  allClients[i].phoneNumber;
            newTransfer.mail =  allClients[i].mail;
            newTransfer.Password =  allClients[i].Password;
            newTransfer.accNo =  allClients[i].accNo
            newTransfer.amount = eval( allClients[i].amount - AmountToTransfer)
            show.value = `${newTransfer.amount}`;
            newTransfer.amount= eval( allClients[i].amount + AmountToTransfer)
             allClients.splice(JSON.parse(localStorage.login), 1, newTransfer)
            localStorage. allCustomers = JSON.stringify( allClients)
            return;
        }
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