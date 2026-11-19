import { FaArrowLeft } from "react-icons/fa";
import Header from "../components/Header";
import StaffDisplayCard from "../components/SaffDisplayCard";
import { StaffData } from "../Constants/EventLayout.json";
import { useNavigate } from "react-router-dom";
import { RiBookOpenLine } from "react-icons/ri";
import { MdContacts } from "react-icons/md";

export default function Stuff() {
  const navigate = useNavigate();
  return (
    <div className="scroll-container flex h-screen flex-col overflow-hidden bg-lightBlue/60">
      <div className="sticky top-0 z-50 w-full bg-white">
        <Header />
      </div>
      <section className=" relative mx-auto flex min-h-0 w-full flex-1 flex-col bg-lightBlue/60 py-[2px] md:px-0">
        <div className="mx-auto mt-[40px] w-full px-[16px] md:px-[24px] lg:max-w-[1152px] lg:px-0">
          <section className="">
            <div
              onClick={() => navigate("/#educators")}
              className="flex cursor-pointer items-center gap-2.5 leading-none"
            >
              <FaArrowLeft size={16} />
              <p className="font-popins text-[14px] text-textGray">
                Back to home
              </p>
            </div>

            <p className="mt-[36px] font-popins text-[11px] font-bold uppercase tracking-[0.3em] text-hoverGold">
              Our educators
            </p>
            <h1 className="mt-[6px] font-bebasNeue text-[36px] text-strongNightGreen lg:text-[40px]">
              Educators of the School
            </h1>
            <p className="py-[10px] font-popins text-[14px] text-textGray lg:text-[16px]">
              Celebrating the teachers behind our results.
            </p>
          </section>
        </div>
        <div className="border-b border-borderGray">
          <div className="mx-auto mt-[36px] grid w-full grid-cols-1 gap-[16px] px-[16px] pb-[36px] md:grid-cols-2 md:px-[24px] lg:max-w-[1152px] lg:grid-cols-4 lg:px-0">
            {StaffData.map((item, index) => (
              <StaffDisplayCard
                key={index}
                description={item.description}
                gender={item.gender}
                grade={item.grade}
                name={item.name}
                subject={item.subject}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="border-b border-borderGray">
          <section className="mx-auto flex flex-col items-start justify-between gap-3 p-[16px] md:flex-row md:items-center md:gap-0 md:px-[24px] lg:max-w-[1152px] lg:px-0">
            <p className="font-popins text-[14px] text-textGray">
              For staff enquiries, contact the school office.
            </p>
            <button onClick={()=> navigate("/contact")} className="flex h-[40px] items-center gap-3 whitespace-nowrap rounded-[6px] border bg-white px-[20px] font-popins text-[14px] font-semibold text-strongNightGreen shadow-sm shadow-borderGray transition-all duration-300 ease-in-out hover:border-hoverGold hover:text-hoverGold hover:shadow-hoverGold">
              <MdContacts size={16} />
              Contact the School
            </button>
          </section>
        </div>
        
        <div className="bg-white">
          <section
          id="footer"
          className="mx-auto flex flex-col items-start bg-white p-[16px] md:items-center md:px-[24px] lg:max-w-[1152px] lg:px-0 "
        >
          <div className="flex w-full items-start justify-between border-b pb-[8px] md:items-center">
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
        </div>
      </section>
    </div>
  );
}
