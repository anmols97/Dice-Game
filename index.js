var randomNumber1 = Math.ceil(6 * Math.random());
var randomNumber2 = Math.ceil(6 * Math.random());

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", "images/dice"+randomNumber1+".png");

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "⛳️ Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! ⛳️";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
