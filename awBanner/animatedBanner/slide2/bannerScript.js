

const pushAWAd = () => {
  var click_URL = 'https://www.google.com/';
  var allBannerImages = [
    'responsive_hero_wGutter_largeSkin_bg.png',
    'responsive_hero_wGutter_top_content.png',
    'right_gutter_content.png',
    'responsive_hero_wGutter_smallSkin_bg.png'
    ],
    uploadImagesCount = 0;
  
  allBannerImages.forEach(function(imgSrc) {
    var newImgTag = document.createElement('img');
    newImgTag.src = imgSrc;
    newImgTag.addEventListener('load', function() {
      newImgTag.remove();
      uploadImagesCount++;
  
      if (allBannerImages.length == uploadImagesCount) {
        var css = `.template-root .page-subnav{background:#ebebeb!important;width:100%;max-width:initial;position:relative;padding-bottom:0}.template-root .page-subnav:before{content:'';height:61px;width:100%;background:#ebebeb;position:absolute;top:0;left:0}.two-column-page-content{background:#ebebeb;position:relative;-webkit-box-shadow:-24px -16px 0 0 #ebebeb,24px -16px 0 0 #ebebeb;box-shadow:-24px -16px 0 0 #ebebeb,24px -16px 0 0 #ebebeb}.neighbors-wrapper{position:relative;text-align:center}.secondary-nav{max-width:960px;margin:0 auto}.headI{width:100%;position:absolute;left:0;top:0;z-index:9999}.lol{position:relative;width:100%;margin:0 auto;height:100vh;background:0 0;z-index:1;cursor:pointer}.innerL{width:1008px;margin:0 auto;height:100vh;background:#ebebeb;position:absolute;right:0;left:0;top:311px}.base-footer.is-en{position:relative}.breadcrumbs-wrapper{padding-left:0;position:relative}.content-module{position:relative}.DDD{z-index:0;position:fixed;left:0;right:0;top:0;width:100%;height:100vh;overflow:hidden;background-attachment:scroll;margin:auto;max-width:2176px;max-height:1484px}.DDD::before{content:'';z-index:-2;position:fixed;left:0;right:0;top:inherit;width:100%;height:100vh;overflow:hidden;background-attachment:scroll;margin:auto;max-width:2176px;background:url(responsive_hero_wGutter_largeSkin_bg.png) no-repeat center bottom;max-height:1484px}.DDD::after{content:'';z-index:-1;position:fixed;left:0;right:0;top:inherit;width:100%;height:100vh;overflow:hidden;background-attachment:scroll;margin:auto;max-width:2176px;max-height:1484px}.CLICDIV2{position:absolute;width:100%;overflow:hidden;height:250px;top:46px}.CLICDIV2 .topC{cursor:pointer;width:100%;left:0;position:absolute;height:250px;top:0}.two-column-page-content{background:#ebebeb;position:relative}.CLICDIV{position:absolute;width:100%;overflow:hidden;height:100vh}.CLICDIV .leftC{cursor:pointer;width:calc((100% - 960px)/ 2);left:0;position:fixed;height:100vh}.CLICDIV .rightC{cursor:pointer;width:calc((100% - 960px)/ 2);right:0;position:fixed;height:100vh}.banner-item{position:relative}#awGlobalBnrWrapper #awBnrCreativeContent{max-width:1008px;width:100%;height:250px;background:url(responsive_hero_wGutter_top_content.png) no-repeat center 0;margin:0 auto;margin-bottom:16px;margin-top:16px}.base-footer.is-en .footer-legalese{margin-bottom:-20px}#additionalArea #additionalContainer{background:#ebebeb;width:1008px;height:970px;margin:0 auto;position:fixed;top:0;left:0;right:0;display:none}#additionalArea2 #additionalContainer2{background:#ebebeb;width:1008px;height:970px;margin:0 auto;position:absolute;top:250px;left:0;right:0}.rightGutterContent{position:absolute;width:100%;height:100%;right:50%;margin-right:-868px;top:278px;background:url(right_gutter_content.png) no-repeat left top;max-width:369px;max-height:471px;background-size:100%}@media screen and (max-width:1439px) and (max-height:960px){.DDD::before{background:url(responsive_hero_wGutter_smallSkin_bg.png) no-repeat center bottom!important}}@media (max-width:1450px) and (max-height:700px){.rightGutterContent{display:none}}@media (min-width:1442px) and (max-height:860px){.rightGutterContent{margin-right:-910px}}@media screen and (max-width:1750px),(max-height:960px){.rightGutterContent{background-size:85%;top:283px}}@media screen and (max-width:1680px),(max-height:860px){.rightGutterContent{background-size:70%}}@media screen and (max-width:1580px),(max-height:760px){.rightGutterContent{background-size:50%}}@media screen and (max-width:1440px),(max-height:660px){.rightGutterContent{background-size:45%;top:294px;margin-right:-884px}}@media screen and (max-width:1340px),(max-height:600px){.rightGutterContent{background-size:40%}}@media (max-width:1366px) and (max-height:768px){.rightGutterContent{margin-right:-865px;top:297px;background-size:42%}}@media screen and (max-width:1279px){.DDD::after{background:0 0}.rightGutterContent{background:0 0!important}}@media screen and (max-width:959px){.DDD,.banner-item{display:none}.template-root .page-subnav{background:#ebebeb!important;padding:0 0 16px!important;margin-bottom:0!important;position:relative}}@media (max-height:860px) and (min-width:1278px){.DDD::before{background:url(responsive_hero_wGutter_smallSkin_bg.png) no-repeat center bottom!important}}@media (max-height:560px){.DDD::after{background:0 0!important}.rightGutterContent{background:0 0!important}}.Rains{position:absolute;width:100%;height:100%;top:0;left:0}.rainArea{position:absolute;height:auto;width:auto;text-align:center;z-index:0;color:#000;width:100%;height:100%;top:0;left:0;right:0;margin:auto;max-width:2176px}#rain-canvas{width:2176px;height:1484px}`,
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');
  
        var css2 = ".template-root .page-subnav:before{content:'';height:96px !important;width:100%;background:#ebebeb;position:absolute;top:0;left:0}.innerL{top:346px}",
          head = document.head || document.getElementsByTagName('head')[0],
          style2 = document.createElement('style');
  
        head.appendChild(style);
        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
        var node = document.querySelector(".page-subnav");
        ele = document.createElement("div");
        ele.className = "banner-item";
        ele.innerHTML = "<div id='additionalArea2'><div id='additionalContainer2'></div></div><a href='" + click_URL +
          "' target='_blank'><div id='awGlobalBnrWrapper'><div id='awBnrCreativeContent'></div></div></a><div id='additionalArea'><div id='additionalContainer'></div></div>";
        node.parentNode.insertBefore(ele, node.nextSibling);
  
        var node3 = document.querySelector("body").firstChild,
          ele3 = document.createElement("div");
        ele3.className = "DDD";
        ele3.innerHTML = "<div class='banner-item2'><div class='rightGutterContent'></div></div><a href='" + click_URL +
          "' target='_blank'><div class='headI'></div><div class='lol'><div class='innerL'></div></div></a><div class='rainArea'> <canvas id='rain-canvas'></canvas> </div>";
        node3.parentNode.insertBefore(ele3, node3.nextSibling);
  
        var isClassAvailable = document.getElementsByClassName('nfl-header');
        if (isClassAvailable.length > 0) {
          var elmnt = document.getElementsByClassName("nfl-header")[0];
          var margineTop = elmnt.offsetHeight;
          console.log(margineTop);
          document.getElementsByClassName("DDD")[0].style.top = margineTop + "px";
  
          if (node?.querySelector('.tertiary-nav')) {
            head.appendChild(style2);
            style2.type = 'text/css';
            if (style2.styleSheet) {
              style2.styleSheet.cssText = css2;
            } else {
              style2.appendChild(document.createTextNode(css2));
            }
  
          }
        } else {
          console.log("No Class found")
        }
  
        // -----------------------------------------------------
        // Accuweather site ad css adjust for top and bottom ads
        // -----------------------------------------------------
  
        // css adjust for the ad after our top banner in gutter
        let nextElementOfAWTopBanner = ele.nextElementSibling;
        if (nextElementOfAWTopBanner.classList.contains('glacier-ad')) {
          nextElementOfAWTopBanner.style.margin = 'auto';
          nextElementOfAWTopBanner.style.width = '1008px';
          nextElementOfAWTopBanner.style.background = '#ebebeb';
        }
        // css adjust for the ad after two-column-page-content div bottom banner in gutter of AW site
        let twoPageContent = document.querySelector(".two-column-page-content");
        let bottomBanner = twoPageContent?.nextElementSibling
        if (bottomBanner?.classList.contains('glacier-ad')) {
          bottomBanner.style.margin = 'auto';
          bottomBanner.style.width = '1008px';
          bottomBanner.style.background = '#ebebeb';
        }
  
        //  scroll effect scripts for AW site add background css
        function getYPosition() {
          var top = window.pageYOffset || document.documentElement.scrollTop
          return top;
        }
  
  
        window.addEventListener("scroll", (event) => {
          if (getYPosition() > 550) {
            document.getElementById("additionalContainer").style.display = 'block';
          } else {
            document.getElementById("additionalContainer").style.display = 'none';
          }
  
        });
  
        // -----------------------------------------------------
        // Accuweather site ads css end
        // -----------------------------------------------------
  
        function makeItRain() {
          const canvas = document.querySelector("#rain-canvas");
          canvas.width = 2176;
          canvas.height = 1484;
  
          if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            var w = canvas.width;
            var h = canvas.height;
            ctx.strokeStyle = "rgba(255,255,255,0.35)";
            ctx.lineWidth = 1;
            ctx.lineCap = "round";
  
            var init = [];
            var maxParts = 2500;
            for (var a = 0; a < maxParts; a++) {
              init.push({
                x: Math.random() * w,
                y: Math.random() * h,
                l: Math.random() * 1,
                xs: -2.5 + Math.random() * 2 + 1,
                ys: Math.random() * 25 + 10,
              });
            }
  
            var particles = [];
            for (var b = 0; b < maxParts; b++) {
              particles[b] = init[b];
            }
  
            function draw() {
              ctx.clearRect(0, 0, w, h);
              for (var c = 0; c < particles.length; c++) {
                var p = particles[c];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                ctx.stroke();
              }
              move();
            }
  
            function move() {
              for (var b = 0; b < particles.length; b++) {
                var p = particles[b];
                p.x += p.xs;
                p.y += p.ys;
                if (p.x > w || p.y > h) {
                  p.x = Math.random() * w;
                  p.y = -20;
                }
              }
            }
  
            setInterval(draw, 30);
          }
        }
  
        makeItRain();
      }
    });
  });
}

// check the ads loaded
const docBodyNode = document.querySelector('body')

function callback(mutationsList, observer) {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            !docBodyNode.classList.contains('ads-not-loaded') && pushAWAd()
        }
    })
}

const mutationObserver = new MutationObserver(callback)

mutationObserver.observe(docBodyNode, { attributes: true })
