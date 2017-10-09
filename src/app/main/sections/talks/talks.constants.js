(function() {
  'use strict';

  angular
    .module('breno.main.sections.talks')
    .constant('TALKS', [
      {// 0
        name: 'Snarks Fluxo-críticos',
        target: '/assets/pdf/sfc.pdf',
        year: 2013,
        language: 'pt'
      },
      {// 1
        name: 'Extending Snarks',
        target: '/assets/pdf/es.pdf',
        year: 2014,
        language: 'en'
      },
      {// 2
        name: 'Como eu fiz um jogo em JavaScript?',
        target: 'http://slides.com/brenolf/como-eu-fiz-um-jogo-em-javascript#/',
        year: 2015,
        language: 'pt'
      },
      {// 3
        name: 'ES6 Rocks!',
        target: 'http://slides.com/brenolf/es6-rocks#/',
        year: 2015,
        language: 'pt'
      },
      {// 4
        name: 'Teoria e prática: Conjuntos disjuntos?',
        target: 'http://slides.com/brenolf/teoria-e-pratica#/',
        year: 2015,
        language: 'pt'
      },
      {// 5
        name: 'A Study of Critical Snarks',
        target: '/assets/pdf/scs.pdf',
        year: 2015,
        language: 'pt'
      },
      {// 6
        name: 'Algoritmos genéticos em JavaScript',
        target: 'https://www.emaze.com/@AILICQCL/algoritmos-genticos-em-javascript',
        year: 2015,
        language: 'pt'
      }
    ])
    .constant('TEXTS', [
      {// 0
        name: 'Hypohamiltonian Snarks Have a 5-flow',
        target: '/assets/pdf/freitas-silva-lucchesi-15.pdf',
        year: 2015,
        language: 'en'
      },
      {// 1
        name: 'Why I’m becoming sassy',
        target: 'https://medium.com/@brenolf/why-i-m-becoming-sassy-8b4fe456558c',
        year: 2015,
        language: 'en'
      },
      {// 2
        name: 'Plus one minus one is not zero*',
        target: 'https://medium.com/@brenolf/plus-one-minus-one-is-not-zero-3eae94c7efcf',
        year: 2015,
        language: 'en'
      },
      {// 3
        name: 'Designing a designer',
        target: 'https://medium.com/@brenolf/designing-a-designer-2a139d46a68f',
        year: 2015,
        language: 'en'
      },
      {// 4
        name: 'A Minimum Description Classification Method Prototype',
        target: '/assets/pdf/freitas-almeida-silva-17.pdf',
        year: 2017,
        language: 'pt'
      }
    ]);

})();
