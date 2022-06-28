const pushAWAd = () =>{
    const unitLineItemName = `Dunkin_Brown_Sugar_Latte_Hero_v1`;
// server path variable. 
const awServerPath = `./`; //set empty for local path
// banner Wrapper element name
const bannerWrapperName = `banner-item`;
// click tag url
const listOfClickTag = { awClickTagURL1: 'https://www.google.com/' }; //awClickTagURL1: "%%CLICK_URL_UNESC%%https://www.google.com/"
const clickTagDisableArea = `awClickTagDisable` //awClickTagDisable

// array of library script if needed
const arrayOfScripts = [];
// array of library script if needed
const arrayOfCssLinks = [];
const isAnimatedUnit = false // set true if any animation
const expectedLoopCount = 1; // default value 1 for no loop
const totalAnimationTimeCount = 12000 // without loop, total second count like 12 second = 12000. default 0.

// minified HTML with local path call
const htmlWithoutServerPath = `<div id='primoFC'><div id='creativeBG'></div></div>`;

// minified Css with local files call
const cssWithoutServerPath = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');.banner-item{margin-top:0px;background:#65bbe2}#primoFC{background:url(desktop_1488x300_bg.png);background-size:cover;width:100%;height:300px;background-position:center;margin:0 auto;position:relative;margin-bottom:16px;margin-top:0px;cursor:pointer}#primoFC #creativeBG{width:960px;height:300px;margin:0 auto;background-image:url(desktop_1488x300_content.png);background-repeat:no-repeat;position:relative;top:0px;overflow-x:hidden;z-index:0}#primoFC #creativeBG:hover{cursor:pointer}#feed-tabs.panel-list.cityforecast{background:none;border:none;border-radius:0;width:604px;z-index:10}#trending-now{margin-top:25px}.copy{color:#fff;top:8px;position:relative;left:135px;font-family:'Roboto',sans-serif !important}.temperatureValue{font-size:55px;vertical-align:middle;font-weight:300;font-family:'Roboto',sans-serif !important}.unit{vertical-align:super;font-size:25px;font-family:'Roboto',sans-serif !important}#logoBG{background-image:url(mWeb_Logo.png);width:100%;height:100%;background-repeat:no-repeat;position:absolute;bottom:0px;display:none;background-position:bottom 12px right 10px}#mWebCopyBG{background-image:url(mWeb_copy.png);width:100%;height:100%;top:0px;left:0px;background-repeat:no-repeat;position:absolute;display:none;background-position:top 15px left 15px}@media(max-width:1366px) and (min-width:980px){#primoFC #creativeBG{width:960px;height:300px;background-image:url(desktop_1280x300_content.png)}#primoFC{background:url(desktop_1280x300_bg.png);background-repeat:no-repeat;background-size:cover}}@media (max-width: 1024px) and (min-width: 768px){#primoFC{display:block}}@media(max-width:979px) and (min-width:768px){#primoFC{margin-bottom:16px;margin-top:0px;height:300px;background:url(iPad_768x300_bg.png);background-repeat:no-repeat;background-size:cover}#primoFC #creativeBG{position:relative;width:768px;height:300px;top:0px;right:0px;background-image:url(iPad_768x300_content.png)}.copy{color:#fff;top:19px;position:relative;left:75px;font-family:'Roboto',sans-serif !important}.unit{vertical-align:super;font-size:15px;font-family:'Roboto',sans-serif !important}.temperatureValue{font-size:34px;vertical-align:middle;font-weight:lighter;font-family:'Roboto',sans-serif !important}}@media (max-width: 767px){.banner-item{position:relative}.copy{color:#fff;top:14px;position:relative;left:60px;font-family:'Roboto',sans-serif !important}.temperatureValue{font-size:30px}.unit{font-size:20px}}@media(max-width:596px){.copy{color:#fff;top:10px;position:relative;left:50px}.temperatureValue{font-size:30px}.unit{vertical-align:super;font-size:17px}}@media(max-width:560px){.copy{color:#fff;top:12px;position:relative;left:50px}.temperatureValue{font-size:25px}.unit{vertical-align:super;font-size:10px}}@media(max-width:537px){.copy{color:#fff;top:10px;position:relative;left:50px}.temperatureValue{font-size:25px}.unit{vertical-align:super;font-size:15px}}@media(max-width:494px){.copy{color:#fff;top:10px;position:relative;left:40px}.temperatureValue{font-size:20px}.unit{vertical-align:super;font-size:12px}}@media (max-width:767px) and (min-width:421px){#primoFC{background:url(iPad_768x300_bg.png);background-repeat:no-repeat;background-size:cover}#primoFC #creativeBG{width:96%;height:100%;background-image:url(iPad_768x300_content.png);background-size:contain;background-repeat:no-repeat}}@media(max-width:375px){body #primoFC{height:250px;background:url(iPhone_375x250_bg.png);background-repeat:no-repeat;background-size:cover}}@media(max-width:420px){#primoFC{background-position:bottom;margin-bottom:12px;margin-top:0px;height:250px;background:url(iPhone_414x250_bg.png);background-repeat:no-repeat;background-size:cover}#primoFC #creativeBG{background-image:none;height:250px;width:100%;margin:0 auto;top:0px;background-position:bottom}#logoBG,#mWebCopyBG{display:block}#logoBG{background-position:bottom 10px right 10px}.copy{color:#fff;top:1px;position:relative;left:62px}.temperatureValue{font-size:36px}.unit{vertical-align:super;font-size:17px}}@media(max-width:375px){#primoFC #creativeBG{background-image:none}}@media(max-width:360px){#primoFC #creativeBG{background-size:contain;width:100%}}@media(max-width:320px){#primoFC #creativeBG{width:100%;background-size:contain}#logoBG{background-position:bottom 10px right 6px}#mWebCopyBG{background-position:top 15px left 10px}.copy{color:#fff;top:2px;position:relative;left:57px}}`;

const manualImgLoader = []; // use this only when aw provide different server path

// ---------------------------------------------------------------------
// Please dont try to change the below code if you  are not a developer
// ---------------------------------------------------------------------
const additionalScript = async () => {
    // api fetch and render data
    let apiKey = "103cf8ebc1de4830a8b773a59680a59d"
    let cityCode = "30072"
    let apiUrl = `https://api.accuweather.com/currentconditions/v1/${cityCode}.json?apikey=${apiKey}&details=true`
    let renderInClassName = "#creativeBG"

    // set fetch api data in template
    const dataInTemplate = ((data, renderInClass) => {
        let selectedData = data[0].Temperature.Imperial.Value
        let template = `<div id="mWebCopyBG"></div><div class="copy"><span class="temperatureValue">${selectedData}</span><sup class="unit">&#8457;</sup></div><div id="logoBG"></div>`

        if (selectedData) {
            render(template, document.querySelector(renderInClass));
        }
    });
    // render template in selected node
    let render = function (template, givenNode) {
        givenNode.innerHTML = template;
    };
    // fetch api data
    const fetchApiData = async (url) => {
        let response = await fetch(url);
        if (response.ok) {
            let jsonData = await response.json();
            return jsonData
        } else {
            console.log("error" + response.status);
        }
    };
    // Main method for loading data with template inside specific div
    const loadAdsData = async () => {
        try {
            const response = await fetchApiData(apiUrl);
            await dataInTemplate(response, renderInClassName)
        }
        catch (err) {
            console.log(err)
        }

    }
    loadAdsData();

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