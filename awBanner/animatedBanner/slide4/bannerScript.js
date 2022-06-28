

const pushAWAd = () => {
    // click tag url
    const clickTagURL = `https://www.google.com/`;

    const unitLineItemName = `Mock_Request_Dune_Countdown_Unit_Hero`
    // server path variable. 
    const awServerPath = `./`; //set empty for local path
    // banner Wrapper element name
    const bannerWrapperName = `banner-item`;
    // click tag applied element ID
    const clickTagOnElementID = `banner-item`;

    // minified HTML with local path call
    const htmlWithoutServerPath = `<div id='awGlobalBnrWrapper'><div id='awBnrCreativeContent'><div id='countDownContainer'><div class='dayCountContainer'><div id="bannerDayValue"class='value'>00</div><div class='unit'>Days</div></div><div class='dividerContainer'><div class='value'>:</div><div class='unit'>:</div></div><div class='hourCountContainer'><div id="bannerHourValue"class='value'>00</div><div class='unit'>Hours</div></div><div class='dividerContainer'><div class='value'>:</div><div class='unit'>:</div></div><div class='minuteCountContainer'><div id="bannerMinValue"class='value'>00</div><div class='unit'>Minutes</div></div><div class='dividerContainer'><div class='value'>:</div><div class='unit'>:</div></div><div class='secondCountContainer'><div id="bannerSecValue"class='value'>00</div><div class='unit'>Seconds</div></div></div></div></div>`;

    // minified Css with local files call
    const cssWithoutServerPath = `#awGlobalBnrWrapper{background:url(desktop_bg.png);background-position:center!important;background-size:cover!important;background-repeat:no-repeat!important;width:100%;height:300px;margin:0 auto;position:relative;margin-bottom:16px;margin-top:0;cursor:pointer}#awGlobalBnrWrapper #awBnrCreativeContent{width:960px;height:300px;margin:0 auto;background:url(desktop_content.png);background-position:center!important;background-repeat:no-repeat!important;position:relative;top:0;overflow-x:hidden;z-index:0}#awGlobalBnrWrapper #awBnrCreativeContent:hover{cursor:pointer}@media(max-width:979px){#awGlobalBnrWrapper{margin-bottom:16px;margin-top:0;height:300px;background:url(iPad_bg.png)}#awGlobalBnrWrapper #awBnrCreativeContent{position:relative;width:768px;height:300px;top:0;right:0;background:url(iPad_content.png)}}@media(max-width:767px){#awGlobalBnrWrapper{margin-bottom:12px;margin-top:0;height:250px;background:url(iPhone_bg.png)}#awGlobalBnrWrapper #awBnrCreativeContent{background:url(iPhone_content.png);height:250px;width:100%;margin:0 auto;top:0}}@media(max-width:360px){#awGlobalBnrWrapper #awBnrCreativeContent{background-size:contain;width:100%}}@media(max-width:360px){#awGlobalBnrWrapper #awBnrCreativeContent{background:url(iPhone_content_320.png)}}#awGlobalBnrWrapper #countDownContainer{width:241px;height:60px;font-family:Roboto,sans-serif;color:#010006;position:absolute;bottom:57px;left:2px;display:flex;align-items:center;justify-content:space-evenly;border:3px solid #010006;box-sizing:border-box;padding-bottom:4px;background:rgba(152,184,183,0.5)}#awGlobalBnrWrapper #countDownContainer .dayCountContainer,#awGlobalBnrWrapper #countDownContainer .hourCountContainer,#awGlobalBnrWrapper #countDownContainer .minuteCountContainer,#awGlobalBnrWrapper #countDownContainer .dividerContainer,#awGlobalBnrWrapper #countDownContainer .secondCountContainer{display:flex;flex-direction:column;align-items:center;justify-content:center}#awGlobalBnrWrapper #countDownContainer .value{font-size:30px;font-weight:900}#awGlobalBnrWrapper #countDownContainer .unit{font-size:10px;font-weight:900}#awGlobalBnrWrapper #countDownContainer .dividerContainer .unit{visibility:hidden}@media(max-width:979px){#awGlobalBnrWrapper #countDownContainer{padding-bottom:3px;left:24px;bottom:23px;padding-bottom:3px}#awGlobalBnrWrapper #countDownContainer .value{font-size:30px}#awGlobalBnrWrapper #countDownContainer .unit{font-size:13px}}@media(max-width:767px){#awGlobalBnrWrapper #countDownContainer{width:177px;height:45px;left:0;right:0;margin:auto;top:45px;bottom:auto}#awGlobalBnrWrapper #countDownContainer .value{font-size:20px}#awGlobalBnrWrapper #countDownContainer .unit{font-size:8px}}`;

    // ---------------------------------------------------------------------
    // Please dont try to change the below code if you  are not a developer
    // ---------------------------------------------------------------------
    const additionalScript = () => {
        // ------------------------
        // Set the date we're counting down to
        var countDownDate = new Date('October 22, 2022 00:00:00').getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            // Output the result in an element with id='time'
            // document.getElementById('time').innerHTML = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds;
            document.getElementById('bannerDayValue').innerHTML = days;
            document.getElementById('bannerHourValue').innerHTML = hours;
            document.getElementById('bannerMinValue').innerHTML = minutes;
            document.getElementById('bannerSecValue').innerHTML = seconds;


            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById('countDownContainer').innerHTML = 'EXPIRED';
            }
        }, 1000);
        // ------------------------
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
        const addClickTag = () => {
            const ClickTag = document.getElementById(clickTagOnElementID);
            const formatedClickTagURL = awServerPath ? clickTagURL : clickTagURL.replaceAll('%%CLICK_URL_UNESC%%', '');
            ClickTag.onclick = () => {
                window.open(formatedClickTagURL, '_blank');
            };
        };

        try {
            // format minified HTML with serverPath
            const htmlWithServerPath = await htmlWithoutServerPath
                .replaceAll('src="', `src="${awServerPath}`)
                .replaceAll(`src='`, `src='${awServerPath}`)
                .replaceAll(`poster="`, `poster="${awServerPath}`)
                .replaceAll(`poster='`, `poster='${awServerPath}`);
            // format minified CSS with serverPath
            const cssWithServerPath = await cssWithoutServerPath
                .replaceAll(`url(`, `url(${awServerPath}`)
                .replaceAll(`url('`, `url('${awServerPath}`)
                .replaceAll(`url("`, `url("${awServerPath}`)
                .replaceAll(`@import url(${awServerPath}`, `@import url(`)
                .replaceAll(`@import url("${awServerPath}`, `@import url("`)
                .replaceAll(`@import url('${awServerPath}`, `@import url('`);
            // inject CSS
            const callInjectCss = await injectCss(cssWithServerPath)
            // preparing loader images list
            const collectImageFromCss = await cssWithoutServerPath.match(/[\w-]+\.(jpg|png|jpeg|gif)/g);
            const collectImageFromHtml = await htmlWithoutServerPath.match(/[\w-]+\.(jpg|png|jpeg|gif)/g);
            const allImageArrayWithoutServerPath = await ((collectImageFromCss, collectImageFromHtml) => { return [...new Set(collectImageFromHtml ? collectImageFromCss?.concat(collectImageFromHtml) : collectImageFromCss)] })(collectImageFromCss, collectImageFromHtml);
            const awBannerImageArrayWithPath = await allImageArrayWithoutServerPath?.map(image => awServerPath + image);
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

            await (() => {
                // set local html title name not AW site
                !document.title && (document.title = unitLineItemName.replaceAll('_', ' '));
                // check the screen to load the banner again
                window.addEventListener('resize', function (event) {
                    var newWidth = window.innerWidth;
                    var newHeight = window.innerHeight;
                    if (newWidth === 1024 || newWidth === 768 || newWidth === 414 || newWidth === 375 || newWidth === 360 || newWidth === 320) {
                        // return location.reload();
                    }
                });
                // additional code add below if needed
                // -----------------------------------

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