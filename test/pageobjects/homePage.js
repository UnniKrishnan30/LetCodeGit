const Common = require("./common");

class Hompage extends Common {
    constructor(){
        super();

        this.$homeHeader = () => $('//h1[contains(text(),"LetCode with Koushik")]');
        this.$homeHeaderSub = () => $('//p[@class="subtitle is-4 has-margin-top-20 is-family-primary"]');
        this.$signupFillButton = () => $('//button[contains(text(),"SIGN UP")]');

        this.$fullName = () => $('#name');
        this.$emailId = () => $('#email');
        this.$enterPassword = () => $('#pass');
        this.$agreeCheckBox = () => $('#agree');
        this.$signOutButton = () => $('//a[contains(text(),"Sign out")]');
        this.$registerMessage = () => $('//div[@style="opacity: 1;"]');
        
    }

    // async gettingText() {
    //     let str = await this.$homeHeaderSub().getText();
    //     // console.log(str);
    // }

    async signUp() {
        await this.$signUpButton().waitForDisplayed(5000);
        await this.$homeHeader().waitForDisplayed(5000);
        await this.$signUpButton().click();
        await this.$signupFillButton().waitForDisplayed(5000);
        
    }

    async signUpFillDetails(email) {
        await this.$fullName().setValue("Ram Dev");
        // await this.$emailId().setValue(email + await this.randomEmail() + '@gmail.com');
        await this.$emailId().setValue(`${email}${await this.randomEmail()}@gmail.com`);
        await this.$enterPassword().setValue("7654321");
        await this.$agreeCheckBox().click();
        await this.$signupFillButton().click();
        await this.$homeHeader().waitForDisplayed(5000,true);
        await this.$registerMessage().waitForDisplayed(10000, false, 'Error');
        await this.$signOutButton().waitForDisplayed(10000);
        await browser.pause(5000);
        await this.$workSpaceButton().click();
        await browser.pause(5000);
        
    }

}

module.exports = {
    homePage: new Hompage()
}