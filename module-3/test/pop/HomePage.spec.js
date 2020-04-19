const ElementFinder = require('../mock/ElementFinder');
const Browser = require('../mock/Browser');
const HomePage = require('../../pop/HomePage');
const expect = require('chai').expect;

describe('HomePage Class', () => {
    beforeEach(() => {
        global.element = ElementFinder.element;
        global.browser = new Browser();
    });

    afterEach(() => {
        delete global.element;
        delete global.browser;
    });

    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });
    it('should have stored locator', () => {
        const element = new HomePage();

        expect(element.locator).not.to.be.undefined;
        expect(element.locator.css).to.equal('body');
    });
    it('should have stored URL', () => {
        const page = new HomePage();

        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('http://epam.com');
    });
    describe('Load', () => {
        it('should have method to load the page by URL', () => {
            const page = new HomePage();

            expect(page.load).not.to.be.undefined;
            expect(page.load()).to.equal('http://epam.com');
        });
    });
    describe('Children', () => {
        it('should have element for logo', () => {
            const page = new HomePage();
            const logo = page.get('logo');

            expect(logo).not.to.be.undefined;
            expect(logo).to.be.instanceof(ElementFinder);
            expect(logo._locator.css).to.equal('.logo-print');   
        })
        it('should have element for menuitem', () => {
            const page = new HomePage();
            const menu = page.get('menu');

            expect(menu).not.to.be.undefined;
            expect(menu).to.be.instanceof(ElementFinder);
            expect(menu._locator.name).to.equal('What We Do');   
        })
        it('should have button for accept cookies', () => {
            const page = new HomePage();
            const accept_button = page.get('accept_button');

            expect(accept_button).not.to.be.undefined;
            expect(accept_button).to.be.instanceof(ElementFinder);
            expect(accept_button._locator.css).to.equal('.button.cookie-discalimer__button');   
        })
        it('should have button for learn more information', () => {
            const page = new HomePage();
            const learn_more_button = page.get('learn_more_button');

            expect(learn_more_button).not.to.be.undefined;
            expect(learn_more_button).to.be.instanceof(ElementFinder);
            expect(learn_more_button._locator.css).to.equal('.span.button__content.button__content--desktop');   
        })
        it('should have element for background video', () => {
            const page = new HomePage();
            const bg_video = page.get('bg_video');

            expect(bg_video).not.to.be.undefined;
            expect(bg_video).to.be.instanceof(ElementFinder);
            expect(bg_video._locator.class).to.equal('div.background-video.parbase.section');   
        })
        it('should have element for navigation list', () => {
            const page = new HomePage();
            console.log(page.children);
            const nav_list = page.get('nav_list');

            expect(nav_list).not.to.be.undefined;
            expect(nav_list).to.be.instanceof(ElementFinder);
            expect(nav_list._locator.class).to.equal('top-navigation__row');   
        })
    })
});