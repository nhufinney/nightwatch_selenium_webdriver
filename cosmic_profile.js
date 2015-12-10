module.exports = {
    'Tarot.com- Cosmic Profile' : function (browser) {
        browser
        .url('t4dev51.tarot.com/cosmic-profile')
        .waitForElementVisible('body', 1000)
        //.setValue('input[type=text]', 'nightwatch')
        //.waitForElementVisible('button[name=btnG]', 1000)
        //.click('button[name=btnG]')
        //.pause(1000)
        //.assert.containsText('#main', 'Night Watch')
        .compareScreenshot('cosmic-profile.png')
        .end();
    }
};