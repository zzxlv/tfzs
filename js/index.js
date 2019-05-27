for(var i=0;i<$("img").length;i++){
					var src=$("img").eq(i).attr("src");
					$("img").eq(i).attr("data-url",src);
					$("img").eq(i).attr("src","");
				}
				$("img").addClass("scrollLoading");
			   //实现图片慢慢浮现出来的效果 
				$("img").on('load',function(){
			     //图片默认隐藏  
			     $(this).hide(); 
			     //使用fadeIn特效  
			     $(this).fadeIn("5000"); 
			   }); 
			   // 异步加载图片，实现逐屏加载图片 
			   $(".scrollLoading").scrollLoading();