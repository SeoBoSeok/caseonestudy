const puppeteer = require("puppeteer");

for (var i = 0; i < 10; i++) {
  (async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent(
      "Mozilla/5.0 (Linux; U; Android 4.1.2; de-de; GT-I8190 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
    );
    //   await page.setUserAgent(
    //     "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1"
    //   );
    await page.goto("https://blog.naver.com/ryooja/221432538003", {
      waitUntil: "networkidle2",
    });
    // await page.type("#query", "청주고려동물병원");
    // await page.$eval("form", form => {
    //   form.submit();
    // });
    await waitFor(2000);
    // await page.waitForSelector(".sp_power");
    // await page.click(
    //   "._svp_list .lst_total li:first-child .total_wrap a.api_txt_lines"
    // );
    // await page.waitForSelector(".api_txt_lines");
    await page.close();
    //   await page.waitForSelector(".sp_website ul li:nth-of-type(3) dl dt a");
    //   await page.waitForNavigation({ waitUntil: "networkidle2" });
    // await page.waitForSelector(".next");
    // await page.click(".sp_website ul li:nth-of-type(6) dl dt a");
    //   await page.click(".sp_website ul li:nth-of-type(3) dl dt a");
    //   await page.waitFor(3000);
    // const [tabOne, tabTwo, tabThree] = await browser.pages();
    //   await tabThree.waitForSelector("#idMenuDiv");
    //   await tabThree.evaluate(async () => {
    //     window.scrollBy(0, window.innerHeight);
    //     // await window.scrollBy(0, window.innerHeight);
    //     // await window.scrollBy(0, window.innerHeight);
    //     // for (var i = 0; i < 20; i++) {
    //     //   window.scrollBy(0, window.innerHeight);
    //     // }
    //   });
    //   await tabThree.evaluate(async () => {
    //     await window.scrollTo(0, 3000);
    //   });
    //   await autoScroll(tabThree);
    //   await page.waitFor(3000);
    //   await tabThree.close();
    //   await page.goto("https://www.vetgate.co.kr");
    //   await autoScroll(page);
    //   await page.waitFor(3000);
    //   await page.target("#step05");
    // await page.waitFor(1000);
    // await page.click(".sp_website ul li:nth-of-type(6) dl dt a");
    // await page.waitFor(1000);
    // await page.click(".sp_website ul li:nth-of-type(6) dl dt a");
    // await page.waitFor(1000);
    // await page.click(".sp_website ul li:nth-of-type(6) dl dt a");
    // await page.waitFor(1000);
    await browser.close();
  })();
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
