window.onload=function(){
    //楼层跳转
    {
        let btnsMenu=document.querySelector(".menu");
        let btns=btnsMenu.querySelectorAll("ul li");
        // let titles=btnsMenu.querySelector("ul li span");
        // console.log(titles)
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
                        for(let i=0;i<btns.length;i++){
                            btns[i].classList.remove("active");
                        }
                        btns[0].classList.add("active");
                    }
                    if(st>=el.offsetTop){
                        for(let i=0;i<floors.length;i++){
                            btns[i].classList.remove("active");
                        }
                        btns[index].classList.add("active");
                    }
                })
            }
        }
        // btns.forEach(function(el,index){
        //     el.onmouseover=function(){
        //           titles[index].classList.add("active");
        //         el.onmouseout=function(){
        //             titles[index].classList.remove("active");
        //         }
        //     }
        // })
        btns.forEach(function(el,index){
            // el.onclick=function(){
            //     let now=document.documentElement.scrollTop;
            //     let target=floors[index].offsetTop;
            //     let speed=(target-now)*50/500;
            //     for(let i=0;i<btns.length;i++){
            //         btns[i].classList.remove("active");
            //     }
            //     let time=0;
            //     let t=setInterval(function(){
            //         now+=speed;
            //         time+=50;
            //         if(time==500){
            //             clearInterval(t);
            //             now=target;
            //         }
            //         document.documentElement.scrollTop=now;
            //     },50);
            //     el.classList.add("active");
            // }
            el.onclick=function(){
                // console.log(index)
               flag=false;
               let now=document.documentElement.scrollTop;
              let target=floors[index].offsetTop;
              let speed=(target-now)*50/500;
              for(let i=0;i<btns.length;i++){
                  btns[i].classList.remove("active");
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
                el.classList.add("active");
            }

        })
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