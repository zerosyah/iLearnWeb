import Header from "../components/Header";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import hero from "../assets/Heros/hero.jpg";
import { LuQuote, LuSparkles, LuTrophy } from "react-icons/lu";
import digitalClass from "../assets/programs/digitalClass.jpg";
import schoolComputer from "../assets/programs/school-computer.jpg";
import schoolLibrary from "../assets/programs/school-library.jpg";
import schoolSports from "../assets/programs/school-sports.jpg";
import schoolScince from "../assets/programs/school-science.jpg";
import {
  SchoolSubjectList,
  TeacherRecognition,
} from "../Constants/EventLayout.json";
import { FaGraduationCap } from "react-icons/fa6";
import { RiBookOpenLine } from "react-icons/ri";

//import {} from "../as"

export default function Home() {
  return (
    <section className="scroll-container relative mx-auto flex h-screen min-h-0 w-full flex-col overflow-y-auto bg-white lg:max-w-[1152px]">
      <div className="sticky top-0 z-50 w-full bg-white">
        <Header />
      </div>

      <section className="mb-[24px] mt-[40px] grid h-screen grid-cols-1 gap-[40px] px-[16px] md:px-[40px] lg:grid-cols-[1fr_1.1fr] lg:px-0 lg:pt-[60px]">
        {/** first Column */}
        <div className=" ">
          <h3 className="mb-[12px] font-popins text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Welcome To Sompukwane
          </h3>
          <h1 className=" flex-wrap font-bebasNeue text-[48px] leading-none text-nightGreen  md:text-[64px] lg:text-[72px]">
            Empowering tomorrow's innovators
          </h1>
          <p className="mt-[20px] font-popins text-[16px] md:text-[18px]">
            Join a community where academic excellence meets personal growth,
            supported end to end by the iLearn platform.
          </p>
          <div className="my-[28px] flex items-center  gap-5">
            <button className="flex h-[40px] items-center gap-3 rounded-[6px] bg-gold px-[20px] font-popins text-[14px] font-semibold text-strongNightGreen shadow-sm">
              Apply now <FaArrowRight size={20} />
            </button>
            <button className="flex h-[40px] items-center gap-3 rounded-[6px] border bg-white px-[20px] font-popins text-[14px] font-semibold text-strongNightGreen shadow-sm">
              Explore Programs
            </button>
          </div>
        </div>

        {/** second Column */}
        <div className="relative">
          <img
            src={hero}
            alt="class_5"
            className="relative h-[288px] w-full rounded-[8px] border object-cover shadow-[-12px_12px_1px_#E1EFF7] md:h-[384px] lg:h-[416px]"
          />
          <div className="absolute right-[12px] top-[12px] rounded-[8px] bg-nightGreen px-[12px] py-[8px] font-popins text-[11px] font-semibold uppercase tracking-wide text-gold">
            Better learners, brighter futures
          </div>
        </div>
      </section>
      <section className="mb-[24px] mt-[60px] grid w-full grid-cols-2 gap-[16px] px-[16px] md:px-[24px] lg:grid-cols-4 lg:px-0">
        <div className="rounded-[6px] border border-borderGray !bg-nightGreen p-[20px]">
          <div className="flex items-center justify-between">
            <h2 className="font-popins text-[11px] font-semibold uppercase text-softWhite">
              year of Expirience
            </h2>
          </div>
          <h1 className="mt-2 font-bebasNeue text-[36px] tracking-wide text-gold md:text-[48px]">
            25
          </h1>
          <div className="h-[4px] w-[32px] rounded-full bg-gold " />
        </div>
        <div className="rounded-[6px] border border-borderGray p-[20px] shadow-md shadow-borderGray">
          <div className="flex items-center justify-between">
            <h2 className="font-popins text-[11px] font-semibold uppercase text-textGray">
              pass rate
            </h2>
          </div>
          <h1 className="mt-3 font-bebasNeue text-[36px] tracking-wide text-strongNightGreen md:text-[48px]">
            100%
          </h1>
          <div className="h-[4px] w-[32px] rounded-full bg-softLight" />
        </div>
        <div className="rounded-[6px] border border-borderGray p-[20px] shadow-md shadow-borderGray">
          <div className="flex items-center justify-between">
            <h2 className="font-popins text-[11px] font-semibold uppercase text-textGray">
              Registered Students
            </h2>
          </div>
          <h1 className="mt-3 font-bebasNeue text-[36px] tracking-wide text-strongNightGreen md:text-[48px]">
            989
          </h1>
          <div className="h-[4px] w-[32px] rounded-full bg-softLight" />
        </div>
        <div className="rounded-[6px] border border-borderGray p-[20px] shadow-md shadow-borderGray">
          <div className="flex items-center justify-between">
            <h2 className="font-popins text-[11px] font-semibold uppercase text-textGray">
              Active Teachers
            </h2>
          </div>
          <h1 className="mt-3 font-bebasNeue text-[36px] tracking-wide text-strongNightGreen md:text-[48px]">
            102
          </h1>
          <div className="h-[4px] w-[32px] rounded-full bg-softLight" />
        </div>
      </section>
      <section
        id="about"
        className="mt-[24px] grid w-full grid-cols-1 gap-[32px] border-y border-borderGray bg-lightBlue/60 px-[16px] py-[56px] md:px-[24px] lg:grid-cols-[3fr_2fr] lg:px-0"
      >
        <div className="flex min-w-0 flex-col">
          <h3 className="font-popins text-[11px] font-semibold uppercase leading-none tracking-[0.3em] text-gold">
            About the school
          </h3>
          <h1 className="mt-3 font-bebasNeue text-[30px] leading-none text-nightGreen lg:text-[36px]">
            who we are
          </h1>
          <div className="mt-[20px] flex flex-col gap-[16px] text-textGray">
            <p className="font-popins text-[14px] md:text-[18px]">
              Welcome to our school, where we are dedicated to nurturing young
              minds and fostering a love for learning. Our passionate educators
              strive to provide a supportive and dynamic environment that
              encourages students to achieve their full potential.
            </p>

            <p className="font-popins text-[14px] md:text-[18px]">
              Through innovative teaching methods and a comprehensive
              curriculum, we prepare our students to become confident,
              responsible, and compassionate global citizens ready to make a
              positive impact on the future.
            </p>
          </div>
        </div>
        <div className="min-w-0">
          <div className="w-full rounded-[6px] border border-borderGray bg-white p-[24px]">
            <LuQuote size={24} className="text-gold" />
            <p className="mt-[24px] font-popins text-[18px] font-medium italic text-nightGreen">
              “Making an impact, together”
            </p>
            <div className="mt-[16px] flex items-center gap-[12px]">
              <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen font-bebasNeue text-[18px] text-gold">
                <h1 className="">TP</h1>
              </div>
              <h3 className="font-popins text-[11px] font-semibold uppercase text-textGray ">
                Thomas Peterson
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section
        id="whyIlearn"
        className="border-y border-borderGray px-[16px] py-[56px] md:px-[24px] lg:px-0"
      >
        <h3 className="font-popins text-[11px] font-semibold uppercase leading-none tracking-[0.3em] text-gold">
          Why iLearn
        </h3>
        <h1 className="mt-3 font-bebasNeue text-[30px] leading-none text-nightGreen lg:text-[36px]">
          We make learning easy with iLearn
        </h1>
        <p className="mt-4 font-popins text-[14px]">
          Every school on iLearn gets one connected platform for admissions,
          learners, staff and results.
        </p>
        <div className="relative mt-4 grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-4">
          <div className="relative rounded-[6px] border bg-white p-[20px]">
            <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
              <LuSparkles size={20} />
            </div>
            <h1 className="mt-5 font-bebasNeue text-[24px] leading-none text-nightGreen">
              Effortless applications
            </h1>
            <p className="mt-3 font-popins text-[14px] text-textGray">
              Parents apply online in minutes, and your admissions team reviews,
              accepts or declines each application with a single click.
            </p>
            <h1 className="absolute bottom-0 right-[10px] font-bebasNeue text-[72px] text-gold opacity-20">
              01
            </h1>
          </div>
          <div className="relative rounded-[6px] border bg-white p-[20px]">
            <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
              <LuSparkles size={20} />
            </div>
            <h1 className="mt-5 font-bebasNeue text-[24px] leading-none text-nightGreen">
              Empowerment & control
            </h1>
            <p className="mt-3 font-popins text-[14px] text-textGray">
              Staff and administrators get real-time dashboards and full control
              of applications, learners, staff and results from one place.
            </p>
            <h1 className="absolute bottom-0 right-[10px] font-bebasNeue text-[72px] text-gold opacity-20">
              02
            </h1>
          </div>
          <div className="relative rounded-[6px] border bg-white p-[20px]">
            <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
              <LuSparkles size={20} />
            </div>
            <h1 className="mt-5 font-bebasNeue text-[24px] leading-none text-nightGreen">
              Effortless applications
            </h1>
            <p className="mt-3 font-popins text-[14px] text-textGray">
              Parents apply online in minutes, and your admissions team reviews,
              accepts or declines each application with a single click.
            </p>
            <h1 className="absolute bottom-0 right-[10px] font-bebasNeue text-[72px] text-gold opacity-20">
              03
            </h1>
          </div>
          <div className="relative rounded-[6px] border bg-white p-[20px]">
            <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
              <LuSparkles size={20} />
            </div>
            <h1 className="mt-5 font-bebasNeue text-[24px] leading-none text-nightGreen">
              Results that follow learners
            </h1>
            <p className="mt-3 font-popins text-[14px] text-textGray">
              Capture marks per subject, test and term, then track every
              learner's progress as they move from grade to grade.
            </p>
            <h1 className="absolute bottom-0 right-[10px] font-bebasNeue text-[72px] text-gold opacity-20">
              04
            </h1>
          </div>
        </div>
      </section>
      <section className="border-b border-borderGray bg-lightBlue/60 px-[16px] py-[24px] md:px-[24px] lg:px-0">
        <h3 className="font-popins text-[11px] font-semibold uppercase leading-none tracking-[0.3em] text-gold">
          Academics
        </h3>
        <h1 className="mt-3 font-bebasNeue text-[30px] leading-none text-nightGreen lg:text-[36px]">
          Our programs
        </h1>
        <p className="mt-4 font-popins text-[14px]">
          Explore the academic pathways we offer, each designed to support
          growth, curiosity and excellence.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-4 ">
          <div className="w-full rounded-[6px] border border-borderGray bg-white shadow-sm shadow-borderGray">
            <img
              src={digitalClass}
              alt="digital class"
              className="h-[176px] w-full rounded-t-[6px] object-cover"
            />
            <div className="p-[16px]">
              <h1 className="font-bebasNeue text-[20px] leading-none">
                digital ClassRooms
              </h1>
              <div className=" mt-2 flex items-center gap-4">
                <span className="rounded-full bg-lightBlue px-2 py-1 font-popins text-[11px] font-semibold leading-none text-nightGreen">
                  Academics
                </span>
                <span className="rounded-full bg-lightBlue px-2 py-1 font-popins text-[11px] font-semibold leading-none text-nightGreen">
                  Academics
                </span>
              </div>
              <p className="mt-2 font-popins text-[12px] text-textGray">
                Tablet-led lessons and teacher support in every class.
              </p>
            </div>
          </div>
          <div className="w-full rounded-[6px] border border-borderGray bg-white shadow-sm shadow-borderGray">
            <img
              src={schoolScince}
              alt="science lab"
              className="h-[176px] w-full rounded-t-[6px] object-cover"
            />
            <div className="p-[16px]">
              <h1 className="font-bebasNeue text-[20px] leading-none">
                Science laboratories
              </h1>
              <div className=" mt-2 flex items-center gap-4">
                <span className="rounded-full bg-lightBlue px-2 py-1 font-popins text-[11px] font-semibold leading-none text-nightGreen">
                  Sciences
                </span>
                <span className="rounded-full bg-lightBlue px-2 py-1 font-popins text-[11px] font-semibold leading-none text-nightGreen">
                  Practicals
                </span>
              </div>
              <p className="mt-2 font-popins text-[12px] text-textGray">
                Fully equipped physical and life sciences labs.
              </p>
            </div>
          </div>
          <div className="w-full rounded-[6px] border border-borderGray bg-white shadow-sm shadow-borderGray">
            <img
              src={schoolSports}
              alt="sports"
              className="h-[176px] w-full rounded-t-[6px] object-cover"
            />
            <div className="p-[16px]">
              <h1 className="font-bebasNeue text-[20px] leading-none">
                Sports & athletics
              </h1>
              <div className=" mt-2 flex items-center gap-4">
                <span className="rounded-full bg-lightBlue px-2 py-1 font-popins text-[11px] font-semibold leading-none text-nightGreen">
                  Sport
                </span>
                <span className="rounded-full bg-lightBlue px-2 py-1 font-popins text-[11px] font-semibold leading-none text-nightGreen">
                  Teams
                </span>
              </div>
              <p className="mt-2 font-popins text-[12px] text-textGray">
                Soccer, netball and athletics for every season.
              </p>
            </div>
          </div>
          <div className="w-full rounded-[6px] border border-borderGray bg-white shadow-sm shadow-borderGray">
            <img
              src={schoolComputer}
              alt="digital class"
              className="h-[176px] w-full rounded-t-[6px] object-cover"
            />
            <div className="p-[16px]">
              <h1 className="font-bebasNeue text-[20px] leading-none">
                Computer & robotics club
              </h1>
              <div className=" mt-2 flex items-center gap-4">
                <span className="rounded-full bg-lightBlue px-2 py-1 font-popins text-[11px] font-semibold leading-none text-nightGreen">
                  STEM
                </span>
                <span className="rounded-full bg-lightBlue px-2 py-1 font-popins text-[11px] font-semibold leading-none text-nightGreen">
                  Club
                </span>
              </div>
              <p className="mt-2 font-popins text-[12px] text-textGray">
                Coding, robotics and research after hours.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex w-full flex-wrap items-center justify-center gap-[8px]  lg:mt-6  lg:gap-[12px]">
          {SchoolSubjectList.map((item, index) => (
            <span
              className="rounded-full border border-borderGray bg-white px-[16px] py-[6px] font-popins text-[12px] font-semibold leading-none text-textGray transition-all duration-300 ease-in-out hover:border-gold hover:text-nightGreen"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </section>
      <section className="border-b border-borderGray bg-white px-[16px] py-[24px] md:px-[24px] lg:px-0">
        <h3 className="font-popins text-[11px] font-semibold uppercase leading-none tracking-[0.3em] text-gold">
          Announcements
        </h3>
        <div className="flex w-full items-center justify-between gap-2">
          <h1 className="mt-3 font-bebasNeue text-[30px] leading-none text-nightGreen lg:text-[36px]">
            Educators of the year
          </h1>
          <LuTrophy size={32} className="text-gold" />
        </div>
        <p className="mt-4 font-popins text-[14px]">
          Celebrating the teachers behind our results.
        </p>
        <div className="mt-3 flex gap-[16px] overflow-x-auto pb-[16px]  lg:mt-6">
          {TeacherRecognition.map((item, index) => (
            <div
              className="w-fit min-w-[230px] rounded-[6px] border border-borderGray bg-white p-[20px] shadow-sm shadow-borderGray"
              key={index}
            >
              <div className="flex items-center gap-[12px]">
                <div className="flex size-[44px] items-center justify-center rounded-[6px] bg-lightBlue font-bebasNeue text-[18px] text-hoverGold">
                  <h1 className="">MJ</h1>
                </div>
                <div className="">
                  <h1 className="font-bebasNeue text-[14px] font-semibold text-ink">
                    {item.name}
                  </h1>
                  <h3 className="font-popins text-[12px] text-textGray">
                    {item.subject}
                  </h3>
                </div>
              </div>
              <p className="mt-2 font-popins text-[12px] text-textGray">
                {item.grade}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <h1 className="font-bebasNeue text-[30px] leading-none text-nightGreen">
                  {item.description}
                </h1>
                <span className="rounded-full bg-defaultGreen/10 px-2 py-1 font-popins text-[12px] font-semibold uppercase text-defaultGreen">
                  Pass rate
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="programs" className="border-b border-borderGray bg-lightBlue/60 px-[16px] py-[24px] md:px-[24px] lg:px-0">
        <h3 className="font-popins text-[11px] font-semibold uppercase leading-none tracking-[0.3em] text-gold">
          Beyond the classroom
        </h3>
        <h1 className="mt-3 font-bebasNeue text-[30px] leading-none text-nightGreen lg:text-[36px]">
          Support programs
        </h1>
        <p className="mt-4 font-popins text-[14px]">
          Beyond the classroom, every learner gets the space and help they need
          to thrive.
        </p>
        <div className="relative mt-4 grid grid-cols-1 gap-[16px] rounded-[6px] md:grid-cols-2 lg:grid-cols-4">
          <div className=" relative h-[208px] w-full rounded-[6px] border border-borderGray bg-white shadow-sm shadow-borderGray">
            <img
              src={schoolLibrary}
              alt=""
              className="h-[208px] w-full rounded-[6px] object-cover"
            />
            <div className="absolute inset-0 rounded-[6px] bg-gradient-to-t from-nightGreen/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-[10px] left-[10px]">
              <h1 className="font-bebasNeue text-[20px] text-white">
                Library & study centre
              </h1>
              <p className="font-popins text-[12px] text-white">
                Quiet study and research every afternoon.
              </p>
            </div>
          </div>
          <div className=" relative h-[208px] w-full rounded-[6px] border border-borderGray bg-white shadow-sm shadow-borderGray">
            <img
              src={schoolScince}
              alt=""
              className="h-[208px] w-full rounded-[6px] object-cover"
            />
            <div className="absolute inset-0 rounded-[6px] bg-gradient-to-t from-nightGreen/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 px-[8px] pb-[8px]">
              <h1 className="font-bebasNeue text-[20px] text-white">
                Extra lessons
              </h1>
              <p className="font-popins text-[12px] text-white">
                Small-group support in core subjects.
              </p>
            </div>
          </div>
          <div className=" relative h-[208px] w-full rounded-[6px] border border-borderGray bg-white shadow-sm shadow-borderGray">
            <img
              src={schoolSports}
              alt=""
              className="h-[208px] w-full rounded-[6px] object-cover"
            />
            <div className="absolute inset-0 rounded-[6px] bg-gradient-to-t from-nightGreen/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 px-[8px] pb-[8px]">
              <h1 className="font-bebasNeue text-[20px] text-white">
                Sports academy
              </h1>
              <p className="font-popins text-[12px] text-white">
                Coached teams and inter-school leagues.
              </p>
            </div>
          </div>
          <div className=" relative h-[208px] w-full rounded-[6px] border border-borderGray bg-white shadow-sm shadow-borderGray">
            <img
              src={digitalClass}
              alt=""
              className="h-[208px] w-full rounded-[6px] object-cover"
            />
            <div className="absolute inset-0 rounded-[6px] bg-gradient-to-t from-nightGreen/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 px-[8px] pb-[8px]">
              <h1 className="font-bebasNeue text-[20px] text-white">
                Digital skills
              </h1>
              <p className="font-popins text-[12px] text-white">
                Computer literacy for every grade.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="educators" className="border-b border-borderGray bg-white px-[16px] py-[24px] md:px-[24px] lg:px-0">
        <div className="flex flex-col items-center justify-center rounded-[6px] bg-nightGreen py-[48px]">
          <FaGraduationCap size={48} className="mx-auto text-gold" />
          <h1 className="mt-3 font-bebasNeue text-[30px] leading-none text-white md:text-[48px] ">
            Ready to run your school on iLearn?
          </h1>
          <p className="mt-3 font-popins text-[14px] leading-none text-white/60">
            Admissions, learners, staff and results — one platform for the whole
            school.
          </p>
          <button className="mt-6 flex w-fit items-center gap-4 rounded-[6px] bg-gold px-[20px] py-[10px] font-popins text-[14px] font-semibold text-ink">
            Open the iLearn demo <FaUsers size={15} />
          </button>
        </div>
      </section>
      <section id="contact" className="py-[16px]">
        <div className="flex items-center justify-between border-b border-borderGray py-[16px]">
          <div className="flex w-fit items-center gap-2">
          <div className="flex size-[40px] items-center justify-center rounded-[6px] bg-nightGreen text-gold">
            <RiBookOpenLine size={20} className="" />
          </div>
          <div className="">
            <h1 className="font-bebasNeue text-[24px] leading-none text-nightGreen">
              Sompukeane
            </h1>
            <h3 className="font-popins text-[11px] text-textGray">
              Better learners, brighter futures
            </h3>
          </div>
        </div>
        <ul className="flex items-center gap-4">
          <a href="#about" className="">
            <li className="cursor-pointer font-popins text-[12px] text-textGray hover:text-gold">
            About
          </li>
          </a>
          <li className="cursor-pointer font-popins text-[12px] text-textGray hover:text-gold">
            Privacy Policy
          </li>
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
  );
}

/*

<section className="scroll-container flex h-screen min-h-0 w-full flex-col gap-[40px] overflow-y-auto bg-coolWhite dark:bg-gray-700">
      {/* Hero section start here *
      <Stack
        className={`relative grid h-screen place-items-center justify-center`}
      >
        <Header />
        <section
          className=" relative flex h-fit w-full flex-col justify-between lg:flex-row lg:items-center "
          style={{
            //height: vh * 0.7,
            //maxHeight: vh * 0.75,
          }}
        >
          <div
            className="relative z-10 flex h-[70vh] flex-col items-center justify-between gap-[24px] lg:items-start"
            style={{ width: vw <= 850 ? vw : vw * 0.45 }}
          >
            <h1
              className="z-10 overflow-visible bg-imperialRed bg-clip-text px-0 text-center font-montserrat text-[52px] font-bold text-transparent  md:text-[90px] md:leading-[110px] lg:px-0 lg:text-start lg:leading-[90px]"
              style={{ maxWidth: vw <= 850 ? vw : vw * 0.7 }}
            >
              Empowering Tomorrow’s Innovators
            </h1>
            <p
              className="hidden flex-wrap px-[8px] text-center font-montserrat text-[20px] font-semibold text-persianBlue drop-shadow-[0px_0px_5px_black] md:text-[40px] lg:block lg:px-0 lg:text-start lg:text-[20px] lg:text-persianBlue lg:drop-shadow-none"
              style={{ maxWidth: vw <= 850 ? vw : vw * 0.7 }}
            >
              Join a community where academic excellence meets personal growth
            </p>
            <div className="flex w-full flex-col gap-[24px] px-[8px] lg:mt-[8px] lg:flex-row lg:px-0">
              <Button
                outline
                //gradientDuoTone="purpleToBlue"
                className="h-fit bg-imperialRed font-nunito text-[50px] font-bold uppercase text-coolWhite md:w-[150px]"
                size={"md"}
                color={"#ff1833"}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Apply Now
              </Button>
              <Button
                // eslint-disable-next-line tailwindcss/no-custom-classname
                className="via-blck/40 h-fit bg-selectiveYellow font-nunito text-[50px] font-bold uppercase text-coolWhite md:w-[150px]"
                outline
                //gradientDuoTone="purpleToBlue"
                size={"md"}
                color={"#ff1833"}
                onClick={() => {
                  navigate("/signin");
                }}
              >
                <span className="pr-[5px]">ilearn</span>{" "}
                <img
                  src={pn}
                  alt="pn"
                  className="absolute right-0 top-[-13px]  w-[40px] pr-[5px]"
                />
              </Button>
            </div>
          </div>
          <img
            src={g}
            alt="g"
            className="absolute right-0 hidden h-full lg:inline-block lg:brightness-100"
            style={{}}
          />
        </section>
        <img
          src={iy}
          alt="iy"
          className="absolute bottom-0 h-[90vh] lg:hidden"
          style={{}}
        />
      </Stack>
      {/* Hero section end here *

      {/* Second section start here *
      <section
        className="relative flex h-fit w-full flex-col gap-[24px]"
        // style={{padding: vw <= 850 ? vw*0.95 : vw * 0.9}}
      >
        <h1 className="relative pl-[8px] font-montserrat text-[40px] font-bold leading-[30px] text-black lg:pl-0">
          Who We are ?
        </h1>
        {/* first section of section 2 start*
        <div
          className="first-section-container relative flex w-full flex-col items-center"
          //style={{ height: vw <= 850 ? "fit-content" : vh * 0.5 }}
        >
          <div
            className="relative flex w-full items-center gap-[48px] rounded-[10px] px-[8px] lg:items-start lg:gap-[16px] lg:px-0"
            style={{ flexDirection: vw <= 800 ? "column" : "row" }}
          >
            {/* image section *
            <div
              className="relative flex h-fit flex-col"
            >
              <img
                src={pp}
                alt="pp"
                // eslint-disable-next-line tailwindcss/no-custom-classname
                className="first-section-container-img relative size-full rounded-[10px] object-cover"
              />

              <div className="absolute bottom-[-30px] left-1/2 flex size-fit -translate-x-1/2 flex-col items-center justify-center rounded-[10px] border bg-white  p-[8px] text-center text-black">
                <p className="text-nowrap font-popins text-[16px] text-black">
                  "Making an impact, together"
                </p>
                <p className="font-roboto text-[16px] text-gray-500">
                  The principal
                </p>
              </div>
            </div>

            {/* details section *
            <div
              className="relative flex size-full w-full flex-col gap-[16px] text-black lg:items-start"
            >
              <Stack className="relative flex flex-col gap-[8px]">
                <Stack direction={"row"} spacing={vh <= 850 ? 2 : 2}>
                  <div className="flex items-center gap-[6px]">
                    <span className="font-bebasNeue text-[55px] font-bold leading-[47px] text-royalBlue lg:text-[60px]">
                      25
                    </span>
                    <div className="flex flex-col font-montserrat text-[16px] font-semibold leading-tight text-royalBlue lg:text-[20px]">
                      <span className="leading-[20px]">Years</span>
                      <span className="leading-[20px]">Experience</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="font-bebasNeue text-[55px] font-bold leading-[47px] text-imperialRed lg:text-[60px]">
                      100%
                    </span>
                    <div className="flex flex-col font-montserrat text-[16px] font-semibold leading-tight text-imperialRed lg:text-[20px]">
               <span className="leading-[20px]">Pass</span>
                      <span className="leading-[20px]">Rates</span>
                    </div>
                  </div>
                </Stack>
                <Stack direction={"row"} spacing={vh <= 850 ? 2 : 2}>
                  <div className="flex items-center gap-[6px]">
                    <span className="font-bebasNeue text-[55px] font-bold leading-[47px] text-persianBlue lg:text-[60px]">
                      916
                    </span>
                    <div className="flex flex-col font-montserrat text-[16px] font-semibold leading-tight text-persianBlue lg:text-[20px]">
                      <span className="leading-[20px]">Registered </span>
                      <span className="leading-[20px]">Students</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="font-bebasNeue text-[55px] font-bold leading-[47px] text-selectiveYellow lg:text-[60px]">
                      102
                    </span>
                    <div className="flex flex-col font-montserrat text-[16px] font-semibold leading-tight text-selectiveYellow lg:text-[20px]">
                      <span className="leading-[20px]">Active</span>
                      <span className="leading-[20px]">Teachers</span>
                    </div>
                  </div>
                </Stack>
              </Stack>
              <Stack className="flex flex-col gap-[8px]">
                <p className="text-left font-montserrat text-[16px] text-black lg:text-left">
                  Welcome to our school, where we are dedicated to nurturing
                  young minds and fostering a love for learning. Our passionate
                  educators strive to provide a supportive and dynamic
                  environment that encourages students to achieve their full
                  potential.
                </p>
                <p className="text-left font-montserrat text-[16px] text-black lg:text-left">
                  Through innovative teaching methods and a comprehensive
                  curriculum, we prepare our students to become confident,
                  responsible, and compassionate global citizens ready to make a
                  positive impact in the future.
                </p>
              </Stack>
            </div>
          </div>
        </div>
        {/* first section of section 2 end *

        <div className="relative mt-[24px] flex flex-col gap-[16px]">
          {/* second section of section 2 start *
          <div
            className="second-section-div relative"
            //style={{ width: vw <= 850 ? vw : vw * 0.5 }}
          >
            <p className="px-[8px] font-montserrat text-[24px] font-semibold leading-[35px] lg:pl-0 lg:text-[32px]">
              We make sure that learning is Easy with the Help of iLearn
            </p>
          </div>
          {/* second section of section 2 end *

          {/* third section of section 2 start *
          <Stack
            direction={vw <= 850 ? "column" : "row"}
            className="relative px-0 lg:mx-0"
            alignItems="center"
            spacing={vw <= 850 ? 5 : 2}
          >
            <div
              className="ilearn-card relative rounded-[10px] bg-coolWhite px-[8px] shadow-sm shadow-royalBlue"
              // style={{
              //   width: vw <= 850 ? vw * 0.95 : vw * 0.21,
              //   height: vh * 0.63,
              // }}
            >
              <div
                className="flex size-full flex-col justify-between pb-[8px] pt-[24px]"
                //spacing={vw <= 850 ? 10 : 5}
                //justifyContent={"space-between"}
              >
                <div className="flex flex-col gap-[16px]">
                  <h1 className="font-bebasNeue text-[40px] font-bold leading-[38px] text-persianBlue">
                    What is iLearn?
                  </h1>
                  <p className="z-10 font-montserrat text-[16px] font-medium text-persianBlue">
                    Trust & Conectivity: iLearn is a secure software platform
                    that unifies mobile, desktop, and web technologies into a
                    single ecosytem for seamless school management.
                  </p>
                </div>

                <Stack
                  direction={"row"}
                  className=""
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <button className="relative h-[40px] w-full rounded-[10px] border border-persianBlue font-montserrat text-[20px] font-bold text-persianBlue transition-all duration-300 ease-in-out hover:bg-persianBlue hover:text-coolWhite">
                    Learn More
                  </button>
                </Stack>
                <h1 className="absolute bottom-0 right-0 z-0 bg-gradient-to-t from-[#BD00FD] via-black/50 to-[#FF3C00] bg-clip-text font-bebasNeue text-[150px] text-transparent">
                  1
                </h1>
              </div>
            </div>
            <div
              className="ilearn-card relative rounded-[10px] px-[8px] shadow-sm shadow-imperialRed"
              // style={{
              //   width: vw <= 850 ? vw * 0.95 : vw * 0.21,
              //   height: vh * 0.63,
              // }}
            >
              <div
                className="flex size-full flex-col justify-between pb-[8px] pt-[24px]"
                // spacing={vw <= 850 ? 10 : 5}
                // justifyContent={"space-between"}
              >
                <div className="flex flex-col gap-[16px]">
                  <h1 className="font-bebasNeue text-[40px] font-bold leading-[40px] text-imperialRed">
                    Empowerment & Control
                  </h1>
                  <p className="z-10 font-montserrat text-[16px] font-medium text-imperialRed">
                    Real-time parental monitoring, student self-service portals,
                    and advanced tracking to ensure everyone stays connected and
                    informed.
                  </p>
                </div>

                <Stack
                  direction={"row"}
                  className=""
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <button className="relative h-[40px] w-full rounded-[10px] border border-imperialRed font-montserrat text-[20px] font-bold text-imperialRed transition-all duration-300 ease-in-out hover:bg-imperialRed hover:text-coolWhite">
                    Learn More
                  </button>
                </Stack>
                <h1 className="absolute bottom-0 right-0 z-0 bg-gradient-to-t from-[#BD00FD] via-black/50 to-[#FF3C00] bg-clip-text font-bebasNeue text-[150px] text-transparent">
                  2
                </h1>
              </div>
            </div>
            <div
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="ilearn-card relative rounded-[10px] bg-coolWhite px-[8px] shadow-sm shadow-selectiveYellow"
              // style={{
              //   width: vw <= 850 ? vw * 0.95 : vw * 0.21,
              //   height: vh * 0.63,
              // }}
            >
              <div
                className="flex size-full flex-col justify-between pb-[8px] pt-[24px]"
                // spacing={vw <= 850 ? 10 : 5}
                // justifyContent={"space-between"}
              >
                <div className="flex flex-col gap-[16px]">
                  <h1 className="font-bebasNeue text-[40px] font-bold leading-[40px] text-selectiveYellow">
                    Effortless Applications
                  </h1>
                  <p className="z-10 font-montserrat text-[16px] font-medium text-selectiveYellow">
                    Real-time parental monitoring, student self-service portals,
                    and advanced tracking to ensure everyone stays connected and
                    informed.
                  </p>
                </div>

                <Stack
                  direction={"row"}
                  className="rounded-[10px]"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <button className="relative h-[40px] w-full rounded-[10px] border border-selectiveYellow font-montserrat text-[20px] font-bold text-selectiveYellow transition-all duration-300 ease-in-out hover:bg-selectiveYellow hover:text-coolWhite">
                    Learn More
                  </button>
                </Stack>
                <h1 className="absolute bottom-0 right-0 z-0 bg-gradient-to-t from-[#BD00FD] via-black/50 to-[#FF3C00] bg-clip-text font-bebasNeue text-[150px] text-transparent">
                  3
                </h1>
              </div>
            </div>
            <div
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="ilearn-card relative rounded-[10px] bg-coolWhite px-[8px] shadow-sm shadow-royalBlue"
              // style={{
              //   width: vw <= 850 ? vw * 0.95 : vw * 0.21,
              //   height: vh * 0.63,
              // }}
            >
              <div
                className="flex size-full flex-col justify-between pb-[8px] pt-[24px]"
              >
                <div className="flex flex-col gap-[16px]">
                  <h1 className="font-bebasNeue text-[40px] font-bold leading-[40px] text-royalBlue">
                    Effortless Applications
                  </h1>
                  <p className="z-10 font-montserrat text-[16px] font-medium text-royalBlue">
                    Real-time parental monitoring, student self-service portals,
                    and advanced tracking to ensure everyone stays connected and
                    informed.
                  </p>
                </div>

                <Stack
                  direction={"row"}
                  className="rounded-[10px]"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <button className="relative h-[40px] w-full rounded-[10px] border border-royalBlue font-montserrat text-[20px] font-bold transition-all duration-300 ease-in-out hover:bg-royalBlue hover:text-coolWhite">
                    Learn More
                  </button>
                </Stack>
                <h1 className="absolute bottom-0 right-0 z-0 bg-gradient-to-t from-[#BD00FD] via-black/50 to-[#FF3C00] bg-clip-text font-bebasNeue text-[150px] text-transparent">
                  4
                </h1>
              </div>
            </div>
          </Stack>
           third section of section 2 end *
        </div>
      </section>
      /* Second section end here *

      ** Thrird Section Start here *
      <Stack className="third-section-container relative flex h-fit w-full flex-col lg:text-start">
        <div className="flex flex-col gap-[16px] px-[8px] lg:items-start lg:gap-[24px] lg:px-0 lg:text-start">
          <div className="flex flex-col gap-2">
            <h1 className="relative font-montserrat text-[32px] font-bold leading-[35px] text-black lg:px-0 lg:text-[32px]">
              Our Programs
            </h1>
            <p className="max-w-2xl text-[16px] leading-7 text-slate-600 sm:text-base">
              Explore the academic pathways we offer, each designed to support growth, curiosity, and excellence.
            </p>
          </div>

          <div className="relative flex w-full flex-col gap-[12px] rounded-[20px] border border-slate-200 bg-white p-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:p-4">
            <div className="flex h-fit w-full items-center justify-between gap-2 rounded-[14px] bg-slate-50/80 p-2">
              <IoIosArrowBack
                size={40}
                className="hidden cursor-pointer rounded-full bg-white p-2 text-slate-600 shadow-sm lg:inline-block"
              />
              <div className="relative flex w-full flex-wrap gap-[8px] overflow-x-auto py-[6px] font-montserrat text-[15px] font-semibold text-slate-700 sm:justify-center lg:gap-[12px]">
                {SchoolSubjectList.map((item, index) => {
                  const isActive = selectedProgram === item;

                  return (
                    <button
                      className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out"
                      style={
                        isActive
                          ? {
                              borderColor: "#3b82f6",
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                              color: "#3b82f6",
                              boxShadow: "0 1px 2px rgba(15, 23, 42, 0.08)",
                            }
                          : {
                              borderColor: "transparent",
                              backgroundColor: "#ffffff",
                              color: "#334155",
                            }
                      }
                      onClick={() => {
                        setSelectedProgram(item);
                      }}
                      key={index}
                      type="button"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              <IoIosArrowForward
                size={40}
                className="hidden cursor-pointer rounded-full bg-white p-2 text-slate-600 shadow-sm lg:inline-block"
              />
            </div>

            {showInfo?.map((item, index) => (
              <div
                className="flex h-fit w-full flex-col items-center gap-[16px] rounded-[16px] border border-slate-100 bg-slate-50/70 p-3 sm:p-4 lg:flex-row lg:items-start"
                key={index}
              >
                <div className="relative w-full overflow-hidden rounded-[14px] lg:w-2/5">
                  <img
                    src={imageRecord[item.image]}
                    alt="class image"
                    className="h-[240px] w-full rounded-[14px] object-cover sm:h-[280px]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-3">
                  <div className="flex flex-col gap-[8px]">
                    <h2 className="font-montserrat text-[22px] font-semibold leading-[1.2] text-slate-900">
                      {item?.subject}
                    </h2>
                    <div className="flex flex-col gap-[6px] text-sm leading-7 text-slate-600 sm:text-base">
                      <p>{item?.p1}</p>
                      <p>{item?.p2}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Stack>

      <section className=" flex flex-col gap-[24px]">
          <h1 className="relative pl-[8px] font-montserrat text-[32px] font-bold leading-[20px] text-black lg:pl-0 lg:text-[32px]">
            Short School Gallery
          </h1>
          <div className="w-full">
            <SwiperSlider data={slidesData} />
          </div>
        </section>
      {/** Thrird Section End here 

      
      <section className="flex w-full flex-col gap-[24px] px-[8px] lg:px-0">
        <h1 className="relative font-montserrat text-[32px] font-bold leading-[20px] text-black lg:text-[32px]">
            Announcements
          </h1>
          <Marquee className="px-[8px] lg:px-0" gradient={false} speed={50}>
        {
          TeacherRecognition.map((item, index: number)=>(
            <div className="" key={index}>
              <TeacherYearCard
                title={item.title}
                description={item.description}
                grade={item.grade}
                img={item.img}
                name={item.name}
                subject={item.subject}
              />
            </div>
          ))
        }
      </Marquee>
      </section>


      <Stack className="flex h-fit flex-col gap-[24px] px-[8px] lg:mx-0">
        <h1 className="text-start font-roboto text-[32px] font-bold leading-[30px] text-ptxtl lg:text-[32px]">
          Support Program
        </h1>
        <div className="flex flex-col items-start gap-[8px] md:flex-row">
          {MobileDisplayCardData.slice(0, 4).map((item, index: number) => (
            <MobileDisplayCard
              image={item.image}
              title={item.title}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </Stack>


      <Stack className="h-fit w-full py-[10px] ">
        <Marquee>
          {SchoolSubjectList.map((item) => (
            <p
              className="mx-4 font-nunito text-[14px] font-bold lg:text-[16px]"
              key={item}
            >
              {item}
            </p>
          ))}
        </Marquee>
      </Stack>


      <Stack>
        <section className="h-fit rounded-[30px] bg-default">
          <Footer container className="w-full bg-default">
            <div className="w-full text-center">
              <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                <FooterBrand
                  href="https://ilearnweb.onrender.com"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Flowbite Logo"
                  name="SOMPUKWANE"
                  className="font-bebasNeue"
                />
                <FooterLinkGroup>
                  <FooterLink href="#">About</FooterLink>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Licensing</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </FooterLinkGroup>
              </div>
              <FooterDivider />
              <FooterCopyright href="#" by="SOMPUKWANE™" year={2025} />
            </div>
          </Footer>
        </section>
      </Stack>
    </section>

 what is iLearn?
Trust & Conectivity: iLearn is a secure software platform that
                unifies mobile, desktop, and web technologies into a single
                ecosytem for seamless school management.
<section className="mobile-only relative my-[50px] h-[50vh] overflow-hidden rounded-[10px] border bg-[#d9d9d9] px-[50px] md:hidden">
        <img
          src={mission}
          alt="Test"
          className="h-[50vh] w-full object-fill brightness-90"
        />
        <section className="scroll-container absolute inset-0 h-full w-full gap-[5px] overflow-y-scroll px-[5px]">
          {MobileOnlySectionData1.map((item, index: number) => (
            <Stack spacing={1} key={index}>
              <MobileOnlySection list={item?.list} title={item?.title} />
            </Stack>
          ))}
        </section>
      </section>
<Stack className="flex flex-col md:flex-row border">
          {/* details information *
          <Stack
            spacing={1}
            className="absolute z-10 lg:left-[60px]"
            style={{top:(vw > 400 ? vh*0.2 : vh*0.1)}}
          >
            <h3
              style={{}}
              className={`relative md:w-[335px] font-popins text-[14px] md:text-[18px] text-defaultGreenHsl font-semibold drop-shadow-[0px_0px_5px_white]`}
            >
              SHAPING MINDS, BUILDING FUTURES
            </h3>
            <h1
             style={{ lineHeight: 1 }}
              className={`relative md:w-[600px] bg-gradient-to-r from-defaultYellow to-defaultGreen bg-clip-text z-10 font-bebasNeue text-transparent text-[80px] drop-shadow-[0px_0px_5px_rgba(0,0,0,3)]`}
            >
              Empowering Tomorrow’s Innovators 
            </h1>
            <p className="h-fit md:w-[601px] text-wrap font-popins text-[18px] text-default drop-shadow-[0px_0px_5px_rgba(0,0,0,3)]">
              Join a community where academic excellence meets personal growth
            </p>
            {/* buttons stack 
            <Stack
              direction={"row"}
              spacing={2}
              alignContent={"center"}
              className="relative top-[20px]"
            >
              <Button
                className={`w-fit rounded-full bg-defaultYellow font-roboto text-[15px] font-bold text-black transition-all duration-300 ease-in-out hover:bg-defaultGreen hover:text-default`}
                onClick={() => navigate("/signup")}
              >
                REGISTER NOW
              </Button>
              <Button
                className="items-center rounded-full bg-transparent font-roboto text-[12px] text-black transition-all duration-300 ease-in-out hover:text-default"
                onClick={() => navigate("/signin")}
              >
                iLearn web <FaChevronRight size={12} />
              </Button>
            </Stack>
            {/* buttons stack 

            {/* icon 
            <Stack
              direction={"row"}
              spacing={2}
              className="relative hidden md:inline-block top-[50px]"
            >
              <Stack
                direction={"row"}
                spacing={1}
                alignItems={"center"}
                className="drop-shadow-[0px_0px_5px_rgba(0,0,0,3)] hidden"
              >
                <TbCash size={20} className="text-default" />
                <p className="font-popins flex-nowrap text-[16px] text-default">
                  Commerce Studies
                </p>
              </Stack>
              <Stack
                direction={"row"}
                spacing={1}
                alignItems={"center"}
                className="drop-shadow-[0px_0px_5px_rgba(1,3,2,3)] flex-nowrap"
              >
                <LuDrama size={20} className="text-default" />
                <p className="font-popins text-[16px] text-default">
                  Drama Studies
                </p>
              </Stack>
              <Stack
                direction={"row"}
                spacing={1}
                alignItems={"center"}
                className="drop-shadow-[0px_0px_5px_rgba(0,0,0,3)]"
              >
                <GiMaterialsScience size={20} className="text-default" />
                <p className="font-popins text-[16px] text-default flex-nowrap">
                  Science Studies
                </p>
              </Stack>
            </Stack>
            

          </Stack>
          {/* image right 
          <Stack className={`absolute sm: bottom-0  lg:right-0 hidden md:block h-[50vh]`}>
            <SvgHeroImage />
          </Stack>
        </Stack>


<Stack
            //sx={{ width: width * 0.5 }}
            className={` text-start z-10 text-wrap`}
            spacing={2}
          >
            
            <Stack spacing={0.5}>
              <h1 className="font-popins text-[18px] lg:text-[20px] font-semibold text-ptxtd drop-shadow-[0px_0px_5px_rgba(0,0,0,3)]">
                Citizenship & Leadership
              </h1>
              <Stack spacing={0.2} className="pl-[5px]">
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd drop-shadow-[0px_0px_5px_rgba(0,0,0,3)]">
                  Promote community service and civic responsibility.
                </p>
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd drop-shadow-[0px_0px_5px_rgba(0,0,0,3)]">
                  Create leadership opportunities and student voice.
                </p>
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd drop-shadow-[0px_0px_5px_rgba(0,0,0,3)]">
                  Teach ethical decision-making and digital citizenship.
                </p>
              </Stack>
            </Stack>
        </Stack>
<Stack className="absolute inset-0 overflow-y-scroll">
          <Stack spacing={0.5}>
              <h1 className="font-roboto text-[18px] lg:text-[20px] font-semibold text-ptxtd">
                Academic Excellence
              </h1>
              <Stack spacing={0.2} className="pl-[5px]">
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd">
                  Deliver a rigorous, standards-aligned curriculum.
                </p>
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd">
                  Provide high-quality, research-based instruction.
                </p>
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd">
                  Provide high-quality, research-based instruction.
                </p>
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd">
                  Monitor progress with regular assessments.
                </p>
              </Stack>
            </Stack>
          <Stack spacing={0.5} className="z-10">
              <h1 className="font-roboto z-10 text-[18px] lg:text-[20px] font-semibold text-ptxtd">
                Holistic Development
              </h1>
              <Stack spacing={0.2} className="pl-[5px]">
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd">
                  Offer diverse extracurricular and arts programs.
                </p>
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd">
                  Build life skills: critical thinking, communication,
                  collaboration.
                </p>
                <p className="pl-[10px] font-popins text-[14px] lg:text-[16px] text-ptxtd">
                  Support student mental and physical wellbeing.
                </p>
              </Stack>
            </Stack>
        </Stack>
<div className="containerh h-[400px] ">
          <Swiper
            modules={[Pagination]}
            grabCursor={false}
            initialSlide={0}
            centeredSlides
            slidesPerView={"auto"}
            speed={1000}
            slideToClickedSlide
            pagination={{ clickable: true }}
            breakpoints={{
              320: { spaceBetween: 40, width: vw },
              650: { spaceBetween: 30 },
              1000: { spaceBetween: 20 },
            }}
            onSwiper={(swiper) => {
              swiperWrapperReff.current = swiper.wrapperEl;
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            autoFocus={true}
          >
            {slidesData.map((img, index) => (
              <SwiperSlide key={index} className="border">
                <img
                  src={img.imgurl}
                  alt="slide_image"
                  className="slide-image"
                />
                <div className="title">
                  <h1 className=" font-bebasNeue bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-[18px] md:text-[24px] sm:text-center">{img.title}</h1>
                </div>
                <div className="content">
                  <div className="text-box font-montserrat">
                    <p className="">{img.description}</p>
                  </div>
                  <div className="footer">
                    <div className="category">
                      {img.category.map((item, index) => (
                        <span className="font-bebasNeue text-[16px]" key={index}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


<Stack
              className="slider-controler relative"
              justifyContent={"center"}
            >
              <div className="swiper-button-prev absolute top-[-50px] slider-arrow cursor-pointer  rounded-full border bg-default">
                <FaChevronLeft size={12} className="absolute top-0" />
              </div>
              <div className="swiper-button-next slider-arrow mt-[10px] cursor-pointer">
                <FaChevronRight size={20} className="" />
              </div>
              <div className="swiper-pagination bottom-[10px] w-[250px] h-[20px] self-center justify-center overflow-hidden border"></div>
            </Stack>
first:
Classrooms are the heart of learning, where students engage with
              teachers, participate in discussions, and explore new ideas. A
              well-structured classroom fosters creativity, discipline, and
              knowledge-sharing. Interactive lessons encourage students to think
              critically and collaborate effectively. Teachers play a crucial
              role in shaping young minds, guiding students through various
              subjects and real-life applications. Technology-enhanced learning,
              group projects, and hands-on experiments make lessons more
              engaging. Classroom environments should be welcoming, inclusive,
              and supportive, ensuring that every student thrives. By fostering
              curiosity, discipline, and teamwork, classrooms become places of
              inspiration, growth, and academic excellence, preparing students
              for a successful future.
 */

/*
                  
                <Stack
                  direction={"row"}
                  spacing={2}
                  alignContent={"end"}
                  alignItems={"center"}
                  className="hidden md:flex"
                >
                  <Stack spacing={0.5} className="hidden md:block">
                    <img
                      src={Class_2}
                      alt="photo 2"
                      className="h-[226px] w-[407px] rounded-[10px] object-cover"
                    />
                    <p className="text-nowrap object-fill font-popins text-[15px] text-ptxtd">
                      Student Meeting
                    </p>
                  </Stack>

                  <Stack spacing={0.5} className="hidden md:block">
                    <img
                      src={Class_3}
                      alt="PHOTO 3"
                      className="h-[226px] w-[407px] rounded-[10px] object-cover"
                    />
                    <p className="object-fill font-popins text-[15px] text-ptxtd">
                      Mathematics
                    </p>
                  </Stack>

                  <Stack spacing={0.5} className="hidden md:block">
                    <img
                      src={Class_4}
                      alt=""
                      className="h-[226px] w-[407px] rounded-[10px] object-cover"
                    />
                    <p className="object-fill font-popins text-[15px] text-ptxtd">
                      Sciences
                    </p>
                  </Stack>
                </Stack>
                /* second section only visible on desktop pictures pictures above 

                <Box sx={{ height: "100%", overflow: "auto" }} className="h-screen">
      <Stack className="h-screen">
        <Stack className="h-fit w-full bg-[#D9D9D9] md:min-h-screen">
          <Header />
          <img
            src={Hero}
            alt="Hero Image"
            className="w-full rounded-b-[0px] object-cover md:h-screen"
          />
          <div className=" left-0 right-0 top-[100px]">
            <h2 className="ml-10 hidden bg-clip-text font-pacifico text-[30px] uppercase text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,3)] md:inline-block">
              Welcome
            </h2>
            <h1 className="text-wrap bg-gradient-to-r from-defaultYellowHsl to-defaultGreenHsl  bg-clip-text text-center font-bebasNeue text-[40px] font-bold uppercase text-transparent drop-shadow-[5px_5px_0px_rgba(1,2,5,3)] md:ml-10 md:text-[102px]">
              sompukwane secondary school
            </h1>
            <div className="relative bottom-[0px]  flex items-center justify-center md:top-[200px]">
              <Button
                gradientDuoTone={"tealToLime"}
                outline
                className="w-fit font-popins font-bold uppercase"
                onClick={() => navigate("/signup")}
              >
                Register on in just few minutes.
              </Button>
            </div>
          </div>
        </Stack>
       second section visible on both. 
        <Stack className="h-fit w-full bg-[#D9D9D9] px-[10px] py-[10px]">
          {/* first 
          <Stack
            direction={"row"}
            className="flex h-fit w-full flex-col items-center justify-center md:flex-row md:pt-[56px]"
          >
            <Stack spacing={1} className="">
              <h1 className="text-center font-roboto text-[18px] font-semibold text-black md:hidden md:px-[0px] md:text-start">
                Class Rooms Highlights
              </h1>
              <Stack spacing={2}>
                <h1 className="hidden font-roboto text-[18px] font-semibold text-ptxtl lg:block">
                  Class room highlights
                </h1>
                <Stack
                  direction={"row"}
                  alignContent={"center"}
                  alignItems={"end"}
                  justifyContent={"space-between"}
                  spacing={2}
                >
                  <p className="h-fit w-fit text-wrap px-[10px] text-start font-popins text-[12px] text-ptxtd transition-all duration-500 ease-in-out md:w-[700px] md:text-start md:text-[15px]">
                    Classrooms are the heart of learning, where students engage
                    with teachers, participate in discussions, and explore new
                    ideas. A well-structured classroom fosters creativity,
                    discipline, and knowledge-sharing. Interactive lessons
                    encourage students to think critically and collaborate
                    effectively. Teachers play a crucial role in shaping young
                    minds, guiding students through various subjects and
                    real-life applications. Technology-enhanced learning, group
                    projects, and hands-on experiments make lessons more
                    engaging. Classroom environments should be welcoming,
                    inclusive, and supportive, ensuring that every student
                    thrives. By fostering curiosity, discipline, and teamwork,
                    classrooms become places of inspiration, growth, and
                    academic excellence, preparing students for a successful
                    future.
                  </p>
                  <img
                    src={class_1}
                    alt="photo"
                    className="hidden w-fit rounded-[10px] object-cover transition-all duration-500 ease-in-out md:block md:h-[226px] md:w-[450px]"
                  />
                </Stack>
              </Stack>
              {/* only visible on mobile 
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                className="w-full py-[10px] md:hidden"
              >
                <Carousel
                  className="h-[226px] w-full rounded-[10px] border object-cover md:hidden"
                  slide={true}
                >
                  <img
                    src={class_2}
                    alt="photo 2"
                    className="h-[400px] rounded-[10px] object-cover "
                  />
                  <img
                    src={class_3}
                    alt="PHOTO 3"
                    className="h-[400px] rounded-[10px] object-cover "
                  />
                  <img
                    src={class_4}
                    alt=""
                    className="h-[400px] rounded-[10px] object-cover "
                  />
                </Carousel>
              </Stack>
              {/* above visible on mobile 
            </Stack>
          </Stack>
        </Stack>
        <Stack className=" hidden h-[450px] items-center justify-evenly bg-[#D9D9D9] md:hidden">
          <Carousel className="hidden h-[226px] w-full px-[10px]">
            <img
              src={Class_2}
              alt="photo 2"
              className="h-[226px] rounded-[10px] object-cover "
            />
            <img
              src={Class_3}
              alt="PHOTO 3"
              className="h-[226px] rounded-[10px] object-cover "
            />
            <img
              src={Class_4}
              alt=""
              className="h-[226px] rounded-[10px] object-cover "
            />
          </Carousel>
        </Stack>
        ``
        <section className="gap flex h-fit w-full flex-col bg-[#FFFFFF] pb-[10px]">
          <h1 className="text-wrap py-5 text-center font-popins  text-[30px] font-semibold uppercase text-ptxtl underline ">
            Student Support Program
          </h1>
          <section className="flex w-full flex-col gap-[20px]">
            <div className="flex w-full flex-col items-center justify-evenly gap-[20px] pb-[10px] text-center md:flex-row md:gap-0 md:pb-0 md:text-start ">
              <img
                src={Special}
                alt="photo"
                className="hidden h-[253px] w-full rounded-[10px] object-cover md:block md:w-[407px]"
              />
              <div className="font-robot h-fit text-wrap px-[10px] text-[12px] text-black transition-all duration-500 ease-in-out md:w-[407px] md:px-0 md:text-[14px]">
                The Student Support Program plays a vital role in ensuring that
                every learner receives the necessary resources and guidance to
                succeed academically and personally. This initiative provides
                mentorship, educational materials, and financial assistance to
                students in need. Dedicated teachers and staff work closely with
                learners to identify challenges and offer solutions that foster
                a positive learning environment. By addressing academic
                struggles, emotional well-being, and financial hardships, the
                program ensures that no student is left behind. Through
                workshops, tutoring, and counseling, students gain the
                confidence and skills needed to excel in their studies and
                future careers.
              </div>
              <div className=" w-full px-[10px] md:hidden md:px-0">
                <Carousel
                  className="h-[253px] w-full rounded-[10px] object-cover md:hidden"
                  slide={true}
                >
                  <img
                    src={Special}
                    alt="photo"
                    className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                  />
                  <img
                    src={SS1}
                    alt="photo"
                    className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                  />
                  <img
                    src={SS2}
                    alt="photo"
                    className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                  />
                  <img
                    src={SS3}
                    alt="photo"
                    className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                  />
                  <img
                    src={SS4}
                    alt="photo"
                    className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                  />
                </Carousel>
              </div>
              <div className="font-robot h-fit text-wrap px-[10px] text-[12px] text-black transition-all duration-500 ease-in-out md:w-[407px] md:px-0 md:text-[14px]">
                Beyond academics, the Student Support Program encourages
                holistic development by promoting extracurricular activities and
                community engagement. Students participate in leadership
                training, social responsibility projects, and skill-building
                workshops that prepare them for real-world challenges. The
                program also facilitates partnerships with organizations and
                sponsors to provide scholarships, school supplies, and career
                guidance. By fostering a culture of inclusion and empowerment,
                students feel motivated to strive for excellence. This
                initiative not only enhances individual growth but also
                strengthens the entire school community, ensuring that every
                student has an equal opportunity to thrive and reach their full
                potential.
              </div>
            </div>
            <div className=" hidden flex-col items-center justify-evenly gap-[20px] pb-[10px] text-center md:flex md:flex-row md:gap-0 md:pb-0 md:text-start">
              <div className="font-robot h-fit text-wrap px-[10px] text-[12px] text-black transition-all duration-500 ease-in-out md:w-[407px] md:px-0 md:text-[14px]">
                The Student Support Program is designed to empower every learner
                by providing academic, emotional, and personal guidance. Our
                dedicated staff works hand in hand with students to identify
                challenges early and create practical solutions that lead to
                success. From extra tutoring and mentorship to workshops and
                counseling, the program ensures that no learner is left behind.
                By equipping students with confidence, resilience, and the right
                resources, we help them grow into well-rounded individuals who
                are ready to succeed in their studies and future careers.
              </div>
              <div className="px-[10px] transition-all duration-500 ease-in-out md:px-0">
                <img
                  src={SS1}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
              </div>
              <div className="px-[10px] transition-all duration-500 ease-in-out md:px-0">
                <img
                  src={SS2}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
              </div>
            </div>
          </section>
        </section>
        <section className="h-fit bg-[#D9D9D9] py-[10px] md:h-fit">
          <h1 className="px-[10px] text-center font-popins text-[30px] font-semibold uppercase text-black underline md:px-0 md:pb-[20px]">
            Sport Activities
          </h1>
          <section className="flex flex-col gap-[22px] pb-[10px] md:pb-0">
            <div className="flex flex-col items-center justify-center gap-8 text-center  md:flex-row md:text-start">
              <div className="hidden px-[10px] transition-all duration-500 ease-in-out md:block md:px-0">
                <img
                  src={Sport_Boys_Team}
                  alt="photo"
                  className="hidden h-[253px] w-full rounded-[10px] object-cover md:block md:w-[407px]"
                />
              </div>

              <div className="">
                <h1 className="font-popins text-[18px] font-semibold text-black">
                  Summary
                </h1>
                <p className="font-robot h-fit px-[10px] text-[12px] text-black transition-all duration-500 ease-in-out md:w-[700px] md:px-0 md:text-[14px]">
                  School Sport Activities are essential in promoting teamwork,
                  discipline, and physical well-being among students. Our school
                  offers a variety of sports, including netball, soccer,
                  athletics, and more, allowing learners to develop their skills
                  and compete at different levels. These activities provide an
                  opportunity for students to build confidence, learn
                  sportsmanship, and stay active. Dedicated coaches and teachers
                  guide students in training sessions and tournaments, ensuring
                  they reach their full potential. By participating in sports,
                  students not only enhance their fitness but also create
                  lasting friendships and memories. Our school takes pride in
                  nurturing young athletes for future success.
                </p>
              </div>
            </div>
            <div className=" w-full px-[10px] md:hidden">
              <Carousel
                className="h-[253px] w-full rounded-[10px] object-cover md:hidden"
                slide={true}
              >
                <img
                  src={SA1}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
                <img
                  src={SA2}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
                <img
                  src={SA3}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
                <img
                  src={SS3}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
                <img
                  src={SS4}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
              </Carousel>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 text-center  md:flex-row md:text-start">
              <div className="">
                <p className="font-robot h-fit px-[10px] text-[12px] text-black transition-all duration-500 ease-in-out md:w-[700px] md:px-0 md:text-[14px]">
                  Beyond regular training, our school emphasizes participation
                  in regional and national tournaments where learners can
                  showcase their abilities against strong competitors. These
                  experiences broaden their horizons and expose them to diverse
                  sporting cultures. We also provide leadership opportunities
                  through team captaincy, peer mentoring, and sports committees,
                  helping students grow in responsibility and confidence.
                  Special recognition is given to outstanding athletes during
                  school assemblies and awards evenings, motivating others to
                  strive for excellence. With access to well-maintained
                  facilities and modern equipment, learners train in a safe,
                  supportive environment. Our approach ensures that sports
                  remain not just recreational, but also a platform for personal
                  growth, achievement, and lifelong healthy habits.
                </p>
              </div>
              <div className="hidden px-[10px] transition-all duration-500 ease-in-out md:inline-block md:px-0">
                <Carousel
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                  slide={true}
                >
                  <img
                    src={SA1}
                    alt="photo"
                    className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                  />
                  <img
                    src={SA2}
                    alt="photo"
                    className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                  />
                  <img
                    src={SA3}
                    alt="photo"
                    className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                  />
                </Carousel>
              </div>
            </div>
          </section>
        </section>
        <section className="gap flex h-fit flex-col bg-[#FFFFFF] py-[10px] md:h-fit">
          <h1 className="pb-[10px] text-center font-popins text-[30px] font-semibold uppercase text-black underline">
            Spacial Events
          </h1>
          <div className="flex flex-col items-center justify-evenly gap-[10px] md:flex-row">
            <div className="font-robot h-fit text-wrap px-[10px] text-center text-[12px] text-black transition-all duration-500 ease-in-out md:w-[407px] md:px-0 md:text-[14px] ">
              School Special Events play a vital role in bringing students,
              teachers, and the community together to celebrate achievements,
              culture, and creativity. Our school hosts various events,
              including annual prize-giving ceremonies, cultural days, talent
              shows, and academic fairs. These occasions provide students with a
              platform to showcase their talents, develop leadership skills, and
              foster teamwork. Special events also encourage student engagement,
              making learning more enjoyable and interactive. Whether it's a
              sports day, a fundraising event, or a career expo, each occasion
              helps shape well-rounded individuals. We take pride in organizing
              memorable events that inspire and empower our students for the
              future.
            </div>
            <div className="hidden px-[10px] md:inline-block md:px-0">
              <Carousel className="h-[253px] w-[407px] rounded-[10px] object-cover">
                <img
                  src={Activity_1}
                  alt="photo"
                  className="h-[303px] w-full rounded-[10px] object-cover md:w-[407px] "
                />
                <img
                  src={Activity_2}
                  alt="photo"
                  className="h-[303px] w-full rounded-[10px] object-cover md:w-[407px] "
                />
              </Carousel>
            </div>
            <div className=" w-full px-[10px] md:hidden md:px-0">
              <Carousel
                className="h-[253px] w-full rounded-[10px] object-cover md:hidden"
                slide={true}
              >
                <img
                  src={Special}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
                <img
                  src={Activity_1}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
                <img
                  src={Activity_2}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
                <img
                  src={SS3}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
                <img
                  src={SS4}
                  alt="photo"
                  className="h-[253px] w-full rounded-[10px] object-cover md:w-[407px]"
                />
              </Carousel>
            </div>
            <div className="font-robot h-fit text-wrap px-[10px] text-center text-[12px] text-black transition-all duration-500 ease-in-out md:w-[407px] md:px-0 md:text-[14px]">
              In addition to school-wide celebrations, we actively involve
              parents and local organizations in our events, strengthening the
              bond between school and community. Students are encouraged to take
              part in planning and organizing, giving them real-world experience
              in teamwork, event management, and leadership. Guest speakers,
              alumni, and professionals are often invited to inspire learners
              with stories of success and resilience. These interactions expose
              students to different career paths and cultural perspectives,
              broadening their understanding of the world beyond the classroom.
              Our events are carefully designed to be inclusive, ensuring every
              learner has a chance to shine, whether through performance,
              creativity, or service. By celebrating diversity and achievement,
              we cultivate an environment where every student feels valued and
              motivated to reach their full potential.
            </div>
          </div>
        </section>
        <section className="h-fit bg-[#D9D9D9]">
          <Footer container className="w-full bg-[#D9D9D9]">
            <div className="w-full text-center">
              <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                <FooterBrand
                  href="https://ilearnweb.onrender.com"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Flowbite Logo"
                  name="SOMPUKWANE"
                  className="font-bebasNeue"
                />
                <FooterLinkGroup>
                  <FooterLink href="#">About</FooterLink>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Licensing</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </FooterLinkGroup>
              </div>
              <FooterDivider />
              <FooterCopyright href="#" by="SOMPUKWANE™" year={2025} />
            </div>
          </Footer>
        </section>
      </Stack>
    </Box>
*/
