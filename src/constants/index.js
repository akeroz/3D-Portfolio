import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    codecademy,
    epsi,
    jsmastery,
    saintonge,
    threejs,
    jammming,
    fitclub,
    infopilot,
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
      title: "Developpeur Web",
      icon: web,
    },
    {
      title: "Developpeur React",
      icon: mobile,
    },
    {
      title: "Createur de Contenu",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "BAC STI2D Architecture et Construction",
      company_name: "Sainte-Famille Saintonge",
      icon: saintonge,
      iconBg: "#FFFF",
      date: "2017 - 2019",
      points: [
      ],
    },
    {
      title: "BTS Etude et Economie de la Construction",
      company_name: "Sainte-Famille Saintonge",
      icon: saintonge,
      iconBg: "#FFFF",
      date: "2019 - 2021",
      points: [
      ],
    },
    {
      title: "Bachelor Developpeur Integrateur",
      company_name: "EPSI",
      icon: epsi,
      iconBg: "#FFFF",
      date: "2021 - 2024",
      points: [
        "Apprentissage HTML - CSS + projet scolaires",
        "Apprentissage des bases de PHP - MySQL - Python + projet scolaires",
        "utilisation de Git et Github",
      ],
    },
    {
      title: "Création de site web et application web",
      company_name: "Autodidacte + JavaScript Mastery",
      icon: jsmastery,
      iconBg: "#FFFF",
      date: "2023 -  Aujourd'hui",
      points: [
        "Apprentissage - JavaScript",
        "Framework React, NodeJS, ThreeJS",
        "Portfolio",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Valeriu proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },

  ];
  
  const projects = [
    {
      name: "InfoPilot App",
      description: "InfoPilot is a sleek and user-friendly React dashboard application built using Syncfusion components. Explore your data with confidence and ease using InfoPilot.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: 'syncfusion',
          color: 'green-text-gradient'
        }
      ],
      image: infopilot,
      source_code_link: "https://github.com/valeriusec/dashboard-app",
      demo_link: "https://infopilot.netlify.app/"
    },
    {
      name: "Jammming App",
      description: "Jammming allows you to search for your favorite songs and create custom playlists. Once you've created your playlist, you can export it directly to your Spotify account.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "shopifyapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jammming,
      source_code_link: "https://github.com/valeriusec/jammming-app",
      demo_link: "https://jammming-b7d.pages.dev/"
    },
    {
      name: "Fit Club",
      description: "FitClub is a React app that follows a sleek and modern template for fitness enthusiasts, and provides different types of fitness services.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fitclub,
      source_code_link: "https://github.com/valeriusec/gym-website",
      demo_link: "https://fitclubgym-r42.pages.dev/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };