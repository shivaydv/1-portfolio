import { AiFillHtml5 } from "react-icons/ai";
import { IconType } from "react-icons";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";

interface skillProps{
    title:string;
    
}

export const skills:skillProps[]=[
    {
        title: "HTML",
        
    },
    {
        title: "CSS",
        
    },
    {
        title: "JavaScript",
        
    },
    {
        title: "React JS",
        
    },
    {
        title: "Next JS",
        
    },
    {
        title: "Tailwind CSS",
        
    }
    ,{
        title: "Typescript",
        
    },
    {
        title: "Node JS",
        
    }
]

interface projectDataProps{
    id:number;
    title:string;     
    link:string;
    src:string;  
    description: string;  
    category:string[];
    techstack:IconType[];
}
export const projectdata:projectDataProps[] = [
    {
        id:1,
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/solvemind.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
    {
        id:2,
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/tesla.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
    {
        id:3,
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/crypto.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
    {
        id:4,
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/aspartinx.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
    {
        id:5,
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/portfolio-2.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
]


