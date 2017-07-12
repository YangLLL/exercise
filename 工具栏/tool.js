function main(){
	if(confirm("进入主页？")){
		window.open("H:/网页/myapplication/我的网页.html");
	}
	else{}
}
function scrolltoTop(){
	var sheight = document.body.scrollTop;
	var ani = setTimeout(scrolltoTop,20);
	if(sheight < 1)
		clearTimeout(ani);
	var sheight = document.body.scrollTop;
	window.scrollTo(0,sheight-20);
}
function tiaoZhuan(){
	window.location.href = 'H:/网页/myapplication4/PictureWall.html';
}