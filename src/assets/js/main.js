$(".slider").owlCarousel({
  loop: true,
  nav: true,
  navText: [
    "<div class='hsn-nav-btn prev-slide'></div>",
    "<div class='hsn-nav-btn next-slide'></div>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
  autoplay: true,
  autoplayTimeout: 4000, //2000ms = 2s;
  autoplayHoverPause: true,
});

// mobile menu

// $(document).ready(function () {
//   $(".menu-toggle").click(function () {
//     console.log("Log From loop JS 11111111");
//     $("nav").toggleClass("active");
//   });
//   $(".dropdown-item").on("click", function () {
//     console.log("Log From loop JS 22222222");
//     $("#offcanvasRight").removeClass("show"); // Assuming 'open' class makes the offcanvas visible
//   });
//   $("#offcanvasRight .hsn-box-btn").on("click", function () {
//     console.log("Log From loop JS *-*-*-*-*-*-*-*-*-*");
//     $("#offcanvasRight").removeClass("show"); // Assuming 'open' class makes the offcanvas visible
//   });
// });

// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   console.log("Log from Loop 1");
//   dropdown[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }
