const pushAWAd = () =>{
    const unitLineItemName = `Dunkin_Brown_Sugar_Latte_Hero_v1`;
// server path variable. 
const awServerPath = `./`; //set empty for local path
// banner Wrapper element name
const bannerWrapperName = `banner-item`;
// click tag url
const listOfClickTag = {awClickTagURL1: 'https://www.google.com/'}; //awClickTagURL1: "%%CLICK_URL_UNESC%%https://www.google.com/"
const clickTagDisableArea = `awClickTagDisable` //awClickTagDisable

// array of library script if needed
const arrayOfScripts =[];
// array of library script if needed
const arrayOfCssLinks =[];
const isAnimatedUnit = false // set true if any animation
const expectedLoopCount = 1; // default value 1 for no loop
const totalAnimationTimeCount = 12000 // without loop, total second count like 12 second = 12000. default 0.

// minified HTML with local path call
const htmlWithoutServerPath = `<div id='creativeBG' class="awClickTagURL1"> <a id='CLICK'></a><div id='bannerWrapper'><div class='bottomYellowCircle'></div><div class='topCopy'></div><div class='mainCopy'></div><div class='hfCTA'></div><div class='product'></div></div><div class='coupon'></div></div>`;

// minified Css with local files call
const cssWithoutServerPath = `#CLICK{position:absolute;width:100%;height:300px;display:block;z-index:1;cursor:pointer}#creativeBG{background-color:#00a2ec;width:100%;height:300px;margin-top:0;margin-bottom:16px;overflow:hidden;position:relative}#creativeBG #bannerWrapper{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:960px;height:300px;top:0;left:50%;-webkit-transform:translateX(-480px);-ms-transform:translateX(-480px);transform:translateX(-480px);position:absolute}#creativeBG #bannerWrapper .bottomYellowCircle{background-color:#fee803;width:900px;height:450px;bottom:-353px;left:95px;position:absolute;border-radius:50%;-webkit-animation:animFromBottom .5s .5s both;animation:animFromBottom .5s .5s both}#creativeBG #bannerWrapper .product{background:url(product.png) no-repeat;width:321px;height:409px;top:-40px;left:0;position:absolute;background-size:contain;-webkit-animation:fadeInAnim .5s 1s both;animation:fadeInAnim .5s 1s both}#creativeBG #bannerWrapper .topCopy{background:url(copy_yellow_bg.png) no-repeat;width:390px;height:70px;top:0;left:352px;position:absolute;background-size:contain;-webkit-animation:animFromTop .5s 1.25s both;animation:animFromTop .5s 1.25s both}#creativeBG #bannerWrapper .mainCopy{background:url(copy.png) no-repeat;width:464px;height:66px;top:104px;left:317px;position:absolute;background-size:contain;-webkit-animation:animFromTop .5s .5s both;animation:animFromTop .5s .5s both}#creativeBG .coupon{background:url(coupon.png) no-repeat;width:154px;height:154px;bottom:25px;left:50%;-webkit-transform:translateX(325px);-ms-transform:translateX(325px);transform:translateX(325px);position:absolute;background-size:contain;-webkit-animation:couponRotateAnim 2s 1.5s both;animation:couponRotateAnim 2s 1.5s both}#creativeBG #bannerWrapper .hfCTA{background:url(cta.png) no-repeat;width:180px;height:50px;bottom:25px;left:456px;position:absolute;background-size:contain;-webkit-animation:fadeInAnim .5s 3.5s both;animation:fadeInAnim .5s 3.5s both}@media screen and (max-width:1023px){#creativeBG #bannerWrapper{width:768px;height:300px;top:0;left:50%;-webkit-transform:translateX(-384px);-ms-transform:translateX(-384px);transform:translateX(-384px)}#creativeBG #bannerWrapper .bottomYellowCircle{width:768px;height:480px;bottom:-378px;left:0}#creativeBG #bannerWrapper .product{width:280px;height:357px;top:-32px;left:-28px}#creativeBG #bannerWrapper .topCopy{width:280px;height:50px;top:0;left:315px}#creativeBG #bannerWrapper .mainCopy{width:425px;height:60px;top:95px;left:245px}#creativeBG #bannerWrapper .hfCTA{width:160px;height:44px;bottom:25px;left:293px}#creativeBG .coupon{width:115px;height:115px;bottom:15px;-webkit-transform:translateX(120px);-ms-transform:translateX(120px);transform:translateX(120px);-webkit-animation:couponRotateAnimiPad 2s 1.5s both;animation:couponRotateAnimiPad 2s 1.5s both}}@media only screen and (max-width:730px){#CLICK{height:250px}#creativeBG{height:250px}#creativeBG #bannerWrapper{width:320px;height:250px;top:0;left:50%;-webkit-transform:translateX(-160px);-ms-transform:translateX(-160px);transform:translateX(-160px)}#creativeBG #bannerWrapper .topCopy{background:url(copy_yellow_bg_iPhone.png) no-repeat;width:250px;height:33px;top:0;left:80px;position:absolute;background-size:contain;-webkit-animation:animFromTop .5s 1.25s both;animation:animFromTop .5s 1.25s both}#creativeBG #bannerWrapper .bottomYellowCircle{width:375px;height:250px;bottom:-166px;left:0}#creativeBG #bannerWrapper .product{width:260px;height:331px;top:-30px;left:-100px}#creativeBG #bannerWrapper .mainCopy{background:url(copy_iPhone.png) no-repeat;width:166px;height:100px;top:49px;left:168px;-webkit-animation:animFromRight .5s .5s both;animation:animFromRight .5s .5s both}#creativeBG #bannerWrapper .hfCTA{width:100px;height:28px;bottom:25px;left:130px}#creativeBG .coupon{width:80px;height:80px;bottom:10px;-webkit-transform:translateX(100px);-ms-transform:translateX(100px);transform:translateX(100px);-webkit-animation:couponRotateAnimiPhone 2s 1.5s both;animation:couponRotateAnimiPhone 2s 1.5s both}}@media only screen and (max-width:320px){#creativeBG #bannerWrapper .product{width:230px;height:297px;top:-20px;left:-85px}#creativeBG #bannerWrapper .topCopy{left:50px}#creativeBG #bannerWrapper .mainCopy{top:49px;left:139px}#creativeBG #bannerWrapper .hfCTA{left:124px}#creativeBG .coupon{-webkit-transform:translateX(80px);-ms-transform:translateX(80px);transform:translateX(80px);-webkit-animation:couponRotateAnimiPhoneNerrow 2s 1.5s both;animation:couponRotateAnimiPhoneNerrow 2s 1.5s both}}@-webkit-keyframes fadeInAnim{0%{opacity:0}100%{opacity:1}}@keyframes fadeInAnim{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes animFromTop{0%{opacity:0;-webkit-transform:translateY(-60px);transform:translateY(-60px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes animFromTop{0%{opacity:0;-webkit-transform:translateY(-60px);transform:translateY(-60px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes animFromRight{0%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes animFromRight{0%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes animFromBottom{0%{opacity:0;-webkit-transform:translateY(120px);transform:translateY(120px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes animFromBottom{0%{opacity:0;-webkit-transform:translateY(120px);transform:translateY(120px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes couponRotateAnim{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(800%) rotate(0);transform:translateX(800%) rotate(0)}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(325px) rotate(-1080deg);transform:translateX(325px) rotate(-1080deg)}}@keyframes couponRotateAnim{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(800%) rotate(0);transform:translateX(800%) rotate(0)}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(325px) rotate(-1080deg);transform:translateX(325px) rotate(-1080deg)}}@-webkit-keyframes couponRotateAnimiPad{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(400%) rotate(0);transform:translateX(400%) rotate(0)}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(120px) rotate(-720deg);transform:translateX(120px) rotate(-720deg)}}@keyframes couponRotateAnimiPad{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(400%) rotate(0);transform:translateX(400%) rotate(0)}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(120px) rotate(-720deg);transform:translateX(120px) rotate(-720deg)}}@-webkit-keyframes couponRotateAnimiPhone{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(420%) rotate(0);transform:translateX(420%) rotate(0)}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(100px) rotate(-720deg);transform:translateX(100px) rotate(-720deg)}}@keyframes couponRotateAnimiPhone{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(420%) rotate(0);transform:translateX(420%) rotate(0)}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(100px) rotate(-720deg);transform:translateX(100px) rotate(-720deg)}}@-webkit-keyframes couponRotateAnimiPhoneNerrow{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(300%) rotate(0);transform:translateX(300%) rotate(0)}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(80px) rotate(-720deg);transform:translateX(80px) rotate(-720deg)}}@keyframes couponRotateAnimiPhoneNerrow{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(300%) rotate(0);transform:translateX(300%) rotate(0)}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateX(80px) rotate(-720deg);transform:translateX(80px) rotate(-720deg)}}`;

const manualImgLoader =[]; // use this only when aw provide different server path

// ---------------------------------------------------------------------
// Please dont try to change the below code if you  are not a developer
// ---------------------------------------------------------------------
const additionalScript = async () => { }

// multiple time animation loop handling function
const refreshBanner = () => {
    // console.log('refresh')
    var container = document.getElementById(bannerWrapperName);
    // var content = container.innerHTML;
    var content = htmlWithoutServerPath
        .replaceAll('src="', `src="${awServerPath}`)
        .replaceAll(`src='`, `src='${awServerPath}`);
    if (container.innerHTML = content) {
        additionalScript();
    }
}

const setLoopOfbannerAnimation = () => {
    return new Promise((resolve, reject) => {
        if (expectedLoopCount > 1 && isAnimatedUnit) {
            for (let i = 1; i < expectedLoopCount; i++) {
                setTimeout(() => { refreshBanner() }, totalAnimationTimeCount * i)
                expectedLoopCount === i + 1 && resolve();
            }
        } else {
            resolve()
        }
    })
}

const formatAndInjectBanner = async () => {
    const awWebsiteNav = document.querySelector(".page-subnav");
    const websiteHead = document.head || document.getElementsByTagName('head')[0];
    // if no server path add this css
    !awServerPath && websiteHead.insertAdjacentHTML('afterend', `<style>*{ padding: 0; margin: 0;}body{background:#ebebeb;}</style>`);

    // css append/inject method
    const injectCss = (formatedCss) => {
        const bannerStyle = document.createElement('style');
        bannerStyle.type = 'text/css';
        if (bannerStyle.styleSheet) {
            bannerStyle.styleSheet.cssText = formatedCss;
        } else {
            bannerStyle.appendChild(document.createTextNode(formatedCss));
        }
        return websiteHead.appendChild(bannerStyle);
    }
    // HTML append/inject method
    const injectHTML = (formatedHTML) => {
        let ele = document.createElement("div");
        ele.className = bannerWrapperName;
        ele.id = bannerWrapperName;
        ele.innerHTML = formatedHTML;
        return awWebsiteNav.parentNode.insertBefore(ele, awWebsiteNav.nextSibling);
    }

    // clickTag add method
    const addClickTag = async () => {
        // addclickTag
        if (listOfClickTag) {
            for (var key in listOfClickTag) {
                const clickTagElementList = await document.querySelectorAll('.' + key);
                const applyClickTag = await clickTagElementList.forEach(clickTagElement => {
                    const formatedClickTagURL = awServerPath ? listOfClickTag[key] : listOfClickTag[key].replaceAll('%%CLICK_URL_UNESC%%', '');
                    clickTagElement.onclick = (e) => {
                        e.stopPropagation();
                        if (e.target.closest('.' + clickTagDisableArea)) {
                            // console.log('sorry click tag disable')
                        } else {
                            window.open(formatedClickTagURL, '_blank');
                        }
                    };
                })
            }

        }
    };
    // library scripts CDN inject/append method
    const injectScriptLibrary = async (librarySrcs) => {
        return new Promise(async (resolve, reject) => {
            let myPromise = (scriptSrc) => new Promise((resolve, reject) => {
                let scriptElement = document.createElement("script");
                scriptElement.type = 'text/javascript';
                scriptElement.src = scriptSrc;
                websiteHead.appendChild(scriptElement)
                scriptElement.onload = function () {
                    resolve(scriptSrc)
                }
            })

            for (let index = 0; index < librarySrcs.length; index++) {
                if (librarySrcs[index]) {
                    let result = await myPromise(librarySrcs[index])
                    if (result === librarySrcs[librarySrcs.length - 1]) {
                        resolve(result)
                    }
                } else {
                    resolve()
                }

            }
        })
    };

    // Css library CDN inject/append method
    const injectCssLibrary = (linkRef) => {
        return new Promise(async (resolve, reject) => {
            let cssLinkPromise = (linkRef) => new Promise((resolve, reject) => {
                let cssLinkElement = document.createElement("link");
                cssLinkElement.rel = 'stylesheet';
                cssLinkElement.href = linkRef;
                websiteHead.appendChild(cssLinkElement)
                cssLinkElement.onload = function () {
                    resolve(linkRef)
                }
            })

            for (let index = 0; index < linkRef.length; index++) {
                if (linkRef[index]) {
                    let linkAppendResult = await cssLinkPromise(linkRef[index])
                    if (linkAppendResult === linkRef[linkRef.length - 1]) {
                        resolve(linkAppendResult)
                    }
                } else {
                    resolve()
                }

            }
        })
    };

    const replaceListOfImageByServerPath = async (listOfImages, recievedString) => {
        let formatedString = recievedString;
        if (awServerPath && manualImgLoader.length === 0 && listOfImages.length > 0) {
            for (let index = 0; index < listOfImages.length; index++) {
                formatedString = await formatedString.replaceAll(listOfImages[index], (awServerPath + listOfImages[index]))
                if (listOfImages.length === index + 1) {
                    return formatedString
                }
            }
        } else {
            return recievedString
        }
    }

    try {
        const callInjectCssLibrary = arrayOfCssLinks.length > 0 && await injectCssLibrary(arrayOfCssLinks);
        const callInjectScriptLibrary = arrayOfScripts.length > 0 && await injectScriptLibrary(arrayOfScripts);
        // preparing loader images list
        const collectImageFromCss = manualImgLoader.length < 1 && await cssWithoutServerPath.match(/[\w-]+\.(jpg|png|jpeg|gif)/g);
        const collectImageFromHtml = manualImgLoader.length < 1 && await htmlWithoutServerPath.match(/[\w-]+\.(jpg|png|jpeg|gif)/g);
        const collectVideoFromHtml = manualImgLoader.length < 1 && await htmlWithoutServerPath.match(/[\w-]+\.(mp4|webm)/g);
        const allVideoArrayWithoutServerPath = manualImgLoader.length < 1 && await ((collectVideoFromHtml) => { return [...new Set(collectVideoFromHtml)] })(collectVideoFromHtml);
        const allImageArrayWithoutServerPath = manualImgLoader.length < 1 && await ((collectImageFromCss, collectImageFromHtml) => { return [...new Set(collectImageFromHtml ? collectImageFromCss?.concat(collectImageFromHtml) : collectImageFromCss)] })(collectImageFromCss, collectImageFromHtml);

        // format minified HTML with serverPath
        const htmlWithServerPathWithoutVideo = await replaceListOfImageByServerPath(allImageArrayWithoutServerPath, htmlWithoutServerPath);
        const htmlWithServerPath = await ((allVideoArrayWithoutServerPath, htmlWithServerPathWithoutVideo) => {
            return replaceListOfImageByServerPath(allVideoArrayWithoutServerPath, htmlWithServerPathWithoutVideo);
        })(allVideoArrayWithoutServerPath, htmlWithServerPathWithoutVideo);

        // format minified CSS with serverPath
        const cssWithServerPath = await replaceListOfImageByServerPath(allImageArrayWithoutServerPath, cssWithoutServerPath);
        // inject CSS
        const callInjectCss = await injectCss(cssWithServerPath)

        const awBannerImageArrayWithPath = manualImgLoader.length < 1 ? await allImageArrayWithoutServerPath?.map(image => awServerPath + image) : manualImgLoader;
        // call image Loader and inject HTML
        const loadImagesAndInjectHTML = await ((loaderImages) => {
            let uploadImagesCount = 0;
            return new Promise((resolve, reject) => {
                loaderImages.forEach((imgSrc) => {
                    let newImgTag = document.createElement('img');
                    newImgTag.src = imgSrc;
                    newImgTag.addEventListener('load', () => {
                        newImgTag.remove();
                        uploadImagesCount++;
                        if (loaderImages.length == uploadImagesCount) {
                            // console.log(loaderImages)
                            //  resolve(injectCss(cssWithServerPath))
                            resolve(injectHTML(htmlWithServerPath))
                        }
                    });
                });
            })
        })(awBannerImageArrayWithPath);

        // call click Tag adder method
        const callAddClickTag = await ((injectedHtml) => {
            // console.log(injectedHtml)
            return addClickTag()
        })(loadImagesAndInjectHTML)
        const loadAditionalScript = await additionalScript();
        const callSetLoopOfbannerAnimation = await setLoopOfbannerAnimation()

        await (() => {
            // set local html title name not AW site
            !document.title && (document.title = unitLineItemName.replaceAll('_', ' '));
            // check the screen to load the banner again
            if (isAnimatedUnit) {
                // check the screen to load the banner again
                window.addEventListener('resize', function (event) {
                    var newWidth = window.innerWidth;
                    var newHeight = window.innerHeight;
                    if (newWidth === 1024 || newWidth === 768 || newWidth === 414 || newWidth === 375 || newWidth === 360 || newWidth === 320) {
                        return location.reload();
                    }
                });
            }
        })()

    } catch (error) {
        console.log(error)
    }
} // formatAndInjectBanner method end

// call inject banner method
formatAndInjectBanner();
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