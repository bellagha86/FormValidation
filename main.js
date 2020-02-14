let allforms = document.getElementById('allform')
//console.log("allforms")
var firstName = document.getElementById('firstname').value
var lastName= document.getElementById("lastname").value
var Address= document.getElementById("address").value
var Email= document.getElementById("email")
var Password= document.getElementById("password").value
var Comments= document.getElementById("comments").value
var Email=/^\S+@\S+$/;
var Password=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
var Submitbutton=document.getElementById("submit")
allforms.addEventListener("submit", (e)=>{
    e.preventDefault()})
Submitbutton.addEventListener("click",function(){
if(firstName===""||lastName===""||Address===""||Email===""||Password===""){
    alert("All inputs should be filled")
}
if (!Email.test(email.value)){
        alert ("Email Invalid")
    }
if(!Password.test(password.value)){
        alert("Password does not match criteria")
    }
})

