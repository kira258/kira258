// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('ff', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('ff', async function() {
    await driver.get("https://candidature.1337.ma/piscines")
    await driver.manage().window().setRect({ width: 1920, height: 1051 })
    await driver.findElement(By.linkText("Sign Out")).click()
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("omarhibot@gmail.com")
    await driver.findElement(By.css(".row:nth-child(2)")).click()
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.name("commit")).click()
  })
})
