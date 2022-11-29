var email=document.forms['Signup']['Username'];
var Password=document.forms['Signup']['Sandi'];
var Adr=document.forms['Signup']['Username'];
var Password=document.forms['Signup']['Sandi'];
var email=document.forms['Signup']['Username'];
var Password=document.forms['Signup']['Sandi'];

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
