

const pushAWAd = () =>{
    const unitLineItemName = `Tylenol_Arthritis_Main_Hero_wArthritis_Index_API`;
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
const htmlWithoutServerPath = `<div id='awGlobalBnrWrapper' class="awClickTagURL1"><div id='awBnrCreativeContent'><div id='apiDataArea'class='apiDataArea'></div></div></div>`;

// minified Css with local files call
const cssWithoutServerPath = `#awGlobalBnrWrapper{ background: #e31837; background-position: center !important; background-size: cover !important; background-repeat: no-repeat !important; width: 100%; height: 300px; margin: 0 auto; position: relative; margin-bottom: 16px; margin-top: 0; cursor: pointer; overflow: hidden;} #awGlobalBnrWrapper #awBnrCreativeContent{ width: 960px; height: 300px; margin: 0 auto; background: url(desktop_content.png); background-position: center !important; background-repeat: no-repeat !important; top: 0;} #awGlobalBnrWrapper #awBnrCreativeContent:hover{ cursor: pointer} @media(max-width:979px){ #awGlobalBnrWrapper{ margin-bottom: 16px; margin-top: 0; height: 300px;} #awGlobalBnrWrapper #awBnrCreativeContent{ width: 768px; height: 300px; background: url(iPad_content.png);}} @media (max-width:767px){ #awGlobalBnrWrapper{ margin-bottom: 12px; margin-top: 0; height: 250px;} #awGlobalBnrWrapper #awBnrCreativeContent{ background: url(iPhone_content.png); height: 250px; width: 100%; margin: 0 auto; top: 0; left: 0; transform: none}} @media(max-width:360px){ #awGlobalBnrWrapper #awBnrCreativeContent{ background-position: center left -20px !important;}} @import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,500&display=swap); #awGlobalBnrWrapper .apiDataArea{ width: 100%; max-width: 270px; display: flex; justify-content: space-between; position: absolute; top: 39px; right: 50%; transform: translateX(527px);} .details{ margin-left: 5px} .single .details, .single .details h6, .single .details p, .single .details span, .single .details .apiDataSource{ font-family: 'Montserrat', sans-serif; color: #ffffff;} .single .details .apiDataSource{ font-size: 15px; font-weight: 500; font-style: italic; line-height: 25px;} .wrapSVG{ position: relative; width: 35px; float: left} .wrapSVG span{ position: absolute; top: 40px; left: 50px; font-size: 15px} .single{ text-align: center; overflow: hidden; float: left; padding: 0; padding-right: 5px; margin: 5px; margin-left: 15px; margin-bottom: 0px;} .single .details{ text-align: left; margin-left: 50px} .single .details span{ overflow-y: scroll; max-height: 98px; scrollbar-width: thin; font-size: 12px; line-height: 19px; display: block; overflow: hidden; font-weight: 500;} .single img{ float: left; display: block; margin-bottom: 5px} .single p.module-header{ margin: 0; font-size: 20px; font-weight: 700; margin-top: 0; text-transform: uppercase; line-height: 15px;} .single h6{ margin: 11px 0 14px 0; font-size: 30px; font-weight: 700; line-height: 30px;} .single>span{ float: left; display: block; width: 100%; font-size: 14px} ul.scale{ padding: 0; width: 30px; list-style: none; margin: 0} ul.scale li{ width: 100%; background: #e9442c; margin-bottom: 5px; height: 6px} .scale>li:nth-child(1){ transition: all 5s ease} .scale>li:nth-child(2){ transition: all 4.5s ease} .scale>li:nth-child(3){ transition: all 4s ease} .scale>li:nth-child(4){ transition: all 3.5s ease} .scale>li:nth-child(5){ transition: all 3s ease} .scale>li:nth-child(6){ transition: all 2.5s ease} .scale>li:nth-child(7){ transition: all 2s ease} .scale>li:nth-child(8){ transition: all 1.5s ease} .scale>li:nth-child(9){ transition: all 1s ease} .scale>li:nth-child(10){ transition: all .5s ease} @media(max-width:979px){ #awGlobalBnrWrapper .apiDataArea{ width: 100%; max-width: 300px; top: 185px; transform: translateX(345px);} .wrapSVG{ width: 30px} .single .details{ margin-left: 35px; width: 245px;} ul.scale li{ margin-bottom: 3px; height: 6px} ul.scale{ width: 25px} .single p.module-header{ font-size: 14px; margin-top: 3px; line-height: 5px;} .single h6{ font-size: 20px; margin: 3px 0 3px 0} .single .details span{ font-size: 10px; line-height: 14px;} .single .details .apiDataSource{ font-size: 12px; line-height: 14px;}} @media(max-width:767px){ #awGlobalBnrWrapper .apiDataArea{ max-width: 165px; top: 17px; left: 50%; transform: translateX(11px);} ul.scale li{ margin-bottom: 3px; height: 6px} .single{ margin-left: 10px;} .single .details{ width: 110px;} .single .details span{ line-height: 10px} .wrapSVG{ width: 24px} .single p.module-header{ font-size: 12px; margin-top: 2px} .single h6{ font-size: 15px; margin: 7px 0 7px 0; line-height: 17px;} .single .details span{ font-size: 8px} .single .details .apiDataSource{ font-size: 10px; line-height: 14px;}} @media(max-width:360px){ #awGlobalBnrWrapper .apiDataArea{ transform: translateX(0px);}}`;

const manualImgLoader = []; // use this only when aw provide different server path

// ---------------------------------------------------------------------
// Please dont try to change the below code if you  are not a developer
// ---------------------------------------------------------------------
const additionalScript = async () => {
    // Scale index API
    let apiKey = `103cf8ebc1de4830a8b773a59680a59d`
    let cityCode = `349727`;
    // let cityCode = parent?.currentLocation?.key ? parent?.currentLocation?.key : `347936`;
    let apiUrl = `https://api.accuweather.com/indices/v1/daily/5day/${cityCode}/21?apikey=${apiKey}&details=true`
    let renderInClassName = `.apiDataArea`

    // set fetch api data in template
    const dataInTemplate = ((data, renderInClass) => {
        // console.log(data)
        let size = 1;
        let selectedData = data.slice(0, size)
        let template = selectedData.map((item, index) => {
            let value = Math.trunc(item.Value)
            let maxLengthOfText = 140
            let formateText = item.Text.length > maxLengthOfText ? item.Text.substring(0, maxLengthOfText) + "..." : item.Text;
            // console.log(item.Text)

            // console.log(item)
            return `<div class="single">
                    <div class="wrapSVG">
                    <ul class="scale C1 active">
                        ${value > 9 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                        ${value > 8 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                        ${value > 7 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                        ${value > 6 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                        ${value > 5 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                        ${value > 4 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                        ${value > 3 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                        ${value > 2 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                        ${value > 1 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                        ${value > 0 ? `<li style="background:#fff200"></li>` : `<li></li>`}
                    </ul>
                    </div>
                    <div class="details">
                    <p class="module-header">${index > 0 ? "Tomorrow" : "Today"}</p>
                    <h6>${item.Category}</h6>  <span>${formateText}</span>
                    <div class='apiDataSource'>Source: AccuWeather</div>
                    </div>
                    
                </div>
                `
        }).join("");
        if (selectedData) {
            render(template, document.querySelector(renderInClass));

        }
    });
    // render template in selected node
    let render = function (template, givenNode) {
        if (template && givenNode) {
            givenNode.innerHTML = template;
        } else {
            console.log('Given node missing')
        }
    };
    // fetch api data
    const fetchApiData = async (url) => {
        let response = await fetch(url);
        if (response.ok) {
            let jsonData = await response.json();
            return jsonData
        } else {
            console.log('error' + response.status);
        }
    };
    // Main method for loading data with template inside specific div
    try {
        const response = await fetchApiData(apiUrl);
        await dataInTemplate(response, renderInClassName)
    }
    catch (err) {
        console.log(err)
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