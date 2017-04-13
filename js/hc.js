
$(document).ready(function () {
	var hc_winwidth = $(window).width();
	var hc_winheight = $(window).height();
	$("html").css("fontSize",hc_winwidth/160*7+"px");
	
	document.body.addEventListener('touchstart', function () { }); //css active ios 
	
	//这中间可以写js
	
	
		/*--删除消息弹框---*/
		
		$('.deleteUp_a').on('click',function(){
				$('.deleteUp').show()
			});
		$('.deleteUp .cancel').on('click',function(){
				$('.deleteUp').hide()
			});
	
		/*--我的团队里面的切换---*/
	$('.myTeam .hd ul li').on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		
			$('.myTeam .bd div').eq($(this).index()).show().siblings().hide();
		})	
	
	/*-----我的收藏中删除商品弹框myFavorite-----*/
	
	$('.deletePopUp_a').on('click',function(){
			$('.deletePopUp').show();
		
		})
		
	$('.deletePopUp .close,.deletePopUp .cancel').on('click',function(){
			$('.deletePopUp').hide();
		
		})
	
	
	/*-----我的订单myOrder切换------*/
	$('.myOrder .nav li').on('click',function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.myOrder .bd>div').eq($(this).index()).show().siblings().hide();
		
		})
    /*-----支付方式选择---*/
	$('.withdrawWay_ul li').on('click',function(){
			$(this).addClass('cur').siblings().removeClass('cur')
		})







	
	
	
	
	
	
	
	
	
	
	
	/*-----编辑订阅历史------*/
		$('.compileHistory .item-form').on('click',function(){
			if(checked == false){
					$(this).find('.p_checkbox input')[0].checked = true;
				}else{
					
					$(this).find('.p_checkbox input')[0].checked = false;
					
					}
		})
	
	
/*
	$('.compileHistory .item-form').on('click',function(){
			$(this).find('.p_checkbox input')[0].checked = true;
		})
*/	

	$('#btnCheckAll').on('click',function(){
			$("input[name='video']").each(function(){ this.checked = true;});
		})
		
		
	$('#btnCheckNone').on('click',function(){
			$("input[name='video']").each(function(){ this.checked = false;});
		})
		
/*-----个人资料选择男女---*/
	$('.item_sex .sex span').on('click',function(){
			$(this).addClass('cur').siblings().removeClass('cur')
		})


/*-----个人资料选择付款方式---*/
	$('.item_payment .hc_payment span').on('click',function(){
			$(this).addClass('cur').siblings().removeClass('cur')
		})

/*-----娅币提现withdrawDeposit支付方式选择---*/
	$('.withdrawWay_ul li').on('click',function(){
			$(this).addClass('cur').siblings().removeClass('cur')
		})
			
	/*--------密码修改----------*/
		$('.changePassword .hd li').click(function(){
				$(this).addClass('on').siblings().removeClass('on')
				$('.changePassword .bd div').eq($(this).index()).show().siblings().hide()
			
			})
		
		
/*-----充值娅币选择奖励值---*/


$('.recharge_ul li').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on')
	})
		
/*-----视频直播的切换videoTab---*/

$('#liveTelecast .hd li').on('click',function(){
	$(this).addClass('on').siblings().removeClass('on')
	$('#liveTelecast .bd>ul').eq($(this).index()).show().siblings().hide()
		})		
		
		
/*-----视频直播的切换videoTab---*/
		
$('.videoTab .hd li').on('click',function(){
	$(this).addClass('on').siblings().removeClass('on')
	$('.videoTab .bd>div').eq($(this).index()).show().siblings().hide()
		})		
		
$('.rankingTab .ranking_hd li').on('click',function(){
	$(this).addClass('on').siblings().removeClass('on')
	$('.rankingTab .ranking_bd>ul').eq($(this).index()).show().siblings().hide()
		})	
			
/*-----充值成功弹框---*/
$('.rechargeWinUp_btn').on('click',function(){
		$('.rechargeWinUp').show()
	})		
		
$('.rechargeWinUp .hd .close').on('click',function(){
		$('.rechargeWinUp').hide()
	})	
		
/*-----充值失败弹框---*/
$('.rechargeFailUp_btn').on('click',function(){
		$('.rechargeFailUp').show()
	})		
		
$('.rechargeFailUp .hd .close').on('click',function(){
		$('.rechargeFailUp').hide()
	})		
		
/*-----充值失败弹框---*/
$('.hc_login_btn').on('click',function(){
		$('.hc_loginUp').show()
	})		
		
$('.hc_loginUp .hd .close').on('click',function(){
		$('.hc_loginUp').hide()
	})		
		
/*-----二级菜单---*/

$('.hc_sub_btn').on('click',function(){
		$('.hc_sub').slideToggle(500)
		
	})		

/*-----电台二级菜单---*/

$('.broadcastStation_btn').on('click',function(){
		$('.broadcastStation_sub').slideToggle(500)
		
	})		

		
/*-----20160720电台切换js---*/
	
$('.broadcastingStation .hd li').on('click',function(){
	$(this).addClass('on').siblings().removeClass('on')
	$('.broadcastingStation .bd>div').eq($(this).index()).show().siblings().hide()
		})		
	
$('.broadcastingStation_dl').on('click',function(){
	$(this).toggleClass('on').siblings().removeClass('on')
		})		
	
/*-----20160722电台播放js---*/

$('.radio_div02 span').on('click',function(){
		$(this).toggleClass('on')
	})

/*-----20160802消费提醒余额不足提醒---*/
/*--余额不足提醒---*/
		$('.lackBalance_popUp_a').on('click',function(){
				$('.lackBalance_popUp').show()
			})
		$('.lackBalance_popUp .close,.lackBalance_popUp .cancel').on('click',function(){
				$('.lackBalance_popUp').hide()
			})
/*--消费提醒---*/
		$('.collectFee_popUp_a').on('click',function(){
				$('.collectFee_popUp').show()
			})
		$('.collectFee_popUp .close,.collectFee_popUp .cancel').on('click',function(){
				$('.collectFee_popUp').hide()
			})
			
/*--取消订阅弹框---*/
		
		$('.unsubscribeUp_a').on('click',function(){
				$('.unsubscribeUp').show()
			})
		$('.unsubscribeUp .cancel').on('click',function(){
				$('.unsubscribeUp').hide()
			})
		
		
				
/*--删除消息弹框---*/
		
		$('.rechargeWinUp_a').on('click',function(){
				$('.verifyWinUp').show()
			})
		$('.verifyWinUp .close').on('click',function(){
				$('.verifyWinUp').hide()
			})
		




/*-----礼物 表情 分享---*/

$('.video_sub>div').hide()
$('.gift_btn').on('click',function(){
		if($('.video_sub #gift').css('display')=="none"){
				$('.video_sub #gift').show().siblings().hide()
			}else{
				$('.video_sub #gift').hide()
				}
	})	
		
$('.face_btn').on('click',function(){
		if($('.video_sub #expression').css('display')=="none"){
				$('.video_sub #expression').show().siblings().hide()
			}else{
				$('.video_sub #expression').hide()
				}
		
	})	
$('.add_btn').on('click',function(){
		if($('.video_sub #add').css('display')=="none"){
				$('.video_sub #add').show().siblings().hide()
			}else{
				$('.video_sub #add').hide()
				}
		
	})	
		
$('.share_btn').on('click',function(){
		$('.video_sub #share').show().siblings().hide()
	})	

/*-----文本域高度自适应---*/
/*function textareaHeight(){
			var textareaSH=$('.video_footer .videoBottom .words').scrollTop()
				textareaH=$('.video_footer .videoBottom .words').height()
			$('.video_footer .videoBottom .words').height(textareaSH+textareaH)
	}
	
$('.video_footer .videoBottom .words').keyup(function(){
	textareaHeight();
	
	})
	
	
	
*/	
	
jQuery.fn.extend({
            autoHeight: function(){
                return this.each(function(){
                    var $this = jQuery(this);
                    if( !$this.attr('_initAdjustHeight') ){
                        $this.attr('_initAdjustHeight', $this.outerHeight());
                    }
                    _adjustH(this).on('input', function(){
                        _adjustH(this);
                    });
                });
                /**
                 * 重置高度
                 * @param {Object} elem
                 */
                function _adjustH(elem){
                    var $obj = jQuery(elem);
                    return $obj.css({height: $obj.attr('_initAdjustHeight'), 'overflow-y': 'hidden'})
                            .height( elem.scrollHeight );
                }
            }
        });
        // 使用
        $(function(){
            $('.videoBottom textarea').autoHeight();
        });	
			
			
/*-----搜索切换---*/
		
$('.search .hd li').on('click',function(){
	$(this).addClass('on').siblings().removeClass('on')
	$('.search .bd>div').eq($(this).index()).show().siblings().hide()
		})		
		
/*-----订阅js---*/
$('.subscription_btn').on('click',function(){
		if($(this).html()=="+订阅"){
					$(this).css({"background":"#dddddd","color":"#fff"});
					$(this).html('取消订阅');
		}else if($(this).html()=="取消订阅"){
					$(this).css({"background":"#ff630d","color":"#fff"});
					$(this).html('+订阅');
			
			}
	
	})		
		
		
/*-----收藏js---*/
$('.collect_btn').on('click',function(){
		if($(this).html()=="收藏"){
					$(this).css({"background-color":"#dddddd","color":"#fff"});
					$(this).html('取消收藏');
		}else if($(this).html()=="取消收藏"){
					$(this).css({"background-color":"#ff630d","color":"#fff"});
					$(this).html('收藏');
			
			}
	
	})		
		
		
		
		
		
		
		
		
		
		
		
		
	$('.xf_fengxiangtb ul li').on('click',function(){
		if($('.loading').length<1){
			$("body").append('<div class="loading"></div>')
			$('.loading').show();
		}
	})
});

$(window).on('resize',function(){
	var hc_winwidth = $(window).width();
	var hc_winheight = $(window).height();
	$("html").css("fontSize",hc_winwidth/160*7+"px");
});
window.onload=function(){
    $(".loading").hide();
}

//当调整浏览器窗口的大小时，发生 resize 事件。resize() 方法触发 resize 事件，或规定当发生 resize 事件时运行的函数。

