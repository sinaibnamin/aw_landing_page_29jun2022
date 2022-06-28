
const pushAWAd = () => {

    const unitLineItemName = `Mock_Request_Burberry_Hero_Animated`;
    // server path variable. 
    const awServerPath = ``; //set empty for local path
    // banner Wrapper element name
    const bannerWrapperName = `banner-item`;
    // click tag url
    const listOfClickTag = { awClickTagURL1: '%%CLICK_URL_UNESC%%https://www.google.com/' }; //awClickTagURL1: "%%CLICK_URL_UNESC%%https://www.google.com/"
    const clickTagDisableArea = `awClickTagDisable` //awClickTagDisable
    
    // array of library script if needed
    const arrayOfScripts = [];
    // array of library script if needed
    const arrayOfCssLinks = [];
    const isAnimatedUnit = true // set true if any animation
    const expectedLoopCount = 1; // default value 1 for no loop
    const totalAnimationTimeCount = 12000 // without loop, total second count like 12 second = 12000. default 0.
    
    // minified HTML with local path call
    const htmlWithoutServerPath = `<div id='awGlobalBnrWrapper' class='awClickTagURL1'><div class='bottomBar'></div><div id='awBnrCreativeContent'><div class='productWrapper'><div class='creamProduct'></div><div class='blackProduct'></div><div class='bagscrollouter'><div class='bagscrolltracker' id='bagscrolltracker'></div></div></div></div></div>`;
    
    // minified Css with local files call
    const cssWithoutServerPath = `#awGlobalBnrWrapper{ background: url(desktop_bg.png); background-position: center !important; background-size: cover !important; background-repeat: no-repeat !important; width: 100%; height: 300px; margin: 0 auto; position: relative; margin-bottom: 16px; margin-top: 0; overflow: hidden;} #awGlobalBnrWrapper #awBnrCreativeContent{ width: 960px; height: 300px; background: url(desktop_content.png); background-position: center !important; background-repeat: no-repeat !important; position: absolute; top: 0; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%);} #awGlobalBnrWrapper:hover{ cursor: pointer} #awGlobalBnrWrapper .bottomBar{ width: inherit; height: 44px; background: url(bottomBar_desktop.png); background-position: center repeat; position: absolute; bottom: 0; left: 0; right: 0; margin: auto;} #awGlobalBnrWrapper .productWrapper{ position: absolute; width: 488px; height: 270px; top: 0; left: 0; bottom: 0; margin: auto;} #awGlobalBnrWrapper .blackProduct{ position: absolute; width: calc(50%); height: inherit; top: 0; left: 0; background: url(black_product.png) no-repeat;} #awGlobalBnrWrapper .creamProduct{ position: absolute; width: inherit; height: inherit; top: 0; left: 0; background: url(cream_product.png) center no-repeat;} @media(max-width:979px){ #awGlobalBnrWrapper{ margin-bottom: 16px; margin-top: 0; height: 300px; background: url(iPad_bg.png)} #awGlobalBnrWrapper:hover{ cursor: auto} #awGlobalBnrWrapper #awBnrCreativeContent{ width: 768px; height: 300px; background: url(iPad_content.png)} #awGlobalBnrWrapper .bottomBar{ height: 63px; background: url(bottomBar_iPad.png); background-position: center repeat;} #awGlobalBnrWrapper .productWrapper{ width: 442px; height: 241px; left: 25px;} #awGlobalBnrWrapper .blackProduct{ background: url(black_product_iPad.png) no-repeat;} #awGlobalBnrWrapper .creamProduct{ background: url(cream_product_iPad.png) center no-repeat;}} @media (max-width:767px){ #awGlobalBnrWrapper{ margin-bottom: 12px; margin-top: 0; height: 250px; background: url(iPhone_bg.png);} #awGlobalBnrWrapper #awBnrCreativeContent{ background: url(iPhone_content.png); height: 250px; width: 100%; margin: 0 auto; top: 0;} #awGlobalBnrWrapper .bottomBar{ display: none;} #awGlobalBnrWrapper .productWrapper{ width: 304px; height: 165px; top: 70px; left: 0; right: 0; margin: auto;} #awGlobalBnrWrapper .blackProduct{ background: url(black_product_iPhone.png) no-repeat;} #awGlobalBnrWrapper .creamProduct{ background: url(cream_product_iPhone.png) center no-repeat;}} @media(max-width:360px){ #awGlobalBnrWrapper #awBnrCreativeContent{ background: url(iPhone_content_320.png);}} @media(min-width:980px){ #awGlobalBnrWrapper .bagscrollouter{ display: none;} #awGlobalBnrWrapper .productWrapper{ cursor: url(cursor.png) 20 20, auto;}} @media(max-width:979px){ #awGlobalBnrWrapper .blackProduct:after{ content: ""; background: url(drag.png); background-size: cover; height: 30px; width: 30px; position: absolute; top: 20%; right: -15px;}} #awGlobalBnrWrapper .blackProduct.transblack{ -webkit-transition: all .2s ease; -o-transition: all .2s ease; transition: all .2s ease;} #awGlobalBnrWrapper .bagscrollouter{ position: absolute; inset: 0; background: none; overflow-x: scroll; scrollbar-color: transparent transparent;} #awGlobalBnrWrapper .bagscrolltracker{ width: 190%; background: none; height: 100%;} #awGlobalBnrWrapper .bagscrollouter::-webkit-scrollbar{ display: none; -ms-overflow-style: none; scrollbar-width: none;}`;
    
    const manualImgLoader = []; // use this only when aw provide different server path
    
    // ---------------------------------------------------------------------
    // Please dont try to change the below code if you  are not a developer
    // ---------------------------------------------------------------------
    const additionalScript = async () => {
        let productWrapper = document.querySelector('.productWrapper');
        let blackProduct = document.querySelector('.blackProduct');
        let creamProduct = document.querySelector('.creamProduct');
        // desktop function
        const desktopfunction = () => {
            productWrapper.onmouseenter = function (e) {
                blackProduct.classList.add('transblack');
                setTimeout(() => {
                    blackProduct.classList.remove('transblack');
                }, 200);
            }
            productWrapper.onmousemove = function (e) {
                const element = e.currentTarget.getBoundingClientRect();
                const elementwidth = e.currentTarget.offsetWidth
                const x = e.clientX - element.left;
                const xpercent = 100 - ((100 * x) / elementwidth);
                blackProduct.style.width = xpercent + '%'
            }
    
            productWrapper.onmouseleave = function (e) {
                blackProduct.classList.add('transblack');
                blackProduct.style.width = '50%';
                setTimeout(() => {
                    blackProduct.classList.remove('transblack');
                }, 200);
            }
        }
    
        //mobile function 2
        const mobilefunction = () => {
            let isbagscrolled = false;
            const bagscrollouter = document.querySelector('.bagscrollouter');
            const scrolltrackwidth = document.getElementById('bagscrolltracker').offsetWidth;
            const scrollouterwidth = bagscrollouter.offsetWidth;
            bagscrollouter.onscroll = function (e) {
                if (isbagscrolled == false) {
                    return
                }
                let scrAmount = bagscrollouter.scrollLeft - ((scrolltrackwidth - scrollouterwidth) / 2);
                scrAmount = (scrollouterwidth / 2) - scrAmount
                blackProduct.style.width = scrAmount + 'px';
            }
            bagscrollouter.addEventListener('touchstart', function () {
                isbagscrolled = true
            }, {
                passive: true
            });
            bagscrollouter.scrollLeft = (scrolltrackwidth - scrollouterwidth) / 2;
    
        }
    
        if (window.innerWidth >= 980) {
            desktopfunction()
        } else {
            mobilefunction()
        }
    }
    
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