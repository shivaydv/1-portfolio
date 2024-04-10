import { IconType } from "react-icons";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

interface projectCardProps {
  title: string;
  github?: string;
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
    <CardContainer className="inter-var rounded-xl shadow-xl h-full ">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border  flex flex-col justify-between">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-4"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 flex-grow  flex justify-center items-end ">
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
            href={github? github : "/"}
            className={`${github?"":"btn-disabled"} border-transparent border hover:border-black ease-in-out transition-all duration-100 rounded-xl text-xs font-normal dark:text-white`}
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
            className={`${link?"":"btn-disabled"} hover:bg-white hover:text-black hover:border-black border border-transparent ease-in-out transition-all duration-100 rounded-xl font-normal text-xs btn btn-sm btn-neutral`}
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
