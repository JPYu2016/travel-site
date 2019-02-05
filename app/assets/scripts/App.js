/*
var $ = require('jquery');

//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.Name + " now owes $0 in taxes.");
    }
}

var john = new Person("Johmn Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
jane.payTaxes();

$("h1").remove();
*/



import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery'
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
/*
var revealOnScroll = new RevealOnScroll();
*/
var revealOnScrollFeatureItems = new RevealOnScroll($(".feature-items"), "85%");
var revealOnScrollTestimonials = new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeader();