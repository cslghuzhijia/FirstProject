$(function(){
	inputFocus();
	Chposition();
	Ahover();
	Aclick();
	SmallIconhover();
	ListShow();
	Slide();
	loadthing();
	getFocus();
	addImg();
	closeHover();
	chooseup_click();
	unitcolor_hover();
	weibo_hide();
	WB_feed_typeHover();


	
	Wbface_hover();
	personcard();
	









});



var index=0;
function personcard(){
	$(".WB_global_personcard").mouseover(function () {
        $(this).parents(".pl_content_homeFeed").find(".WB_global_personcard").css({ visibility: "visible" });
        index=0;
    });
    $(".WB_global_personcard").mouseout(function(){
    	index=1;
    });
	
}



function Wbface_hover(){
	
	$(".WB_face").mouseover(function () {
        $(this).parents(".pl_content_homeFeed").find(".WB_global_personcard").css({ visibility: "visible" });
        
    });
    $(".WB_face").mouseout(function(){
    	if (index==0) {
    		 $(this).parents(".pl_content_homeFeed").find(".WB_global_personcard").css({ visibility: "visible" });
    	}
    	else{
    		$(this).parents(".pl_content_homeFeed").find(".WB_global_personcard").css({ visibility: "hidden" });
    	}
    	
    });
	
}









































function WB_feed_typeHover(){
	$(".WB_feed_type").hover(function(){
		$(this).find(".icon_chooseup").css({visibility:"visible"});
		$(this).find(".WB_name").addClass("wbnamecolor");
	},function(){
		if (num%2!=1) {
			$(this).find(".icon_chooseup").css({visibility:"hidden"});
		}
		else{
			$(this).find(".icon_chooseup").css({visibility:"visible"});
		}
		$(this).find(".WB_name").removeClass("wbnamecolor");
	});
}
function weibo_hide(){
	$("#hide").click(function(){
		$(this).parentsUntil(".pl_content_homeFeed").hide();
	});
}

function unitcolor_hover(){

$(".menu_small a").hover(function(e){
	$(this).addClass("chbg");
},function(){
	$(this).removeClass("chbg");
});
	
}
function chPosition(obj,a,b)
{
	var Xp=obj.css("background-position").split(" ")[0];
	var Yp=obj.css("background-position").split(" ")[1];
	if (a=="no") {
		Xp=Xp;
	}
	else{
		Xp=a;
	}
	if (b=="no") {
		Yp=Yp;
	}
	else{
		Yp=b;
	}
	var pos=Xp+" "+Yp;
	obj.css({backgroundPosition:pos});
}
var num=0;
function chooseup_click(){
	$(".icon_chooseup").hover(function(){

		chPosition($(this),"-100px","no");
		
	},function(){
		chPosition($(this),"-75px","no");
	});

	$(".icon_chooseup").click(function(){
		if (num%2==0) {
			chPosition($(this),"no","-225px");
			$(".menu_small").show();
			 WB_feed_typeHover();
		}
		else{
			chPosition($(this),"no","-75px");
			$(".menu_small").hide();
		}
		num++;
	});


}















































function closeHover(){
	$(".W_close").hover(function(){
		$(this).addClass("closeh");
	},function(){
		$(this).removeClass("closeh");
	});
	$(".W_close").click(function(){
		$(".W_layer").hide();
	});
}

function addImg(){
	$(".uploadImg").click(function(){
		$(".W_layer").show();
	});
	
}


function loadthing(){
	$("#txtarea").val("有些人有些事，相见不如怀念，说说你的故事吧");

}

function getFocus(){

	$("#txtarea").focus(function(){
		//alert();
		$(".btn_30px").css("visibility","visible");
		$(".send_btn").addClass("changefabu");
		$("#txtarea").val($("#txtarea").attr("value"));
		$(".input").addClass("changecolor");
		$(".arrow").addClass("changeposition");
	});
	$(".input_detail").blur(function(){
		$(".input").removeClass("changecolor");
		$(".arrow").removeClass("changeposition");
		loadthing();
	});
}
























function Slide(){
	$("#Msg").click(function(){
		$(".lev3").show();
	});

	$(".levo").not("#Msg").click(function(){
		$(".lev3").hide();
	});
}



function ListShow(){
	$("#message").click(function(){

		$(".gn_topmenulist").toggle();
	});
}

function allreset(){
	$(".S_txt3").each(
		function(){
			var Y=$(this).children("span").css("background-position").split(" ")[1];
			var d=0+"px"+" "+Y;
			$(this).children("span").css("background-position",d);
		}
	);
}

function Aclick(){
	$(".S_txt1,.S_txt").click(function(){
		$(".S_txt1,.S_txt").removeClass("clickA");
		$(this).addClass("clickA");
	});

	$(".S_txt3").click(function(){
		allreset();
		var Y=$(this).children("span").css("background-position").split(" ")[1];
		var X=-25;
		var s=X+"px"+" "+Y;
		$(this).children("span").css("background-position",s);
	})
}


function inputFocus(){
	$(".gn_input").focus(function(){
		$(this).val("");
		$(".gn_search").addClass("getFocus");
		$(".gn_btn").addClass("getCh");
	})
	$(".gn_input").blur(function(){
		$(this).val("搜索");
		$(".gn_search").removeClass("getFocus");
		$(".gn_btn").removeClass("getCh");
	});

	$(".gn_btn").hover(function(){
		$(".gn_btn").addClass("Chcolor");
	},function(){
		$(".gn_btn").removeClass("Chcolor");
	});


}

function Chposition(){
	$(".gn_tab").click(function(){
		
		$(".gn_tab").removeClass("AddImage");
		$(this).toggleClass("AddImage");
		
	});

}

function Ahover(){
	$(".S_txt1,.S_txt,.S_txt3").hover(function(){
		$(this).addClass("hoverA");
	},function(){
		$(this).removeClass("hoverA");
	});


	$(".S_func1").hover(function(){
		$(this).addClass("hoverfoot");
	},function(){
		$(this).removeClass("hoverfoot");
	});

	
}


function  SmallIconhover()
{
	$(".S_txt1").hover(function(){
		var Y=$(this).children(".W_ico20").css("background-position").split(" ")[1];
		var X=-25;
		var s=X+"px"+" "+Y;
		
		$(this).children(".W_ico20").stop().animate({backgroundPosition:"("+s+")",opacity:'0.6'}, {duration:200});
	},function(){
		var Y=$(this).children(".W_ico20").css("background-position").split(" ")[1];
		var X=0;
		var s=X+"px"+" "+Y;
		
		$(this).children(".W_ico20").stop().animate({backgroundPosition:"("+s+")",opacity:'0.6'}, {duration:200});
	});
	
}


