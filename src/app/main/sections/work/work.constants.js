(function() {
  'use strict';

  angular
    .module('breno.main.sections.work')
    .constant('PROJECTS', [
      {// 0
        name: 'dash',
        target: '//dash.kraiom.com/',
        text: 'A very simple yet challenging browser and mobile game I built from scratch where you must try to memorize different patterns and play as fast as you can.'
      },
      {// 1
        name: 'eunice festas',
        target: '//eunicefestas.com.br/',
        text: 'Web site for a party company built with PHP and JavaScript with full content management.'
      },
      {// 2
        name: 'myfriend',
        target: '//myfriend.breno.io/',
        text: 'Free open-source project aimed to help shelterless dogs to find a home. It features a recommendation system that matches user\'s and dog\'s traits.'
      },
      {// 3
        name: 'kajoo',
        target: '//kajoo.com.br/',
        text: 'Developed the backend for a counting system with high-availability and stress requirements with NodeJS and a data visualization system with AngularJS and SocketIO.'
      },
      {// 4
        name: 'polyjuice',
        target: '//github.com/brenolf/polyjuice',
        text: 'Developer tool to help programmers migrating seamlessly from different JavaScript linting tools.'
      },
      {// 5
        name: 'breno',
        target: '//www.behance.net/gallery/23135823/Personal-2015-website',
        text: 'My personal page is always changing, maybe because of the feeling of always having it fresh.  That\'s why I also keep my old layouts as landmarks of improvement.'
      }
    ]);

})();
