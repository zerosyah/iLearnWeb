import React from "react";
import { motion } from "framer-motion";
import { MobileDisplayCardProps } from "../Constants/PropsInventory";
import img1 from "../assets/mobile/hero5.png";
import img2 from "../assets/mobile/hero6.jpg";
import img3 from "../assets/mobile/hero7.jpg";
import img4 from "../assets/mobile/hero8.jpg";
import img5 from "../assets/mobile/hero9.jpg";
import img6 from "../assets/mobile/hero1.jpg";

function MobileDisplayCard({
  image,
  title,
  description,
}: MobileDisplayCardProps): JSX.Element {
  const mobileDisplayCardRecord: Record<string, string> = {
    img1: img3,
    img2: img4,
    img3: img6,
    img4: img1,
    img5: img2,
    img6: img5,
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`group relative h-[50vh] w-full overflow-hidden rounded-[16px] border border-white/20 bg-slate-100 shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all duration-300 md:h-[60vh] md:w-[250px] ${
        isHovered ? "shadow-[0_20px_50px_rgba(15,23,42,0.18)]" : "shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={mobileDisplayCardRecord[image]}
        alt={title}
        className="size-full rounded-[16px] object-cover"
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className={`absolute inset-0 rounded-[16px] ${isHovered ? "bg-gradient-to-t from-black/90 via-black/50 to-transparent" : "bg-transparent"} transition-all duration-300 ease-in-out`} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-3 sm:p-4"
      >
        <h3 className="font-montserrat text-[24px] font-semibold uppercase tracking-[0.08em] text-coolWhite sm:text-[24px]">
          {title}
        </h3>
        <p className="font-montserrat text-[16px] leading-6 text-coolWhite sm:text-[15px]">
          {description}
        </p>
      </motion.div>
    </div>
  );
}

export default MobileDisplayCard;
