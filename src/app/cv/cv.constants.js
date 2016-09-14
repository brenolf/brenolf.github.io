(function () {
  'use strict';

  angular
  .module('breno.cv')
  .constant('DATA', {
    social: {
      site: 'breno.io',
      email: 'hello@breno.io',
      gh: 'github.com/brenolf',
      ln: 'ca.linkedin.com/in/brenolf/'
    },

    profile: 'Computer scientist with strong mathematical background and experience with Web development, TDD, design and analysis of algorithms and human-computer interface. Also, I am self-taught and possess a constant improvement trait.',

    objective: 'Work in Computer Science field in order to enhance my skills and apply them to solve interesting problems.',

    professional: [
      {
        company: 'Contartec Smart Solution',
        from: '2016-08-19',
        to: null,
        location: 'Campinas, Brazil',
        position: 'Software Engineer'
      },

      {
        company: 'World Tech Makers',
        from: '2015-08-02',
        to: '2016-08-11',
        location: 'São Paulo, Brazil',
        position: 'Software Engineer'
      },

      {
        company: 'Codeminer 42',
        from: '2015-04-01',
        to: '2015-06-01',
        location: 'Sorocaba, Brazil',
        position: 'Intern'
      },

      {
        company: 'university of waterloo',
        from: '2014-05-01',
        to: '2014-08-01',
        location: 'Waterloo, Canada',
        position: 'Undergraduate Research Assistant'
      },

      {
        company: 'cultural norte americano',
        from: '2012-01-01',
        to: '2013-12-01',
        location: 'Indaiatuba, Brazil',
        position: 'English language teacher'
      },

      {
        company: 'madricomp',
        from: '2010-08-01',
        to: '2011-01-01',
        location: 'Indaiatuba, Brazil',
        position: 'Web Application Developer'
      }
    ],

    academic: [
      {
        school: 'universidade federal de são carlos',
        from: '2015-03-01',
        to: null,
        location: 'Sorocaba, Brazil',
        name: 'A Classification Method For Floating-Point Numbers Based On The Minimum Description Length Principle',
        supervisor: 'Prof. Tiago Agostinho de Almeida'
      },

      {
        school: 'universidade federal de são carlos',
        from: '2013-07-01',
        to: '2015-05-01',
        location: 'Sorocaba, Brazil',
        name: 'Flow-critical Snarks',
        supervisor: 'Prof. Cândida Nunes da Silva'
      },

      {
        school: 'university of waterloo',
        from: '2014-05-01',
        to: '2014-08-01',
        location: 'Waterloo, Canada',
        name: 'Extending Snarks',
        supervisor: 'Prof. Emer. Daniel Haven Younger'
      },

      {
        school: 'universidade federal de são carlos',
        from: '2013-01-01',
        to: '2013-07-01',
        location: 'Sorocaba, Brazil',
        name: 'Visual Coordinating System',
        supervisor: 'Prof. José de Oliveira Guimarães'
      }
    ],

    education: [
      {
        school: 'universidade federal de são carlos',
        from: 'Feb 2016',
        to: 'Present',
        location: 'Sorocaba, Brazil',
        title: 'Master of Science in Computer Science'
      },

      {
        school: 'universidade federal de são carlos',
        from: 'Mar 2011',
        to: 'Jun 2015',
        location: 'Sorocaba, Brazil',
        title: 'Bachelor of Science in Computer Science'
      },

      {
        school: 'university of toronto',
        from: 'Jan 2014',
        to: 'Dec 2014',
        location: 'Toronto, Canada',
        title: 'Exchange program'
      },

      {
        school: 'fundação indaiatubana de educação e cultura',
        from: 'Jan 2009',
        to: 'Dec 2010',
        location: 'Indaiatuba, Brazil',
        title: 'Associate\'s degree in Web Development'
      }
    ],

    events: [
      {
        name: 'ACM International Collegiate Programming Contest',
        from: 'Jul 2015',
        location: 'Recife, Brazil',
        extra: '1<sup>st</sup> place'
      },

      {
        name: 'ACM International Collegiate Programming Contest',
        from: '2011',
        to: '2013',
        location: 'Sorocaba, Brazil',
        extra: '2<sup>nd</sup> place in 2013\'s regional phase'
      },

      {
        name: 'Google Developer Day',
        from: '2011',
        location: 'São Paulo, Brazil'
      }
    ],

    languages: [
      {
        name: 'Portuguese',
        level: 'Native'
      },
      {
        name: 'English',
        level: 'Fluent'
      },
      {
        name: 'Spanish',
        level: 'Limited'
      }
    ],

    papers: [
      {
        name: 'Hypohamiltonian Snarks Have a 5-flow',
        year: 2015,
        coauthors: 'With Da Silva C.N. and Lucchesi C.L.',
        journal: 'Electronic Notes in Discrete Mathematics'
      }
    ],

    skills: ['JavaScript', 'Ruby on Rails', 'CSS & Sass', 'MATLAB', 'Python', 'C/C++', 'Machine Learning', 'Combinatorics & Optimization', 'Agile Methodologies', 'Relational Databases & Data Warehouses']
  });
})();
