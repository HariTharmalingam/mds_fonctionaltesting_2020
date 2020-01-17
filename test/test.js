module.exports = {
  'Open Website Uber': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.title('Uber – Augmentez vos revenus en conduisant ou commandez une course dès maintenant')
      .assert.elementPresent('header')
  },

  'Check block login in the header wrapper': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#\\/sign-in\\/')
      .assert.elementPresent('#\\/signup\\/')
  },

  'Check login block in two sections': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#\\/sign-in\\/')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useXpath()
      .assert.elementPresent('//a[@data-tracking-name="cta-login-ride"]')
      .assert.elementPresent('//a[@data-tracking-name="cta-login-drive"]')
      .useCss()
  },

  'Check login chauffeur section': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#\\/sign-in\\/')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useXpath()
      .click('//a[@data-tracking-name="cta-login-drive"]')
      .useCss()
  },

  'Check login passenger section': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#\\/sign-in\\/')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useXpath()
      .click('//a[@data-tracking-name="cta-login-ride"]')
      .useCss()
  },

  'Check Registration block in two sections': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#\\/signup\\/')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useXpath()
      .assert.elementPresent('//a[@aria-label="Devenez chauffeur"]')
      .assert.elementPresent('//a[@aria-label="Commandez une course"]')
      .useCss()
  },

  'Check Registration block with Devenir Professional section': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#\\/signup\\/')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useXpath()
      .click('//a[@aria-label="Devenez chauffeur"]')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useCss()
  },

  'Check Registration block with Devenir Professional section': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#\\/signup\\/')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useXpath()
      .click('//a[@aria-label="Commandez une course"]')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useCss()
  },

  'Registration with Commander une course section shouldn\'t pass': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#\\/signup\\/')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useXpath()
      .click('//a[@aria-label="Commandez une course"]')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('//*[@id="answerForm"]/button')
      .useCss()
  },
  'Registration should pass': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#rbtCivility_1')
      .click('#rbtCivility_1')
      .assert.elementPresent('#txtLastName')
      .setValue('#txtLastName',"testname")
      .assert.elementPresent('#txtFirstName')
      .setValue('#txtFirstName',"testfirstname")
      .assert.elementPresent('#txtMail')
      .setValue('#txtMail',conf.venteprivee_login)
      .assert.elementPresent('#txtPassword')
      .setValue('#txtPassword',conf.venteprivee_pwd)
      .assert.elementPresent('#ckbInvitMailPartner')
      .click('#ckbInvitMailPartner')
      .click("#registerBt")
      .pause(10000)
      .assert.urlEquals("https://secure.fr.vente-privee.com/ns/fr-fr/home/default/classic")
      .assert.elementPresent('#basketBtn')

    browser.end();
  }
}


