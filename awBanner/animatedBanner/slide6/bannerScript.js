

const pushAWAd = () => {
  // variables
let head = document.head || document.getElementsByTagName('head')[0];
let bannerWrapperName = "banner-item";
let clickTagElementID = 'awInnerBnrWrapper';
let cssMinified = "#awGlobalBnrWrapper{margin-top:0;width:100%;height:300px;position:relative;overflow:hidden;margin-bottom:16px}#awInnerBnrWrapper{background:url(desktop_bg.png);background-position:center !important;background-size:cover !important;background-repeat:no-repeat !important;width:100%;height:300px;margin:0 auto;position:relative;margin-top:0;cursor:pointer}#awInnerBnrWrapper .manImage{background:url(man.png);background-position:center !important;background-size:cover !important;background-repeat:no-repeat !important;width:258px;height:300px;position:absolute;top:0px;left:0px}#awInnerBnrWrapper #awBnrCreativeContent{width:960px;height:300px;margin:0 auto;position:relative;top:0;overflow:hidden;z-index:0}#awInnerBnrWrapper #awBnrCreativeContent:hover{cursor:pointer}#awInnerBnrWrapper #awBnrCreativeContent .topStarContent{position:absolute;top:0;width:100%;height:24px;left:0;background:url(topStarContent.png) no-repeat;background-position:center;background-size:auto}#awInnerBnrWrapper #awBnrCreativeContent .bottomStarContent{position:absolute;bottom:0;width:100%;height:24px;left:0;background:url(bottomStarContent.png) no-repeat;background-position:center;background-size:auto}#awInnerBnrWrapper .bottomBar{position:absolute;height:24px;width:100%;background:#0d0d0e;bottom:0}#awInnerBnrWrapper .topBar{position:absolute;height:24px;width:100%;background:#0d0d0e;top:0}#awInnerBnrWrapper .copy{background:url(copy.png);background-position:center !important;background-size:cover !important;background-repeat:no-repeat !important;width:385px;height:226px;position:absolute;top:37px;left:19px}#awGlobalBnrWrapper .carouselWrapper{width:538px;height:200px;position:absolute;top:50px;right:50%;transform:translateX(480px);overflow:hidden}#awGlobalBnrWrapper .productsWrap{width:470px;height:200px;position:absolute;left:0;right:0;margin:auto}#awGlobalBnrWrapper .owl-carousel .owl-stage-outer{width:470px !important;height:200px !important;margin-top:0px}#awGlobalBnrWrapper .owl-carousel .owl-item{min-height:200px !important;margin-top:0 !important}#awGlobalBnrWrapper .owl-carousel .owl-item a{width:150px;height:200px;display:block;margin-right:10px;margin-left:0px;margin-top:0}#awGlobalBnrWrapper .owl-carousel .owl-item img{width:auto !important;margin:0 auto !important}#awGlobalBnrWrapper .owl-next, #awGlobalBnrWrapper .owl-prev{position:absolute !important;width:40px !important;height:40px !important;top:79px !important;background:url(arrow.png) no-repeat !important;background-size:contain !important;opacity:1 !important;transition: .5s !important}#awGlobalBnrWrapper .owl-nav button:active, #awGlobalBnrWrapper .owl-nav button:focus{outline:0}#awGlobalBnrWrapper .owl-nav button span{display:none !important}#awGlobalBnrWrapper .owl-prev{left:-53px !important;-webkit-transform:rotate(180deg) !important;-ms-transform:rotate(180deg) !important;transform:rotate(180deg) !important}#awGlobalBnrWrapper .owl-next{right:-53px}@media(max-width:1024px){#awGlobalBnrWrapper #awInnerBnrWrapper{margin-top:0;height:300px;background:url(iPad_bg.png)}#awInnerBnrWrapper #awBnrCreativeContent{position:relative;width:768px;height:300px;top:0;right:0}#awInnerBnrWrapper .manImage{background:url(man_ipad.png);background-position:center !important;background-size:cover !important;background-repeat:no-repeat !important;width:224px;height:275px;position:absolute;top:2px;left:-5px}#awInnerBnrWrapper #awBnrCreativeContent .topStarContent{background:url(topStarContent_ipad.png) no-repeat;background-position:center;background-size:auto}#awInnerBnrWrapper #awBnrCreativeContent .bottomStarContent{background:url(bottomStarContent_ipad.png) no-repeat;background-position:center;background-size:auto}#awInnerBnrWrapper .copy{top:37px;left:87px}#awGlobalBnrWrapper .carouselWrapper{width:330px;height:176px;position:absolute;top:62px;right:3px;transform:translateX(0px)}#awGlobalBnrWrapper .productsWrap{width:274px;height:176px}#awGlobalBnrWrapper .owl-carousel .owl-stage-outer{width:274px !important;height:176px !important;margin-top:0px}#awGlobalBnrWrapper .owl-carousel .owl-item{min-height:132px !important}#awGlobalBnrWrapper .owl-carousel .owl-item a{width:132px;height:176px;display:block;margin-right:10px;margin-top:0}#awGlobalBnrWrapper .owl-carousel .owl-item img{width:100% !important;height:auto}#awGlobalBnrWrapper .owl-next, #awGlobalBnrWrapper .owl-prev{width:33px !important;height:33px !important;top:71px !important}#awGlobalBnrWrapper .owl-prev{left:-44px !important}#awGlobalBnrWrapper .owl-next{right:-44px}}@media (max-width:871px){#awInnerBnrWrapper .copy{background:url(copy_ipad.png);background-position:center !important;background-size:cover !important;background-repeat:no-repeat !important;width:258px;height:178px;position:absolute;top:61px;left:158px}}@media (max-width:767px){#awGlobalBnrWrapper{height:250px;margin-bottom:12px}#awGlobalBnrWrapper #awInnerBnrWrapper{margin-top:0;height:250px;background:url(iPhone_bg.png)}#awInnerBnrWrapper #awBnrCreativeContent{height:250px;width:100%;margin:0 auto;top:0;max-width:375px}#awInnerBnrWrapper .copy{background:url(copy_iphone.png);background-position:center !important;background-size:cover !important;background-repeat:no-repeat !important;width:185px;height:131px;position:absolute;top:26px;left:unset;right:31px}#awInnerBnrWrapper .manImage{background:url(man_iphone.png);background-position:center !important;background-size:cover !important;background-repeat:no-repeat !important;width:190px;height:224px;position:absolute;top:10px;left:-5px}#awInnerBnrWrapper .bottomBar{height:17px}#awInnerBnrWrapper .topBar{height:17px}#awInnerBnrWrapper #awBnrCreativeContent .bottomStarContent{height:17px;background:url(bottomStarContent_iphone.png) no-repeat;background-position:center;background-size:auto}#awInnerBnrWrapper #awBnrCreativeContent .topStarContent{height:17px;background:url(topStarContent_iphone.png) no-repeat;background-position:center;background-size:auto}#awGlobalBnrWrapper .owl-carousel .owl-item img{display:block;width:100% !important}#awGlobalBnrWrapper .carouselWrapper{width:215px;height:56px;position:absolute;right:50%;transform:translateX(170px);top:166px}#awGlobalBnrWrapper .productsWrap{width:186px;height:56px;position:absolute}#awGlobalBnrWrapper .owl-carousel .owl-stage-outer{width:186px !important;height:56px !important;margin-top:0px}#awGlobalBnrWrapper .owl-carousel .owl-item{min-height:56px !important}#awGlobalBnrWrapper .owl-carousel .owl-item a{width:42px;height:56px;display:block;margin-right:6px;margin-top:0}#awGlobalBnrWrapper .owl-carousel .owl-item img{width:100% !important;height:auto}#awGlobalBnrWrapper .owl-next, #awGlobalBnrWrapper .owl-prev{position:absolute !important;width:7px !important;height:13px !important;top:22px !important;bottom:-10px !important;background:url(arrow_iphone.png) no-repeat !important;background-size:contain !important;opacity:1 !important;transition: .5s !important}#awGlobalBnrWrapper .owl-nav button:active, #awGlobalBnrWrapper .owl-nav button:focus{outline:0}#awGlobalBnrWrapper .owl-nav button span{display:none !important}#awGlobalBnrWrapper .owl-prev{left:-14px !important}#awGlobalBnrWrapper .owl-next{right:-14px !important}}@media(max-width:414px){#awInnerBnrWrapper .copy{right:9px}#awGlobalBnrWrapper .carouselWrapper{transform:translateX(192px)}}@media(max-width:375px){#awInnerBnrWrapper .copy{right:31px}#awGlobalBnrWrapper .carouselWrapper{transform:translateX(169px)}}@media(max-width:360px){#awInnerBnrWrapper #awBnrCreativeContent{width:100%;background:url(iPhone_content_narrow.png) no-repeat}#awGlobalBnrWrapper .carouselWrapper{transform:translateX(162px)}}@media(max-width:320px){#awInnerBnrWrapper #awBnrCreativeContent{width:100%}#awGlobalBnrWrapper .carouselWrapper{transform:translateX(142px)}}";
let htmlMinified = `<div id='awGlobalBnrWrapper'><div id='awInnerBnrWrapper'><div class='manImage'></div><div class='bottomBar'></div><div class='topBar'></div><div id='awBnrCreativeContent'><div class='copy'></div><div class='topStarContent'></div><div class='bottomStarContent'></div></div></div><div class='carouselWrapper'><div class='productsWrap'><div class='owl-carousel'> <a target='_blank' href='https://www.google.com/' class='item'> <img src='product1.png'> </a> <a target='_blank' href='https://www.google.com/' class='item'> <img src='product2.png'> </a> <a target='_blank' href='https://www.google.com/' class='item'> <img src='product3.png'> </a> <a target='_blank' href='https://www.google.com/' class='item'> <img src='product4.png'> </a> <a target='_blank' href='https://www.google.com/' class='item'> <img src='product5.png'> </a> <a target='_blank' href='https://www.google.com/' class='item'> <img src='product6.png'> </a></div></div></div></div>`;

// jQuery js element
let jQueryScript = document.createElement('script');
jQueryScript.type = 'text/javascript';
jQueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
// owl carousel js element
let owlCarouselScript = document.createElement('script');
owlCarouselScript.type = 'text/javascript';
owlCarouselScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
// owl carousel css element
let OwlCarouselCss = document.createElement('link');
OwlCarouselCss.rel = 'stylesheet';
OwlCarouselCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css';

// banner css variable and element
let style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = cssMinified;

// banner html variable and element
let htmlElement = document.createElement("div");
htmlElement.className = bannerWrapperName;
htmlElement.id = bannerWrapperName;
htmlElement.innerHTML = htmlMinified;


// Append jQuery
head.appendChild(jQueryScript);

jQueryScript.onload = function () {
  // Append carousel js
  head.appendChild(owlCarouselScript);
};

jQueryScript.onerror = function () {
  console.error('jQuery script injection/append faild')
};

owlCarouselScript.onload = function () {
  // Append carousel css
  head.appendChild(OwlCarouselCss);
};

owlCarouselScript.onerror = function () {
  console.error('owlCarousel script injection/append faild')
};

OwlCarouselCss.onload = function () {
  // append bannere css
  head.appendChild(style);
};

OwlCarouselCss.onerror = function () {
  console.error('owlCarousel css link injection/append faild')
};

style.onload = function () {
  // list of image assets
  let allBannerImages = [
    'desktop_bg.png',
    'arrow_iphone.png',
    'arrow.png',
    'bottomStarContent_ipad.png',
    'bottomStarContent_iphone.png',
    'bottomStarContent.png',
    'copy_ipad.png',
    'copy_iphone.png',
    'copy.png',
    'iPad_bg.png',
    'iPhone_bg.png',
    'man_ipad.png',
    'man_iphone.png',
    'man.png',
    'product1.png',
    'product2.png',
    'product3.png',
    'product4.png',
    'product5.png',
    'product6.png',
    'topStarContent_ipad.png',
    'topStarContent_iphone.png',
    'topStarContent_iphone.png',


  ],
    uploadImagesCount = 0;
  // image loader checking
  allBannerImages.forEach(function (imgSrc) {
    let newImgTag = document.createElement('img');
    newImgTag.src = imgSrc;
    newImgTag.addEventListener('load', function () {
      newImgTag.remove();
      uploadImagesCount++;
      // image load done condition
      if (allBannerImages.length == uploadImagesCount) {

        let node = document.querySelector(".page-subnav");
        // Append banner html inside condition
        if (node && node.parentNode.insertBefore(htmlElement, node.nextSibling)) {
          // After push banner html apllied js on them
          $('#awGlobalBnrWrapper .owl-carousel').owlCarousel({

            smartSpeed: 1200,
            items: 3,
            nav: true,
            margin: 0,
            loop: true,
            autoWidth: true,
            responsive: {
              0: {
                items: 4
              },
              760: {
                items: 2
              },
              1000: {
                items: 3
              }
            }

          });


          let ClickTag = document.getElementById(clickTagElementID);
          let clickTagURL = 'https://www.google.com/';

          try {
            ClickTag.onclick = function () {
              window.open(clickTagURL, '_blank');
            };

          } catch (error) {
            console.log('click not working');
          }
          // end
        } else {
          console.error('html injection/append faild')
        }
      }
    });
  });

};

style.onerror = function () {
  console.error('css injection/append faild')
};

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
