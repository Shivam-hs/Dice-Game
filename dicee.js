var rannum1 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img1").setAttribute("src","images/dice"+rannum1+".png");
var rannum2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img2").setAttribute("src","images/dice"+rannum2+".png");
if (rannum1 > rannum2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (rannum2 > rannum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML = "It's a Draw";
}
