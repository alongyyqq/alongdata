$(function() {
    let username = $('.username');
    let password = $('.password');
    let usernameflag = true;
    let a = false;
    let b = false;
    let c = false;
    let d = false;
    username.blur(function() {
        if ($(this).val().length == 0) {
            $("span").eq(0).html("用户名不为空");
            a = false;
        } else {
            var reg = /^[0-9a-zA-Z]{4,10}$/;
            if (!reg.test($(this).val())) {
                $("span").eq(0).html("4-10个英文字母或数字");
                a = false;
            } else {
                $("span").eq(0).html("√");
                a = true;

            }
        }
    });

    password.blur(function() {
        if ($(this).val().length == 0) {
            $("span").eq(1).html("密码不为空");
            b = false;
        } else {
            var reg = /^[0-9a-zA-Z]{6,15}$/;
            if (!reg.test($(this).val())) {
                $("span").eq(1).html("6-15个英文字母或数字");
                b = false;
            } else {
                $("span").eq(1).html("√");
                b = true;
            }
        }
    });

    username.blur(function() {
        $.ajax({
            type: 'post',
            url: 'http://localhost/alongdata/meizu/php/registor.php',
            data: {
                name: username.val()
            }
        }).success(function(data) {
            console.log(data)
            if (!data) { //没有重复
                $('span').eq(0).html('√')
                c = true
            } else {
                $('span').eq(0).html('该用户名已经存在')
                c = false
            }
        });
    })


    $(".pass").blur(function() {
        if ($(this).val().length == 0) {
            $("span").eq(2).html("密码不为空");

        } else {
            if ($(this).val() == password.val()) {
                $('span').eq(2).html('√')
                d = true
            } else {
                $('span').eq(2).html('两次输入的用户名不符')
                d = false
            }
        }

    })


    $("#submit").click(function() {
        if (a && b && c && d) {
            $("form").submit();
        } else {
            alert("有信息填写错误");
            return false;
        }
    });
});