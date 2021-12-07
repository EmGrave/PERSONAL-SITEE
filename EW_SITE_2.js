var body = $('body');
var colors = ['#2d518a', '#4173b0', '#4ca8c2', '#6bebff', '#75edff', '#4187b0'];
var currentIndex = 0;
setInterval(function () {
   body.css({
     backgroundColor: colors[currentIndex]
   });
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 100);
  
