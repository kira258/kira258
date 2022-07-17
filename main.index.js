const puppeteer = require("puppeteer");
const fs = require('fs');
const URL = "https://candidature.1337.ma/ " ; 
const COOKIES_FILE = "cookies.json";
const { exec } = require('child_process');


 (async ()=> {
  async function  loadCookies(page) {
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
	const browser = await puppeteer.launch({headless: false } , {timeout: 0}   );
	const page = await browser.newPage();	
	
	const cookiesString = await fs.readFileSync('./cookies.json');
	const cookies = JSON.parse(cookiesString);
	await page.setCookie(...cookies);
    page.setDefaultNavigationTimeout(0)
	page.waitForNavigation();
 	await loadCookies(page,{timeout: 0}); 	 	
	await page.goto(URL, {  waitUntil: 'load',  timeout: 0});
	await page.goto(URL);

	const result = await page.$$eval(' .table.table-hover tr ', rows => {
		return Array.from(rows, row => {
	const columns = row.querySelectorAll('td');
		return Array.from(columns, column => column.innerText);
		});
	  });
	  console.log(result);  

	       let text = await page.evaluate (() => document.querySelector('tbody').innerText)
           console.log(text);
                text = await page.evaluate(() => window.find("spaces left or free") );
				 
 

  if (text == true){   
			exec('start vlc C:\\Users\\fiary\\Desktop\\1337\\1337checker\\alert.mp3   ', (error, stdout, stderr) => {
				if (error) {
				  console.error(`error: ${error.message}`);
				  return;
				}
				if (stderr) {
				  console.error(`stderr: ${stderr}`);
				  return;
				}
				console.log(`stdout:\n${stdout}`);
			  });
} 
while (text  == false) {
	await page.waitForTimeout(6000)
	await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
	if ( text  == true) break
}



 

/*
   await page.waitForSelector("#user_email");
	await page.$eval('#user_email', el => el.value = 'omarhibot@gmail.com');
	await page.waitForSelector("#user_password");
	await page.$eval('#user_password', el => el.value = 'Gintoki0197310.');
	await page.waitForSelector("#false");

*/

})();
	
 


