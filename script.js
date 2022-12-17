let emailcheck = document.getElementById("mail");

let msg = document.getElementById("message");
 
let pass = document.getElementById("pass");
let msg1 =document.getElementsByClassName("mess")[0];
let correct = document.getElementById("correct");
let btn = document.getElementById("btn");

emailcheck.addEventListener("keydown",email) 

function email(){
 
 let mail = emailcheck.value;
 if(mail.length>=3 && mail.includes("@") && mail.includes(".")){
  console.log("correct");
  msg.innerText='';
 }
  
 else
 {
  console.log("not correct");
  msg.innerText="Make sure email is more than 3 characters and has @ and a.";
 
   msg.style.color='red';
 }
}

pass.addEventListener("keydown", password)

function password(){
 let passwordval = pass.value;
 if(passwordval.length >=8){
 console.log("correct");
 msg1.innerText="";
}
else
{
 msg1.innerText="Make sure password is more than 8 characters.";
 
   msg1.style.color='red';
}
}
 function corr(){
  let passwordval = pass.value;
  let mail = emailcheck.value;
  if(mail.length>=3 && mail.includes("@") && mail.includes(".") && passwordval.length >=8){
  
     correct.innerText = " all good to go!";
     correct.style.color='green';
    
   }
   

}
// btn.addEventListener("onclick",corr)
btn.onmouseover = corr;

function ok(){
 let passwordval = pass.value;
 let mail = emailcheck.value;

var a = confirm("please confirm your details")
if(a){
   alert("successful signup!");
}
else{
  document.getElementById("form").reset();
       
}

}

btn.onclick= ok;
