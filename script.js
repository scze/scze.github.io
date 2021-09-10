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

window.onload = function () {

  var images = new Vue({
    el: '#images',
    data: {
      currentIndex: 0,
      images: [{
        url: 'images/gallery/altedonau.jpg',
        title: ''
      }].concat(shuffle([
        {
          url: 'images/gallery/india_mailboxes.jpg',
          title: ''
        },
        {
          url: 'images/gallery/sanblas.jpg',
          title: ''
        },
        {
          url: 'images/gallery/hampi.jpg',
          title: ''
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
          title: ''
        },
        {
          url: 'images/gallery/aixenprovence.jpg',
          title: ''
        },
        {
          url: 'images/gallery/cuba.jpeg',
          title: ''
        },
        {
          url: 'images/gallery/madellin.jpeg',
          title: ''
        },
        {
          url: 'images/gallery/sarajevo.jpeg',
          title: ''
        },
        {
          url: 'images/gallery/alleppey.jpeg',
          title: ''
        },
        {
          url: 'images/gallery/hampi.jpg	',
          title: ''
        },
        {
          url: 'images/gallery/marseille.jpg',
          title: ''
        },
        {
          url: 'images/gallery/trieste.jpeg',
          title: ''
        },
        {
          url: 'images/gallery/hampi2.jpeg	',
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
          url: 'images/gallery/hampi2.jpg	',
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
          url: 'images/gallery/altedonau.jpg',
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
          title: ''
        },
        {
          url: 'images/gallery/aranislands.jpeg',
          title: ''
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
          url: 'images/gallery/wroclaw.jpg',
          title: ''
        },
        {
          url: 'images/gallery/ballestas.jpeg',
          title: ''
        },
        {
          url: 'images/gallery/ica2.jpg	',
          title: ''
        },
        {
          url: 'images/gallery/cartagena2.jpg',
          title: ''
        },
        {
          url: 'images/gallery/india_mailboxes.jpg',
          title: ''
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
    }
  });

  var cycle = function() {
    setTimeout(() => {
      images.currentIndex = images.currentIndex < images.images.length - 1 ? images.currentIndex + 1 : 0;
      cycle();
    }, 5000);
  }

  cycle();
}