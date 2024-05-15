import type { IndividualSkill } from '../types/types'

export const skills: Array<IndividualSkill> = [
  {
    title: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    experience:
      "Over 3 years of experience working with multiple micro frontends using TypeScript and various JavaScript frameworks. Spent countless hours resolving issues with legacy code where 'any' type was used frequently, causing errors. Utilized TypeScript in conjunction with Jest to fix existing and create new unit tests. At this point in my career if there is anytime I would use JavaScript, I'd use TypeScript instead if possible.",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
    path: 'typescript'
  },
  {
    title: 'PHP',
    description:
      'PHP is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.',
    experience:
      'Over 2 years of experience investigating and resolving bugs related to customer data reporting and incorrectly structured SQL queries within the API calls. Documented all solutions and communicated with overseas teams as necessary. Sanitized user input for dozens of areas of potential SQL injection. Worked primarily with the CodeIgniter framework, with some proof of concept work using Laravel as well.',
    icon: 'https://tshirtgeek.co/wp-content/uploads/2021/06/com029.jpg',
    path: 'php'
  },
  {
    title: 'Vue',
    description:
      'Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.',
    experience:
      'With over 3 years of experience, this is the JavaScript framework that I have the most professional experience with. Utilized the Vue Composition API to trigger code during specific lifecycle hooks. Worked with Vuex for modular state management, as well as UIKit for additional styling and UI elements. Outside of Vue I also have one year of experience with React and some minor experience with Angular.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLeFHLSr6IXVqgvyUXud88L7r79Dtd4GUgw&usqp=CAU',
    path: 'vue'
  },
  {
    title: 'Jest',
    description:
      'Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.',
    experience:
      'Over 3 years of experience utilizing Jest with TypeScript. Fixed hundreds of legacy, failing unit test suites. Added test suites for all new code written. Engaged in mentoring junior developers in best practices and ensuring no unit tests are missed for any work completed.',
    icon: 'https://ih1.redbubble.net/image.404020083.1876/pp,504x498-pad,600x600,f8f8f8.u7.jpg',
    path: 'jest'
  },
  {
    title: 'HTML/CSS',
    description:
      'HTML is the standard markup language for creating Web pages. CSS is a style sheet language used for specifying the presentation and style of a document written in a markup language.',
    experience:
      'Over 5 years of experience building HTML and CSS from scratch. Multiple years with various CSS libraries such as Bootstrap, MaterialUI, UIKit, among others. Worked with both standard HTML as well at JSX and TSX within framework templates.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8SCwC6enVR5xvCUVihJovCzB5subgHsWTtKZjGThEEQGs2URRKHt87beWLfu8I6ezf4&usqp=CAU',
    path: 'html-css'
  },
  {
    title: 'AWS',
    description:
      'Amazon Web Services, or AWS, is a cloud computing platform that helps users build their applications over the cloud. It provides scalable, cost-effective cloud computing solutions to help businesses scale and grow.',
    experience:
      "I have an AWS Cloud Practitioner certification that expires April 2025. I also have experience with AWS S3 and EC2, using them for company storage and to spin up servers using EC2. Outside of those things, I'm eager to learn as much more about AWS as I can!",
    icon: 'https://files.raycast.com/rkqbp84wey7dq95evbq7hc4k4oad',
    path: 'aws'
  },
  {
    title: 'Figma',
    description:
      'Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.',
    experience:
      'Over 2 years of experience turning Figma mockups in functional UI elements in React and Vue.js. Worked collaboratively with designers to ensure cohesion and find resolutions to any unforseen issues. Navigated multiple Figma projects simultaneously, and gained an eye for Figma details in ensuring consistency across the application.',
    icon: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&q=75&fit=max&auto=format&dpr=2',
    path: 'figma'
  }
]

//TODO: Experiment with proof of concept on handling soft skills different both visually and logically
export const softSkills: Array<IndividualSkill> = [
  {
    title: 'Project Management',
    description:
      'Project management is the process of leading the work of a team to achieve all project goals within the given constraints.',
    experience:
      'Before getting into Software Development I was a Project Manager. This has given me the necessary planning and communication skills to ensure that deadlines are always met. It has also given me experience with a lot of tools to assist with project timelines, such as Microsoft Project. In my experience a little bit of project management experience can go a long way for any developer.',
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/008/461/358/small/team-project-filled-line-icon-linear-style-sign-for-mobile-concept-and-web-design-outline-icon-symbol-logo-illustration-graphic-free-vector.jpg',
    path: 'project-management'
  },
  {
    title: 'Technical Documentation',
    description:
      'Technical documentation is any piece of writing that describes the application, purpose, creation or architecture of a product or service.',
    experience:
      "I've been writing technical documentation for almost a decade now. My experience begins with writing End User support articles for a proprietary application rented out by our company. I also created documentation on how to integrate our media products with other applications available on the market. This has also given me a lot of experience with Jira, Confluence and Trello.",
    icon: 'https://cdn.vectorstock.com/i/preview-1x/39/75/write-technical-document-icon-outline-vector-45843975.jpg',
    path: 'technical-documentation'
  },
  {
    title: 'End User Support',
    description:
      'End user support specialists are the first line of help when a user encounters a problem with software or applications or a defect in an IT program.',
    experience:
      'Assisting end users via email, phone and chat was what got me into the world of technology initially. I have experience managing shared support inboxes, managing response timelines and even providing after hours critical support for customers when necessary. Nothing feels better than helping another person solve a frustrating problem.',
    icon: 'https://cdn-icons-png.freepik.com/512/87/87704.png',
    path: 'end-user-support'
  }
]
