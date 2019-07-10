;
! function() {

    //1.渲染商品列表, 传入两个参数，一个id和数量，根据id和数量渲染整个可见的列表.
    function goodslist(id, count) {
        $.ajax({
            url: 'http://localhost/alongdata/meizu/php/meizudata.php', //获取所有的接口数据
            dataType: 'json'
        }).done(function(data) {
            console.log(data)

            $.each(data, function(index, value) {
                if (id == value.sid) { //遍历判断sid和传入的sid是否相同，方便将那条数据设置到渲染的商品列表中。
                    var $clonebox = $('.cart-merchant:hidden').clone(true, true);
                    $clonebox.find('.cart-col-select').find('img').attr('src', value.url);
                    $clonebox.find('.cart-col-select').find('img').attr('sid', value.sid);
                    $clonebox.find('.cart-col-select').find('a').html(value.titile);
                    $clonebox.find('.cart-col-price').find('span').html(value.price);
                    $clonebox.find('.mz-adder').find('input').val(count);
                    //计算每个商品的价格。
                    $clonebox.find('.cart-col-total').find('strong').html((value.price * count).toFixed(2));
                    $clonebox.css('display', 'block');
                    $('.cart-more-buy').append($clonebox);
                    //priceall(); //计算总价的
                }
            });
        })
    }
    goodslist(1, 1)
        //2.获取cookie，执行渲染列表的函数
        // if (getcookie('cookiesid') && getcookie('cookienum')) {
        //     var s = getcookie('cookiesid').split(','); //数组sid
        //     var n = getcookie('cookienum').split(','); //数组num
        //     $.each(s, function(i, value) {
        //         goodslist(s[i], n[i]);
        //     });
        // }

    //3.如果购物车为空，显示cart-empty-content盒子(购物车空空的)
    // kong();

    // function kong() {
    //     if (getcookie('cookiesid') && getcookie('cookienum')) {
    //         $('.cart-empty-content').hide(); //cookie存在，购物车有商品，隐藏盒子。
    //     } else {
    //         $('.cart-empty-content').show();
    //     }
    // }

    // //4.计算总价和总的商品件数，必须是选中的商品。
    // function priceall() {
    //     var $sum = 0;
    //     var $count = 0;
    //     $('.cart-merchant:visible').each(function(index, element) {
    //         if ($(element).find('.cart-checkbox input').prop('checked')) {
    //             $sum += parseInt($(element).find('.quantity-form').find('input').val());
    //             $count += parseFloat($(element).find('.b-sum').find('strong').html());
    //         }
    //     });

    //     $('.amount-sum').find('em').html($sum);
    //     $('.totalprice').html('￥' + $count.toFixed(2));
    // }



}()