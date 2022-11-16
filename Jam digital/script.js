setInterval(() => {
  const clock=document.querySelector("#clock");
let date = new Date();
let jam = date.getHours();
let menit= date.getMinutes();
let detik = date.getSeconds();
let Waktu= "AM";
if (jam<10) {
  jam = "0"+jam;
}
if (menit<10) {
  menit = "0"+menit;
}
if (detik<10) {
  detik = "0"+detik;
}

if (jam>12) {
  jam = jam-12;
  Waktu="PM"
}
clock.textContent=jam+":"+menit+":"+detik+" "+Waktu
});