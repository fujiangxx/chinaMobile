window.onload=function() {
    //二维码
    {
        let QR = document.querySelector(".sjyyt_box");
        let QRbox = document.querySelector(".sjyyt");
        QRbox.onmouseover = function () {
            QR.style.display = "block";
        }
        QRbox.onmouseout = function () {
            QR.style.display = "none";
        }
    }
    //广告消失
    {

        let thinks = document.querySelector(".thinks");
        let closeBtn = document.querySelector(".close-pic");
        closeBtn.onclick = function () {
            thinks.style.display = "none";
        }
    }
    //地址
    {
        let cityMain = document.querySelector(".nav-left-city-main");
        let cityMenu = document.querySelector(".city-menu");
        cityMain.onclick = function () {
            cityMenu.style.display = "block";
        }
    }
    // //banner
    {
        let lunbo = $(".lunbo-box ul li");
        let imgs = $(".banner-pic a img");
        lunbo.click(function () {
            let index = $(this).index();
            n = index;
            lunbo.removeClass("active").eq(index).addClass("active");
            imgs.removeClass("onfirst").eq(index).addClass("onfirst");
        });
        let n = 0;
        let st = setInterval(move, 3000);
        let flag = true;

        function move() {
            n++;
            if (n == imgs.length) {
                n = 0;
            }
            if (n < 0) {
                n = imgs.length - 1;
            }
            lunbo.removeClass("active").eq(n).addClass("active");
            imgs.removeClass("onfirst").eq(n).addClass("onfirst");

        }

        $(".banner-center").hover(function () {
            clearInterval(st);

        }, function () {
            st = setInterval(move, 3000);
        });
        $(".jiantoubanner12").click(function () {
            if (flag) {
                move();
                flag = false;
            }

        })
        $(".jiantoubanner11").click(function () {
            if (flag) {
                n -= 2;
                move();
                flag = false;
            }

        })
        imgs.on("transitionend", function () {
            flag = true;
        })
    }
    //优惠区无缝轮播
    {
        let box = document.querySelector(".promotion-right");
        let container = document.querySelector(".yhcon");
        let items = document.querySelectorAll(".yhcon .indexbox");
        let prebtn = document.querySelector(".yhpre");
        let nextbtn = document.querySelector(".yhnext");
        let num = 4;
        let flag = true;
        let dec = "right";
        let st = setInterval(changPos, 2000);

        function changPos() {
            container.style.transition = "all 1s";
            if (dec == "right") {
                num++;
            } else if (dec == "left") {
                num--;
            }
            container.style.marginLeft = -num * 242 + "px";
        }

        container.addEventListener("transitionend", function () {
            flag = true;
            if (num == 11) {
                container.style.transition = "none";
                container.style.marginLeft = "-968px";
                num = 4;
            }
            if (num == 0) {
                container.style.transition = "none";
                container.style.marginLeft = "-1694px";
                num = 7;
            }
        })
        window.onblur = box.onmouseover = function () {
            clearInterval(st);
        }
        window.onfocus = box.onmouseout = function () {
            st = setInterval(changPos, 2000);
        }
        nextbtn.onclick = function () {
            if (flag) {
                flag = false;
                dec = "right";
                changPos();
            }
        }
        prebtn.onclick = function () {
            if (flag) {
                flag = false;
                dec = "left";
                changPos();
            }

        }
    }
    //楼层跳转
    {
        let btnsMenu = document.querySelector(".menu");
        let hideHead = document.querySelector(".head2");
        let btns = btnsMenu.querySelectorAll("ul li");
        let titles = btnsMenu.querySelectorAll("ul li span");
        let floors = document.querySelectorAll(".floors");
        let totop = document.querySelector(".menu .back");
        let flag = true;
        window.onscroll = function () {
            let st = document.documentElement.scrollTop;
            if (flag) {
                if (st > 500) {
                    btnsMenu.style.display = "block";
                    hideHead.style.display = "block";
                } else {
                    btnsMenu.style.display = "none";
                    hideHead.style.display = "none";
                }
                floors.forEach(function (el, index) {
                    if (st < floors[0].offsetTop) {
                        for (let i = 0; i < titles.length; i++) {
                            titles[i].classList.remove("active");
                        }
                        titles[0].classList.add("active");
                    }
                    if (st >= el.offsetTop) {
                        for (let i = 0; i < floors.length; i++) {
                            titles[i].classList.remove("active");
                        }
                        titles[index].classList.add("active");
                    }
                })
            }
        }

        btns.forEach(function (el, index) {
            el.onclick = function () {
                flag = false;
                let now = document.documentElement.scrollTop;
                let target = floors[index].offsetTop;
                let speed = (target - now) * 50 / 500;
                for (let i = 0; i < titles.length; i++) {
                    titles[i].classList.remove("active");
                }
                el.onmouseover = function () {
                    titles[index].classList.add("moren");
                }
                el.onmouseout = function () {
                    titles[index].classList.remove("moren");
                }
                let time = 0;
                let t = setInterval(function () {
                    now += speed;
                    time += 50;
                    if (time == 500) {
                        flag = true;
                        clearInterval(t);
                        now = target;
                    }
                    document.documentElement.scrollTop = now;
                }, 50);
                titles[index].classList.add("active");
            }

        });
        //鼠标移入移出
        //返回顶部
        totop.onclick = function () {
            let st = document.documentElement.scrollTop;
            let speed = st * 50 / 1000;
            let t = setInterval(function () {
                st -= speed;
                if (st <= 0) {
                    st = 0;
                    return;
                }
                document.documentElement.scrollTop = st;
            }, 50);
        }
    }
    //右侧固定
    $(".lf_fix2 li a").hover(function () {
        $(this).css({backgroundColor: "#3EB4FA"});
        $(this).prev().css({display: "block"});
    }, function () {
        $(this).css({backgroundColor: "#918888"});
        $(this).prev().css({display: "none"});
    })
    //下侧的轮播
    let fbNum = 0;
    $(".hd ul li").hover(function () {
        var index = $(this).index();
        $(this).addClass("hd-one").siblings().removeClass("hd-one");
        $(this).parent().parent().next().children().children().eq(index).addClass("moren").siblings().removeClass("moren");
        fbNum = index;
    })
    let footbSt = setInterval(fbSt, 2000);

    function fbSt() {
        fbNum++;
        if (fbNum > $(".bd ul li").length) {
            fbNum = 0;
        }
        $(".hd ul li").eq(fbNum).addClass("hd-one").siblings().removeClass("hd-one");
        $(".bd ul li").eq(fbNum).addClass("moren").siblings().removeClass("moren")
    }

    $(".smallslide").hover(function () {
        clearInterval(footbSt);
    }, function () {
        footbSt = setInterval(fbSt, 2000);
    })
    //流行风向标
    $(".rg .feng-next").click(function () {
        $(".inner_fy2").eq(1).addClass("active").siblings().removeClass("active");
        $(".rg em").html("2/2");
    })
    $(".rg .feng-prev").click(function () {
        $(".inner_fy2").eq(0).addClass("active").siblings().removeClass("active");
        $(".rg em").html("1/2");
    })
    //banner侧边栏
    $(".banner-left ul li").hover(function () {
        let index=$(this).index();
        $(".navbox").eq(index).css({display:"block"}).siblings().not(".banner-left ul").css({display:"none"})
    },function(){
        $(".navbox").css("display","none")
    })
    //5L的左侧
    $(".tabnav li").hover(function () {
        let index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".tabbox_inner").eq(index).addClass("active").siblings().removeClass("active");
        $(".tabbox_inner").eq(index).children().find(".rg").children("img").eq(1).click(function(){
            console.log(1)
            $(".inner_fy").eq(1).addClass("active").siblings().removeClass("active");
            $(".rg em").html("2/2");
        })
        $(".tabbox_inner").eq(index).children().find(".rg").children("img").eq(0).click(function(){
            console.log(0)
            $(".inner_fy").eq(0).addClass("active").siblings().removeClass("active");
            $(".rg em").html("1/2");
        })
    });
}