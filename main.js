import { mainImage, imagesList } from "./images.js";

window.onload = function () {

  var images = [mainImage].concat(shuffle(imagesList));

  var main = new Vue({
    el: '#main',
    data: {
      currentIndex: 0,
      images: images
    },
    methods: {
      getPosition(image) {
        return image.position || 'center';
      }
    }
  });

  var cycle = function() {
    setTimeout(() => {
      main.currentIndex = main.currentIndex < main.images.length - 1 ? main.currentIndex + 1 : 0;
      cycle();
    }, 5000);
  }

  cycle();
  initInteract();
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function initInteract() {
  interact('.card')
    .draggable({
      inertia: true,
      restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      autoScroll: true,
      onmove: dragMoveListener,
    });

  function dragMoveListener (event) {
    var target = event.target,
        x = (parseFloat(target.getBoundingClientRect().left) || 0) + event.dx,
        y = (parseFloat(target.getBoundingClientRect().top) || 0) + event.dy;
    
    target.style.left = x + 'px';
    target.style.top = y + 'px';
  }
}