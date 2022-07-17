const puppeteer = require('puppeteer');
const fs = require('fs');
const URL = "https://candidature.1337.ma/";
const COOKIES_FILE = "cookies.json";
	
 



async function loadCookies(page) {
	const previousSession = fs.existsSync(COOKIES_FILE);
	if (previousSession) { // If file exist load the cookies
	  const bytes =  fs.readFileSync(COOKIES_FILE);
	  const cookiesString = bytes.toString();
	  console.log(cookiesString);
	  const parsedCookies = JSON.parse(cookiesString);
	  if (parsedCookies.length !== 0) {
	    for (let cookie of parsedCookies) {
	      await page.setCookie(cookie)
	    }
	    console.log('Session has been loaded in the browser')
	  }
	}
}


async function main() {
	const browser = await puppeteer.launch({ headless: false, devtools: false });
	const page = await browser.newPage();
	/*const cookiesString = await fs.readFileSync('./cookies_.json');
	const cookies = JSON.parse(cookiesString);
	await page.setCookie(...cookies);
	page.waitForNavigation();
	*/	
 	//await loadCookies(page);
	await page.goto(URL);
	
	  
	await page.waitForSelector("#user_email");
	await page.$eval('#user_email', el => el.value = 'omarhibot@gmail.com');
	await page.waitForSelector("#user_password");
	await page.$eval('#user_password', el => el.value = 'Gintoki0197310.');
	await page.waitForSelector("#false");
	  const cookies = await page.cookies();

  
	fs.writeFile("cookies.json", JSON.stringify(cookies),
	function(err) { 
	  if (err) {
	  console.log('The file could not be written.', err)
	          }
	  console.log('Session has been successfully saved')
	});
	await page.$eval('form-inputs ', elem => elem.click('input[name="commit"]'))

 
 
 
	
}

main();

/*
 browser.close()



const cookiesString = await fs.readFile('./cookies.json');
const cookies = JSON.parse(cookiesString);
await page.setCookie(...cookies);

	await page.waitForSelector("#user_email");
	await page.$eval('#user_email', el => el.value = 'omarhibot@gmail.com');
	await page.waitForSelector("#user_password");
	await page.$eval('#user_password', el => el.value = 'Gintoki0197310.');
	await page.waitForSelector("#false");
	console.log("found");
	//await page.click(".row:nth-child(2)");
	//await loadCookies(page);
	const cookies = await page.cookies();
	fs.writeFile("cookies_.json", JSON.stringify(cookies),
	 function(err) { 
	  if (err) {
	  console.log('The file could not be written.', err)
	  }
	  console.log('Session has been successfully saved')
	});

*/
