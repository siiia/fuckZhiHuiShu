(function(){
	setTimeout(function(){
		//1表示需要初始化，0表示不需要
	var n = 1;
	var timer = null;
	var initFlag = 1;
	function checkAll(){
		if(initFlag){
			console.log("初始化视频ing");
			//设置1.5倍加速
            $('.speedTab15').trigger('click');
			//音量设置为零
            $('.volumeIcon').trigger('click');
            //设置流畅画质
             $('.line1bq').trigger('click');			
            initFlag = 0;
		}
		//如果视频正常播放
		if($('#vjs_mediaplayer_html5_api')[0]) {
			var questionFlag  = $('#tmDialog_iframe').contents().find(".isExamFinish");
			//如果视频暂停或者出现答题。
			if ($('#vjs_mediaplayer_html5_api')[0].paused || $('.popbtn_cancel').length==1){
				//随机问题falg
				//是否出现随机问题
				if($('.popbtn_cancel').length==1){
					console.log("出现随机测试");
					questionFlag.val("0");
					var length = $('.popbtn_cancel').length;
					$('.popbtn_cancel')[0].click();
					console.log(length);
				} else if($('#vjs_mediaplayer_html5_api')[0].paused){
					initFlag = 1;
					//自动点击下一节
					$('.next_lesson_bg').trigger('click');	
				}
			}
		}
		if ($('.next_lesson_bg')[0].style.display==='none'){
			clearTimeout(timer);
		}
		console.log("当前正在刷课ing");
		n++;
	}
	timer = setInterval(checkAll,4000);
	
	},3000);
	
})();

//使用过程中不要手动暂停