window.addEventListener("load",function(){
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
                            <img src="img/${obj.img}" alt="${obj.alt}">
                        </div>
                        <div class="textbox">
                            <h1>${obj.title}</h1>
                            <p ${obj.period ? "style='display:block'" : "style='display:none'"}>작업기간 : ${obj.period}</p>
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
                            <img src="img/${obj.img}" alt="${obj.alt}">
                        </div>
                        <div class="textbox">
                            <h1>${obj.title}</h1>
                            <p ${obj.period ? "style='display:block'" : "style='display:none'"}>작업기간 : ${obj.period}</p>
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
    }
})