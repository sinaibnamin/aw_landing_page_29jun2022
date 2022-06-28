

const pushAWAd = () => {
  var allBannerImages = [], uploadImagesCount = 0;
  allBannerImages[0] = './desktop_content.png';


  allBannerImages.forEach(function (imgSrc) {
    var newImgTag = document.createElement('img');
    newImgTag.src = imgSrc;
    newImgTag.addEventListener('load', function () {
      newImgTag.remove();
      uploadImagesCount++;

      if (allBannerImages.length == uploadImagesCount) {
        console.log('banner loaded')
        var node = document.querySelector(".page-subnav") || document.querySelector(".page-subheader") || document.querySelector(".nfl-header") || document.querySelector(".nfl-page-subheader"),
          ele = document.createElement("div");
        ele.className = "banner-item";
        ele.innerHTML = "<div id='primoFC'><div id='video-wrapper'><video class='videosmoke' autoplay  loop  muted > <source src='./smoke.mp4' type='video/mp4'> <source src='./smoke.webm' type='video/webm'> </video><video class='video' autoplay  loop  muted ><source src='./fire_flame.mp4' type='video/mp4'><source src='./fire_flame.webm' type='video/webm'></video></div><div id='creativeBG'></div></div>";
        node.parentNode.insertBefore(ele, node.nextSibling);


        var css = "#primoFC div.cityforecast{ width: 632px; top: -15px; z-index: 100} #btm_bg{ background: #fff; position: absolute; width: 100%; height: 93px; bottom: 0px; z-index: 0} #primoFC{ background-color: #000; width: 100%; height: 300px; margin: 0 auto; position: relative; cursor: pointer; overflow: hidden} #video-wrapper{ width: 520px; height: 300px; overflow: hidden; position: absolute; right: 50%; top: 0; -webkit-transform: translateX(465px); -ms-transform: translateX(465px); transform: translateX(465px)} #primoFC .videosmoke{ mix-blend-mode: overlay; height: auto; width: 138%; overflow: hidden; top: -900px; left: -190px; position: absolute} #primoFC .video{ mix-blend-mode: color-dodge; height: auto; width: 450px; overflow: hidden; top: 87px; left: -62px; position: absolute} #primoFC #creativeBG{ width: 960px; height: 300px; margin: 0 auto; background-image: url(./desktop_content.png); background-repeat: no-repeat; position: relative; top: 0px; overflow-x: hidden; z-index: 0} #primoFC #creativeBG:hover{ cursor: pointer} #feed-tabs.panel-list.cityforecast{ background: none; border: none; border-radius: 0; width: 604px; z-index: 10} #trending-now{ margin-top: 25px} @media (max-width: 1023px){ #primoFC{ display: none}}",
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }


        var Click_URL = 'http://www.google.com';

        try {
          ele.onclick = function () {
            window.open(Click_URL, '_blank');
          };
        } catch (error) {
          console.log('click not working');
        }

        var elem = document.getElementById('top-1');
        if (elem) { elem.parentNode.removeChild(elem); }

      }
    });
  });
}

// check the ads loaded
const docBodyNode = document.querySelector('body')

function callback(mutationsList, observer) {
  mutationsList.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      // alert('Ch-ch-ch-changes!')
      !docBodyNode.classList.contains('ads-not-loaded') && pushAWAd()
    }
  })
}

const mutationObserver = new MutationObserver(callback)

mutationObserver.observe(docBodyNode, { attributes: true })