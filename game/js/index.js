window.onload= function(){
	var oDiv = document.getElementById("left");
	var oImg = oDiv.getElementsByTagName("img");
	var res = document.getElementById("res");
	var core = document.getElementById("core").innerHTML;
	var Imgs = ["./image/shitou.png","./image/jiandao.png","./image/bu.png"];
	for(var i=0,arr = oImg.length;i<arr;i++){
		oImg[i].indent = i;
		oImg[i].onclick = function(){
			var hand = document.getElementById("handSrc");
			var result = document.getElementById("result");
			result.style.display = "block";
			var com = this.indent;
			var cImg = document.getElementById("cImg")
			var cImgs = document.getElementById("comImg");
			var comImg = cImg.getAttribute("in");

			hand.src= this.src;
			cImgs.src=cImg.src;
			if(com<comImg&&com-comImg==-1||com-comImg==2){
				res.innerHTML = "你赢了"
				core++;
				document.getElementById("core").innerHTML=core;
			}else if(com==comImg){
				res.innerHTML = "平局"
			}else{
				res.innerHTML = "你输了"
			}
		}
	}
	getImg();
	function getImg(){
		var timer = function(){
			var index = Math.floor(Math.random()*3);
			document.getElementById("cImg").src = Imgs[index];	
			var temp = document.getElementById("cImg");
			temp.setAttribute("in",index);
		}
		setInterval(timer,300);
	}
}