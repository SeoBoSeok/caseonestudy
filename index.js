const puppeteer = require("puppeteer");

// for (var i = 0; i < 10; i++) {
puppeteer.launch({ headless: false, defaultViewport: null }).then(browser => {
  return browser.newPage().then(page =>
    page
      .goto("https://naver.com", { waitUntil: "networkidle2" })
      .then(() => page.$("#query"))
      .then(search => search.click())
      .then(() => page.type("#query", "청주고려동물병원"))
      .then(() => page.$("#search_btn"))
      .then(submit => submit.click())
      .then(() => page.waitForNavigation({ waitUntil: "networkidle2" }))
      .then(() => page.$(".sp_website .section_more a"))
      .then(click => click.click())
      .then(() => page.waitForNavigation({ waitUntil: "networkidle2" }))
      .then(() => page.$(".sp_website ul li:first-child dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:nth-of-type(3) dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:nth-of-type(4) dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:nth-of-type(5) dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:first-child dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:nth-of-type(3) dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:nth-of-type(4) dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:nth-of-type(5) dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:first-child dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:nth-of-type(3) dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:nth-of-type(4) dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
      .then(() => page.$(".sp_website ul li:nth-of-type(5) dl dt a"))
      .then(click => click.click())
      .then(() => page.waitFor(3000))
      .then(async () => {
        const [tabOne, tabTwo, tabThree] = await browser.pages();
        await tabThree.setViewport({
          width: 1200,
          height: 800
        });
        //   await tabThree.waitForNavigation({ waitUntil: "networkidle2" });
        await tabThree.close();
      })
  );
  // .then(() => browser.close());
});
// }
