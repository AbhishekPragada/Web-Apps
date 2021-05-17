var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2 = "images/dice" + randomNumber2 + ".png";

var i1 = document.querySelectorAll("img")[0];
i1.setAttribute("src", img1);
var i2 = document.querySelectorAll("img")[1];
i2.setAttribute("src", img2);
