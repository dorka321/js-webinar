/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 * 
 * add:
 * page children
 * child of children
 */
const Element = require("./Element");
const Layout = require("./Layout");
const Elements = require("./Elements");

class HomePage extends Layout{
    constructor(){
        super('Home', 'http://epam.com', {css: 'body'});
        this.addChildren(new Element('logo', {css: '.logo-print'}));
        this.addChildren(new Element('menu', {name: 'What We Do'}));
        this.addChildren(new Element('accept_button', {css: '.button.cookie-discalimer__button'}));
        this.addChildren(new Element('learn_more_button', {css: '.span.button__content.button__content--desktop'}));
        this.addChildren(new Element('bg_video', {class: 'div.background-video.parbase.section'}));

        this.addChildren(new Elements('nav_list', {class: 'top-navigation__row'}));

        //#main > div.content-container.parsys > div.background-video.parbase.section > div
        
        //#main > div.content-container.parsys > div:nth-child(2) > section > div > div > div > div.owl-stage-outer > div > div:nth-child(1) > div > div > div > div > div > div > div > div > div > div.button > div > a > span.button__content.button__content--desktop
        
    }
}
module.exports = HomePage;