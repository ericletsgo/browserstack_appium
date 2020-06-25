const wdio = require("webdriverio");
const assert = require("assert");

// const opts = {
//   path: '/wd/hub',
//   port: 4723,
//   capabilities: {
//     platformName: "Android",
//     platformVersion: "8",
//     deviceName: "Android Emulator",
//     app: "/path/to/the/downloaded/ApiDemos.apk",
//     appPackage: "io.appium.android.apis",
//     appActivity: ".view.TextFields",
//     automationName: "UiAutomator2"
//   }
// };

describe('Search Wikipedia Functionality', function () {
  it('can find search results', function () {
    var searchSelector = `~Search Wikipedia`;
    browser.waitForVisible(searchSelector, 30000);
    browser
      .element(searchSelector)
      .click();
 
    var insertTextSelector = 'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")';
    browser.waitForVisible(insertTextSelector);
    browser
      .element(insertTextSelector)
      .keys('BrowserStack')
      .pause(5000);
 
    var allProductsName = browser.elements(`android.widget.TextView`).value;
    assert(allProductsName.length > 0);
  });
});
