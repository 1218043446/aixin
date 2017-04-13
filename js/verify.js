// JavaScript Document

/*-------表单验证------*/
$(function () {
    // 邮政编码验证
    jQuery.validator.addMethod("phone", function (value, element) {
        var phone = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
        return this.optional(element) || (phone.test(value));
    }, "请填写正确的手机号码！");
	
	

    $('#login_form').validate({
        rules: {
            username: {
                required: true,
                minlength: 11,
                phone: true
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 16
            },

            "confirm-password": {
                equalTo: "#password"

            },
            phone: {
                required: true,
                phone: true
            }


        },

            messages: {
				username: {
					required: "必须填写用户名",
					minlength: "用户名11位的手机号",
					remote: "用户名不存在"
				},
				password: {
					required: "必须填写密码",
					minlength: "密码最小为6位",
					maxlength: "密码最大为16位"
				},
	
				"confirm-password": {
					equalTo: "两次输入密码不一致"
				},
				phone: {
					//phone:'输入正确的手机号码！'
				}


        }


    })




})