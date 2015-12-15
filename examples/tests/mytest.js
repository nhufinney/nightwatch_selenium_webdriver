module.exports = {
    'My Test': function(browser) {
        browser
        .url('http://tarot.com/cosmic-profile')
        .compareScreenshot('first-time-test.png')
        .end();
    }
};