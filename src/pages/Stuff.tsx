import { useState } from "react";
import logo from "../assets/image2.jpg";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import Header from "../components/Header";

export default function Stuff() {
  const [isHovered, setIsHovered] = useState<string>("");

  const staff = [
    {
      id: 1,
      Subject: "Home Language (IsiZulu)",
      description:
        "Here are the teachers who are teaching the home language in Sompukwane Secondary School in reverse chronological order.",
      link: "/view?subject=Home Language (IsiZulu)",
    },
    {
      id: 2,
      Subject: "Mathematics",
      description:
        "Here are the teachers who are teaching Mathematics in Sompukwane Secondary School in reverse chronological order.",
      link: "/view?subject=Mathematics",
    },
    {
      id: 3,
      Subject: "English",
      description:
        "Here are the teachers who are teaching English in Sompukwane Secondary School in reverse chronological order.",
      link: "/view?subject=English",
    },
    {
      id: 4,
      Subject: "Life Orientation",
      description:
        "Here are the teachers who are teaching Life Orientation in Sompukwane Secondary School in reverse chronological order.",
      link: "/view?subject=Life Orientation",
    },
    {
      id: 5,
      Subject: "Physical Sciences",
      description:
        "Here are the teachers who are teaching Physical Sciences in Sompukwane Secondary School in reverse chronological order.",
      link: "/view?subject=Physical Sciences",
    },
    {
      id: 6,
      Subject: "Life Sciences",
      description:
        "Here are the teachers who are teaching Life Sciences in Sompukwane Secondary School in reverse chronological order.",
      link: "/view?subject=Life Sciences",
    },
  ]
  return (
    <div className="flex flex-col justify-evenly flex-wrap bg-[#FFFFFF]">
      <Header />

      <div className="relative top-[80px] mx-[10px] my-2 flex flex-wrap justify-evenly gap-4 md:top-[70px] ">
        {/*General Teacher*/}
        {
          staff.map(({ id, Subject, description, link }) => (
            <Card className={`max-w-sm bg-[#D9D9D9] 0verflow-hidden transition-transform duration-700 transform  `} onMouseEnter={() => setIsHovered(Subject)} onMouseLeave={() => setIsHovered("")} imgSrc={logo} horizontal key={id} >
          <h5 className={`text-[20px] font-semibold font-popins tracking-tight text-gray-900 dark:text-white ${isHovered === Subject ? "-mt-5 duration-700 ease-in-out": "mt-0"}`}>
            {Subject}
          </h5>
          <motion.p className="font-robot text-[16px] text-gray-700 dark:text-gray-400" {...(isHovered === Subject ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } } : { initial: { opacity: 1 }, animate: { opacity: 0 }, transition: { duration: 0.5 } })}>
            {description}
          </motion.p>
          <button className={`bg-blue-500 hover:bg-blue-700 font-robot text-white font-bold py-2 px-4 rounded opacity-0 ease-in-out transition-opacity duration-700 ${isHovered === Subject ? "opacity-100 translate-y-4": "translate-y-0"}`}>
            <Link to={link} className="">
              view
            </Link>
          </button>
        </Card> 
          ))
        } 
      </div>
    </div>
  );
}
