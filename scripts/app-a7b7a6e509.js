!function(){"use strict";angular.module("breno.main.sections.work",[])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/main/sections/work/work.html",controller:a,controllerAs:"vm",scope:{},bindToController:!0};return e}function a(e){var a=this;a.DATA=e,a.projects=[3,4,0,1,2,5]}a.$inject=["PROJECTS"],angular.module("breno.main.sections.work").directive("work",e)}(),function(){"use strict";angular.module("breno.main.sections.work").constant("PROJECTS",[{name:"dash",target:"//dash.kraiom.com/",text:"A very simple yet challenging browser and mobile game I built from scratch where you must try to memorize different patterns and play as fast as you can."},{name:"eunice festas",target:"//eunicefestas.com.br/",text:"Web site for a party company built with PHP and JavaScript with full content management."},{name:"myfriend",target:"//myfriend.breno.io/",text:"Free open-source project aimed to help shelterless dogs to find a home. It features a recommendation system that matches user’s and dog’s traits."},{name:"kajoo",target:"//kajoo.com.br/",text:"Developed the backend for a counting system with high-availability and stress requirements with NodeJS and a data visualization system with AngularJS and SocketIO."},{name:"polyjuice",target:"//github.com/brenolf/polyjuice",text:"Developer tool to help programmers migrating seamlessly from different JavaScript linting tools."},{name:"breno",target:"//www.behance.net/gallery/23135823/Personal-2015-website",text:"My personal page is always changing, maybe because of the feeling of always having it fresh.  That’s why I also keep my old layouts as landmarks of improvement."}])}(),function(){"use strict";angular.module("breno.main.sections.talks",[])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/main/sections/talks/talks.html",controller:a,controllerAs:"vm",scope:{},bindToController:!0};return e}function a(e,a){var t=this;t.TEXTS=e,t.TALKS=a}a.$inject=["TEXTS","TALKS"],angular.module("breno.main.sections.talks").directive("talks",e)}(),function(){"use strict";angular.module("breno.main.sections.talks").constant("TALKS",[{name:"Snarks Fluxo-críticos",target:"/assets/pdf/sfc.pdf",year:2013,language:"pt"},{name:"Extending Snarks",target:"/assets/pdf/es.pdf",year:2014,language:"en"},{name:"Como eu fiz um jogo em JavaScript?",target:"http://slides.com/brenolf/como-eu-fiz-um-jogo-em-javascript#/",year:2015,language:"pt"},{name:"ES6 Rocks!",target:"http://slides.com/brenolf/es6-rocks#/",year:2015,language:"pt"},{name:"Teoria e prática: Conjuntos disjuntos?",target:"http://slides.com/brenolf/teoria-e-pratica#/",year:2015,language:"pt"},{name:"A Study of Critical Snarks",target:"/assets/pdf/scs.pdf",year:2015,language:"pt"},{name:"Algoritmos genéticos em JavaScript",target:"https://www.emaze.com/@AILICQCL/algoritmos-genticos-em-javascript",year:2015,language:"pt"},{name:"Aprendiz de Descritores de Mistura Gaussiana",target:"/assets/pdf/msc.pdf",year:2017,language:"pt"},{name:"How Machine Learning improves the UX of 500K merchants",target:"/assets/pdf/bjs18.pdf",year:2018,language:"en"}]).constant("TEXTS",[{name:"Hypohamiltonian Snarks Have a 5-flow",target:"/assets/pdf/freitas-silva-lucchesi-15.pdf",year:2015,language:"en"},{name:"Why I’m becoming sassy",target:"https://medium.com/@brenolf/why-i-m-becoming-sassy-8b4fe456558c",year:2015,language:"en"},{name:"Plus one minus one is not zero*",target:"https://medium.com/@brenolf/plus-one-minus-one-is-not-zero-3eae94c7efcf",year:2015,language:"en"},{name:"Designing a designer",target:"https://medium.com/@brenolf/designing-a-designer-2a139d46a68f",year:2015,language:"en"},{name:"A Minimum Description Classification Method Prototype",target:"/assets/pdf/freitas-almeida-silva-17.pdf",year:2017,language:"pt"}])}(),function(){"use strict";angular.module("breno.main.sections.splash",[])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/main/sections/splash/splash.html",controller:a,controllerAs:"vm",scope:{},bindToController:!0};return e}function a(){}angular.module("breno.main.sections.splash").directive("splash",e)}(),function(){"use strict";angular.module("breno.main.sections.end",[])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/main/sections/end/end.html",controller:a,controllerAs:"vm",scope:{},bindToController:!0};return e}function a(){}angular.module("breno.main.sections.end").directive("end",e)}(),function(){"use strict";angular.module("breno.main.sections.about",[])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/main/sections/about/about.html",controller:a,controllerAs:"vm",scope:{},bindToController:!0};return e}function a(){function e(){var e=new Date,t=new Date(1993,7,12,3,40),n=31536e6;a.age=Math.floor((e-t)/n)}var a=this;e()}angular.module("breno.main.sections.about").directive("about",e)}(),function(){"use strict";angular.module("breno.main",["breno.main.sections"])}(),function(){"use strict";function e(e){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"})}e.$inject=["$stateProvider"],angular.module("breno.main").config(e)}(),function(){"use strict";function e(){}angular.module("breno.main").controller("MainController",e)}(),function(){"use strict";angular.module("breno",["ngSanitize","ui.router","duScroll","breno.main"])}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("breno").run(e)}(),function(){"use strict";function e(e){e.otherwise("/")}e.$inject=["$urlRouterProvider"],angular.module("breno").config(e)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("breno").config(e)}(),function(){"use strict";angular.module("breno.main.sections",["breno.main.sections.about","breno.main.sections.splash","breno.main.sections.talks","breno.main.sections.work","breno.main.sections.end"])}(),angular.module("breno").run(["$templateCache",function(e){e.put("app/main/main.html",'<section class="main"><splash></splash><about></about><hr class="main__hr"><work></work><hr class="main__hr"><talks></talks><end></end></section>'),e.put("app/main/sections/about/about.html",'<article class="about" id="hello"><h2>hello</h2><div class="about__text grid__col grid__col--2-of-3 grid__col--centered">Hello, my name is Breno Freitas!<br><br>I’m a {{vm.age}} years old brazilian computer scientist based at Ottawa, Canada. I’ve always loved playing out with computers and trying to make them do some tricks under my command; that’s why I ended up pursuing a career on computer science &mdash; take a look at <a class="about__text__link" href="/assets/pdf/cv.pdf">my r&eacute;sum&eacute;</a>.<br><br>My areas of interest are many, altough I’m mainly passionate about theoretical computer science and artificial intelligence; Machine Learning being my major topic of study. I’m currently working for <a class="about__text__link" href="https://www.shopify.ca/" target="_blank" rel="noopener noreferrer">Shopify</a>, making commerce better for everyone!</div></article>'),e.put("app/main/sections/end/end.html",'<footer class="end"><div class="end__logo"><img src="assets/images/logo.png" alt="Breno Lima de Freitas"></div><div class="grid__col grid__col--2-of-3 grid__col--centered end__links"><a href="mailto:breno@breno.io"><i class="fa fa-envelope"></i></a> <a href="https://www.linkedin.com/in/brenolf" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a> <a href="https://github.com/brenolf" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a> <a href="https://codepen.io/brenolf/" target="_blank" rel="noopener noreferrer"><i class="fa fa-codepen"></i></a> <a href="http://behance.net/brenolimad7b24" target="_blank" rel="noopener noreferrer"><i class="fa fa-behance"></i></a> <a href="https://twitter.com/brenolf_" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a> <a href="https://medium.com/@brenolf/" target="_blank" rel="noopener noreferrer"><i class="fa fa-medium"></i></a></div></footer>'),e.put("app/main/sections/splash/splash.html",'<article class="splash"><div class="grid__col grid__col--1-of-3 splash__name"><div>Breno Freitas</div></div><div class="grid__col grid__col--2-of-3 splash__links"><div class="splash__links__inner"><a du-smooth-scroll="hello">hello</a> <a du-smooth-scroll="work">work</a> <a du-smooth-scroll="talks" class="splash__links__inner__hide">talks</a></div></div><div class="splash__title"><img class="splash__title__logo" src="assets/images/logo.png" alt="Breno Lima de Freitas"><h1 class="splash__title__text">make <span>it</span> happen.</h1></div><div class="splash__gradient"></div></article>'),e.put("app/main/sections/talks/talks.html",'<article class="talks" id="talks"><h2>talks &amp; texts</h2><div class="talks__intro grid__col grid__col--2-of-3 grid__col--centered">I always try to make things that matter, and that’s why I eventually end up giving some talks on many different subjects. I also like writting, even though I’m not good at allocating time slots in order to do it more often. Here’s a selection of my previous talks, papers and articles.</div><div><div class="grid__col grid__col--3-of-8 grid__col--push-1-of-6 talks__piece"><h3 class="talks__piece__subtitle">Talks</h3><ul class="talks__piece__list"><li ng-repeat="talk in vm.TALKS"><a class="talks__piece__list__link" ng-href="{{talk.target}}">{{talk.year}} - [{{talk.language | uppercase}}] {{talk.name}}</a></li></ul></div><div class="grid__col grid__col--3-of-8 talks__piece"><h3 class="talks__piece__subtitle">Texts</h3><ul class="talks__piece__list"><li ng-repeat="text in vm.TEXTS"><a class="talks__piece__list__link" ng-href="{{text.target}}">{{text.year}} - [{{text.language | uppercase}}] {{text.name}}</a></li></ul></div></div></article>'),e.put("app/main/sections/work/work.html",'<article class="work" id="work"><h2>work</h2><div ng-repeat="(index, i) in vm.projects" class="grid__col grid__col--1-of-3 work__list__card work__list__card--card{{i}} work__list__card--color{{index}}"><a class="work__list__card__wrapper" ng-href="{{vm.DATA[i].target}}" target="_blank" rel="noopener noreferrer"><div class="work__list__card__wrapper__img"><img class="work__list__card__wrapper__img__element" ng-src="assets/images/projects/{{i}}.png" alt="project"></div><h4 class="work__list__card__wrapper__title">{{vm.DATA[i].name}}</h4><p class="work__list__card__wrapper__dsc">{{vm.DATA[i].text}}</p></a></div></article>')}]);
//# sourceMappingURL=../maps/scripts/app-a7b7a6e509.js.map
