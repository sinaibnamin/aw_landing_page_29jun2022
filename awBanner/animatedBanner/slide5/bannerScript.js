

// 
const pushAWAd = () => {
    var css = ".banner-item{margin-top:0}#awGlobalBnrWrapper{background:#11172b; background-size:cover; width:100%; height:300px; background-position:center; margin:0 auto; position:relative; margin-bottom:16px; margin-top:0; overflow:hidden}#awGlobalBnrWrapper .mapSection{width: 1360px; height: 300px; background-image:url(desktop_map.png); background-size:cover; position: absolute; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%);}#awGlobalBnrWrapper #awBnrCreativeContent{width:960px; height:300px; margin:0 auto; background-repeat:no-repeat; position:relative; top:0; z-index:0}#awGlobalBnrWrapper #awInnerBnrWrapper{cursor:pointer}#awGlobalBnrWrapper .vedioContainer{width:441px; height:248px; position:absolute; top:26px; left:50%; -webkit-transform:translateX(15px); -ms-transform:translateX(15px); transform:translateX(15px); z-index:1}#awGlobalBnrWrapper .videoCorner{width:104px; height:80px; position:absolute; left: -59px; bottom: -55px; z-index: 101; background-image:url(video_corner.png); cursor: pointer;}#awGlobalBnrWrapper #awBnrCreativeContent .content{width:430px; height:248px; position:absolute; background-image:url(desktop_content.png); background-repeat:no-repeat; background-size:contain; top:26px; left:4px;}#awGlobalBnrWrapper video{outline:0}@media (max-width:950px){#awGlobalBnrWrapper{display:block}#awGlobalBnrWrapper{margin-bottom:16px; margin-top:0; height:300px}#awGlobalBnrWrapper #awBnrCreativeContent{position:relative; width:768px; height:300px; top:0; right:0}#awGlobalBnrWrapper .vedioContainer{width:414px; height:235px; position:absolute; top:33px; left:50%; -webkit-transform:translateX(-55px); -ms-transform:translateX(-55px); transform:translateX(-55px)}#awGlobalBnrWrapper #awBnrCreativeContent .content{width:317px; height:235px; position:absolute; top: 33px; background-image:url(ipad_content.png); background-repeat:no-repeat; background-size:contain; left: 5px;}#awGlobalBnrWrapper .mapSection{width: 720px; height: 300px; background-image: url(ipad_map.png);}}@media(max-width:767px){#awGlobalBnrWrapper{background-position:bottom; margin-bottom:12px; margin-top:0; height:250px}#awGlobalBnrWrapper #awBnrCreativeContent{height:250px; width:100%; margin:0 auto; top:0; background-position:bottom; overflow:hidden}#awGlobalBnrWrapper .vedioContainer{width:227px; height:128px; position:absolute; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); top:104px;}#awGlobalBnrWrapper #awBnrCreativeContent .content{width:335px; height:90px; position:absolute; background-image:url(iphone_content_copy.png); background-repeat:no-repeat; background-size:contain; left: 50%; -webkit-transform: translateX(-167px); -ms-transform: translateX(-167px); transform: translateX(-167px); top: 17px;}#awGlobalBnrWrapper .videoCorner{width: 49px; height: 38px; left: -27px; bottom: -26px; background-size: contain; background-repeat: no-repeat;}}@media(max-width:425px){#awGlobalBnrWrapper .mapSection{width: 375px; height: 212px; top: 20px; background-image: url(iphone_map.png);}}",
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    var allBannerImages = [], uploadImagesCount = 0;
    allBannerImages[0] = 'desktop_content.png';
    allBannerImages[1] = 'desktop_map.png';
    allBannerImages[2] = 'ipad_content.png';
    allBannerImages[3] = 'ipad_map.png';
    allBannerImages[4] = 'iphone_content_copy.png';
    allBannerImages[5] = 'iphone_map.png';
    allBannerImages[6] = 'video_corner.png';

    allBannerImages.forEach(function (imgSrc) {
        var newImgTag = document.createElement('img');
        newImgTag.src = imgSrc;
        newImgTag.addEventListener('load', function () {
            newImgTag.remove();
            uploadImagesCount++;

            if (allBannerImages.length == uploadImagesCount) {

                var node = document.querySelector(".page-subnav"),
                    ele = document.createElement("div");
                ele.className = "banner-item";
                ele.innerHTML = `<div id='awGlobalBnrWrapper'> <div id='awInnerBnrWrapper'> <div class="mapSection"></div><div id='awBnrCreativeContent'> <div class='content'></div></div></div><div class='vedioContainer'> <video id='bannerVideo' width='100%' controls autoplay muted > <source src='delta_airlines.mp4' type='video/mp4'> <source src='delta_airlines.webm' type='video/webm'> Your browser does not support HTML5 video. </video> <div class="videoCorner" id="videoCorner"></div></div></div>`;

                node.parentNode.insertBefore(ele, node.nextSibling);

                // vedio  image
                let bannerVideo = document.getElementById("bannerVideo");


                // add onclick
                var ClickTag = document.getElementById("awInnerBnrWrapper");
                var clickTagURL = 'https://www.google.com/';
                try {
                    ClickTag.onclick = function () {
                        window.open(clickTagURL, '_blank');
                    };
                } catch (error) {
                    console.log('click not working');
                }

                // add onclick on red corner image
                var ClickTag2 = document.getElementById("videoCorner");
                try {
                    ClickTag2.onclick = function () {
                        window.open(clickTagURL, '_blank');
                    };
                } catch (error) {
                    console.log('click not working');
                }

                // end
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