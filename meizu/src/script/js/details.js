! function() {
    //1.获取sid
    var picid = location.search.substring(1).split('=')[1];
    // console.log(picid)


    //2.将当前的id传给后端获取对应的数据
    $.ajax({
        url: 'http://localhost/alongdata/meizu/php/details.php',
        data: {
            sid: picid
        },
        dataType: 'json'
    }).done(function(data) { //data:后端返回的和id对应的数据
        console.log(data);
        $('.preview-booth').find('img').attr('src', data.url); //详情页大图
        $('.preview-booth').find('img').attr('src', data.sid);;
        $('#bpic').attr('src', data.url);
        $('.property-hd').find('h1').html(data.title);
        $('.-name').html(data.title);
        $('#J_price').html(data.price);
        var arr = data.imgurls.split(',');
        console.log(arr);
        var str = '';

        $.each(arr, function(index, value) {
            str += '<li class="current"><a href="javascript:;"><img src="' + value + '" width="80" height="80"/></a></li>';
            console.log(value)
        });
        console.log(str)
        $('.preview-thumb').html(str);
    });


    //放大镜



    $('#sf').width($('.preview-booth').width() * $('#bf').width() / $('#bpic').width()); //小图的宽度
    $('#sf').height($('.preview-booth').height() * $('#bf').height() / $('#bpic').height());
    $('.preview-booth').hover(function() { //鼠标经过   移出
        $('#sf').css('visibility', 'visible'); //小放出现
        $('#bpic').css('visibility', 'visible'); // 大图出现
        $(this).on('mousemove', function(ev) {
            var $left = ev.pageX - $('.preview').offset().left - $('#sf').width() / 2;
            var $top = ev.pageY - $('.preview').offset().top - $('#sf').height() / 2;

            if ($left < 0) {
                $left = 0
            } else if ($left >= $('.preview-booth').width() - $('#sf').width()) {
                $left = $('.preview-booth').width() - $('#sf').width()
            }
        })


    }, function() {})
}()