$(document).ready(function() {
	/*點擊*/ 
	//主選單1點擊顯示子選單1
	$('.main-menu-list1').click(function(e){
		e.preventDefault();
		$('.select-menu1').slideToggle();
		$('.main-menu-list1').toggleClass('active');
	})
	//主選單2點擊顯示子選單2
	$('.main-menu-list2').click(function(e){
		e.preventDefault();
		$('.select-menu2').slideToggle();
		$('.main-menu-list2').toggleClass('active');
	})
	//主選單3點擊顯示子選單3
	$('.main-menu-list3').click(function(e){
		e.preventDefault();
		$('.select-menu3').slideToggle();
		$('.main-menu-list3').toggleClass('active');
	})
	//主選單4點擊顯示子選單4
	$('.main-menu-list4').click(function(e){
		e.preventDefault();
		$('.select-menu4').slideToggle();
		$('.main-menu-list4').toggleClass('active');
	})
	//主選單5點擊顯示子選單5
	$('.main-menu-list5').click(function(e){
		e.preventDefault();
		$('.select-menu5').slideToggle();
		$('.main-menu-list5').toggleClass('active');
	})
	/*滑過*/ 
	//滑過主選單1顯示子選單1
	$('.main-menu2-list1').hover(function () {
		$('.select2-menu1').slideToggle();
		}, function () {
			$('.select2-menu1').slideToggle();
		}
	);
	//滑過主選單2顯示子選單2
	$('.main-menu2-list2').hover(function () {
		$('.select2-menu2').slideToggle();
		}, function () {
			$('.select2-menu2').slideToggle();
		}
	);
	//滑過主選單3顯示子選單3
	$('.main-menu2-list3').hover(function () {
		$('.select2-menu3').slideToggle();
		}, function () {
			$('.select2-menu3').slideToggle();
		}
	);
	//滑過主選單4顯示子選單4
	$('.main-menu2-list4').hover(function () {
		$('.select2-menu4').slideToggle();
		}, function () {
			$('.select2-menu4').slideToggle();
		}
	);
	//滑過主選單5顯示子選單5
	$('.main-menu2-list5').hover(function () {
		$('.select2-menu5').slideToggle();
		}, function () {
			$('.select2-menu5').slideToggle();
		}
	);
});