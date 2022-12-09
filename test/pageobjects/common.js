module.exports = class Common {
    constructor() {
        this.$signUpButton = () => $('//a[contains(text(),"Sign up")]');
        this.$workSpaceButton = () => $('#testing');
        this.$workSpaceHeader = () => $('//h1[contains(text()," Practice and become pro in test automation")]');
        this.$selectInput = (Label) => $(`//p[contains(text(),"${Label}")]//ancestor::div[@class="column is-3-desktop is-6-tablet"]//child::a`);

    }

    async openUrl() {
        await browser.maximizeWindow();
        await browser.url('https://letcode.in');
    }

    async randomEmail() {
        return Math.floor(Math.random() * 100005);
    }
}