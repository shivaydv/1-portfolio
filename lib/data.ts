import { IconType } from "react-icons";
import { IoLogoNodejs } from "react-icons/io";
import { SiFigma, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import {
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsMedium,
    BsTwitterX,
    BsYoutube,
  } from "react-icons/bs";


interface projectDataProps{
    
    title:string;    
    github?:string 
    link?:string;
    src:string;  
    description?:string;  
    category:string[]; 
}

export const categoryList:string[] = ["All","Frontend","Fullstack","Portfolio","Landing Page","Freelance"]

export const projectdata:projectDataProps[] = [
    {       
        title:"AI Image Generator",     
        github:"https://github.com/shivaydv/Ai-image-gen",
        link:'https://ai-shivaydv.vercel.app/',
        src:"/Projects/ai.png", 
        description:`It generates the images using ai based on the user prompt. Also you can share the images in community and explore other images shared by other users`,
        category:["Fullstack","Featured"],
    },
    {
        title:"Real-Time Chat App",
        github:"https://github.com/shivaydv/Chat-app",     
        link:'https://shivaydv-chat-app.netlify.app/',
        src:"/Projects/chatapp.png", 
        description:`This is a Mern-Stack chat app that allow us to send and receive messages in real time. It has signin and signup and password encryption functionality`,
        category:["Fullstack","Featured"],
        
    },
    {
        title:"Crypto App",
        github:"https://github.com/shivaydv/Crypto-App",     
        link:"https://sy-crypto.netlify.app/coins",
        src:"/Projects/crypto.png", 
        description:`It shows the current price and other stats of the crypto currency. It also list the top 1000 crypto currencies and and 100 marketplaces available around the globe.`,
        category:["Frontend","Featured"],
        
    },
    {
        title:"To Do App",
        github:"https://github.com/shivaydv/To-Do-List",     
        link:'https://shivaydv-to-do-list.netlify.app/',
        src:"/Projects/todo.png", 
        description:`It allows user to manage your daily tasks. With Add, Delete, Filter functionality based on the status and it uses local storage to store the data.`,
        category:["Frontend","Featured"],
        
    },
    {
        title:"Shopping Cart",
        github:"https://github.com/shivaydv/Shopping-Cart",     
        link:'https://sy-ecom.netlify.app/',
        src:"/Projects/cart.png", 
        description:`Its a simple shopping cart app that allows you to add and remove items from the cart. It also shows the total amount of the items in the cart.`,
        category:["Frontend","Featured"],
        
    },
    {
        title:"Tesla Clone",
        github:"https://github.com/shivaydv/Tesla",     
        link:'https://shivaydv.github.io/Tesla/',
        src:"/Projects/tesla.png", 
        description:`Its a clone of the tesla website. It's a responsive website and made with pure HTML, CSS, JavaScript.`,
        category:["Frontend","Featured"],
        
    },
    {
        title:"TVJ Store",
        github:"https://github.com/shivaydv/TVJ-Store",     
        link:'https://shivaydv-ecom.netlify.app/',
        src:"/Projects/ecom.png", 
        description:`It's a e-commerce website with a minimal hero section and product section.`,
        category:["Frontend"],     
    },
    {
        title:"AspartinX - Agency",
        github:"https://github.com/shivaydv/AspartinX",     
        link:'https://aspartinx.vercel.app/',
        src:"/Projects/aspartinx.png", 
        description:`An Agency website with a minimal design and smooth scroll effect and a contact form which send message directly to the email.`,
        category:["Frontend"],     
    },
    {
        title:"Portfolio-1",
        github:"https://github.com/shivaydv/1-portfolio",     
        link:'https://shivayadav.tech/',
        src:"/Projects/portfolio-1.png", 
        description:`Minimal NextJS Portfolio website with 3d animations.`,
        category:["Portfolio"],     
    },
    {
        title:"Portfolio-2",
        github:"https://github.com/shivaydv/2-Portfolio",     
        link:'https://shivaydv.vercel.app/',
        src:"/Projects/portfolio-2.png", 
        description:`NextJS Portfolio website With a Dashboard look and feel.`,
        category:["Portfolio",],     
    },
    {
        title:"Portfolio-3",
        github:"https://github.com/shivaydv/Portfolio",     
        link:'https://shivaydv.netlify.app/',
        src:"/Projects/portfolio-3.png", 
        description:`Portfolio website to showcase the projects and skills. With smooth scroll effect and animations.`,
        category:["Portfolio"],     
    },
    {
        title:"SolveMind",
        github:"https://github.com/shivaydv/SolveMind",     
        link:'https://solvemind.netlify.app/',
        src:"/Projects/solvemind.png", 
        description:`Its a landing page for a software company. It's a responsive website. With animations and smooth scroll effect.`,
        category:["Landing Page"],     
    },
    {
        title:"Travel Website",
        github:"https://github.com/shivaydv/Travel",     
        link:'https://travel-shivaydv.vercel.app/',
        src:"/Projects/travel.png", 
        description:`It's a landing page for a travel website. Inspired by the dribble design. It's a responsive website.`,
        category:["Landing Page"],     
    },
    {
        title:"Weather App",
        github:"https://github.com/shivaydv/weather-app",     
        link:'https://sy-weather-app.netlify.app/',
        src:"/Projects/weather.png", 
        description:` It shows the current weather of the city. It also shows the temperature, humidity, wind speed and weather description of the city.`,
        category:["Frontend"],     
    },
    {
        title:"HealthCure 360",
        github:"",     
        link:'',
        src:"/Projects/HealthCure.png", 
        description:`It's a wordpress blog website for health and fitness. It has the functionality to add blog posts and also the user can comment on the posts.`,
        category:["Freelance"],     
    },
    {
        title:"React Carousel",
        github:"",     
        link:'',
        src:"/Projects/carousel.png", 
        description:`It's a react carousel component that can be used in any react project. It has the functionality to add images and text and also the auto slide feature.`,
        category:["Freelance"],     
    },
    
]

export interface skillProps {
    title: string;
    icon: IconType;
  }
  
  export const skills: skillProps[] = [
    {
      title: "React",
      icon: SiReact,
    },
    {
      title: "NextJS",
      icon: SiNextdotjs,
    },
    {
      title: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      title: "JavaScript",
      icon: SiJavascript,
    },
    {
      title: "Node JS",
      icon: IoLogoNodejs,
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
    },
    {
      title: "Git",
      icon: SiGit,
    },
  
    {
      title: "MongoDB",
      icon: SiMongodb,
    },
    {
      title: "Figma",
      icon: SiFigma,
    },
  ];
  
export interface SocialProfileProps {
    name: string;
    link: string;
    icon: IconType;
  }
  
  export const socialProfiles: SocialProfileProps[] = [
      {
        name: "Github",
        link: "https://github.com/Shivaydv",
        icon: BsGithub,
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/shivaydv/",
        icon: BsLinkedin ,
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/@shivay1256",
        icon: BsYoutube,
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/shivay1256/",
        icon: BsInstagram,
      },
      {
        name: "TwitterX",
        link: "https://twitter.com/Shivay1256",
        icon: BsTwitterX,
      },
      {
        name: "Medium",
        link: "https://medium.com/@shivaydv",
        icon: BsMedium,
      },
  ]


export const codetext = `const developerProfile = {
    name: "Shiva Yadav",
    title: "Web Developer",
    skills: ["Next.js", "Tailwind CSS,...]],
    education: "BTech CS IOT, AKTU",
    };

    console.log(developerProfile);
`;

