// JavaScript Document
$(document).ready(function() {
	//index.html
	/*信息种类*/
	$(".ix_li1 a,.ix_li2 a").click(function() {
		if ($(this).hasClass("ix_gou")) {
			$(this).removeClass("ix_gou");
		} else {
			$(this).addClass("ix_gou");
		}
	});

	/*桌面通知*/
	var bg_off = 0;
	$(".ix_li3").click(function() {
		if (bg_off === 0) {
			$(this).css("background-image", "url(images/ix_off.jpg)");
			bg_off = 1;
		} else {
			$(this).css("background-image", "url(images/ix_on.jpg)");
			bg_off = 0;
		}
	})
	var bg_off1 = 0;
	$(".ix_li4").click(function() {
			if (bg_off1 == 0) {
				$(this).css("background-image", "url(images/ix_off.jpg)");
				bg_off1 = 1;
			} else {
				$(this).css("background-image", "url(images/ix_on.jpg)");
				bg_off1 = 0;
			}
		})
		/*商品 外汇 股指*/
	$(".ix_dd dd:first").css("display", "block");
	$(".ix_goods dt a").click(function() {
			var x = $(this).index();
			$(".ix_goods dt a").removeClass("ix_gs_br");
			$(this).addClass("ix_gs_br");

			$(".ix_dd dd").hide();
			$(".ix_dd dd").eq(x).show();
		})
		//infor.html
		/*加载更多*/
	$(".io_more").click(function() {
			$(".io_left dl").append("<dd><a href='javascript:;'><img class='io_img' src='images/sy_img05.jpg' width='170' height='111' title='第一黄金网：04/08独家亚盘黄金价格交易策略' alt='第一黄金网：04/08独家亚盘黄金价格交易策略'></a><div class='io_txt'><a href='javascript:;'><h1>第一黄金网：04/08独家亚盘黄金价格交易策略</h1></a><a href='javascript:;'><p>周四(4月7日)，黄金跳涨近2%，美市盘中最高上探至1243.45美元/盎司，多头强势上攻，1240美元关口失而复得。黄金周四的上涨仍是避险情绪及宽松的利，美市盘中最高上探至1243.45美元/盎司，美市盘中最高上探至1243.45美元/盎司</p></a><div class='io_desc'><span class='io_author'><em>股市</em><em>文/林木</em></span><span class='io_time'>2016-01-11 17:42</span></div></div></dd>");
		})
		/*行情*/
	$(".io_dl dl").css("display", "none");
	$(".io_dl dl:first").css("display", "block");
	$(".io_title li").click(function() {
			var x = $(this).index();
			$(".io_title li").find("a").removeClass("io_te_check");
			$(this).find("a").addClass("io_te_check");

			$(".io_dl dl").hide();
			$(".io_dl dl").eq(x).show();

		})
		//market.html
		//主要报价
	$(".mt_dd dd:first").addClass("mt_color");
	$(".mt_dl dl:first").css("display", "block");
	$(".mt_dd dd").click(function() {
			var x = $(this).index();
			$(".mt_dd dd").removeClass("mt_color");
			$(this).addClass("mt_color");

			$(".mt_dl dl").hide();
			$(".mt_dl dl").eq(x).show();

		})
		//calendar.html
		//财经日历-单选
	$(".cr_category li:eq(0),.cr_country li:eq(0),.cr_degree li:eq(0)").addClass("cr_check");
	$(".cr_category li").click(function() {
		var li_len = $(".cr_category li").length;
		var num = 0;

		if ($(this).hasClass("cr_check")) {
			$(this).removeClass("cr_check");
		} else {
			$(this).addClass("cr_check");
		}
		$(".cr_category li").each(function() {
			//最后一个点击，全部选中、选中时，点击一个，全部取消
			if ($(this).hasClass("cr_check")) {
				num++;
				if (li_len == num) {
					$(".cr_category .cr_all").addClass("cr_check");
				} else {
					$(".cr_category .cr_all").removeClass("cr_check");
				}
			}
		})
	})

	$(".cr_country li").click(function() {
		var li_len = $(".cr_country li").length;
		var num = 0;

		if ($(this).hasClass("cr_check")) {
			$(this).removeClass("cr_check");
		} else {
			$(this).addClass("cr_check");
		}
		$(".cr_country li").each(function() {
			//最后一个点击，全部选中、选中时，点击一个，全部取消
			if ($(this).hasClass("cr_check")) {
				num++;
				if (li_len == num) {
					$(".cr_country .cr_all").addClass("cr_check");
				} else {
					$(".cr_country .cr_all").removeClass("cr_check");
				}
			}
		})
	})

	$(".cr_degree li").click(function() {
			var li_len = $(".cr_degree li").length;
			var num = 0;

			if ($(this).hasClass("cr_check")) {
				$(this).removeClass("cr_check");
			} else {
				$(this).addClass("cr_check");
			}
			$(".cr_degree li").each(function() {
				//最后一个点击，全部选中、选中时，点击一个，全部取消
				if ($(this).hasClass("cr_check")) {
					num++;
					if (li_len == num) {
						$(".cr_degree .cr_all").addClass("cr_check");
					} else {
						$(".cr_degree .cr_all").removeClass("cr_check");
					}
				}
			})
		})
		//全部
	$(".cr_category .cr_all").click(function() {
		if ($(this).hasClass("cr_check")) {
			$(this).removeClass("cr_check");
			$(".cr_category li").removeClass("cr_check");
		} else {
			$(this).addClass("cr_check");
			$(".cr_category li").addClass("cr_check");
		}
	})
	$(".cr_country .cr_all").click(function() {
		if ($(this).hasClass("cr_check")) {
			$(this).removeClass("cr_check");
			$(".cr_country li").removeClass("cr_check");
		} else {
			$(this).addClass("cr_check");
			$(".cr_country li").addClass("cr_check");
		}
	})
	$(".cr_degree .cr_all").click(function() {
		if ($(this).hasClass("cr_check")) {
			$(this).removeClass("cr_check");
			$(".cr_degree li").removeClass("cr_check");
		} else {
			$(this).addClass("cr_check");
			$(".cr_degree li").addClass("cr_check");
		}
	})
	$(".io_line").hover(function() {
		var imgPos = $(".io_dd").position();
		if (Math.abs(imgPos.top) % 200 === 0) {
			if (imgPos.top != -1000) {
				$(".io_dd").animate({
					top: (imgPos.top - 200) + "px"
				})
			}
		}


	})
 

 
})
alert(1);