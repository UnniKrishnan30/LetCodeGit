const Common = require("./common");

class workspacepage4 extends Common {
    constructor() {
        super();

        this.$windowScroll = () => $('//p[contains(text(),"Window")]');
        this.$windowHeader = () => $('//h1[contains(text(),"Windows")]');
        this.$multipleWindow =() => $('#multi');
        this.$alertPageHeader = () => $('//h1[contains(text(),"Alert")]');
    }

    async selectWindow(Label) {
        await this.$windowScroll().scrollIntoView();
        await this.$windowScroll().waitForDisplayed(10000);
        await this.$selectInput(Label).click();
        await this.$windowHeader().waitForDisplayed(5000);
        await browser.pause(1000);
    }

    async windowNew() {
        await this.$windowHeader().waitForDisplayed(5000);
        await this.$multipleWindow().click();
        // browser.switchWindow('https://letcode.in/dropdowns');
        browser.switchWindow('https://letcode.in/alert');   
        await browser.pause(5000);
        await this.$alertPageHeader().waitForDisplayed(5000);
        browser.closeWindow();
        browser.switchWindow('https://letcode.in/windows');
        await browser.pause(2000);
        browser.switchWindow('https://letcode.in/dropdowns');
        await browser.pause(2000);
        browser.closeWindow();
        browser.switchWindow('https://letcode.in/windows');
        await this.$windowHeader().waitForDisplayed(5000);
        await browser.pause(5000);
    }
}

module.exports = {
    workSpacePage4 : new workspacepage4()
}