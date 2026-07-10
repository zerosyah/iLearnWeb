import React from "react";
import { motion } from "framer-motion";
import { StaffDisplayCardProps } from "../Constants/PropsInventory";
import img1 from "../assets/staff/staff1.jpg";
import img2 from "../assets/staff/staff2.jpg";
import img3 from "../assets/staff/staff3.jpg";
import img4 from "../assets/staff/staff4.jpg";
import img5 from "../assets/staff/staff5.jpg";
import img6 from "../assets/staff/staff6.jpg";
import img7 from "../assets/staff/staff7.jpg";
import img8 from "../assets/staff/staff8.jpg";
import img9 from "../assets/staff/staff9.jpg";
import img10 from "../assets/staff/staff10.jpg";

function StaffDisplayCard({
  image,
  name,
  description,
  gender,
  grade,
  subject,
}: StaffDisplayCardProps): JSX.Element {
  const staffDisplayCardRecord: Record<string, string> = {
    img1,
    img2: img3,
    img3: img4,
    img4: img5,
    img5: img2,
    img6,
    img7,
    img8,
    img9,
    img10,
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const containerAnimationStyle = {
    scale: isHovered ? 1.03 : 1,
    y: isHovered ? -6 : 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  };

  const containerStyle = `group relative h-[70vh] w-full overflow-hidden rounded-[16px] border border-white/20 bg-[#ececec] shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-300 md:h-[420px] md:w-[260px] ${
    isHovered ? "shadow-[0_20px_55px_rgba(15,23,42,0.18)]" : "shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
  }`;
  const imageStyle = "h-full w-full rounded-[16px] object-cover transition duration-500 ease-out";
  const overlayStyle =
    `absolute inset-0 rounded-[16px] ${isHovered ? "bg-gradient-to-t from-black/90 via-black/50 to-transparent": "bg-transparent"} duration-300 transition-all ease-in-out`;

  return (
    <motion.div
      className={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={containerAnimationStyle}
    >
      <motion.img
        src={staffDisplayCardRecord[image]}
        alt={name}
        className={imageStyle}
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className={overlayStyle} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-4 p-[8px] sm:p-[8px]"
      >
        <div className="flex flex-col gap-[8px]">
          <h3 className="w-fit font-montserrat text-[20px] font-semibold uppercase leading-tight tracking-[0.08em] text-white sm:text-[22px]">
            {name}
          </h3>
          <p className="max-w-[95%] font-montserrat text-sm leading-6 text-white/95">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-nowrap font-roboto">
          <span className="rounded-full bg-[#3b82f6] px-2.5 py-1 font-montserrat text-[11px] font-medium uppercase tracking-[0.2em] text-white">
            {grade}
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-montserrat text-[11px] font-medium uppercase tracking-[0.2em] text-white/90">
            {subject}
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-montserrat text-[11px] font-medium uppercase tracking-[0.2em] text-white/90">
            {gender}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default StaffDisplayCard;
