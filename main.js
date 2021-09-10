import { mainImage, imagesList } from "./images.js";

var interval = 5000;
var images = [mainImage].concat(shuffle(imagesList));

window.onload = function () {

  var main = new Vue({
    el: '#main',
    data: {
      currentIndex: 0,
      images: images,
      activeCards: []
    },
    methods: {
      getPosition(image) {
        return image.position || 'center';
      },
      getTextColor(image) {
        return image.textColor || '#ffffff';
      },
      showCard(card) {
        this.isCardActive(card) ? null : this.activeCards.push(card);
      },
      hideCard(card) {
        this.isCardActive(card) ? this.activeCards = this.activeCards.filter(c => c !== card) : null
      },
      isCardActive(card) {
        return this.activeCards.indexOf(card) !== -1;
      }
    }
  });

  var cycle = function() {
    setTimeout(() => {
      main.currentIndex = main.currentIndex < main.images.length - 1 ? main.currentIndex + 1 : 0;
      cycle();
    }, interval);
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