window.onload=function(){
    //二维码
    {
        let QR=document.querySelector(".sjyyt_box");
        let QRbox=document.querySelector(".sjyyt");
        QRbox.onmouseover=function(){
            QR.style.display="block";
        }
        QRbox.onmouseout=function(){
            QR.style.display="none";
        }
    }
    //广告消失
    {
        let thinks=document.querySelector(".thinks");
        let closeBtn=document.querySelector(".close-pic");
        closeBtn.onclick=function(){
            thinks.style.display="none";
        }
    }
    //地址
    {
        let cityMain=document.querySelector(".nav-left-city-main");
        let cityMenu=document.querySelector(".city-menu");
        cityMain.onclick=function(){
            cityMenu.style.display="block";
        }
    }
    //banner
    {
        var lunbolist=document.querySelectorAll(".lunbo-box ul li");
        var bannerli=document.querySelectorAll(".banner-pic a img");
        var banner=document.querySelector(".banner-center");
        let num=0;
        lunbolist.forEach(function(el,index){
            el.onclick=function(){
                for(let i=0;i<lunbolist.length;i++){
                    lunbolist[i].classList.remove("active");
                    bannerli[i].classList.remove("onfirst");

                }
                el.classList.add("active");
                bannerli[index].classList.add("onfirst");
                num=index;
            }
        })



        function st(dc="right"){
            if(dc=="right"){
                num++;
                if(num==lunbolist.length){
                    num=0;
                }
            }
            if(dc=="left"){
                num--;
                if(num==-1){
                    num=lunbolist.length-1;
                }
            }
            for(let i=0;i<lunbolist.length;i++){
                lunbolist[i].classList.remove("active");
                bannerli[i].classList.remove("onfirst");
            }
            lunbolist[num].classList.add("active");
            bannerli[num].classList.add("onfirst");
        };

        let sts=setInterval(st,2000);
        banner.onmouseover=function(){
            clearInterval(sts);
        }
        banner.onmouseout=function(){
            sts=setInterval(st,2000);
        }
        var flag=true;
        var prebtn=document.querySelector(".jiantoubanner11");
        var nextbtn=document.querySelector(".jiantoubanner12");
        nextbtn.onclick=function(){
            if(flag){
                flag=false;
                st();
            }
        }
        prebtn.onclick=function(){
            if(flag){
                flag=false;
                st(dc="left");
            }
        }
        bannerli.forEach(function(el,index){
            el.addEventListener("transitionend",function(){
                flag=true;
            })
        })
    }
    //优惠区无缝轮播
    {
        let box=document.querySelector(".promotion-right");
        let container=document.querySelector(".yhcon");
        let items=document.querySelectorAll(".yhcon .indexbox");
        let prebtn=document.querySelector(".yhpre");
        let nextbtn=document.querySelector(".yhnext");
        let num=4;
        let flag=true;
        let dec="right";
        let st=setInterval(changPos,2000);
        function changPos(){
            container.style.transition="all 1s";
            if(dec=="right"){
                num++;
            }else if(dec=="left"){
                num--;
            }
            container.style.marginLeft=-num*242+"px";
        }
        container.addEventListener("transitionend",function(){
            flag=true;
            if(num==11){
                container.style.transition="none";
                container.style.marginLeft="-968px";
                num=4;
            }
            console.log(num);
            if(num==0){
                container.style.transition="none";
                container.style.marginLeft="-1694px";
                num=7;
            }
        })
        window.onblur=box.onmouseover=function(){
            clearInterval(st);
        }
        window.onfocus=box.onmouseout=function(){
            st=setInterval(changPos,2000);
        }
        nextbtn.onclick=function(){
            if(flag){
                flag=false;
                dec="right";
                changPos();
            }
        }
        prebtn.onclick=function(){
            if(flag){
                flag=false;
                dec="left";
                changPos();
            }

        }
    }
    //楼层跳转
    {
        let btnsMenu=document.querySelector(".menu");
        let btns=btnsMenu.querySelectorAll("ul li");
        let titles=btnsMenu.querySelectorAll("ul li span");
        let floors=document.querySelectorAll(".floors");
        let totop=document.querySelector(".menu .back");
        let flag=true;
        window.onscroll=function(){
            let st=document.documentElement.scrollTop;
            if(flag){
                if(st>600){
                    btnsMenu.style.display="block";
                }else{
                    btnsMenu.style.display="none";
                }
                floors.forEach(function(el,index){
                    if(st<floors[0].offsetTop){
                        for(let i=0;i<titles.length;i++){
                            titles[i].classList.remove("active");
                        }
                        titles[0].classList.add("active");
                    }
                    if(st>=el.offsetTop){
                        for(let i=0;i<floors.length;i++){
                            titles[i].classList.remove("active");
                        }
                        titles[index].classList.add("active");
                    }
                })
            }
        }

        btns.forEach(function(el,index){
            el.onclick=function(){
               flag=false;
               let now=document.documentElement.scrollTop;
              let target=floors[index].offsetTop;
              let speed=(target-now)*50/500;
              for(let i=0;i<titles.length;i++){
                  titles[i].classList.remove("active");
              }
                el.onmouseover=function(){
                    titles[index].classList.add("moren");
                }
                el.onmouseout=function(){
                    titles[index].classList.remove("moren");
                }
              let time=0;
              let t=setInterval(function(){
                    now+=speed;
                    time+=50;
                    if(time==500){
                        flag=true;
                        clearInterval(t);
                        now=target;
                    }
                  document.documentElement.scrollTop=now;
                },50);
                titles[index].classList.add("active");
            }

        });
        //鼠标移入移出
        //返回顶部
        totop.onclick=function(){
            let st=document.documentElement.scrollTop;
            let speed=st*50/1000;
            let t=setInterval(function(){
                st-=speed;
                if(st<=0){
                    st=0;
                    return;
                }
                document.documentElement.scrollTop=st;
            },50);
        }
    }
}