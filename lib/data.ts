import { AiFillHtml5 } from "react-icons/ai";
import { IconType } from "react-icons";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";


interface projectDataProps{
    
    title:string;    
    github?:string 
    link?:string;
    src:string;  
    description?:string;  
    category?:string[];
    
}
export const projectdata:projectDataProps[] = [
    {       
        title:"AI Image Generator",     
        github:"https://github.com/shivaydv/Ai-image-gen",
        link:'https://ai-shivaydv.vercel.app/',
        src:"/Projects/ai.png", 
        description:`It generates the images using ai based on the user prompt. Also you can share the images in community and explore other images shared by other users`,
        category:["fullstack"],
    },
    {
        title:"Real-Time Chat App",
        github:"https://github.com/shivaydv/Chat-app",     
        link:'https://shivaydv-chat-app.netlify.app/',
        src:"/Projects/chatapp.png", 
        description:`This is a Mern-Stack chat app that allow us to send and receive messages in real time. It has signin and signup and password encryption functionality`,
        category:["fullstack"],
        
    },
    {
        title:"Crypto App",
        github:"https://github.com/shivaydv/Crypto-App",     
        link:"https://sy-crypto.netlify.app/coins",
        src:"/Projects/crypto.png", 
        description:`It shows the current price and other stats of the crypto currency. It also list the top 1000 crypto currencies and and 100 marketplaces available around the globe.`,
        category:[],
        
    },
    {
        title:"To Do App",
        github:"https://github.com/shivaydv/To-Do-List",     
        link:'https://shivaydv-to-do-list.netlify.app/',
        src:"/Projects/todo.png", 
        description:`It allows user to manage your daily tasks. With Add, Delete, Filter functionality based on the status and it uses local storage to store the data.`,
        category:[],
        
    },
    {
        title:"Shopping Cart",
        github:"https://github.com/shivaydv/Shopping-Cart",     
        link:'https://sy-ecom.netlify.app/',
        src:"/Projects/cart.png", 
        description:`Its a simple shopping cart app that allows you to add and remove items from the cart. It also shows the total amount of the items in the cart.`,
        category:[],
        
    },
    {
        title:"Tesla Clone",
        github:"https://github.com/shivaydv/Tesla",     
        link:'https://shivaydv.github.io/Tesla/',
        src:"/Projects/tesla.png", 
        description:`Its a clone of the tesla website. It's a responsive website and made with pure HTML, CSS, JavaScript.`,
        category:[],
        
    },
    
]


