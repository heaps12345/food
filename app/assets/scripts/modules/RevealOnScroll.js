import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elements, offset, classes) {
    this.itemsToReveal = elements;
    this.offset = offset;
    this.classes = classes;
    this.hideInitially();
    this.createWaypoint();
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoint(){
    var that = this;
    this.itemsToReveal.each(function(){
    var currentItem = this;
      new Waypoint({
          element: currentItem,
          handler: function() {
            $(currentItem).addClass(that.classes);
          },
          offset: that.offset
        });
      });
    }
  }

export default RevealOnScroll;
