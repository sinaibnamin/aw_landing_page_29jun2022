
const pushAWAd = () => {
    var click_URL = "https://www.google.com/";

    var allBannerImages = [
        'Responsive_Hero_wGutter_Gutter_largeSkin.png',
        'Responsive_Hero_wGutter_Top_Content.png',
        'copy.png',
        'cta.png',
        'snow_hill1.png',
        'snow_hill2.png',
    ], uploadImagesCount = 0;

    allBannerImages.forEach(function (imgSrc) {
        var newImgTag = document.createElement('img');
        newImgTag.src = imgSrc;
        newImgTag.addEventListener('load', function () {
            newImgTag.remove();
            uploadImagesCount++;

            if (allBannerImages.length == uploadImagesCount) {
                var css = ".template-root .page-subnav{background:#ebebeb!important;width:100%;max-width:initial;position:relative;padding-bottom:0;margin-bottom:16px}.breadcrumbs{position:relative}.template-root .page-subnav:before{content:'';height:61px;width:100%;background:#ebebeb;position:absolute;top:0;left:0}.two-column-page-content{background:#ebebeb;position:relative;-webkit-box-shadow:-24px -16px 0 0 #ebebeb,24px -16px 0 0 #ebebeb;box-shadow:-24px -16px 0 0 #ebebeb,24px -16px 0 0 #ebebeb}.neighbors-wrapper{position:relative;text-align:center}.secondary-nav{max-width:960px;margin:0 auto}.headI{width:100%;position:absolute;left:0;top:0;z-index:9999}.lol{position:relative;width:100%;margin:0 auto;height:100vh;background:0 0;z-index:1;cursor:pointer}.innerL{width:1008px;margin:0 auto;height:100vh;background:#ebebeb;position:absolute;right:0;left:0;top:310px}.base-footer.is-en{position:relative}.breadcrumbs-wrapper{padding-left:0;position:relative}.content-module{position:relative}.DDD{z-index:0;position:fixed;left:0;top:0;width:100%;height:100vh;overflow:hidden;background:url(Responsive_Hero_wGutter_Gutter_largeSkin.png) no-repeat center 0;background-attachment:scroll}.CLICDIV2{position:absolute;width:100%;overflow:hidden;height:250px;top:46px}.CLICDIV2 .topC{cursor:pointer;width:100%;left:0;position:absolute;height:250px;top:0}.two-column-page-content{background:#ebebeb;position:relative}.CLICDIV{position:absolute;width:100%;overflow:hidden;height:100vh}.CLICDIV .leftC{cursor:pointer;width:calc((100% - 960px)/ 2);left:0;position:fixed;height:100vh}.CLICDIV .rightC{cursor:pointer;width:calc((100% - 960px)/ 2);right:0;position:fixed;height:100vh}.banner-item{position:relative}#awBnrCreativeContent{width:1010px;height:250px;background:url(Responsive_Hero_wGutter_Top_Content.png) no-repeat center 0;margin:0 auto;margin-bottom:16px}.base-footer.is-en .footer-legalese{margin-bottom:-20px}.banner-item2 .logo{position:absolute;right:50%;margin-right:584px;top:330px;width:154px;height:72px;background:url(logo.png) no-repeat center 0;display:none}.banner-item2 .copy{position:absolute;right:50%;margin-right:523px;top:455px;width:277px;height:64px;background:url(copy.png) no-repeat center 0;display:none}.banner-item2 .cta{position:absolute;right:50%;margin-right:588px;top:573px;width:146px;height:43px;background:url(cta.png) no-repeat center 0;display:none}.banner-item2 .snow_hill2{position:absolute;right:50%;margin-right:505px;top:390px;width:584px;height:1166px;background:url(snow_hill2.png) no-repeat center 0}.banner-item2 .snow_hill1{position:absolute;right:50%;margin-right:505px;top:690px;width:584px;height:833px;background:url(snow_hill1.png) no-repeat center 0}.animTopToBottom{-webkit-animation:animTopToBottom .5s 0s both;animation:animTopToBottom .5s 0s both}.animBottomToTop{-webkit-animation:animBottomToTop .5s 0s both;animation:animBottomToTop .5s 0s both}.animLeftToRight{-webkit-animation:animLeftToRight .5s 0s both;animation:animLeftToRight .5s 0s both}.animCurrentToLeft{-webkit-animation:animCurrentToLeft .5s 0s both;animation:animCurrentToLeft .5s 0s both}.animRightToLeft{-webkit-animation:animRightToLeft .5s 0s both;animation:animRightToLeft .5s 0s both}.animCurrentToRight{-webkit-animation:animCurrentToRight .5s 0s both;animation:animCurrentToRight .5s 0s both}@media screen and (max-width:959px){.DDD,.banner-item{display:none}.template-root .page-subnav{background:#ebebeb!important;padding:0 0 16px!important;margin-bottom:0!important;position:relative}}@-webkit-keyframes animTopToBottom{0%{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes animTopToBottom{0%{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes animBottomToTop{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px)}}@keyframes animBottomToTop{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px)}}@-webkit-keyframes animLeftToRight{0%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes animLeftToRight{0%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes animCurrentToLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}}@keyframes animCurrentToLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}}@-webkit-keyframes animRightToLeft{0%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes animRightToLeft{0%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes animCurrentToRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}}@keyframes animCurrentToRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}}",
                    head = document.head || document.getElementsByTagName('head')[0],
                    style = document.createElement('style');

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
                ele.innerHTML = "<a href='" + click_URL + "' target='_blank'><div id='awGlobalBnrWrapper'><div id='awBnrCreativeContent'></div></div></a>";
                node.parentNode.insertBefore(ele, node.nextSibling);

                var node3 = document.querySelector("body").firstChild,
                    ele3 = document.createElement("div");
                ele3.className = "DDD";
                ele3.innerHTML = "<a href='" + click_URL + "' target='_blank'><div class='headI'></div><div class='lol'><div class='innerL'></div></div> </a><div class='banner-item2'><div class='snow_hill2'></div><div class='snow_hill1'></div><div class='logo'></div><div class='copy'></div><div class='cta'></div></div>";
                node3.parentNode.insertBefore(ele3, node3.nextSibling);

                var isClassAvailable = document.getElementsByClassName('nfl-header');
                if (isClassAvailable.length > 0) {

                    var elmnt = document.getElementsByClassName("nfl-header")[0];
                    var margineTop = elmnt.offsetHeight;
                    // console.log(margineTop);
                    document.getElementsByClassName("DDD")[0].style.top = margineTop + "px";
                }
                else {
                    console.log("No Class found")
                }

            }
        });
    });

    // --scroll effect scripts ---
    const nglHeader = document.getElementsByClassName("nfl-header")[0]
    function getYPosition() {
        var top = window.pageYOffset || document.documentElement.scrollTop
        return top;
    }

    window.addEventListener("scroll", (event) => {
        if (getYPosition() > 131) {
            document.querySelector(".banner-item2 .logo").style.display = 'block';
            document.querySelector(".banner-item2 .logo").classList.add("animTopToBottom");
            document.querySelector(".banner-item2 .logo").classList.remove("animBottomToTop");

            document.querySelector(".banner-item2 .copy").style.display = 'block';
            document.querySelector(".banner-item2 .copy").classList.add("animLeftToRight");
            document.querySelector(".banner-item2 .copy").classList.remove("animCurrentToLeft");

            document.querySelector(".banner-item2 .cta").style.display = 'block';
            document.querySelector(".banner-item2 .cta").classList.add("animRightToLeft");
            document.querySelector(".banner-item2 .cta").classList.remove("animCurrentToRight");

            // document.getElementById("ticker").style.top = `${nglHeader.offsetHeight}px`
        } else {
            document.querySelector(".banner-item2 .logo").classList.remove("animTopToBottom");
            document.querySelector(".banner-item2 .logo").classList.add("animBottomToTop");

            document.querySelector(".banner-item2 .copy").classList.remove("animLeftToRight");
            document.querySelector(".banner-item2 .copy").classList.add("animCurrentToLeft");

            document.querySelector(".banner-item2 .cta").classList.remove("animRightToLeft");
            document.querySelector(".banner-item2 .cta").classList.add("animCurrentToRight");

        }

        if (getYPosition() < 132) {
            document.querySelector(".banner-item2 .snow_hill1").style.top = (690 - getYPosition()) + 'px';
            document.querySelector(".banner-item2 .snow_hill2").style.top = (390 + getYPosition()) + 'px';
        } else {
            document.querySelector(".banner-item2 .snow_hill1").style.top = 559 + 'px';
            document.querySelector(".banner-item2 .snow_hill2").style.top = 521 + 'px';
        }


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
