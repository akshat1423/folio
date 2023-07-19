import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  newbee,
  figma,
  ROS,
  angular,
  flivery,
  vue,
  meta,
  googlemaps,
  starbucks,
  tesla,
  shopify,
  deardiary,
  axechat,
  mapit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Motion Planning Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "ROS",
    icon: ROS,
  },

];

const experiences = [
  {
    title: "Vue.js Developer",
    company_name: "NewBee",
    icon: newbee,
    iconBg: "#383E56",
    date: "March 2023 - July 2023",
    points: [
      "Freshie Portal of IIT Bombay with Devcom and ISMP Team",
      "Implemented API's from the MongoDB Backend ",
      "Implememted Features like Adding Posts with Functionality of Upvote, Comment , Reply and Verified Answer(By ISMP)",
      "Secured the AUthentication using JWT and BcryptJS for Hashing and Salting of the Password and Access Tokens "
    ],
  },
  {
    title: "Angular Js Developer",
    company_name: "FLivery",
    icon: flivery,
    iconBg: "#E6DEDD",
    date: "Jun 2023- August 2023",
    points: [
      "Handled the Front-End Of the whole E-Commerce Website",
      "Added and managed API endpoints related to Search Products",
      "Made the Website Responsive to Both Desktop , Mobile and Intermediate Devices",
      "Implemented the Google Maps API for Users to directly search their adress and all the input fields are populated "
    ],
  },
  {
    title: "Web Developer",
    company_name: "MapIT.ai",
    icon: mapit,
    iconBg: "#383E56",
    date: "Jun 2023 - August 2023",
    points: [
      "Implemented Blog Page functionality and Other Pages into their Official website using ReactJS",
      "No hardcoding , implemented all the blog page to from a central database in minimal time using minimal Code",
      "Still Working...",
      "..."
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
  {
    name: "AxeChat",
    description:
      "Unleash limitless video calls and audio sharing during presentations, freeing you from the 40-minute timeout restrictions for seamless web conferencing.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "ZegoCloud",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: axechat,
    link:"https://axechat.pythonanywhere.com/",
    source_code_link: "https://github.com/akshat1423/AxeChat",
  },
  {
    name: "Dear Diary",
    description:
      "Empowering seamless note-making for everyone, anywhere, and on any device. A revolutionary project that unlocks the power of accessibility and organization at your fingertips.",
    tags: [
      {
        name: "AngularJS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: deardiary,
    link:"https://homepages.iitb.ac.in/~22b0690/#/login",
    source_code_link: "https://github.com/deardiaryav/deardiaryav.github.io",
  },
  {
    name: "AxeBlogs",
    description:
      "Your all-in-one ad-free destination for technology-related blogs and live news, delivering a seamless experience with the latest updates in the tech world",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "grey-text-gradient",
      },
    ],
    image: tripguide,
    link:"https://axe-blogs.vercel.app/",
    source_code_link: "https://github.com/akshat1423/AxeBlogs",
  },
];

export { services, technologies, experiences, testimonials, projects };
