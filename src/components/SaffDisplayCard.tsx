import React from "react";
import { motion } from "framer-motion";
import { StaffDisplayCardProps } from "../Constants/PropsInventory";
import img1 from "../assets/staff/staff1.jpg"
import img2 from "../assets/staff/staff2.jpg"
import img3 from "../assets/staff/staff3.jpg"
import img4 from "../assets/staff/staff4.jpg"
import img5 from "../assets/staff/staff5.jpg"
import img6 from "../assets/staff/staff6.jpg"
import img7 from "../assets/staff/staff7.jpg"
import img8 from "../assets/staff/staff8.jpg"
import img9 from "../assets/staff/staff9.jpg"
import img10 from "../assets/staff/staff10.jpg"

function StaffDisplayCard ({
  image,
  name,
  description,
  gender,
  grade,
  subject
}: StaffDisplayCardProps): JSX.Element {
    const StaffDisplayCardRecord : Record<string, string> = {
        "img1": img1,
        "img2": img3,
        "img3": img4,
        "img4": img5,
        "img5": img2,
        "img6": img6,
        "img7": img7,
        "img8": img8,
        "img9": img9,
        "img10": img10
    }
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const containerAnimationStyle = {
      scale: isHovered ? 1.2 : 1,
      transition: { duration: 0.3, ease: "easeInOut", type: "initia" },
    };
    // Define styles for the container
    const containerStyle = `relative bg-[#D9D9D9] overflow-hidden h-[70vh] md:h-[400px] flex-wrap w-full md:w-[250px] rounded-[10px] border ${isHovered ? 'border shadow-sm shadow-gray-600' : 'border-gray-300'}`
    // Define styles for the image
    const imageSyle = `h-full w-full rounded-[10px] object-cover`
    const secondLayerInitialStyle = {
      opacity: 0,
    };
    const secondLayerAnimateStyle = {
      opacity: isHovered ? 1 : 0,
    }
    const secondLayerStyle = `absolute inset-0 rounded-b-[10px] bg-gradient-to-t from-black/90 via-black/40 to-transparent duration-500 ease-in-out transition-all`
  return (
    <div className={containerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.img
        src={StaffDisplayCardRecord[image]}
        alt="test-image"
        className={imageSyle}
        animate={containerAnimationStyle}
      />
      <motion.div initial={secondLayerInitialStyle} animate={secondLayerAnimateStyle} className={secondLayerStyle}></motion.div>
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20}} className="absolute bottom-0 left-0 z-10 p-[10px] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <motion.h1 className="font-bebasNeue text-[20px] font-bold uppercase text-white">
          {name}
        </motion.h1>
        <motion.p className="text-[12px] text-gray-400 font-nunito">{description}</motion.p>
        <div className="flex gap-[10px] items-center mt-[5px] font-roboto">
            <p className="text-[12px] text-gray-400 bg-gray-900 border px-[5px] rounded-[5px]">{grade}</p>
            <p className="text-[12px] text-gray-400 border px-[5px] rounded-[5px]">{subject}</p>
            <p className="text-[12px] text-gray-400 border px-[5px] rounded-[5px]">{gender}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default StaffDisplayCard;
