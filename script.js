window.onload = function () {

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
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
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

var images = [{
  url: 'images/gallery/altedonau.jpg',
  title: ''
}].concat(shuffle([
  {
    url: 'images/gallery/hampi.jpg',
    title: '',
    position: '50% 10%'
  },
  {
    url: 'images/gallery/aermenia.jpg',
    title: ''
  },
  {
    url: 'images/gallery/cotopaxi2.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/lisbon.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/sanblas.jpg',
    title: '',
    position: '50% 10%'
  },
  {
    url: 'images/gallery/aixenprovence.jpg',
    title: '',
    position: '50% 70%'
  },
  {
    url: 'images/gallery/cuba.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/sarajevo.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/marseille.jpg',
    title: ''
  },
  {
    url: 'images/gallery/miramare.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/alleppey3.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/nordbahnhalle.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/triglav2.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/havana.jpg	',
    title: ''
  },
  {
    url: 'images/gallery/oxford.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/trinidad.jpg',
    title: '',
    position: '50% 70%'
  },
  {
    url: 'images/gallery/hoehenrausch.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/panama.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/valencia.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/auschwitz.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/ica.jpeg	',
    title: ''
  },
  {
    url: 'images/gallery/panama2.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/ballestas.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/ica2.jpg	',
    title: '',
    position: '50% 30%'
  },
  {
    url: 'images/gallery/posthalle.jpeg',
    title: ''
  },
  {
    url: 'images/gallery/cotopaxi.jpg',
    title: ''
  },
  {
    url: 'images/gallery/prag.jpeg',
    title: ''
  }
]))