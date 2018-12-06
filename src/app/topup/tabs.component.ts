import {Component, ElementRef} from '@angular/core';
import * as $ from 'jquery/src/jquery';

@Component({
  selector: 'mt-topup-tabs',
  template: require('./tabs.html')
})
export class TabsComponent {
 CCTab : boolean;
 COTab : boolean;

  constructor( private el : ElementRef ) {
    this.CCTab = true;
    this.COTab = false;
  }

  showCCTab() {
  this.CCTab = true;
  this.COTab = false;
  return true;
  }

  showCOTab() {
    this.CCTab = false;
    this.COTab = true;
    return true;
  }

  handleKeys(event : KeyboardEvent) {

   var target = $(<any> (event.target || event.srcElement || event.currentTarget));
   if (event.key === 'ArrowLeft') {
      var switchto = $(target).parents('li').prev().children('[role="tab"]');
      event.preventDefault();
   } else if (event.key === 'ArrowRight') {
      var switchto = $(target).parents('li').next().children('[role="tab"]');
      event.preventDefault();
   }

   if ( switchto && switchto.length > 0) {
      switchto.focus();
   }
   return true;
  }

}
