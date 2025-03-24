import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Initialize Owl Carousel after the view is initialized
    const owl = $(".owl-carousel").owlCarousel({
      items: 1, // Show only one item at a time
      loop: true, // Infinite loop for carousel
      autoplay: true, // Enable automatic slide change
      autoplayTimeout: 3000, // Time between slides (3000 ms = 3 seconds)
      autoplayHoverPause: true, // Pause autoplay when hover
      nav: false, // Disable default navigation buttons
    });

    // Custom navigation using your buttons
    $(".owl-prev").on("click", function() {
      owl.trigger("prev.owl.carousel");
    });
    
    $(".owl-next").on("click", function() {
      owl.trigger("next.owl.carousel");
    });
  }
}
