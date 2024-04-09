import { AiFillHtml5 } from "react-icons/ai";
import { IconType } from "react-icons";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";


interface projectDataProps{
    
    title:string;     
    link:string;
    src:string;  
    description: string;  
    category:string[];
    techstack:IconType[];
}
export const projectdata:projectDataProps[] = [
    {       
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/solvemind.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
    {
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/tesla.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
    {
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/crypto.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
    {
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/aspartinx.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
    {
        title:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        src:"/portfolio-2.png", 
        description:`This is a simple crypto app that uses the CoinGecko API to show real time data of top 10 cryptocurrencies like Bitcoin`,
        category:["React","NodeJS"],
        techstack:[TbBrandNextjs,GrReactjs,TbBrandTypescript], 
    },
]


