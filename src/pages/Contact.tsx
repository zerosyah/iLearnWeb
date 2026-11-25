import Header from "../components/Header";
//import { SchoolInformationCardData } from "../Constants/EventLayout.json";
//import SchoolInformationCard from "../components/SchoolInformationCard";
import { FaArrowLeft } from "react-icons/fa";
import { IoCallOutline, IoLocateOutline, IoMailOutline } from "react-icons/io5";
export default function Contact() {
  return (
    <section className="size-full bg-lightBlue/40">
      <Header />
      <section className="scroll-container relative mx-auto flex h-screen min-h-0 w-full flex-col overflow-y-auto px-[16px] py-[40px] md:pt-[56px] lg:max-w-[1152px] lg:px-0 lg:pt-[64px]">
        <section className="mt-[10px]">
          <div className="flex cursor-pointer items-center gap-2.5 leading-none">
            <FaArrowLeft size={16} />
            <p className="font-popins text-[14px] text-textGray">
              Back to home
            </p>
          </div>

          <p className="mt-[32px] font-popins text-[11px] font-bold uppercase tracking-[0.3em] text-hoverGold">
            Get in touch
          </p>
          <h1 className="mb-[12px] mt-[8px] font-bebasNeue text-[36px] leading-none text-strongNightGreen md:text-[48px]">
            Contact the school
          </h1>
          <p className="font-popins text-[14px] text-textGray md:text-[16px]">
            Reach the school office or contact a member of the leadership team.
          </p>
        </section>
        <section className="mx-auto mt-[32px] grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">
          <div className="border border-borderGray bg-white p-[24px] shadow shadow-borderGray md:p-[32px]">
            <h1 className="font-bebasNeue text-[24px] leading-none text-nightGreen">
              School Office
            </h1>
            <div className="mt-[32px] flex flex-col gap-[12px]">
              <div className="flex gap-[12px]">
                <div className="flex size-[36px] items-center justify-center rounded-[6px] bg-lightBlue text-gold">
                  <IoCallOutline size={16} className="" />
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-bold uppercase tracking-widest text-textGray">
                    telephone
                  </h1>
                  <h1 className="font-popins text-[14px] font-medium uppercase text-nightGreen">
                    031-310-3002
                  </h1>
                  <h1 className="mt-[4px] font-popins text-[12px] uppercase text-textGray">
                    Fax: 378 378 4287
                  </h1>
                </div>
              </div>

              <div className="flex gap-[12px]">
                <div className="flex size-[36px] items-center justify-center rounded-[6px] bg-lightBlue text-gold">
                  <IoMailOutline size={16} className="" />
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-bold uppercase tracking-widest text-textGray">
                    Email
                  </h1>
                  <h1 className="font-popins text-[14px] font-medium uppercase text-nightGreen">
                    school.email@school.com
                  </h1>
                </div>
              </div>

              <div className="flex gap-[12px]">
                <div className="flex size-[36px] items-center justify-center rounded-[6px] bg-lightBlue text-gold">
                  <IoLocateOutline size={16} className="" />
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-bold uppercase tracking-widest text-textGray">
                    Address
                  </h1>
                  <h1 className="whitespace-normal font-popins text-[14px] font-medium uppercase text-nightGreen">
                    1314 M35, Golokodo-Ensimbini, 4105
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-borderGray bg-white p-[24px] shadow shadow-borderGray md:p-[32px]">
            <h3 className="mb-[8px] font-popins text-[11px] font-bold uppercase tracking-[0.2em] text-hoverGold">
              Leadership
            </h3>
            <h1 className="font-bebasNeue text-[24px] leading-none text-nightGreen">
              School contacts
            </h1>
            <div className="mt-[20px] flex flex-col gap-[12px]">
              <div className="flex items-start gap-[12px] border-b border-borderGray md:items-center md:justify-between">
                <div className="py-[16px]">
                  <h3 className="font-popins text-[12px] font-bold uppercase tracking-wider text-textGray">
                    Principal
                  </h3>
                  <h1 className="mt-[4px] font-bebasNeue text-[20px] leading-none text-nightGreen">
                    Mr John Doe
                  </h1>
                </div>
                <p className="text-wrap font-popins text-[12px] font-semibold text-gold">
                  syahshezi3000@gmail.com
                </p>
              </div>
              <div className="flex items-start gap-[12px] border-b border-borderGray md:items-center md:justify-between">
                <div className="py-[16px]">
                  <h3 className="font-popins text-[12px] font-bold uppercase tracking-wider text-textGray">
                    Principal
                  </h3>
                  <h1 className="mt-[4px] font-bebasNeue text-[20px] leading-none text-nightGreen">
                    Mr John Doe
                  </h1>
                </div>
                <p className="text-wrap font-popins text-[12px] font-semibold text-gold">
                  syahshezi3000@gmail.com
                </p>
              </div>
              <div className="flex items-start gap-[12px] border-b border-borderGray md:items-center md:justify-between">
                <div className="py-[16px]">
                  <h3 className="font-popins text-[12px] font-bold uppercase tracking-wider text-textGray">
                    Principal
                  </h3>
                  <h1 className="mt-[4px] font-bebasNeue text-[20px] leading-none text-nightGreen">
                    Mr John Doe
                  </h1>
                </div>
                <p className="text-wrap font-popins text-[12px] font-semibold text-gold">
                  syahshezi3000@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
