import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

const CodeSnippet = () => {
  return (
    <CardContainer className="  max-lg:pt-10  ">
          <CardBody>
            <CardItem
              translateZ="60"
              className="mockup-code overflow-hidden w-[94%] mx-auto lg:w-full max-lg:text-sm lg:h-72  shadow-xl   "
            >
                <CardItem translateX={10} translateY={10}>
                <pre data-prefix=">>" className="font-mono tracking-wide max-lg:hidden">
                <code className="text-error font-bold text-lg ">Hover Me</code>
              </pre>
                <pre data-prefix=">>" className=" font-mono tracking-wide">
                <code>{codetext}</code>
              </pre>
                </CardItem>             
            </CardItem>
          </CardBody>
        </CardContainer>
  )
}

const codetext = `const developerProfile = {
    name: "Shiva Yadav",
    title: "Web Developer",
    skills: ["Next.js", "Tailwind CSS,...]],
    education: "BTech CS IOT, AKTU",
    };

    console.log(developerProfile);
`;

export default CodeSnippet