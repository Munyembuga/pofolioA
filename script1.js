var messageerror=document.getElementById("message-error");
var emailerror = document.getElementById("emailerror");
function validatemessage(){
    var message=document.getElementById("contact-message").value;

    var required=30;
    var left=required - message.length;
    if(left>0){
        messageerror.innerHTML= left + 'fill message';
        return false;
    }
     messageerror.innerHTML='';
    return true;
}

function validateemail(){
    var email = document.getElementById('contact-email').value;

 if(email.length == 0){
    emailerror.innerHTM = 'Please write your email';
     return false;
     }
 if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
         emailerror.innerHTML = 'Email Invalid';
     return false;
      }
     emailerror.innerHTML = '';
     return true;


}

function validatesubmitt(){

   if(!validateemail()){
        submiterror.style.display = 'block';
        submiterror.innerHTML = 'Please Fix Error to Submitt';
        setTimeout(function()
         {submiterror.style.display = 'none';}, 3000 );
       return false;
}
else{
    alert("subsribe successfull");
}

}