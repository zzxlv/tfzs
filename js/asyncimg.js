(function($) { 
       // alert($.fn.scrollLoading); 
       $.fn.scrollLoading = function(options) { 
         var defaults = { 
           attr: "data-url"
         }; 
         var params = $.extend({}, defaults, options || {}); 
         params.cache = []; 
         $(this).each(function() { 
           var node = this.nodeName.toLowerCase(), 
             url = $(this).attr(params["attr"]); 
           if(!url) { 
             return; 
           } 
           var data = { 
             obj: $(this), 
             tag: node, 
             url: url 
           }; 
           params.cache.push(data); 
         }); 
 
         var loading = function() { 
           var st = $(window).scrollTop(), 
             sth = st + $(window).height(); 
           $.each(params.cache, function(i, data) { 
             var o = data.obj, 
               tag = data.tag, 
               url = data.url;
             console.log(o);
             if(o) { 
               post = o.position().top;
               posb = post + o.height(); 
               var posc= o.offset().top;
               
               /*if(o.hasClass("hide")){
            	   o.removeClass("hide");
            	   o.addClass("hide");
            	   posc= o.offset().top - $(window).scrollTop();
               }*/
               console.log(st+"-"+sth+"-"+post+"-"+posb+"-"+posc+"-"+$(window).scrollTop()+"-"+$(document.body).outerHeight(true));
               if(o.hasClass("scrollLoading")){
            	   if(( post <= sth) || ( posb <= sth)) { 
                       if(tag === "img") { 
                         o.attr("src", url);
                       } else { 
                         o.load(url); 
                       } 
                       data.obj = null; 
                     } 
               }else{
            	   if(tag === "img") { 
                       o.attr("src", url);
                     } else { 
                       o.load(url); 
                     } 
                     data.obj = null; 
               }
               
             } 
           }); 
           
           return false; 
         }; 
 
         loading(); 
         $(window).bind("scroll", loading);
       }; 
     })(jQuery);

//$(document).ready(function () { 
//		for(var i=0;i<$("img").length;i++){
//			var src=$("img").eq(i).attr("src");
//			$("img").eq(i).attr("data-url",src);
//			$("img").eq(i).attr("src","");
//		}
//		$("img").addClass("scrollLoading");
//	   //实现图片慢慢浮现出来的效果 
//		$("img").on('load',function(){
//	     //图片默认隐藏  
//	     $(this).hide(); 
//	     //使用fadeIn特效  
//	     $(this).fadeIn("5000"); 
//	   }); 
//	   // 异步加载图片，实现逐屏加载图片 
////	   $(".scrollLoading").scrollLoading();
//	  
//	 });