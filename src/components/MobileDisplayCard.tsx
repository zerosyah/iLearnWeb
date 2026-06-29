import React from "react";
import { motion } from "framer-motion";
import { MobileDisplayCardProps } from "../Constants/PropsInventory";
import img1 from "../assets/mobile/hero5.png"
import img2 from "../assets/mobile/hero6.jpg"
import img3 from "../assets/mobile/hero7.jpg"
import img4 from "../assets/mobile/hero8.jpg"
import img5 from "../assets/mobile/hero9.jpg"
import img6 from "../assets/mobile/hero1.jpg"

function MobileDisplayCard({
  image,
  title,
  description,
}: MobileDisplayCardProps): JSX.Element {
    const MobileDisplayCardRecord : Record<string, string> = {
        "img1": img3,
        "img2": img4,
        "img3": img6,
        "img4": img1,
        "img5": img2,
        "img6": img5
    }
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  return (
    <div className={`relative h-[50vh] w-full flex-wrap overflow-hidden rounded-[10px] border md:h-[60vh] md:w-[250px] ${isHovered ? 'border' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.img
        src={MobileDisplayCardRecord[image]}
        alt="test image"
        className={` h-full w-full rounded-[10px] object-center`}
        animate={{scale:isHovered?1.2:1, transition:{duration:0.3, ease:"easeInOut", type:"initia"}}}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} className={`absolute inset-0 rounded-b-[10px] bg-gradient-to-t from-black/90 via-black/40 to-transparent duration-500 ease-in-out transition-all`}></motion.div>
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20}} className="absolute bottom-0 flex flex-col gap-[16px] left-0 z-10 p-[8px] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <motion.h1 className="font-montserrat text-[24px] font-bold uppercase text-white">
          {title}
        </motion.h1>
        <motion.p className="text-[16px] text-coolWhite font-montserrat">{description}</motion.p>
      </motion.div>
    </div>
  );
}

export default MobileDisplayCard;
