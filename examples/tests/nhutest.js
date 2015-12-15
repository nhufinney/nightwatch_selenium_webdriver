module.exports = {
    'My Test': function(browser) {
        browser
        .url('http://tarot.com/cosmic-profile')
        //.pause(1000)
        //.saveElementScreenshot(".user_bar", "user-bar.jpg")
        //.compareElementScreenshot('user-bar.jpg')
        //.saveElementScreenshot("#main-footer-box", "main-footer-box.jpg")
        //.compareElementScreenshot("main-footer-box.jpg")
        .compareElementScreenshot("#main-footer-box", "main-footer-box.jpg")
        //.compareScreenshot('user-bar.png') //this function take screenshot of whole page and save in its folder
        .end();
    }
};