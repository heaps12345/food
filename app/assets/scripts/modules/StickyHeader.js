import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.Header = $(".site-header");
    this.SectionWaypoints = $(".waypoint");
    this.HeaderLinks = $(".primary-nav a");
    this.buttonLinks = $(".btn__large-hero");
    this.HeaderWaypointTrigger = $(".features");
    this.CreateWaypoint();
    this.addSmoothScrolling();
    this.CreateHeaderWaypoint();


  }

  addSmoothScrolling() {
    this.HeaderLinks.smoothScroll();
    this.buttonLinks.smoothScroll();
  }


  CreateHeaderWaypoint(){
    var that = this;
    new Waypoint({
        element: this.HeaderWaypointTrigger[0],
        handler: function(direction) {
          if (direction === "down") {
			that.Header.addClass('site-header__sticky');
		} else {
			that.Header.removeClass('site-header__sticky');
		}
  },
    offset:50
  });


}


  CreateWaypoint(){
    var that = this;
    this.SectionWaypoints.each(function(){
      var currentItem = this;
      new Waypoint({
          element: currentItem,
          handler: function() {
            var matchingHeaderLinks = currentItem.getAttribute("data-matching-link");
            that.HeaderLinks.removeClass("is-current-link");
            $(matchingHeaderLinks).addClass("is-current-link");


        }
      })
    });

  }

}

export default StickyHeader;
