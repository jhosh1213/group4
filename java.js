//* product photos *//

var BigImg = document.getElementById("BigImg");
var SmallImg = document.getElementsByClassName("SmallImg");

SmallImg[0].onclick = function(){
    BigImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    BigImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    BigImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    BigImg.src = SmallImg[3 ].src;
}