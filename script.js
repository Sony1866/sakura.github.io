var email=document.forms['data']['Username'];
var Password=document.forms['data']['Sandi'];

function validated(){
    if (email.value.length < 9){
      alert('Mohon di isi dengan benar')
      email.focus()
      return false;
    }
    if (Password.value.length < 9){
      alert('Mohon di isi dengan benar')
      Password.focus()
      return false;
    }
   
}


