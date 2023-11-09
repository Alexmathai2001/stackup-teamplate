function check(){
    let username = document.getElementById("name")
    let usernameError = document.getElementById("usernameError")
    let phoneNumber = document.getElementById("phone")
    let phoneError = document.getElementById("phoneError")
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError")
    let place = document.getElementById("place");
    let placeError = document.getElementById("placeError")
    let category = document.getElementById("category");
    let categoryError = document.getElementById("categoryError")

    var emailRegx = /^([a-z0-9\.A-Z]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,8})(.[a-zA-Z]{2,8})?$/;
    let contactData = {
        name:username.value,
        phoneNumber:phoneNumber.value,
        email:email.value,
        place:place.value,
        category:category.value
    }
    document.getElementById('creatCardForm').addEventListener('submit',function(event){
        event.preventDefault();
    })
    if(username.value.length > 18){
       
        phoneError.style.display="none";
        emailError.style.display="none"
        placeError.style.display="none"
        usernameError.style.display="flex";
        usernameError.textContent="max 18 letters allowed"
    }
    else if (username.value.trim()===""){
        phoneError.style.display="none";
        emailError.style.display="none"
        placeError.style.display="none";
        categoryError.style.display="none";
        usernameError.style.display="flex";
        usernameError.textContent="username canot be empty"
    }else if(phoneNumber.value.trim()===""){
        usernameError.style.display="none";
        emailError.style.display="none"
        placeError.style.display="none";
        categoryError.style.display="none";
        phoneError.style.display="flex";
        phoneError.textContent="phone number cannot be empty" 
    }
    else if (phoneNumber.value.length >15){
        usernameError.style.display="none";
        emailError.style.display="none"
        placeError.style.display="none";
        categoryError.style.display="none";
        phoneError.style.display="flex";
        phoneError.textContent="Enter valid number"   
    }
    else if (!emailRegx.test(email.value) ){
        usernameError.style.display="none";
        phoneError.style.display="none";
        placeError.style.display="none";
        categoryError.style.display="none";
        emailError.style.display="flex";
        emailError.textContent="Enter valid email" 
    }else if(email.value.length>30){
        usernameError.style.display="none";
        phoneError.style.display="none";
        placeError.style.display="none";
        categoryError.style.display="none";
        emailError.style.display="flex";
        emailError.textContent="Email is too long "
    }else if(place.value.trim()===""){
        usernameError.style.display="none";
        phoneError.style.display="none";
        emailError.style.display="none"
        categoryError.style.display="none";
        placeError.style.display="flex";
        placeError.textContent="place canot be empty "
    }
    else if(place.value.length>18){
        usernameError.style.display="none";
        phoneError.style.display="none";
        emailError.style.display="none"
        categoryError.style.display="none";
        placeError.style.display="flex";
        placeError.textContent="max 18 letters allowed "
    }else if(category.value==="Choose"){
        usernameError.style.display="none";
        phoneError.style.display="none";
        emailError.style.display="none"
        placeError.style.display="none"
        categoryError.style.display="flex";
        categoryError.textContent="Choose catogery"
    }else{
        usernameError.style.display="none";
        phoneError.style.display="none";
        emailError.style.display="none"
        placeError.style.display="none";
        categoryError.style.display="none";
        alreadyExist(contactData)
       }
    }

async function alreadyExist(contactData){
    var status1 
    fetch('/createcard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(contactData)
        
    })
        .then(function(response) {
            console.log("fetch process done")
            if (response.ok) {
               
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(function(data) {
            if (data === "fine") {
                document.getElementById("alreadyExistError").style.display="none";
                window.location.href='/home'   
            } else {
                document.getElementById("alreadyExistError").style.display="flex";
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
       return  status1=true;
}    
  