$(function() {


    let a = false;

    $('.fullBtnBlue').click(function() {
        var $username = $('#username').val();
        var $password = $('#password').val();

        $.ajax({
            type: 'post',
            url: 'http://localhost/alongdata/meizu/php/login.php',
            data: {
                user: $username,
                pass: $password
            }
        }).success(function(data) {
            console.log(data)
            if (!data) {
                alert('用户名或密码有误')

            } else {
                alert(2)
                location.href = 'indexss.html';
                localStorage.setItem('successname', username.value);
                //登录成功，采用本地存储存储用户名。

            }
        })
    })
})

// http: //localhost/alongdata/meizu/src/indexss.html