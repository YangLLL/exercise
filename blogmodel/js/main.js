;$(function(){
	'use strict';
	
	var sidebar = $('#sidebar'), //选择侧栏
		mask = $('.mask'),	//选择mask
		backButton = $('.back-to-top'), //选择侧栏触发器
		sidebar_trigger = $('#sidebar_trigger');	//选择返回菜单
		
		function showSideBar(){//显示侧栏
				mask.fadeIn();	//显示mask
//			sidebar.animate({'right':0}); //传一个对象
//			sidebar.css('right',0);
			sidebar.css('transform','translate(0,0)');//调整侧栏相关的CSS
		
		}
		function hideSideBar(){	//隐藏侧栏
			mask.fadeOut();	//隐藏mask
//			sidebar.css('right',-sidebar.width());
			sidebar.css('transform','translate('+
				sidebar.width() +'px'+ ',0');//调整侧栏相关的CSS
		}
		sidebar_trigger.on('click',showSideBar); //监听侧栏触发器
		mask.on('click',hideSideBar);	//监听mask
		backButton.on('click',function(){ //监听返回按钮点击事件
//			console.log('backed');
			$('html,body').animate({
				scrollTop:0
			},800)
		})
		
		$(window).on('scroll',function(){	//监听window的scroll事件
			//如果已滚动的部分高于窗口的高度，
			if($(window).scrollTop()>$(window).height())
			backButton.fadeIn();	//显示返回按钮
			else
			backButton.fadeOut();	//否则隐藏返回按钮
		})
		
		
//		$(window).trigger('scroll');  //触发scroll事件
})
