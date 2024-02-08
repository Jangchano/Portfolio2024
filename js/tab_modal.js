window.addEventListener("load",function(){
    let mask=document.querySelector(".mask")
    let modalCont=document.querySelector(".modal-cont")
    let body = document.querySelector("body")
    let workData;
    const eventXhttp = new XMLHttpRequest();
    eventXhttp.open("GET", "workdata.json");
    eventXhttp.send();
    eventXhttp.onreadystatechange = function(event){
        const req = event.target;
        if(req.readyState === XMLHttpRequest.DONE){
            workData = JSON.parse(req.response);
            workSection(workData)
        }
    }
    function  workSection(_data){
        let tabList = document.querySelector(".tab-list")
        workData = _data;
        let tabHtml = ``;
        let dataArr = _data.work;
        for(let i = 0; i < dataArr.length; i++){
            let html = `<li>${dataArr[i].catename}</li>`
            tabHtml += html
        }
        tabList.innerHTML = tabHtml
        
        let tabItem = document.querySelectorAll(".tab-list li")
        for(let i = 0; i< dataArr.length; i++){
            tabItem[0].classList.add("active")
            tabItem[i].addEventListener("click", function(){
                for(let j = 0; j < tabItem.length; j++){
                    tabItem[j].classList.remove("active")
                }
                tabItem[i].classList.add("active")
                workSlide(i)
            })
        }
        workSlide(0)
    }
    let workSwiper;
    function workSlide(_idx){
        let swWorkHtml = ``
        if(_idx ===0) {
            for(let i = 1; i < workData.work.length; i++){
                let listData = workData.work[i].list;
                for(let j = 0; j <listData.length; j++){
                    let obj = listData[j];
                    let html = `
                    <li class="swiper-slide">
                    <div class="imgbox">
                        <img ${obj.videoid ? "style='display:block'" : "style='display:none'"} src="https://img.youtube.com/vi/${obj.videoid}/mqdefault.jpg" alt="">
                        <img ${obj.imgurl ? "style='display:block'" : "style='display:none'"} src="img/${obj.imgurl}" alt="">
                    </div>
                    <div class="textbox">
                        <p>분류 : ${obj.period}</p>
                        <div class="skill-info">
                            <h3>사용툴</h3>
                            <ul>
                                <li ${obj.afterEffect ? "style='display:block'" : "style='display:none'"}>
                                <img src="img/folder_after_effects.svg" alt="">
                                </li>
                        
                                <li ${obj.css ? "style='display:block'" : "style='display:none'"}>
                                <img src="img/folder_css.svg" alt="">
                                </li>
                            
                                <li ${obj.git ? "style='display:block'" : "style='display:none'"}>
                                <img src="img/folder_git.svg" alt="">
                                </li>
                            
                                <li ${obj.html ? "style='display:block'" : "style='display:none'"}>
                                    <img src="img/folder_html.svg" alt="">
                                </li>
                            
                                <li ${obj.illust ? "style='display:block'" : "style='display:none'"}>
                                    <img src="img/folder_illust.svg" alt="">
                                </li>
                            
                                <li ${obj.js ? "style='display:block'" : "style='display:none'"}>
                                    <img src="img/folder_js.svg" alt="">
                                </li>
                            
                                <li ${obj.photoshop ? "style='display:block'" : "style='display:none'"}>
                                    <img src="img/folder_photoshop.svg" alt="">
                                </li>
                            
                                <li ${obj.premiere ? "style='display:block'" : "style='display:none'"}>
                                    <img src="img/folder_premiere.svg" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="work-view">
                        <div class="player" ${obj.videoid ? "style='display:block'" : "style='display:none'"}>
                            <iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay=1&mute=1" title="YouTube video plater" allowfullscreen></iframe>
                        </div>
                        <div class="imgbox" ${obj.imgurl ? "style='display:block'" : "style='display:none'"}>
                            <img src="img/${obj.imgurl}" alt="">
                        </div>
                        <div class="info">
                            <h1>
                                제목 : ${obj.title}
                            </h1>
                            <h2>
                                작업기간 : ${obj.period}
                            </h2>
                            <h3>
                               설명 : 
                            </h3>
                        </div>
                    </div>
                </li>
                    `;
                    swWorkHtml += html
                }
                let swWorkWrapper = document.querySelector(".sw-work ul")
                swWorkWrapper.innerHTML = swWorkHtml
            }
        }else{
            let listData = workData.work[_idx].list;
            for(let i = 0; i< listData.length; i++){
                let obj = listData[i];
                let html = `
                <li class="swiper-slide">
                <div class="imgbox">
                    <img ${obj.videoid ? "style='display:block'" : "style='display:none'"} src="https://img.youtube.com/vi/${obj.videoid}/mqdefault.jpg" alt="">
                    <img ${obj.imgurl ? "style='display:block'" : "style='display:none'"} src="img/${obj.imgurl}" alt="">
                </div>
                <div class="textbox">
                    <p>작업기간 : ${obj.period}</p>
                    <div class="skill-info">
                        <h3>사용툴</h3>
                        <ul>
                            <li ${obj.afterEffect ? "style='display:block'" : "style='display:none'"}>
                            <img src="img/folder_after_effects.svg" alt="">
                            </li>
                    
                            <li ${obj.css ? "style='display:block'" : "style='display:none'"}>
                            <img src="img/folder_css.svg" alt="">
                            </li>
                        
                            <li ${obj.git ? "style='display:block'" : "style='display:none'"}>
                            <img src="img/folder_git.svg" alt="">
                            </li>
                        
                            <li ${obj.html ? "style='display:block'" : "style='display:none'"}>
                            <img src="img/folder_html.svg" alt="">
                            </li>
                        
                            <li ${obj.illust ? "style='display:block'" : "style='display:none'"}>
                            <img src="img/folder_illust.svg" alt="">
                            </li>
                        
                            <li ${obj.js ? "style='display:block'" : "style='display:none'"}>
                            <img src="img/folder_js.svg" alt="">
                            </li>
                        
                            <li ${obj.photoshop ? "style='display:block'" : "style='display:none'"}>
                            <img src="img/folder_photoshop.svg" alt="">
                            </li>
                        
                            <li ${obj.premiere ? "style='display:block'" : "style='display:none'"}>
                            <img src="img/folder_premiere.svg" alt="">
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div class="work-view">
                    <div class="player" ${obj.videoid ? "style='display:block'" : "style='display:none'"}>
                        <iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay=1&mute=1" title="YouTube video plater" allowfullscreen></iframe>
                    </div>
                    <div class="imgbox" ${obj.imgurl ? "style='display:block'" : "style='display:none'"}>
                        <img src="img/${obj.imgurl}" alt="">
                    </div>
                    <div class="info">
                        <h1>
                            제목 : ${obj.title}
                        </h1>
                        <h2>
                            작업기간 : ${obj.videoid}
                        </h2>
                        <h3>
                            
                        </h3>
                    </div>
                </div>
            </li>
                `;
                swWorkHtml += html
            }
            let swWorkWrapper = document.querySelector(".sw-work ul")
            swWorkWrapper.innerHTML = swWorkHtml
        }
        

        workSwiper = new Swiper(".sw-work",{
            slidesPerView: 1,
                spaceBetween: 15,
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                },
        })
        let workItems = document.querySelectorAll(".sw-work ul li")
        workItems.forEach(function(item,index){
            item.addEventListener("click", function(){
                mask.classList.add("active")
                setTimeout(function(){
                    modalCont.classList.add("active")
                },500)
                modalCont.innerHTML = item.querySelector(".work-view").outerHTML;
                body.classList.add("scrollfix")
            })
        })
        mask.addEventListener("click",function(){
            mask.classList.remove("active")
            body.classList.remove("scrollfix")
            modalCont.classList.remove("active")
            modalCont.innerHTML = ""
        })
    }

    // 메일폼
    let mailBtn = document.querySelector(".c-all-btn")
    let mailcont = document.querySelector(".modal-box")
    mailBtn.addEventListener("click", function(){
        mask.classList.add("active")
        setTimeout(function(){
            mailcont.classList.add("active")
        },10)
        mailcont.classList.add("active")
        body.classList.add("scrollfix")            
    })
    mask.addEventListener("click",function(){
        mask.classList.remove("active")
        mailcont.classList.remove("active")
    })
})

