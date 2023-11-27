import {
  mobile,
  backend,
  creator,
  web,
  flutter,
  dart,
  nodejs,
  git,
  figma,
  firebase,
  le_soleil,
  fitkit,
  tabkha,
  fitkit_project,
  tabkha_project,
  colorverse_project,
  placeholder_project
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Team Leader",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Firebase",
    icon: firebase,
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
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Le Soleil",
    icon: le_soleil,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2023",
    points: [
      "I was responsible for all the planning and development of this beauty center management system",
      "It has two types of users : Admin and receptionists, ",
      "It was built using Flutter and Firebase",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Tabkha",
    icon: tabkha,
    iconBg: "#383E56",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Developed four applications for the food ordering system, catering to customers, restaurants, delivery captains, and administrators.",
      "Successfully implemented the back-end using Google Firebase.",
      "Conducted unit testing for all four applications, ensuring completion within the specified timeframe.",
    ],
  },
  {
    title: "Flutter Developer & Team Leader",
    company_name: "Graduation Project",
    icon: fitkit,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Jul 2023",
    points: [
      "A fitness and yoga flutter app blending AI and computer vision for personalized workouts.",
      "Featuring intelligent coaching, body tracking, real-time feedback, and a unique progression system.",
      "It offers a tailored journey for every one based on sessions history and progression.",
      "This app was built using Flutter, Firebase and Tensorflow.",
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
    name: "Fitkit AI Workout Coach",
    description:
      "A fitness and yoga flutter app blending AI and computer vision for personalized workouts. Featuring intelligent coaching, body tracking, real-time feedback, and a unique progression system, it offers a tailored fitness journey.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: fitkit_project,
    source_code_link: "https://github.com/YousefShams",
  },
  {
    name: "Tabkha - Food Ordering System",
    description:
      "Food ordering system that consists of four flutter applications for customers, restaurants, delivery captains, and administrators.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: tabkha_project,
    source_code_link: "https://github.com/YousefShams",
  },
  {
    name: "Pic Query - Photo AI Gallery",
    description:
      "A flutter application that works as a smart image gallery, you can search for a specific image using text and extract text from images.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: placeholder_project,
    source_code_link: "https://github.com/YousefShams",
  },
  {
    name: "ColorVerse",
    description:
      "A flutter app that helps to discover various color palettes that can be used through designs, helps to extract palettes from images, generating and saving any palette.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: colorverse_project,
    source_code_link: "https://github.com/YousefShams",
  },

  {
    name: "ScreenScape",
    description:
      "Flutter application that uses TMDB API for exploring movies and TV shows.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: placeholder_project,
    source_code_link: "https://github.com/YousefShams",
  },

  {
    name: "Rapid Reaction",
    description: "Cross-platform Flutter game that tests and improves your reaction speed time.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: placeholder_project,
    source_code_link: "https://github.com/YousefShams",
  },
  {
    name: "Snake Odyssey",
    description:
      "A game made with flutter where the snake searches for food and destroys enemies.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: placeholder_project,
    source_code_link: "https://github.com/YousefShams",
  },
  {
    name: "Feed Forward",
    description:
      "An app that helps the hungry by locating them so people can easily help with food. ",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
    ],
    image: placeholder_project,
    source_code_link: "https://github.com/YousefShams",
  },
];

export { services, technologies, experiences, testimonials, projects };
