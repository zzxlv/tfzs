$(document).ready(function(){
			   //实现图片慢慢浮现出来的效果 
				$("img").on('load',function(){
			     //图片默认隐藏  
			     $(this).hide(); 
			     //使用fadeIn特效  
			     $(this).fadeIn("5000"); 
			   }); 
			   // 异步加载图片，实现逐屏加载图片 
			   $(".scrollLoading").scrollLoading();
})

