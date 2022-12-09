const Common = require("./common");
const { homePage } = require("../pageobjects/homePage");

class Wrkspacepage extends Common {
    constructor() {
        super();
        this.$inputPageHeader = () => $('//h1[contains(text(),"Input")]');

        this.$firstAndLastName = () => $('#fullName');
        this.$appendText = () => $('#join');
        this.$insideTextBox = () => $('#getMe');
        this.$textBox = () => $('#clearMe');
        this.$readOnlyLable = () => $('//label[contains(text(),"Confirm text is readonly")]');
        this.$dontWrite = () => $('//input[@id="dontwrite"]');
    }

    async inputEdit(Label) {
        await this.$selectInput(Label).click();
        await this.$inputPageHeader().waitForDisplayed(5000);
    }
     
    async formFill() {
        await this.$firstAndLastName().setValue("Ram Dev");
        await this.$appendText().setValue("I am glad to do automation!!");
        await this.$insideTextBox().setValue("Hai all!!");
        await this.$textBox().setValue("Cleared successfully");
        await this.$textBox().scrollIntoView();
        // await browser.pause(3000);
        await this.$readOnlyLable().waitForDisplayed(5000);
        await this.$workSpaceButton().click();
        // await browser.pause(3000);
        
    }
}

module.exports = {
    workSpacePage: new Wrkspacepage()
}