import { IconType } from "react-icons";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

interface projectCardProps {
  title: string;
  github: string;
  link?: string;
  src: string;
  description?: string;
  category?: string[];
  techstack?: IconType[];
}

const ProjectCard: React.FC<projectCardProps> = ({
  title,
  github,
  description,
  link,
  src,
}) => {
  return (
    <CardContainer className="inter-var rounded-xl shadow-xl">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={src}
            height="1000"
            width="1000"
            className=" h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link
            href={github}
            className="border-transparent border hover:border-black ease-in-out transition-all duration-100 rounded-xl text-xs font-normal dark:text-white"
          >
            <CardItem
              translateZ={20}
              href={github}
              target="__blank"
              className="px-4 py-2   space-x-2 flex justify-center items-center  "
            >
              <FaGithub size={14} />
              <p>Github Repo →</p>
            </CardItem>
          </Link>
          <Link
            href={link ? link : "/"}
            className="hover:bg-white hover:text-black hover:border-black border border-transparent ease-in-out transition-all duration-100 rounded-xl font-normal text-xs btn btn-sm btn-neutral"
          >
            <CardItem
              translateZ={20}
              className="px-4 py-2  rounded-xl  space-x-2 flex justify-center items-center"
            >
              <p>Live Link</p>
              <FaExternalLinkAlt size={10} />
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
