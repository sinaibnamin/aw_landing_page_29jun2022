// get today date
let today = new Date();
let usaToDateMonth = today.toLocaleString('en-US', { timeZone: 'America/New_York', month: '2-digit' });
let usaCurrentDate = today.toLocaleString('en-US', { timeZone: 'America/New_York', day: '2-digit' });
let usaCurrentTime = today.toLocaleString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' });
// get tomorrow date
let currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
let usaTomorrowDate = currentDate.toLocaleString('en-US', { timeZone: 'America/New_York', day: '2-digit' });
let usaTomorrowMonth = currentDate.toLocaleString('en-US', { timeZone: 'America/New_York', month: '2-digit' });

let currentDateFormat = parseInt(Number(usaToDateMonth), 10) + '/' + usaCurrentDate;
let tomorrowDateFormat = parseInt(Number(usaTomorrowMonth), 10) + '/' + usaTomorrowDate;

const getCurrentDateElementList = document.querySelectorAll('.currentDateMonth');
const getTomorrowDateElementList = document.querySelectorAll('.tomorrowDateMonth');

const fetchAPIANDRender = async () => {
    // current weather API
    let apiKey = '103cf8ebc1de4830a8b773a59680a59d'
    let cityCode = `349727`;
    let apiUrl = `https://api.accuweather.com/currentconditions/v1/${cityCode}.json?apikey=${apiKey}&details=true`
    let renderInClassName = '.cur-con-weather-card'

    // set fetch api data in template
    const dataInTemplate = ((data, renderInClass) => {
        let selectedData = data[0]
        let template = `<div class="cur-con-weather-card__body">
							<div class="cur-con-weather-card__panel">
                            <h2 class="cur-con-weather-card__title">
                                Current Weather
                            </h2>
                            <p class="cur-con-weather-card__subtitle">
                                ${usaCurrentTime}
                            </p>
                            <div class="forecast-container">
                                <div class="weather-icon"  style="background: url(https://www.accuweather.com/images/weathericons/${(selectedData?.WeatherIcon.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }))}.svg); width:88px; height:88px; background-size:contain; margin-right: 12px;" ></div>
                                <div class="temp-container">
                                    <div class="temp">${selectedData?.Temperature.Imperial.Value}&#xB0;<span class="after-temp">F</span></div>
                                    <div class="real-feel">
                                        RealFeel®
                                        ${selectedData?.RealFeelTemperature.Imperial.Value}°
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cur-con-weather-card__panel details-container">
                            <div class="spaced-content detail">
                                <span class="label">RealFeel Shade™</span>
                                <span class="value">${selectedData?.RealFeelTemperatureShade.Imperial.Value}°</span>
                            </div>
                            <div class="spaced-content detail">
                                <span class="label">Air Quality</span>
                                <span class="value" style="color: #00E39B">Excellent</span>
                            </div>
                            <div class="spaced-content detail">
                                <span class="label">Wind</span>
                                <span class="value">${selectedData?.Wind.Direction.English} ${selectedData?.Wind.Speed.Imperial.UnitType} mph</span>
                            </div>
                            <div class="spaced-content detail">
                                <span class="label">Wind Gusts</span>
                                <span class="value">${selectedData?.WindGust.Speed.Imperial.UnitType} mph</span>
                            </div>
                        </div>
                    </div>
                    <div class="spaced-content">
							<span class="phrase">${selectedData.WeatherText}</span>
							<span class="cur-con-weather-card__cta">
								<span class="text">More Details</span>
								<svg class="icon-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
									<defs>
										<path id="a" d="m8.495.505 5 5v.99l-5 5-.99-.99 3.805-3.806L0 6.7V5.3l11.31-.001-3.805-3.804.99-.99z"></path>
									</defs>
									<use fill="#000" fill-rule="nonzero" xlink:href="#a" transform="translate(2 3)"></use>
								</svg>
							</span>
						</div>
                    `


        if (selectedData) {
            render(template, document.querySelector(renderInClass));
            render(`
			<h1 class="header-loc">New York, NY</h1>
			<span class="header-temp">
				${selectedData?.Temperature.Imperial.Value}&#xB0;
				<span class="unit">F</span>
			</span>
			<img class="header-weather-icon" src="https://www.accuweather.com/images/weathericons/${selectedData?.WeatherIcon}.svg" />`,
                document.querySelector('a.header-city-link'));
        }
    });
    // render template in selected node
    let render = function (template, givenNode) {
        givenNode && (givenNode.innerHTML = template)
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

const websiteHead = document.head || document.getElementsByTagName('head')[0];
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

window.onload = async () => {
    // fetch api data and set current wetaher card data
    fetchAPIANDRender();

    // set current date
    getCurrentDateElementList.forEach(item => {
        item.innerHTML = currentDateFormat
    })

    // set tomorrow date
    getTomorrowDateElementList.forEach(item => {
        item.innerHTML = tomorrowDateFormat
    })
}

var mediaQueryList = window.matchMedia('(max-width: 420px)');
const injectmobileCss = () => {
    if (mediaQueryList.matches) {
        // console.log('yes')
        let cssLink = document.createElement("link");
        cssLink.id = 'mobileCss'
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://www.awxcdn.com/adc-assets/bundles/city.three-day-mobile-lite.e09ed23ddc4839c8f23b.css';
        websiteHead.appendChild(cssLink)
    } else {
        let injectedCssLink = document.getElementById('mobileCss')
        // console.log(injectedCssLink)
        injectedCssLink && injectedCssLink.remove()
    }
}

mediaQueryList.addListener(injectmobileCss);

injectmobileCss();




// sn js

runfunctionforsmalldevice()

function runfunctionforsmalldevice(){
  // check is it on iframe
    if(window.self !== window.top){
      return
    }


    if (document.documentElement.clientWidth < 1024) {

    injectDeviceAlert()

    injectmobileswitcher()

    const desktopAlertPopup = document.querySelector('#desktopAlertPopup')

    document.querySelector('#switcher-container').addEventListener('click', function(e){
      if (e.target.closest('.resize-icon.desktop')) {
        desktopAlertPopupopen()
      }

      if (e.target.closest('.resize-icon.ipad')) {
        if(e.target.classList.contains('active')){
          return
        }else {
          desktopAlertPopupopen()
        }
      }

      if (e.target.closest('.resize-icon.iphone')) {
        if(e.target.classList.contains('active')){
          return
        }else {
          desktopAlertPopupopen()
        }
      }




    })





    function injectDeviceAlert(){
      const html = `
      <div class="desktopAlertPopup desktopPopUpClose" id="desktopAlertPopup">
          <div class="mainAlert">
            <div class="">
              <div class="alertheadline">Device Alert</div>
              <p class="alertParagraph">Please use desktop browser to see all device view.</p>
            </div>
            <div class="alert-footer">
              <button class="alert-close-button desktopPopUpClose" type="button" name="button">ok</button>
            </div>
          </div>
      </div>
      `
      document.querySelector('body').insertAdjacentHTML("afterbegin", html)

    }

    document.querySelector('.desktopPopUpClose').addEventListener('click', function(){
      desktopAlertPopup.classList.remove('active')
    })



    function desktopAlertPopupClose(){
      desktopAlertPopup.classList.remove('active')
    }
    function desktopAlertPopupopen(){
      desktopAlertPopup.classList.add('active')

    }


    function injectmobileswitcher(){
      const html = `
      <div id="switcher-container">
        <ul id="switcher">
          <li class="resize animated fadeIn">
            <ul>
              <li><a href="#" class="sprite resize-icon desktop" title="Desktop"></a></li>
              <li><a href="#" class="sprite resize-icon ipad" title="iPad"></a></li>
              <li><a href="#" class="sprite resize-icon iphone" title="iPhone"></a></li>
            </ul>
          </li>
        </ul>
      </div>
      `
      document.querySelector('.template-root .nfl-header').insertAdjacentHTML("afterbegin", html)

      if (document.documentElement.clientWidth < 768) {
        document.querySelector('.resize-icon.iphone').classList.add('active')
        document.querySelector('.header-placeholder.has-alerts').style.height = '125px'

      }else {
        document.querySelector('.resize-icon.ipad').classList.add('active')
        document.querySelector('.header-placeholder.has-alerts').style.height = '145px'
      }



    }


    }



}
