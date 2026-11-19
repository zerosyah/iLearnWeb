import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { RiBookOpenLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";

export default function Department() {
  const subjects = [
    "Mathematics",
    "English",
    "IsiZulu",
    "Life Orientation",
    "Creative Art",
    "Technology",
    "Natural Science",
    "Geography",
    "Drama",
    "History",
    "Life Sciences",
    "Physical Science",
    "Mathematics Literacy",
    "Tourism",
    "Accounting",
    "Consumer Studies",
    "Business Studies",
    "****************",
  ];
  const grade = {
    Grade8: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[4],
      subjects[5],
      subjects[6],
    ],
    Grade9: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[4],
      subjects[5],
      subjects[6],
    ],
    grade10_science: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[9],
      subjects[7],
      subjects[10],
      subjects[11],
    ],
    grade10_drama: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[7],
      subjects[8],
      subjects[9],
      subjects[13],
    ],
    grade10_Commerce: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[9],
      subjects[14],
      subjects[15],
      subjects[16],
    ],
  };
  const navigate = useNavigate();
  return (
    <div className="size-full bg-lightBlue/60">
      <Header />
      <section className="scroll-container relative mx-auto flex h-screen min-h-0 w-full flex-col overflow-y-auto px-[16px] py-[40px] md:pt-[56px] lg:max-w-[1152px] lg:px-0 lg:pt-[64px]">
        <section className="mt-[40px]">
          <div onClick={() => navigate("/#department")} className="flex cursor-pointer items-center gap-2.5 leading-none">
            <FaArrowLeft size={16} />
            <p className="font-popins text-[14px] text-textGray">
              Back to home
            </p>
          </div>

          <p className="mt-[40px] font-popins text-[11px] font-bold uppercase tracking-[0.3em] text-hoverGold">
            Learning pathways
          </p>
          <h1 className="mt-[10px] font-bebasNeue text-[36px] text-strongNightGreen lg:text-[40px]">
            Departments & pathways
          </h1>
          <p className="py-[12px] font-popins text-[14px] text-textGray lg:text-[16px]">
            Explore example subject combinations by grade and study pathway.
          </p>
        </section>

        <div className="relative grid grid-cols-1 gap-[16px] border-b border-borderGray py-4 pb-[24px] md:grid-cols-2 lg:grid-cols-3">
          {/*Grade 8 */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 8
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  Core pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade["Grade8"].map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/*Grade 9 */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 9
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  Core pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade["Grade9"].map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/*Grade 10 commerce */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 10
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  commerce pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade.grade10_Commerce.map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/*Grade 10 drama */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 10
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  General pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade.grade10_drama.map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/*Grade 10 science */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 10
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  science pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade.grade10_science.map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/**grade11 */}

          {/*Grade 11 drama */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 11
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  Commerce pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade.grade10_Commerce.map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/*Grade 11 science */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 11
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  General pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade.grade10_drama.map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/*Grade 11 commerce */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 11
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  science pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade.grade10_science.map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/*Grade 12 drama */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 12
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  commerce pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade.grade10_Commerce.map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/*Grade 12 science */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 12
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  General pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade.grade10_drama.map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/*Grade 12 commerce */}
          <div className="border border-borderGray bg-white p-[20px] shadow-sm shadow-ink">
            <div className="flex justify-between border-b border-borderGray pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bebasNeue text-[24px] leading-none">
                  Grade 12
                </h1>
                <h2 className="font-popins text-[12px] font-semibold uppercase leading-none text-hoverGold">
                  Science pathway
                </h2>
              </div>
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
            </div>
            <h2 className="mt-[16px] font-bebasNeue text-[14px] font-bold text-textGray dark:text-white ">
              subject
            </h2>
            <ul className="mt-[8px] flex flex-wrap gap-2">
              {grade.grade10_science.map((subject, index) => (
                <li
                  key={index}
                  className="w-fit whitespace-nowrap rounded-[6px] bg-lightBlue px-2 py-1 font-popins text-[12px] text-ink dark:text-white"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="border-b border-borderGray py-[16px]">
          <button
            onClick={() => navigate("/signin")}
            className="h-[40px] rounded-[6px] bg-gold px-[20px] font-popins text-[14px] font-semibold text-strongNightGreen"
          >
            Apply to sompukwane
          </button>
        </section>
        <section
          id="footer"
          className="flex flex-col items-start py-[16px]"
        >
          <div className="flex w-full items-start justify-between border-b pb-[8px]">
            <div className="flex w-fit items-center gap-2">
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-center text-gold">
                <RiBookOpenLine size={20} className="" />
              </div>
              <div className="">
                <h1 className="font-bebasNeue text-[24px] leading-none text-nightGreen">
                  Sompukeane
                </h1>
                <h3 className="text-center font-popins text-[11px] text-textGray">
                  Better learners, brighter futures
                </h3>
              </div>
            </div>

            <ul className="flex flex-col items-center gap-1 md:flex-row md:gap-2 lg:gap-4">
              <a href="#about" className="">
                <li className="cursor-pointer font-popins text-[12px] text-textGray hover:text-gold">
                  About
                </li>
              </a>
              <li className="cursor-pointer font-popins text-[12px] text-textGray hover:text-gold">
                Licensing
              </li>
              <li className="cursor-pointer font-popins text-[12px] text-textGray hover:text-gold">
                Contact
              </li>
            </ul>
          </div>
          <p className="py-[8px] text-center font-popins text-[12px] text-textGray">
            © 2026 Sompukwane Secondary School · Powered by iLearn
          </p>
        </section>
      </section>
    </div>
  );
}
