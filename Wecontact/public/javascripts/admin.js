// document.getElementById("deleteButtonMain").addEventListener("click",()=>{
//     alert("hi")
   

// })
document.getElementById("popUpCancelButton").addEventListener("click",()=>{
    document.getElementById("deletePopUp").style.display="none";
})

function showPopup(data){
     
    // let idForDelete = document.getElementById("deleteButtonMain").value
    
    document.getElementById("deleteButton").value=data.value
    document.getElementById("deletePopUp").style.display="flex";

}