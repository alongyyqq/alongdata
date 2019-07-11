class Meizu { //轮播图
    constructor() {
        this.banner = $('.bannermeizu'); //获取元素
        this.picul = $('.bannermeizu ul');
        this.picli = $('.bannermeizu ul li');
        this.btnli = $('.bannermeizu ol li');
        this.num = 0; //用于判断  运动
        this.timer = null; //停止定时器
    }

    init() {
        let _this = this;
        let $first = this.picli.first().clone(); //克隆第一个li
        let $last = this.picli.last().clone();
        this.picul.prepend($last); //追加到UL最前边
        this.picul.append($first); //追加到UL最后面
        this.liwidth = this.picli.eq(0).width(); //  一个LI的宽度
        this.picul.width($('.bannermeizu ul li').size() * this.liwidth).css('left', -this.liwidth); //给UL设置宽度

        this.btnli.on('click', function() { //给小圆圈    增加类
            _this.num = $(this).index();
            _this.piculmove(_this.num);
            _this.btnli.eq(_this.num).addClass('active').siblings().removeClass('active');

        });
        this.autoplay()

    }


    autoplay() { //定时器开始  执行运动    判断加类 减类
        let _this = this;
        this.timer = setInterval(function() {
            _this.num++;
            if (_this.num === _this.btnli.length) {
                _this.btnli.eq(0).addClass('active').siblings().removeClass('active');
            } else {
                _this.btnli.eq(_this.num).addClass('active').siblings().removeClass('active');
            }
            _this.piculmove(_this.num);
        }, 4000);
    }


    piculmove(index) {
        let _this = this;
        this.picul.animate({
            left: -(this.num + 1) * this.liwidth
        }, 100, function() {
            if (_this.num === _this.btnli.length) {
                _this.picul.css('left', -_this.liwidth);
                _this.num = 0;
            }
            if (_this.num === -1) {
                _this.picul.css('left', -_this.liwidth * _this.btnli.length - 1);
                _this.num = _this.btnli.length - 1;
            }
        });
    }

}

new Meizu().init();


//商品渲染

;
! function() {
    //1.拼接数据
    $.ajax({
        url: 'http://localhost/alongdata/meizu/php/meizudata.php',
        dataType: 'json'
    }).done(function(data) {
        var $html = '<ul class="clearfix">';
        console.log(data);
        $.each(data, function(index, value) {
            $html += `
                            <li class="Phone3">
                            <div class="section-item-box goods-box">
                                <a class="box-img box-img-retina" href="details.html?sid=${value.picid}" target="_blank"  >
                                    <img class="goods-img lazy-img" data-img="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" src="${value.url}">
                                    <span class="box-info">
                                            <span class="goods-name">${value.title}</span>
                                    <span class="goods-desc">${value.titleb}</span>
                                    <span class="goods-price"> <i>￥</i>${value.price}<em></em> </span>
                                    </span>
                                    <span class="product-sign red" data-color="red">直降</span>
                                </a>
                            </div>
                        </li>
			`;
        });
        $html += '</ul>';
        $('.goodlist').html($html);
    });
}();