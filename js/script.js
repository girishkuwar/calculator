var i =1;
setInterval(chnage,1000);
function hiii(){
    let img = document.getElementById("imges");
      if (img.src = "switch_off.png") {
        img.src = "btn.jpg";
      } else {
        img.src = "switch_off.png";
      }
}
function chnage(){
  i= i+1;
  document.getElementById("name").innerHTML = i;
}
$('.info').keypress((e) => {
  if (e.which === 13) {
    signin();
    alert("signin")
  }
})

function signin() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  if (username === "girish" && password === "447474") {
    alert("ok")
  }else {
    alert("wrong")
  }
}