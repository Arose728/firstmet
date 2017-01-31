/*
Firstmet interview
*/

module.exports = {
  'open Firstmet.com' : function (client) {
    
    client
      .url('https://firstmet.com/')
      //.maximizeWindow()
      .url(function(result){
        console.log(result);
      })
      .waitForElementPresent('body', 2000)
      .saveScreenshot('./screenshots/Firstmet1.png')
      .useXpath()
      .click('//*[@id="aui"]/div[4]/header/div[2]/div/a')
      .useCss()
      .saveScreenshot('./screenshots/firstmet2.png')
      .setValue('input[name=email]', ['arose728@gmail.com'])
      .setValue('input[name=password]', ['password'])
      .useXpath()
      .click('//*[@id="aui"]/div[4]/header/div[2]/div/form/fieldset[2]/input[4]')
      .end()
    }

};
