import type { IndividualSkill } from '../types/types'

//Save these images to a new folder and make sure to set the relative path based on THIS file
export const skills: Array<IndividualSkill> = [
  {
    title: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    experience:
      "I've spent over 2 years of my professional career utilizing TypeScript to debug and add functionality to a legacy enterprise level application. Most of this time was with a Vue application and a .NET backend, but do have some experience using TypeScript with React. I also have experience from past projects utilizing TypeScript with React. This website uses TypeScript!",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
    path: 'typescript'
  },
  {
    title: 'PHP',
    description:
      'PHP is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.',
    experience:
      'I spent most of my early career resolving bugs in an enterprise level PHP application using the CodeIgniter framework. The day to day work involved getting support tickets from the overseas QA team, which I would investigate and then resolve. Oftentimes it would be incorrectly structured SQL queries or math. Alongside PHP I would be utilizing Postman, MySQL and Angular to ensure bugs were resolved.',
    icon: 'https://tshirtgeek.co/wp-content/uploads/2021/06/com029.jpg',
    path: 'php'
  },
  {
    title: 'Vue',
    description:
      'Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.',
    experience:
      'Out of the major JavaScript frameworks I have the most experience with Vue by far. Alongside TypeScript, I spent the past 2 years creating new UI interactions and elements across multiple production environments utilizing Vue. I also have experience using Vuex for state management and UIKit for styling. This website is made utilizing Vue and Vue Router.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLeFHLSr6IXVqgvyUXud88L7r79Dtd4GUgw&usqp=CAU',
    path: 'vue'
  },
  {
    title: 'Jest',
    description:
      'Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.',
    experience:
      'Throughout my career I ran into unit tests that were either failing or not expecting any result. I utilized Jest to create hundereds of unit test suites, learning how to properly mock and organize tests for ease of future development. Going forward the applications I worked on have 100% passing unit tests.',
    icon: 'https://ih1.redbubble.net/image.404020083.1876/pp,504x498-pad,600x600,f8f8f8.u7.jpg',
    path: 'jest'
  },
  {
    title: 'HTML/CSS',
    description: 'HTML is the standard markup language for creating Web pages.',
    experience:
      'HTML and CSS are the bread and butter of any web developers work history, and mine is no different. However in a professional setting it was rarely vanilla HTML and CSS, and usually the templates within Vue/React/Angular and a CSS library like Bootstrap or UIKit.',
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
      "I've worked with Figma on a variety of projects, turning provided Figma mockups into functional UI elements. My experience makes me familiar with both navigating Figma designs and pulling the necessary information from those designs to apply throughout the application.",
    icon: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&q=75&fit=max&auto=format&dpr=2',
    path: 'figma'
  }
]

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
