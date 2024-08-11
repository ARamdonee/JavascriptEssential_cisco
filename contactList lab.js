/* 
Objectives
Familiarize the student with:

Function basics (what are functions, declaring functions, calling functions, local variables, 
the return statement, function parameters, shadowing);
Functions as first-class members (function expressions, 
passing a function as a parameter, callbacks);
Arrow functions (declaring and calling);
Recursion (basic idea).
Scenario
Our program has grown quite a bit, 
making it a little hard to read. It is especially visible in the switch instruction, 
where most of the logic is enclosed. Try to organize your program code by using functions. 
Define and call three functions in the appropriate places:

showContact: the function should take two arguments; 
the first is the list of contacts, and the second is the index number of the contact to display;
 inside the function, check if the correct arguments are passed, that is,
  if the contacts are an array (use the instanceofArray construction for this);

showAllContacts: the function should take one argument, the list of contacts; 
inside the function, check if the given argument is an array;

addNewContact: the function should take four arguments,
 a contact list and the data of the new contact, that is:
  name, phone, and number; before adding a new contact,
   check if the passed argument is an array and if the new contact data have any value.

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
*/

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

/*
showContact: the function should take two arguments; 
the first is the list of contacts, and the second is the index number of the contact to display;
 inside the function, check if the correct arguments are passed, that is,
  if the contacts are an array (use the instanceofArray construction for this);
  */ 

  function showContact(contactList, index){
    if(!(contactList instanceof Array)){
        return "array not found!"
    }else if(isNaN(index) || index >= contactList.length || index < 0){
        return "Index not valid" 
    }else{
        let contactobj = contactList[index]; 
        for(let key in contactobj){
            alert(`${key} : ${contactobj[key]}`); 
        }
        return contactobj
    }
  }

  /* showAllContacts: the function should take one argument, the list of contacts; 
inside the function, check if the given argument is an array;
*/

function showAllContacts(contactList){
        if(!(contactList instanceof Array)){
        return "array not found!"
        }else{
            for(let elements of contactList){
                for( let key in elements){
                    console.log(`${key} : ${elements[key]}`)
                }
                console.log("__________________");
        }

}
}

/*
addNewContact: the function should take four arguments,
 a contact list and the data of the new contact, that is:
  name, phone, and number; before adding a new contact,
   check if the passed argument is an array and if the new contact data have any value
   */

function nameValidationInput(name){
    let isValid = false; 
    const regex = /^[A-Za-z\s]+$/;
    // Input empty ? return null 
    if (name.trim() === ''){
        console.log("Input field empty")
        return isValid; 
    }
    // checks that the input only contains A-Z, a-z and white spaces
    else if(!regex.test(name)){
        console.log("Input format not valid");
        return isValid;
    }else if (name.length < 2 || name.length > 50) {
        console.log('Name must be between 2 and 50 characters long');
        return isValid;
    }else{
        isValid = true; 
        return isValid;
    }
    }
//phone validation
    function phoneValidationInput(phone){
        let isValid = false; 
        const regex = /^[0-9+\s]+$/;
        // Input empty ? return null 
        if (phone.trim() === ''){
            console.log("Input field empty")
            return isValid; 
        }
        // checks that the input only contains 0-9 and white spaces
        else if(!regex.test(phone)){
            console.log("Input format not valid");
            return isValid;
        }else if (phone.length < 7 || phone.length > 15) {
            console.log('phone must be between 2 and 15 characters long');
            return isValid;
        }else{
            isValid = true; 
            return isValid;
        }
        }

        function emailValidationInput(email){
            let isValid = false; 
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Input empty ? return null 
            if (email.trim() === ''){
                console.log("Input field empty")
                return isValid; 
            }
            // checks that the input only contains 0-9 and white spaces
            else if(!regex.test(email)){
                console.log("Input format not valid");
                return isValid;
            }else if (email.length < 7 || email.length > 50) {
                console.log('email must be between 2 and 50 characters long');
                return isValid;
            }else{
                isValid = true; 
                return isValid;
            }
            }
function addNewContact(name, phone, email, contactList){
    let isNameValid = nameValidationInput(name);
    let isPhoneValid = phoneValidationInput(phone);
    let isEmailValid = emailValidationInput(email);
    let isContactList = contactList instanceof Array;

    if (isNameValid && isPhoneValid && isEmailValid && isContactList){
        let contactobj = {
           name : name,
           phone : phone,
           email : email
        }
        contactList.push(contactobj);
        console.log(contactList);

    }else{
        console.log('An error occured'); 
 
    }
}

/*Give the user the option to select a sort action from the list.
 When this option is selected, the user should be able to specify whether they want to sort the contacts by name, phone, or email.
*/

//sort contact function 
function sortContact(contactList, sortBy){
    if(contactList instanceof Array){
        if(sortBy == "name" || sortBy == "phone" || sortBy == "email"){
            return contactList.sort((a,b) =>{
                //use bracket notation to access the property stored in sortBy
                if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()){
                    return -1;
                }
                if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()){
                    return 1;
                }
                return 0;
            })
    }
}
}


function startApp(contactList){

    let action = prompt("Enter add, show contact, show all contact, sort list").toLowerCase();

    switch (action){
        case "add" : {
            let newName = prompt("Enter the full name");
            let newPhone = prompt("Enter your phone number"); 
            let newEmail = prompt("Enter your email");
            addNewContact(newName, newPhone, newEmail, contactList);
            showAllContacts(contactList)
            break;
        }
        case "show contact": {
            let newIndex = prompt("Enter the index number");
            showContact(contactList, newIndex);
            break;
        }
        case "show all contact" : {
            showAllContacts(contactList);
            break;
        }
        case "sort list" : {
            let contactProperty = prompt("sort by: name, phone or email ?").toLowerCase();
            sortContact(contactList, contactProperty);
            showAllContacts(contactList);
            break;
        }
    }
}

startApp(contacts);
