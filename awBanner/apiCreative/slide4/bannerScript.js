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
const isAnimatedUnit = true // set true if any animation
const expectedLoopCount = 1; // default value 1 for no loop
const totalAnimationTimeCount = 12000 // without loop, total second count like 12 second = 12000. default 0.

// minified HTML with local path call
const htmlWithoutServerPath = `<div id='awGlobalBnrWrapper'><div class='rightBg'></div><div id='awBnrCreativeContent'><div class='frameOneContent'><div class='logo'></div><div class='copy1'></div><div class='copy2'></div><div class='copy3'></div></div><div class='product'></div><div class='copy4Wrapper'><div class='copy4'></div></div><div class='cta'></div><div class='apiDataArea'></div></div></div>`;

// minified Css with local files call
const cssWithoutServerPath = `.banner-item{margin-top:0}#awGlobalBnrWrapper{background:url(desktop_bg.png) center;background-size:cover!important;width:100%;height:300px;background-position:center;margin:0 auto;position:relative;margin-bottom:16px;margin-top:0;cursor:pointer;overflow:hidden}#awGlobalBnrWrapper #awBnrCreativeContent{width:960px;height:300px;margin:0 auto;position:absolute;left:0;right:0;top:0;overflow:hidden;z-index:0}#awGlobalBnrWrapper .rightBg{position:absolute;background:#fe7701;width:0%;height:300px;left:50%;-webkit-transform:translateX(93px);-ms-transform:translateX(93px);transform:translateX(93px);-webkit-animation:wipeLeftToRight 1s 3.5s linear both;animation:wipeLeftToRight 1s 3.5s linear both}#awGlobalBnrWrapper #awBnrCreativeContent .logo{position:absolute;width:148px;height:104px;top:17px;left:0;right:0;margin:auto;background:url(logo.png) center no-repeat;background-size:contain}#awGlobalBnrWrapper #awBnrCreativeContent .copy1{position:absolute;width:527px;height:27px;bottom:112px;left:0;background:url(copy1.png) center no-repeat;background-size:contain;-webkit-animation:animRightToLeft .2s .3s linear both;animation:animRightToLeft .2s .3s linear both}#awGlobalBnrWrapper #awBnrCreativeContent .copy2{position:absolute;width:220px;height:69px;bottom:34px;left:0;background:url(copy2.png) center no-repeat;background-size:contain;-webkit-animation:animRightToLeft .2s .7s linear both;animation:animRightToLeft .2s .7s linear both}#awGlobalBnrWrapper #awBnrCreativeContent .copy3{position:absolute;width:281px;height:69px;bottom:34px;left:243px;background:url(copy3.png) center no-repeat;background-size:contain;-webkit-animation:animRightToLeft .2s 1.1s linear both;animation:animRightToLeft .2s 1.1s linear both}#awGlobalBnrWrapper #awBnrCreativeContent .frameOneContent{position:absolute;width:575px;height:100%;left:0;-webkit-animation:animFadeOut .3s 3.5s linear both;animation:animFadeOut .3s 3.5s linear both}#awGlobalBnrWrapper #awBnrCreativeContent .product{position:absolute;width:141px;height:261px;bottom:18px;right:258px;background:url(product.png) center no-repeat;background-size:contain;-webkit-animation:animBottomToTop .5s 4.1s linear both;animation:animBottomToTop .5s 4.1s linear both}#awGlobalBnrWrapper #awBnrCreativeContent .copy4{position:absolute;width:583px;height:106px;top:50px;left:0;background:url(copy4.png) center no-repeat;background-size:contain;-webkit-animation:animFadeIn .5s 5.1s linear both;animation:animFadeIn .5s 5.1s linear both}#awGlobalBnrWrapper #awBnrCreativeContent .cta{position:absolute;width:192px;height:45px;bottom:61px;left:0;background:url(cta.png) center no-repeat;background-size:contain;-webkit-animation:animFadeIn .5s 6.1s linear both;animation:animFadeIn .5s 6.1s linear both}#awGlobalBnrWrapper .apiDataArea{width:100%;max-width:207px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:absolute;right:0;top:94px;-webkit-animation:animFadeIn .5s 7.1s linear both;animation:animFadeIn .5s 7.1s linear both}.details{margin-left:5px}.single .details,.single .details h6,.single .details p,.single .details span{font-family:Roboto,sans-serif;color:#fff;line-height:14px}.wrapSVG{position:relative;width:35px;float:left}.wrapSVG span{position:absolute;top:40px;left:50px;font-size:15px}.single{width:100%;text-align:center;overflow:hidden;float:left;padding:0;padding-right:5px}.single .details{text-align:left;margin-left:10px}.single img{float:left;display:block;margin-bottom:5px}.single p.module-header{margin:0;font-size:13px;font-weight:700;margin-top:5px}.single h6{margin:11px 0 14px 0;font-size:18px;font-weight:700}.single>span{float:left;display:block;width:100%;font-size:14px}ul.scale{padding:0;width:28px;list-style:none;margin:0}ul.scale li{width:100%;background:#fff;margin-bottom:5px;height:7px}.scale>li:nth-child(1){-webkit-transition:all 5s ease;-o-transition:all 5s ease;transition:all 5s ease}.scale>li:nth-child(2){-webkit-transition:all 4.5s ease;-o-transition:all 4.5s ease;transition:all 4.5s ease}.scale>li:nth-child(3){-webkit-transition:all 4s ease;-o-transition:all 4s ease;transition:all 4s ease}.scale>li:nth-child(4){-webkit-transition:all 3.5s ease;-o-transition:all 3.5s ease;transition:all 3.5s ease}.scale>li:nth-child(5){-webkit-transition:all 3s ease;-o-transition:all 3s ease;transition:all 3s ease}.scale>li:nth-child(6){-webkit-transition:all 2.5s ease;-o-transition:all 2.5s ease;transition:all 2.5s ease}.scale>li:nth-child(7){-webkit-transition:all 2s ease;-o-transition:all 2s ease;transition:all 2s ease}.scale>li:nth-child(8){-webkit-transition:all 1.5s ease;-o-transition:all 1.5s ease;transition:all 1.5s ease}.scale>li:nth-child(9){-webkit-transition:all 1s ease;-o-transition:all 1s ease;transition:all 1s ease}.scale>li:nth-child(10){-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}.single .details span{font-size:13px;line-height:14px;display:block;overflow:hidden}@media(max-width:979px){#awGlobalBnrWrapper{margin-bottom:16px;margin-top:0;height:300px;background:url(ipad_bg.png)}#awGlobalBnrWrapper #awBnrCreativeContent{position:relative;width:100%;max-width:768px;height:300px;top:0;right:0}#awGlobalBnrWrapper .rightBg{-webkit-transform:translateX(47px);-ms-transform:translateX(47px);transform:translateX(47px)}#awGlobalBnrWrapper #awBnrCreativeContent .logo{top:33px}#awGlobalBnrWrapper #awBnrCreativeContent .copy1{position:absolute;width:384px;height:20px;bottom:91px;left:23px}#awGlobalBnrWrapper #awBnrCreativeContent .copy2{position:absolute;width:161px;height:51px;left:23px}#awGlobalBnrWrapper #awBnrCreativeContent .copy3{position:absolute;width:205px;height:50px;left:202px}#awGlobalBnrWrapper #awBnrCreativeContent .frameOneContent{width:432px;height:100%}#awGlobalBnrWrapper #awBnrCreativeContent .copy4{width:377px;height:69px;top:60px;left:25px}#awGlobalBnrWrapper #awBnrCreativeContent .cta{left:25px;bottom:91px}#awGlobalBnrWrapper .apiDataArea{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;right:25px}}@media(max-width:767px){#awGlobalBnrWrapper{margin-bottom:12px;margin-top:0;height:250px;background:url(iPhone_bg.png) no-repeat top;background-size:cover}#awGlobalBnrWrapper #awBnrCreativeContent{height:250px;width:100%;margin:0 auto;top:0;background:0 0;max-width:414px}#awGlobalBnrWrapper .rightBg{width:100%;height:inherit;left:100%;right:auto;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-animation:wipeRightToLeft .5s 3.5s linear both;animation:wipeRightToLeft .5s 3.5s linear both}#awGlobalBnrWrapper #awBnrCreativeContent .copy1{width:206px;height:11x;bottom:auto;top:21px;left:21px}#awGlobalBnrWrapper #awBnrCreativeContent .copy2{width:128px;height:40px;left:21px;top:41px;bottom:auto}#awGlobalBnrWrapper #awBnrCreativeContent .copy3{width:165px;height:41px;left:21px;top:93px;bottom:auto}#awGlobalBnrWrapper #awBnrCreativeContent .frameOneContent{width:432px;height:100%}#awGlobalBnrWrapper #awBnrCreativeContent .copy4{width:222px;height:87px;top:84px;left:auto;right:25px;background:url(copy4_iPhone.png) center no-repeat;background-size:contain}#awGlobalBnrWrapper #awBnrCreativeContent .copy4Wrapper{-webkit-animation:animFadeOut .5s 7.5s linear both;animation:animFadeOut .5s 7.5s linear both}#awGlobalBnrWrapper #awBnrCreativeContent .product{width:87px;height:161px;bottom:43px;right:auto;left:15px}#awGlobalBnrWrapper #awBnrCreativeContent .logo{width:71px;height:50px;top:auto;bottom:21px;left:21px;right:auto}#awGlobalBnrWrapper #awBnrCreativeContent .cta{width:101px;height:31px;left:50%;-webkit-transform:translateX(-54px);-ms-transform:translateX(-54px);transform:translateX(-54px);bottom:42px;-webkit-animation-delay:8.5s;animation-delay:8.5s}#awGlobalBnrWrapper .apiDataArea{left:50%;-webkit-transform:translateX(-50px);-ms-transform:translateX(-50px);transform:translateX(-50px);top:41px;-webkit-animation-delay:9.5s;animation-delay:9.5s}.single .details span{font-size:10px}}@media(max-width:320px){#awGlobalBnrWrapper #awBnrCreativeContent .copy4{width:204px;height:77px;right:15px}#awGlobalBnrWrapper #awBnrCreativeContent .product{left:5px}}@-webkit-keyframes animRightToLeft{0%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}10%{opacity:1}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes animRightToLeft{0%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}10%{opacity:1}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes wipeLeftToRight{to{width:100%}}@keyframes wipeLeftToRight{to{width:100%}}@-webkit-keyframes wipeRightToLeft{to{left:0}}@keyframes wipeRightToLeft{to{left:0}}@-webkit-keyframes animFadeOut{0%{opacity:1}100%{opacity:0}}@keyframes animFadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes animFadeIn{0%{opacity:0}100%{opacity:1}}@keyframes animFadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes animBottomToTop{0%{-webkit-transform:translateY(300px);transform:translateY(300px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes animBottomToTop{0%{-webkit-transform:translateY(300px);transform:translateY(300px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}`;

const manualImgLoader = []; // use this only when aw provide different server path

// ---------------------------------------------------------------------
// Please dont try to change the below code if you  are not a developer
// ---------------------------------------------------------------------
const additionalScript = async () => {
   // api part start
   let apiKey = `103cf8ebc1de4830a8b773a59680a59d`
   let cityCode = `349727`;
   let apiUrl = `https://api.accuweather.com/indices/v1/daily/5day/${cityCode}/46?apikey=${apiKey}&details=true`
   let renderInClassName = `.apiDataArea`

   // set fetch api data in template
   const dataInTemplate = ((data, renderInClass) => {
       // console.log(data)
       let size = 1;
       let selectedData = data.slice(0, size)
       let template = selectedData.map((item, index) => {
           let value = Math.trunc(item.Value)
           // let value = Math.ceil(item.Value)

           let category_val = item.Value

           let item_text = ""
           let item_level = ""

           if (category_val >= 0 && category_val <= 1.99) {
               item_text = "Weather conditions will keep outdoor pest activity such as mosquitoes and ticks very low."
               item_level = "Very Low"
           }
           if (category_val >= 2 && category_val <= 3.99) {
               item_text = "Weather conditions will keep outdoor pest activity such as mosquitoes and ticks low."
               item_level = "Low"
           }
           if (category_val >= 4 && category_val <= 6.99) {
               item_text = "The weather is favorable for a moderate level of outdoor pest activity such as mosquitoes and ticks. Plan activities and insect repellents accordingly."
               item_level = "Moderate"
           }
           if (category_val >= 7 && category_val <= 8.99) {
               item_text = "The weather is favorable for a high level of outdoor pest activity such as mosquitoes and ticks. Plan activities and insect repellents accordingly."
               item_level = "High"
           }
           if (category_val >= 9 && category_val <= 10) {
               item_text = "The weather is favorable for a very high level of outdoor pest activity such as mosquitoes and ticks. Plan activities and insect repellents accordingly."
               item_level = "Very High"
           }

           // console.log(item)
           return `<div class="single">
                            <div class="wrapSVG">
                            <ul class="scale C1 active">
                                ${value > 9 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                                ${value > 8 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                                ${value > 7 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                                ${value > 6 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                                ${value > 5 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                                ${value > 4 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                                ${value > 3 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                                ${value > 2 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                                ${value > 1 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                                ${value > 0 ? `<li style="background:#f8ef18"></li>` : `<li></li>`}
                            </ul>
                            </div>
                            <div class="details">
                            <p class="module-header">${index > 0 ? "Tomorrow" : "Today"}</p>
                            <h6>${item_level}</h6>  <span>${item_text}</span>
                            </div>
                        </div>
                        `
       }).join("");
       if (selectedData) {
           render(template, document.querySelector(renderInClass));

       }
   });
   // render template in selected node
   let render = function (template, node) {
       node.innerHTML = template;
   };
   // fetch api data
   const fetchApiData = async (url) => {
       let response = await fetch(url);
       if (response.ok) {
           let jsonData = await response.json();
           // console.log(jsonData)
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
   // ------- end api actions
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