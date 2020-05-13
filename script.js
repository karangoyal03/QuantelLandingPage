// $(function() {
// Same as document.addEventListener("DOMContentLoaded"...

// Same as document.querySelector("#navbarToggle").addEventListener("blur",...
//   $("#toggle").blur(function(event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       $("##navbarSupportedContent").collapse("hide");
//     }
//   });
// });

// $(document).ready(function() {
//   $(document).click(function(event) {
//     var clickover = $(event.target);
//     var _opened = $(".collapse").hasClass("collapse in");

//     if (_opened === true && !clickover.hasClass("navbar-toggler")) {
//       $("button.navbar-toggler").click();
//     }
//   });
// });

// document.getElementById("sectionScroll").addEventListener("scroll", myFunction);

// function myFunction() {

// }

// document.getElementById("skipToMain").addEventListener(
//   "scroll",

//   function() {
//     var svg1_3 = document.getElementById("downRightCenter");
//     var svg2 = document.getElementById("downRightBottom");
//     // var svg3 = document.getElementById("downLeftCenter");
//     var svg4 = document.getElementById("downLeftCenter");

//     var scrollTop =
//       document.documentElement.scrollTop || document.body.scrollTop;
//     if (scrollTop > 100) {
//       var svg1_3 = document.getElementById("downRightCenter");
//       svg1_3.style.opacity = "0";
//       console.log("Scrolled 100px");
//     }
//     if (scrollTop > 200) {
//       // newImageUrl = "img2.jpg";
//       console.log("Scrolled 200px");
//     }
//     if (scrollTop > 300) {
//       // newImageUrl = "img3.jpg";
//       console.log("Scrolled 300px");
//     }
//     // yourImageElement.src = newImageUrl;
//   }
// );
// object.addEventListener("scroll", onScrollHandler);

// document.getElementById("scroll-test").addEventListener("scroll", myFunction);
// function myFunction() {
//   var body = document.documentElement;

//   document.getElementById("scroll-test");

//   if ((body.scrollTop = 5)) {
//     console.log("scrolled");
//     document.getElementById("scroll-test").style.top = "-571";
//   }
//   if (body.scrollTop > 10) {
//     console.log("scrolled more");
//     document.getElementById("scroll-test").style.top = "-1062";
//   }
// }

// document
//   .getElementById("flatlinesCenter")
//   .addEventListener("click", myFunction);
// function myFunction() {
//   console.log("scrolled");
//   // document.getElementById("scroll-test").style.top = "-571";
//   document.querySelector(".section-wrapper").style.top = "-571";
// }
