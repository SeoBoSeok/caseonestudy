/**
 * @name Screenshots parallel pages in batches
 *
 * @desc parallel screenshotting of an array of Websites with small example
 */

const puppeteer = require("puppeteer");

const { userAgentPC, userAgentMobile } = require("./userAgent");

const parallel = 1;
const url = "https://blog.naver.com/kamcsince1988/221681755203";
/** url */
/* "https://blog.naver.com/kamcsince1988/221681755574" , [공지]  청주고려동물메디컬센터 병원오시는길
/* "https://blog.naver.com/kamcsince1988/221693166235" , 의료진 소개
/* "https://blog.naver.com/kamcsince1988/221681755203" , 이용 안내
/** */

const blogUrl = [
  "https://blog.naver.com/PostView.nhn?blogId=kamcsince1988&logNo=221681757821&categoryNo=6&parentCategoryNo=-1&viewDate=&currentPage=&postListTopCurrentPage=&isAfterWrite=true",
  "https://blog.naver.com/PostView.nhn?blogId=kamcsince1988&logNo=221681755203&categoryNo=6&parentCategoryNo=-1&viewDate=&currentPage=&postListTopCurrentPage=&isAfterWrite=true",
  "https://blog.naver.com/PostView.nhn?blogId=kamcsince1988&logNo=221681755574&categoryNo=10&parentCategoryNo=-1&viewDate=&currentPage=&postListTopCurrentPage=&isAfterWrite=true",
  "https://blog.naver.com/PostView.nhn?blogId=kamcsince1988&logNo=221693166235&categoryNo=7&parentCategoryNo=-1&viewDate=&currentPage=&postListTopCurrentPage=&isAfterWrite=true"
];

const colleges = userAgentMobile;

const screenshotColleges = async (colleges, parallel) => {
  const parallelBatches = Math.ceil(colleges.length / parallel);

  console.log(
    "\nI have gotten the task of taking screenshots of " +
      colleges.length +
      " Wikipedia articles on colleges in Cologne and will take " +
      parallel +
      " of them in paralell."
  );

  console.log(" This will result in " + parallelBatches + " batches.");

  // Split up the Array of colleges
  let k = 0;
  for (let i = 0; i < colleges.length; i += parallel) {
    k++;
    console.log("\nBatch " + k + " of " + parallelBatches);
    // Launch and Setup Chromium
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null
    });
    // Fun with puppeteer
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    page.setJavaScriptEnabled(false);

    const promises = [];
    for (let j = 0; j < parallel; j++) {
      let elem = i + j;
      // only proceed if there is an element
      if (colleges[elem] != undefined) {
        // Promise to take Screenshots
        // promises push
        console.log("🖖 I promise to screenshot: " + colleges[elem].name);
        promises.push(
          browser.newPage().then(async page => {
            await page.setViewport({ width: 1280, height: 800 });
            await page.setUserAgent(colleges[elem].ua);
            try {
              // Only create screenshot if page.goto get's no error
              await page.goto("https://www.naver.com", {
                waitUntil: "networkidle2"
              });
              await page.type("#query", "청주고려동물병원 +kamcsince1988");
              await page.$eval("form", form => {
                form.submit();
              });
              if (colleges == userAgentPC) {
                await page.waitForSelector("#_nx_footer_realtime");
                await page.click("#power_link_body .lst1 .inner a");
                let pages = await browser.pages();
                const aHandle = await pages[2].evaluateHandle(
                  () => document.body
                );
                await pages[2].waitFor(1500);
                await page
                  .waitFor(1000)
                  .then(
                    console.log(
                      "🤞 I have kept my promise to screenshot " +
                        colleges[elem].name
                    )
                  );
              } else {
                await page.waitForSelector(".sp_page");
                // await page.click("section.sp_power ul li:first-child a");
                await page.click("#web_4 a.api_txt_lines");
                await page.waitForNavigation({ waitUntil: "networkidle2" });
                await page.click("#step05");
                // let pages = await browser.pages();
                // const aHandle = await pages[2].evaluateHandle(
                //   () => document.body
                // );
                // await pages[2].waitFor(1500);
                await page
                  .waitFor(10000)
                  .then(
                    console.log(
                      "🤞 I have kept my promise to screenshot " +
                        colleges[elem].name
                    )
                  );
              }
            } catch (err) {
              console.log(
                "❌ Sorry! I couldn't keep my promise to screenshot " +
                  colleges[elem].name
              );
            }
          })
        );
      }
    }

    // await promise all and close browser
    await Promise.all(promises);
    await browser.close();

    console.log("\nI finished this batch. I'm ready for the next batch");
  }
};

screenshotColleges(colleges, parallel);
