const {homePage} = require("../pageobjects/homePage");
const { workSpacePage } = require("../pageobjects/workSpacePage");
const { workSpacePage2 } = require("../pageobjects/workSpacePage2");
const { workSpacePage3 } = require("../pageobjects/workSpacePage3");
const { workSpacePage4 } = require("../pageobjects/workSpacePage4");

describe('e2e flow for ', () => {
    it('User should be able to load the url', async () => {
        await homePage.openUrl();
        expect(await homePage.$signUpButton().isDisplayed()).toBe(true, 'Expect Sign up button to be displayed');
        expect(await homePage.$homeHeader().isDisplayed()).toBe(true, 'Expect home page header to be displayed');
    });

    it('Getting text', async () => {
        // await homePage.gettingText();
        let str = await homePage.$homeHeaderSub().getText();
        expect(await str).toBe('Hi Anil');
    });
    
    it('User should be able to signup', async () => {
        await homePage.signUp();
         expect(await homePage.$signupFillButton().isDisplayed()).toBe(true, 'Expect Sign up button to be displayed');
    });

    it('User should be able to signup using their credentials', async () => {
        await homePage.signUpFillDetails('ram0');
        //  expect(await homePage.$homeHeader().isDisplayed()).toBe(true, 'Expect home page header to be displayed');
         expect(await homePage.$signOutButton().isDisplayed()).toBe(true, 'Expect Sign out button to be displayed');
    });

    it('User should be able to load form', async () => {
        await workSpacePage.inputEdit('Input');
         expect(await workSpacePage.$inputPageHeader().isDisplayed()).toBe(true, 'Expect workspace page header to be displayed');
    });

    it('Input page asssertion', async () => {
        await workSpacePage.formFill();
        expect(await workSpacePage2.$workSpaceHeader().isDisplayed()).toBe(true, 'Expect workspace page header to be displayed');

        //  expect(await workSpacePage.$readOnlyLable().isDisplayed()).toBe(true, 'Expect text box text to be displayed');
    });

    it('User should be able to go back and select drop-down', async () => {
        await workSpacePage2.selectDropDown('Select');
        expect(await workSpacePage2.$dropDownHeader().isDisplayed()).toBe(true, 'Expect workspace page header to be displayed');
    });

    it('User should be able to select all drop-downs ', async () => {
        await workSpacePage2.fillDropDownPage();
        // expect(await workSpacePage2.$successMesg().isDisplayed()).toBe(true, 'Expect fruit success message to be displayed');
        // expect(await workSpacePage2.$heroSuccessmsg().isDisplayed()).toBe(true, 'Expect hero success message to be displayed');
        // expect(await workSpacePage2.$codeSuccessmsg().isDisplayed()).toBe(true, 'Expect code success message to be displayed');
        expect(await workSpacePage2.$workSpaceHeader().isDisplayed()).toBe(true, 'Expect workspace page header to be displayed');
    });

    it('User should be able to load radio button', async () => {
        await workSpacePage3.selectRadio('Radio');
        expect(await workSpacePage3.$radioHeader().isDisplayed()).toBe(true, 'Expect radio page header to be displayed');

    });

    it('User should be able select all radio button', async () => {
        await workSpacePage3.radioButtonSelection('Radio');
        expect(await workSpacePage2.$workSpaceHeader().isDisplayed()).toBe(true, 'Expect workspace page header to be displayed');
    });

    it('User should be able to load window page', async () => {
        await workSpacePage4.selectWindow('Window');
        expect(await workSpacePage4.$windowHeader().isDisplayed()).toBe(true, 'Expect window page header to be displayed');

    });

    it('User should be able to load alert page', async () => {
        await workSpacePage4.windowNew();
        // expect(await workSpacePage4.$alertPageHeader().isDisplayed()).toBe(true, 'Expect alert page header to be displayed');
        expect(await workSpacePage4.$windowHeader().isDisplayed()).toBe(true, 'Expect window page header to be displayed');


    });
});