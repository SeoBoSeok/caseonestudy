/**
 * @name Screenshots parallel pages in batches
 *
 * @desc parallel screenshotting of an array of Websites with small example
 */

const puppeteer = require("puppeteer");
const url =
  "https://blog.naver.com/PostList.nhn?blogId=kamcsince1988&categoryNo=0&from=postList";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  //   await page.setUserAgent(
  //     "Mozilla/5.0 (Linux; U; Android 4.1.2; de-de; GT-I8190 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
  //   );
  //   await page.setUserAgent(
  //     "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1"
  //   );
  await page.goto(url, { waitUntil: "networkidle2" });
  //   await page.type("#query", "청주고려동물병원");
  //   await page.$eval("form", (form) => {
  //     form.submit();
  //   });
  await page.waitForSelector("#toplistSpanBlind");
  await page.click("#toplistSpanBlind").then(async () => {
    let data = await page.$eval(
      "#listTopForm > table > tbody > tr:nth-child(1) > td.title > div > span > a",
      (element) => {
        console.log(element.value);
        return element;
      }
    );
    console.log("data", data);
    // let evalData = await page.evaluate((element) => {
    //   console.log(element);
    //   return element;
    // }, data);
    // console.log(evalData);
  });
})();
