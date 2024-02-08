window.onload = function(){
    AOS.init();
    // 스크롤 내리면 header에 active 추가
    let header = document.querySelector(".header")
    window.addEventListener("scroll",function(){
        if(window.scrollY >= 100){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })
    let moMenuBtn = document.querySelector(".mo-menu-btn")
    let sideMenu = document.querySelector(".side-menu")
    let sideMenuList = document.querySelector(".side-menu ul")
    moMenuBtn.addEventListener("click", function(){
        sideMenu.classList.toggle("active")
        this.classList.toggle("active")
    })
    sideMenuList.addEventListener("click", function(){
        sideMenu.classList.toggle("active")
        moMenuBtn.classList.toggle("active")
        
    })
    window.addEventListener("resize",function(){
        let winWidth = window.innerWidth;
        if(winWidth >768){
            sideMenu.classList.remove("active")
            moMenuBtn.classList.remove("active")
        }
    })

    // 포트폴리오 리스트 html 추가
    let pfWrap = document.querySelector(".sw-work ul")
    // 포트폴리오 스와이퍼 적용
    let swWork = new Swiper(".sw-work",{
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        },
    })

    // skill 프로그레스 바
    function progressBar(selector, gauge, color){
        var bar = new ProgressBar.Line(selector, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            color: color,
            trailColor: '#eee',
            trailWidth: 3,
        });
        bar.animate(gauge);
        return bar; // Return the progress bar instance
    }
    let observe = new IntersectionObserver(function(entries){
        entries.forEach(function(item){
            if(item.isIntersecting){
                proPr.animate(0.5)
                proAe.animate(0.5)
                proAi.animate(0.5)
                proPs.animate(0.5)
                proHtml.animate(0.5)
                proCss.animate(0.5)
                proJs.animate(0.5)
                proGit.animate(0.5)
            }else{
                proPr.animate(0)
                proAe.animate(0)
                proAi.animate(0)
                proPs.animate(0)
                proHtml.animate(0)
                proCss.animate(0)
                proJs.animate(0)
                proGit.animate(0)
            }
        })
    })
    let skillSection = document.querySelector(".skill")

    // 여기는 프로그레스 바 색깔 바꾸는 곳
    // Start the progress bars with initial values
    let proPr = progressBar(".pro_pr", 0, "#00c8ff");
    let proAe = progressBar(".pro_ae", 0, "#e44d26");
    let proAi = progressBar(".pro_ai", 0, "#ff7c00");
    let proPs = progressBar(".pro_ps", 0,  "#2f9dd9");
    let proHtml = progressBar(".pro_html", 0, "#ea77ff");
    let proCss = progressBar(".pro_css", 0, "#9a6eff");
    let proJs = progressBar(".pro_js", 0, "#3f52e5");
    let proGit = progressBar(".pro_git", 0, "#2c2834");
    observe.observe(skillSection)
} 