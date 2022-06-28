const pushAWAd = () =>{
    const unitLineItemName = `FY21_Holiday_Smart_Home_Ring_Additional`;
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
const htmlWithoutServerPath = `<div id='awGlobalBnrWrapper' class='awClickTagURL1'><div class="redLine"></div><div id='awBnrCreativeContent'><div class="apiWrapper"><div class="today indexWrapper"><div class="level"><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div></div><div class="info"><div class="infoOne">Today</div><div class="infoTwo"></div><div class="infoThree"></div></div></div><div class="tomorrow indexWrapper"><div class="level"><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div><div class="levelItem"></div></div><div class="info"><div class="infoOne">Tomorrow</div><div class="infoTwo"></div><div class="infoThree"></div></div></div></div></div></div>`;

// minified Css with local files call
const cssWithoutServerPath = `#awGlobalBnrWrapper{ background: url(desktop_bg.png) no-repeat center; background-size: cover; width: 100%; height: 300px; margin: 0 auto; position: relative; margin-bottom: 16px; margin-top: 0; cursor: pointer; overflow: hidden;} #awGlobalBnrWrapper .redLine{ background: #ee1313; width: 100%; height: 74px; position: absolute; bottom: 0; left: 0;} #awGlobalBnrWrapper #awBnrCreativeContent{ width: 960px; height: 300px; margin: 0 auto; background: url(desktop_content.png); background-position: center !important; background-repeat: no-repeat !important; position: relative; top: 0;} #awGlobalBnrWrapper #awBnrCreativeContent:hover{ cursor: pointer} @media(max-width:979px){ #awGlobalBnrWrapper{ margin-bottom: 16px; margin-top: 0; height: 300px;} #awGlobalBnrWrapper #awBnrCreativeContent{ width: 980px; max-width: 100%; height: 300px; background: url(iPad_content.png) no-repeat center; background-size: cover;}} @media (max-width:767px){ #awGlobalBnrWrapper{ margin-bottom: 12px; margin-top: 0; height: 250px;} #awGlobalBnrWrapper #awBnrCreativeContent{ background: url(iPhone_content.png) no-repeat center; background-size: cover; height: 250px; width: 768px; max-width: 100%; margin: 0 auto; top: 0;}} @media(max-width:360px){ #awGlobalBnrWrapper #awBnrCreativeContent{ background: url(iPhone_content_320.png) no-repeat center; background-size: cover; width: 360px; max-width: 100%;}} @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); #awBnrCreativeContent .apiWrapper{ position: absolute; top: 22px; left: 227px; display: flex; flex-direction: row;} #awBnrCreativeContent .indexWrapper{ display: flex;} #awBnrCreativeContent .indexWrapper:first-child{ margin-right: 59px;} #awBnrCreativeContent .indexWrapper .level{ width: 26px;} #awBnrCreativeContent .indexWrapper .levelItem{ width: 100%; height: 4px; background: #4b0500; margin-bottom: 3px;} #awBnrCreativeContent .indexWrapper .info{ margin-left: 9px; width: 132px;} #awBnrCreativeContent .indexWrapper .infoOne{ font-family: 'Roboto', sans-serif; text-transform: uppercase; font-size: 12px; line-height: 12px; font-weight: 700; margin-top: 0px; color: #ffffff;} #awBnrCreativeContent .indexWrapper .infoTwo{ font-family: 'Roboto', sans-serif; font-weight: 700; font-size: 18px; line-height: 18px; color: #ffffff; margin-top: 4px;} #awBnrCreativeContent .indexWrapper .infoThree{ font-family: 'Roboto', sans-serif; font-size: 12px; line-height: 12px; font-weight: 400; color: #ffffff; margin-top: 5px;} #awBnrCreativeContent .indexWrapper .levelItem.inactive{ background: #ffffff !important;} #awBnrCreativeContent .today, #awBnrCreativeContent .tomorrow{ display: none;} @media(max-width:979px){ #awBnrCreativeContent .apiWrapper{ top: 123px; left: 50%; transform: translateX(-365px);} #awBnrCreativeContent .indexWrapper:first-child{ margin-right: 15px;}} @media(max-width:767px){ #awBnrCreativeContent .apiWrapper{ top: 15px; transform: translateX(-174px);} #awBnrCreativeContent .indexWrapper:first-child{ margin-right: 8px;} #awBnrCreativeContent .indexWrapper .infoThree{ font-size: 10px; line-height: 10px;} #awBnrCreativeContent .indexWrapper .infoTwo{ margin-bottom: 9px;} #awBnrCreativeContent .indexWrapper .info{ margin-left: 11px; width: 87px;}} @media(max-width:360px){ #awBnrCreativeContent .apiWrapper{ top: 21px; transform: translateX(-150px);} #awBnrCreativeContent .indexWrapper .level{ width: 21px;} #awBnrCreativeContent .indexWrapper .levelItem{ height: 4px; margin-bottom: 2px;} #awBnrCreativeContent .indexWrapper .info{ margin-left: 7px; width: 74px;} #awBnrCreativeContent .indexWrapper .infoOne{ font-size: 9px; line-height: 9px;} #awBnrCreativeContent .indexWrapper .infoTwo{ font-size: 13px; line-height: 13px; margin-top: 5px;} #awBnrCreativeContent .indexWrapper .infoThree{ font-size: 9px; line-height: 9px;}}`;

const manualImgLoader = []; // use this only when aw provide different server path

// ---------------------------------------------------------------------
// Please dont try to change the below code if you  are not a developer
// ---------------------------------------------------------------------
const additionalScript = async () => {
    const apiKey = `103cf8ebc1de4830a8b773a59680a59d`
    let cityCode = `347936`;
    const apiUrl = `https://api.accuweather.com/indices/v1/daily/5day/${cityCode}/40?apikey=${apiKey}&details=true`
    const maxLengthOfText = 140
    const fetchApiData = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                renderIndex('today', data[0])
                renderIndex('tomorrow', data[1])
            })
            .catch(error => {
                console.log(error)
            })
    };

    function renderIndex(seclector, data) {
        if (!document.querySelector(`#awGlobalBnrWrapper .${seclector}`)) {
            return
        }
        const value = Math.trunc(data.Value)
        const formateText = data.Text.length > maxLengthOfText ? data.Text.substring(0, maxLengthOfText) + "..." : data.Text;
        const infoTwo = document.querySelector(`#awGlobalBnrWrapper .${seclector} .infoTwo`)
        const infoThree = document.querySelector(`#awGlobalBnrWrapper .${seclector} .infoThree`)
        const total_inactive_element = 10 - value
        const levels = document.querySelectorAll(`#awGlobalBnrWrapper .${seclector} .levelItem`)
        let i;
        for (i = 0; i < total_inactive_element; i++) {
            levels[i].classList.add("inactive");
        }
        infoTwo.innerHTML = data.Category
        infoThree.innerHTML = formateText
        document.querySelector(`#awGlobalBnrWrapper .${seclector}`).style.display = 'flex'
    }

    fetchApiData(apiUrl)

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