import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import MobileMenu from './modules/MobileMenu';
import $ from 'jquery';

var stickyHeader = new StickyHeader();
var revealOnScroll = new RevealOnScroll($(".features__item"), "500", "reveal-item--is-visible");
var revealOnScroll = new RevealOnScroll($(".cities__item"), "300", "reveal-item--is-visible");
var mobileMenu = new MobileMenu();
