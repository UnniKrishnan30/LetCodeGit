const Common = require("./common");

class workspacepage2 extends Common {
    constructor() {
        super();

        this.$dropDownHeader = () => $('//h1[contains(text(),"Dropdown")]');
        this.$fruitDropDown = () => $('#fruits');
        this.$successMesg = () => $('//p[contains(text(),"You have selected Pine Apple")]');
        this.$superHero = () => $('#superheros');
        this.$heroSuccessmsg = () => $('//p[contains(text(),"You have selected Ant-Man")]');
        this.$codeLanguage = () => $('#lang');
        this.$codeSuccessmsg = () => $('//p[contains(text(),"You have selected Python")]');
        this.$selectCountry = () => $('#country');

    }

    async selectDropDown(Label) {
        await this.$workSpaceHeader().waitForDisplayed(5000);
        await this.$selectInput(Label).click();

    }

    async fillDropDownPage() {
        await this.$fruitDropDown().selectByVisibleText('Pine Apple');
        await this.$successMesg().waitForDisplayed(5000);
        await this.$superHero().selectByVisibleText('Ant-Man');
        await this.$superHero().waitForDisplayed(5000);
        // await this.$heroSuccessmsg().scrollIntoView();
        await this.$heroSuccessmsg().waitForDisplayed(5000);
        await this.$codeLanguage().selectByVisibleText('Python');
        // await this.$codeLanguage().scrollIntoView();
        await this.$codeSuccessmsg().waitForDisplayed(5000);
        await this.$selectCountry().selectByVisibleText('India');
        await this.$workSpaceButton().click();
        // await browser.pause(5000);
    }
}

module.exports = {
    workSpacePage2: new workspacepage2()
}