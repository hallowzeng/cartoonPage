//轮播
window.onload=function(){
var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var oImg = document.getElementById("img");
var oText = document.getElementById("img_text");

var num = 0;
var aText = ['一卡通行','蓝图'];


var aUrl =["img/solid/index_logo1.jpg","img/solid/index_logo2.jpg"];

 
oImg.src=aUrl[num];
oText.innerHTML=aText[num];

var time = setInterval(turn,1000);

function tab(){
	  
		oImg.src=aUrl[num];
		oText.innerHTML=aText[num];
		};
		
function turn(){
	num++;
	if(num==aUrl.length){
		num=0;
	}
	tab();
}

oNext.onclick=function(){
	turn();
}

oPrev.onclick=function(){
	num--;
		if(num<0){
		num=aUrl.length-1;
	}
	tab();
}

oImg.onmousemove=function(){
	clearInterval(time);
}
oImg.onmouseout=function(){
	time = setInterval(turn,1000);
}

}