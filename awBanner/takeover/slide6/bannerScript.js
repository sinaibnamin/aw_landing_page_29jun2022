

const pushAWAd = () => {

    const unitLineItemName = `Mock_Request_Goldman_Sachs_Hero_wGutter`;
    // server path variable. 
    const awServerPath = `./`; //set empty for local path

    // click tag url
    const listOfClickTag = { awClickTagURL1: 'https://www.google.com/' }; //awClickTagURL1: "https://www.google.com/"
    const clickTagDisableArea = `clickTagDisable` //awClickTagDisable

    // array of library script if needed
    const arrayOfScripts = [];
    // array of library script if needed
    const arrayOfCssLinks = [];

    // minified HTML with local path call
    const htmlWithoutServerPathForGutter = `<div id="awGutterGlobalWrapper"><div id="awGutterTopBnrWrapperBack"><div class='awGutterTopBnrCreativeContentBack'></div></div><div id="awGutterWrapper"><div class='leftGutter awClickTagURL1'></div><div class='rightGutter awClickTagURL1'></div></div><div id='awSiteMiddleContentNavArea'></div><div id='awSiteMiddleContentArea'></div></div>`;
    const htmlWithoutServerPathForTopBnr = `<div id="awGutterTopBnrWrapperFront"class="awClickTagURL1"><div class='awGutterTopBnrCreativeContentFront'></div></div>`;

    // minified Css with local files call
    const cssWithoutServerPath = `:root{--awThemeColor:#ebebeb}#awGutterGlobalWrapper{position:absolute;top:0;left:0;right:0;width:100%;height:100%;overflow:hidden}#awGutterTopBnrWrapperBack{position:absolute;left:0;right:0;top:139px;width:100%;height:250px;margin:0 auto;margin-bottom:16px;margin-top:16px}#awGutterTopBnrWrapperBack .awGutterTopBnrCreativeContentBack{position:absolute;left:0;right:0;top:0;width:100%;height:250px;max-width:1008px;max-height:250px;margin:0 auto;background:var(--awThemeColor)}#awGutterWrapper{z-index:0;position:fixed;top:0;width:100%;height:100vh;overflow:hidden;background:url(responsive_hero_wGutter_largeSkin.png) no-repeat center 0;background-attachment:scroll;max-width:2176px;max-height:1484px;left:0;right:0;margin:auto;cursor:pointer}#awGutterGlobalWrapper #awSiteMiddleContentNavArea{width:1008px;margin:0 auto;height:61px;background:var(--awThemeColor);position:absolute;right:0;left:0;top:0}#awGutterGlobalWrapper #awSiteMiddleContentArea{width:1008px;margin:0 auto;height:100vh;background:var(--awThemeColor);position:absolute;right:0;left:0;top:310px}#awGutterWrapper .leftGutter{position:absolute;top:0;width:calc(50vw - 504px);height:100%;right:50%;-webkit-transform:translateX(-504px);-ms-transform:translateX(-504px);transform:translateX(-504px);max-width:584px;max-height:1484px}#awGutterWrapper .rightGutter{position:absolute;top:0;width:calc(50vw - 504px);height:100%;left:50%;-webkit-transform:translateX(504px);-ms-transform:translateX(504px);transform:translateX(504px);max-width:584px;max-height:1484px}#awGutterTopBnrWrapperFront{position:relative;cursor:pointer}#awGutterTopBnrWrapperFront .awGutterTopBnrCreativeContentFront{position:sticky;left:0;right:0;width:100%;height:250px;margin:0 auto;margin-bottom:16px;margin-top:16px;background:url(responsive_hero_wGutter_top_content.png) no-repeat center 0}@media screen and (max-width:959px){#awGutterTopBnrWrapperFront,#awGutterWrapper{display:none}}`;
    const cssWithoutServerPathForDoubleNav = `#awGutterGlobalWrapper #awSiteMiddleContentNavArea{height:96px}#awGutterGlobalWrapper #awSiteMiddleContentArea{top:346px}#awGutterTopBnrWrapperFront{top:12px;margin-bottom:28px}#awGutterTopBnrWrapperBack{top:174px}`;

    const manualImgLoader = []; // use this only when aw provide different server path

    // ---------------------------------------------------------------------
    // Please dont try to change the below code if you  are not a developer
    // ---------------------------------------------------------------------
    const awSiteCssOverRide = `.template-root .page-subnav{background:var(--awThemeColor)!important;width:100%;max-width:initial;position:relative;padding-bottom:0}.template-root .page-subnav:before{content:'';height:61px;width:100%;background:var(--awThemeColor);position:absolute;top:0;left:0}.template-root .two-column-page-content{background:var(--awThemeColor);position:relative;box-shadow:-24px -16px 0 0 var(--awThemeColor),24px 280px 0 0 var(--awThemeColor)}.neighbors-wrapper{position:relative;text-align:center}.template-root .page-subnav .secondary-nav{max-width:960px;margin:0 auto}.template-root .base-footer.is-en{position:relative}.template-root .breadcrumbs-wrapper{padding-left:0;position:relative}.template-root .content-module{position:relative}.two-column-page-content{background:var(--awThemeColor);position:relative}.template-root .base-footer.is-en .footer-legalese{margin-bottom:-20px}@media screen and (max-width:959px){.template-root .page-subnav{background:var(--awThemeColor)!important;padding:0 0 16px!important;margin-bottom:0!important;position:relative}}.template-root .breadcrumbs{position:relative}`
    const awSiteCssOverRideForDoubleNav = `.template-root .page-subnav:before{content:'';height:96px !important;}`

    const additionalScript = async () => {
        if (document.querySelector(".page-subnav")?.querySelector('.tertiary-nav')) {
            //write script for double nav
        } else {
            // write custom script
        }
    }

    const formatAndInjectBanner = async () => {
        const awWebsiteNav = document.querySelector(".page-subnav");
        const awBodyFirstChild = document.querySelector("body").firstChild;
        const websiteHead = document.head || document.getElementsByTagName('head')[0];

        // if no server path add this css
        !awServerPath && (awWebsiteNav?.querySelector('.tertiary-nav') ? websiteHead.insertAdjacentHTML('afterend', `<style>*{ padding: 0; margin: 0;}body{background:var(--awThemeColor);}#awGutterTopBnrWrapperFront,#awGutterTopBnrWrapperBack{ top: 80px;}</style>`) : websiteHead.insertAdjacentHTML('afterend', `<style>*{ padding: 0; margin: 0;}body{background:var(--awThemeColor);}#awGutterTopBnrWrapperFront,#awGutterTopBnrWrapperBack{ top: 45px;}</style>`));

        // clickTag add method
        // clickTag add method
        const addClickTag = async () => {
            // addclickTag
            if (listOfClickTag) {
                for (var key in listOfClickTag) {
                    const clickTagElementList = await document.querySelectorAll('.' + key);
                    const applyClickTag = await clickTagElementList.forEach(clickTagElement => {
                        const formatedClickTagURL = awServerPath ? listOfClickTag[key] : listOfClickTag[key].replaceAll('', '');
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

        // convert String to HTML
        const createElementFromHTML = (htmlString) => {
            var div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }
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
        const injectHTML = (formatedHTML, targetNode) => {
            let convertedStringToHTML = createElementFromHTML(formatedHTML)
            return targetNode.parentNode.insertBefore(convertedStringToHTML, targetNode.nextSibling);
        }

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

        const adjustColorAsperAWSite = () => {
            let getColorFromAWSite = window.getComputedStyle(document.body, null).getPropertyValue('background');
            let cssVariableList = document.querySelector(':root');
            return cssVariableList.style.setProperty('--awThemeColor', getColorFromAWSite)
        }

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

        // --scroll effect scripts ---
        const getYPosition = () => {
            let top = window.pageYOffset || document.documentElement.scrollTop
            return top;
        }

        try {
            const callInjectCssLibrary = arrayOfCssLinks.length > 0 && await injectCssLibrary(arrayOfCssLinks);
            const callInjectScriptLibrary = arrayOfScripts.length > 0 && await injectScriptLibrary(arrayOfScripts);
            // preparing loader images list
            const collectImageFromCssForDoubleNav = manualImgLoader.length < 1 && await cssWithoutServerPathForDoubleNav.match(/[\w-]+\.(jpg|png|jpeg|gif)/g);
            const collectImageFromCss = manualImgLoader.length < 1 && collectImageFromCssForDoubleNav ? await cssWithoutServerPath.match(/[\w-]+\.(jpg|png|jpeg|gif)/g).concat(collectImageFromCssForDoubleNav) : await cssWithoutServerPath.match(/[\w-]+\.(jpg|png|jpeg|gif)/g);
            const collectImageFromHtmlForTopContent = manualImgLoader.length < 1 && await htmlWithoutServerPathForTopBnr.match(/[\w-]+\.(jpg|png|jpeg|gif)/g);
            const collectImageFromHtml = manualImgLoader.length < 1 && (collectImageFromHtmlForTopContent ? await htmlWithoutServerPathForGutter.match(/[\w-]+\.(jpg|png|jpeg|gif)/g).concat(collectImageFromHtmlForTopContent) : await htmlWithoutServerPathForGutter.match(/[\w-]+\.(jpg|png|jpeg|gif)/g));
            const collectVideoFromHtmlForTopContent = manualImgLoader.length < 1 && await htmlWithoutServerPathForTopBnr.match(/[\w-]+\.(mp4|webm)/g);
            const collectVideoFromHtml = manualImgLoader.length < 1 && (collectVideoFromHtmlForTopContent ? await htmlWithoutServerPathForGutter.match(/[\w-]+\.(mp4|webm)/g).concat(collectVideoFromHtmlForTopContent) : await htmlWithoutServerPathForGutter.match(/[\w-]+\.(mp4|webm)/g));
            const allVideoArrayWithoutServerPath = await ((collectVideoFromHtml) => { return [...new Set(collectVideoFromHtml)] })(collectVideoFromHtml);
            const allImageArrayWithoutServerPath = await ((collectImageFromCss, collectImageFromHtml) => { return [...new Set(collectImageFromHtml ? collectImageFromCss?.concat(collectImageFromHtml) : collectImageFromCss)] })(collectImageFromCss, collectImageFromHtml);

            // format minified HTML with serverPath
            const htmlWithServerPathForGutterWithoutVideo = await replaceListOfImageByServerPath(allImageArrayWithoutServerPath, htmlWithoutServerPathForGutter);
            const htmlWithServerPathForGutter = await replaceListOfImageByServerPath(allVideoArrayWithoutServerPath, htmlWithServerPathForGutterWithoutVideo);
            const htmlWithServerPathForTopBnrWithoutVideo = await replaceListOfImageByServerPath(allImageArrayWithoutServerPath, htmlWithoutServerPathForTopBnr);
            const htmlWithServerPathForTopBnr = await replaceListOfImageByServerPath(allVideoArrayWithoutServerPath, htmlWithServerPathForTopBnrWithoutVideo);
            // format minified CSS with serverPath
            const cssWithServerPath = await replaceListOfImageByServerPath(allImageArrayWithoutServerPath, cssWithoutServerPath);
            const cssWithServerPathForDoubleNav = awWebsiteNav?.querySelector('.tertiary-nav') && (await replaceListOfImageByServerPath(allImageArrayWithoutServerPath, cssWithoutServerPathForDoubleNav));
            // inject CSS
            const callInjectAwCssOverRide = awServerPath && await injectCss(awSiteCssOverRide)
            const callInjectCss = await injectCss(cssWithServerPath)
            const callInjectCssForDoubleNav = awWebsiteNav?.querySelector('.tertiary-nav') && await injectCss(cssWithServerPathForDoubleNav) && await injectCss(awSiteCssOverRideForDoubleNav)

            // set css variable from aw site
            const setCssVariableFromAWSite = await adjustColorAsperAWSite();

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
                                // HTML
                                resolve(injectHTML(htmlWithServerPathForGutter, awBodyFirstChild) && injectHTML(htmlWithServerPathForTopBnr, awWebsiteNav))
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

            // call click Tag adder method
            const loadAditionalScript = await additionalScript();

            await (() => {

                // set local html title name not AW site
                !document.title && (document.title = unitLineItemName.replaceAll('_', ' '));

                let isClassAvailable = document.getElementsByClassName('nfl-header');
                let marginTopForGutter = isClassAvailable.length > 0 && isClassAvailable[0].offsetHeight;
                // set margin from top of the AW site
                if (isClassAvailable.length > 0 && awServerPath) {
                    // set the gutter position from top in the aw site
                    document.getElementById("awGutterWrapper").style.top = marginTopForGutter + "px";
                    // set middle content are position from top in the aw site
                    document.getElementById("awSiteMiddleContentArea").style.height = (document.getElementsByClassName('two-column-page-content')[0].offsetHeight + 570) + "px"; // 310 add will be ok. due to take safe zone used instead of 570

                    // set aw back top gutter position
                    const getPageSubNAvHeight = window.getComputedStyle(document.getElementsByClassName('page-subnav')[0], ':before').height;
                    document.getElementById("awGutterTopBnrWrapperBack").style.top = `calc(${marginTopForGutter}px + ${getPageSubNAvHeight} - 16px)`

                    // check double nav
                    awWebsiteNav?.querySelector('.tertiary-nav') ? (document.getElementById("awSiteMiddleContentArea").style.top = (marginTopForGutter + 346) + "px")
                        : (document.getElementById("awSiteMiddleContentArea").style.top = (marginTopForGutter + 310) + "px")
                }

                // update elements based on scroll
                window.addEventListener("scroll", (event) => {
                    if (getYPosition() >= 700) {
                        document.getElementById("awSiteMiddleContentArea").style.position = 'fixed';
                        document.getElementById("awSiteMiddleContentArea").style.top = '0px'
                    } else {
                        document.getElementById("awSiteMiddleContentArea").style.position = 'absolute';
                        awWebsiteNav?.querySelector('.tertiary-nav') ? (document.getElementById("awSiteMiddleContentArea").style.top = (marginTopForGutter + 346) + "px")
                            : (document.getElementById("awSiteMiddleContentArea").style.top = (marginTopForGutter + 150) + "px")
                    }
                })

                // AW site css adjust for the ad after our top banner in gutter
                let nextElementOfAWTopBanner = document.getElementById('awGutterTopBnrWrapperFront').nextElementSibling;
                if (nextElementOfAWTopBanner.classList.contains('glacier-ad') && awServerPath) {
                    nextElementOfAWTopBanner.style.margin = 'auto';
                    nextElementOfAWTopBanner.style.width = 'max-content';
                    nextElementOfAWTopBanner.style.maxWidth = '1008px';
                    nextElementOfAWTopBanner.style.background = 'var(--awThemeColor)';
                }
                // css adjust for the ad after two-column-page-content div bottom banner in gutter of AW site
                let twoPageContent = document.querySelector(".two-column-page-content");
                let bottomBanner = twoPageContent?.nextElementSibling
                if (bottomBanner?.classList.contains('glacier-ad') && awServerPath) {
                    bottomBanner.style.margin = 'auto';
                    bottomBanner.style.width = 'max-content';
                    bottomBanner.style.maxWidth = '1008px';
                    bottomBanner.style.background = 'var(--awThemeColor)';
                }
                // end
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