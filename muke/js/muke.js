//导航菜单
function showBlock(n){
	var hide = document.getElementsByClassName("submenu");
	hide[n].style.display = "block";
	
}
function hideBlock(n){
	var hide = document.getElementsByClassName("submenu");
	hide[n].style.display = "none";
}
//工具栏
function toolOver(n){
	var toolbarIcon = document.getElementsByClassName("toolbar-icon");
	var toolbarText = document.getElementsByClassName("toolbar-text");
	toolbarIcon[n].style.display = "none";
	toolbarText[n].style.display = "block";
}
function toolOut(n){
	var toolbarIcon = document.getElementsByClassName("toolbar-icon");
	var toolbarText = document.getElementsByClassName("toolbar-text");
	toolbarIcon[n].style.display = "block";
	toolbarText[n].style.display = "none";
}
//图片轮播
window.onload = function(){
	
//	获取圆点
	var banner = document.getElementById("banner-dots");
	var dot = banner.getElementsByTagName("span");
//	向前向后按钮
	var pre = document.getElementById("pre");
  	var next = document.getElementById("next");
//	获取图片数组
	var img = document.getElementsByClassName("picture");
	
	var pic_index=0;
	//	当前图片的索引
	function findIndex(){
		for(var j=0;j<len;j++){
	  		bool = img[j].style.display;
	  		if(bool=="block"){
				pic_index = j;
	  		}	
	 	}	
	 	return  pic_index;
	 	
	}
//	图片自动轮播
//	var num = 0;
	
//	alert(num);
	var len = img.length;
	setInterval(function(){
//		img[num].style.display = "none";
		var num = findIndex();
//		alert(num);
		num++;	
		num = (num==len)?0:num;
		show(num);
//		num=++num==len?0:num;
//		img[num].style.display  = "block";
	},5000);

	for(i=0;i<dot.length;i++){
	   dot[i].index=i; //不知道你有没有发现，循环里的方法去调用循环里的变量体i，会出现调到的不是i的变动值的问题。所以我先在循环外保存住
	   dot[i].onclick=function(){
	    show(this.index);
//	  alert(this.index);
	   }
  	}	
//	点击下一张
  	next.onclick = function(){
  		
	  	var current = findIndex();
//	  	alert(findIndex());
	  	current = (current==(len-1))?-1:current;
	  	show(current+1);
  	};
  	
//	显示某个图片
	function show(a){    //方法定义的是当传入一个下标时，按钮和图片做出对的反应
	   	for(i=0;i<len;i++ ){
		   dot[i].className='';  //很容易看懂吧？每个按钮都先设置成看不见，然后把当前按钮设置成可见。
		   dot[a].className='active';
	   }
	  	for(i=0;i<len;i++){ //把图片的效果设置和按钮相同
		    img[i].style.display="none";
		    img[a].style.display="block";
	   }
	}
	
}
window.onscroll = function(){
	showBackToUp();
}
//返回顶部
function showBackToUp(){
	var scro= document.getElementById("toTop");
	screenHeight = window.screen.height  ;
	scroTop =  document.documentElement.scrollTop || document.body.scrollTop;
	if(scroTop>screenHeight){
		scro.style.display = "block";
	}else{
		scro.style.display = "none";
	}
}
function scrollToTop(){
//	alert("a"); 
//	document.documentElement.scrollTop || document.body.scrollTop = 0;
	scroll(0,0);
}
