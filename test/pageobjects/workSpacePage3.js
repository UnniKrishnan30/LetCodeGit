const Common = require("./common");

class worspacepage3 extends Common{
    constructor() {
        super();

        this.$radioHeader = () => $('//h1[contains(text()," Radio & Checkbox")]');
        this.$toggleScroll = () => $('//p[contains(text(),"Radio")]');
        this.$radioBtn1 = ()  => $('#no');
        this.$radioBtn2 = () => $('#one');
        this.$radioBtn3 = () => $('#nobug');
        this.$radioBtn4 = () => $('#foo');
        this.$radioBtn5 = () => $('#going');
        this.$scrollOption = () => $('//label[contains(text(),"Find which one")]')
        this.$checkBox1 = () => $('(//input[@type="checkbox"])[2]');
    }

    async selectRadio(Label) {
        await this.$toggleScroll().scrollIntoView({block: 'center'});
        await this.$toggleScroll().waitForDisplayed(10000);
        await this.$selectInput(Label).click();
        await browser.pause(2000);
    }

    async radioButtonSelection() {
        await this.$radioBtn1().click();
        await this.$radioBtn2().click();
        await this.$radioBtn3().click();
        await this.$radioBtn4().click();
        await this.$scrollOption().scrollIntoView();
        await this.$radioBtn5().click();
        await this.$workSpaceButton().scrollIntoView();
        await this.$workSpaceButton().click();
        await browser.pause(5000);
    }
}

module.exports = {
    workSpacePage3 : new worspacepage3()
}