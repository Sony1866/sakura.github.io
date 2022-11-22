var email=document.forms['data']['Username'];
var Password=document.forms['data']['Sandi'];

function validated(){
    if (email.value.length < 9){
      alert('Mohon karakter diisi lebih dari 9')
      email.focus()
      return false;
    }
    if (Password.value.length < 9){
      alert('Mohon karakter diisi lebih dari 9')
      Password.focus()
      return false;
    }
   
}


