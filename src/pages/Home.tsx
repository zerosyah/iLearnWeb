import Header from "../components/Header";
import {
  Button,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { LuDrama } from "react-icons/lu";
import { TbCash } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { hero, m3d, mission, ss } from "../Constants/Assets"
import slidesData from "../Constants/Slides";
import { TeacherRecognition, MobileOnlySectionData1, SchoolSubjectList, MobileDisplayCardData } from "../Constants/EventLayout.json";
import test from "../assets/mobile/hero4.png"
import test2 from "../assets/mobile/hero6.jpg"
import test3 from "../assets/mobile/hero7.jpg"
import  {motion} from "framer-motion";

//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/effect-coverflow";
//@ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import "swiper/css/navigation";

//@ts-ignore
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import Marquee from "react-fast-marquee";
import SwiperSlider from "../components/SwiperSlider";
import TeacherYearCard from "../SvgComponents/TeacherYearCard";
import MobileOnlySection from "../components/MobileOnlySection";
import MobileDisplayCard from "../components/MobileDisplayCard";

//import {} from "../as"


export default function Home() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  // Use effect to update vw and vh on window resize
  useEffect(()=>{
    const onResize = ()=>{
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  })
  
  const swiperWrapperReff = useRef<any>(null);
  function adjustMargim() {
    const screenWidth = window.innerWidth;
    if (swiperWrapperReff.current) {
      swiperWrapperReff.current.style.marginLeft = screenWidth <= 520
        ?
        "0px"
        : screenWidth <= 650
          ?
          "-50px"
          : screenWidth <= 1000
            ?
            "-100px"
            : "-150px";
    }
  }

  // use effect to adjust margin on window resize of swiper wrapper
  useEffect(() => {
    adjustMargim();
    window.addEventListener("resize", adjustMargim);
    return () => window.removeEventListener("resize", adjustMargim);
  })
  
  const navigate = useNavigate();
  const List = ["Mathematics", "Science", "Commerce", "Drama", "History", "Geography", "Languages", "Physical Education", "Arts", "Computer Science", "Economics", "Psychology", "Sociology", "Philosophy", "Environmental Science", "Health Education", "Business Studies", "Accounting", "Media Studies", "Music"];

  //const responsiveTop => (vw > 400 ? vh*0.2 : vh*0.1);
  const phoneHeight = width < 430 ? height : height
  
  return (
    <div className="scroll-container h-screen w-full overflow-y-scroll px-[10px] bg-[#D9D9D9]">
      <Stack className={`relative h-full w-full bg-[#D9D9D9]`}>
        <Header />
        <Stack className="flex flex-col md:flex-row">
          {/* details information */}
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
              style={{ lineHeight: 0.8 }}
              className={`relative md:w-[600px] bg-gradient-to-r from-defaultYellow to-defaultGreen bg-clip-text z-10 font-bebasNeue text-transparent text-[80px] drop-shadow-[0px_0px_5px_rgba(0,0,0,3)]`}
            >
              Sompukwane Secondary School
            </h1>
            <p className="h-fit md:w-[601px] text-wrap font-popins text-[18px] text-default drop-shadow-[0px_0px_5px_rgba(0,0,0,3)]">
              Classrooms are the heart of learning, where students engage with
              teachers, participate in discussions, and explore new ideas. A
              well-structured classroom fosters creativity, discipline, and
              knowledge-sharing. Interactive lessons encourage students to think
              critically and collaborate effectively.
            </p>
            {/* buttons stack */}
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
            {/* buttons stack */}

            {/* icon */}
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
          {/* image right */}
          <Stack className={`absolute sm: bottom-0  lg:right-0 hidden md:block`}>
            <img
              src={hero}
              alt="hero image"
              style={{height: phoneHeight }}
              className={`w-full brightness-75`}
            />
          </Stack>
        </Stack>
      </Stack>
      {/* The first mobile only section */}
      <section className="mobile-only h-[50vh] md:hidden overflow-hidden bg-[#d9d9d9] relative my-[50px] px-[50px] rounded-[10px]">
        <img src={mission} alt="Test" className="w-full brightness-90 h-[50vh] object-fill" />
        <section className="scroll-container w-full gap-[5px] h-full absolute inset-0 overflow-y-scroll px-[5px]">
          {
            MobileOnlySectionData1.map((item, index:number)=>(
              <Stack spacing={1} key={index}>
              <MobileOnlySection list={item?.list} title={item?.title} />
            </Stack>
            ))
          }
        
        </section>
      </section>
      {/* The Slider section */}
      <Stack spacing={3} alignItems={"center"} className=" w-full h-fit pb-[20px]">
        <h1 className="text-left text-[40px] font-bold text-ptxtd">Our Programs</h1>
          <SwiperSlider data={slidesData} />
      </Stack>
      <section
        className="section-3 h-fit bg-[#D9D9D9] hidden md:inline-block relative pt-[20px] px-[50px] rounded-[10px]"
        //spacing={5}
        //justifyContent={"start"}
      >
        
        <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"end"} spacing={2} className="bg-[#D9D9D9]">
          
          <Stack
            sx={{ width: width * 0.45 }}
            className={`overflow-hidden z-10 text-start text-wrap drop-shadow-[0px_0px_10px_white]`}
            spacing={2}
          >
           {
            MobileOnlySectionData1.slice(0,2).map((item, index:number)=>(
              <Stack spacing={0.45} key={index}>
                <MobileOnlySection list={item?.list} title={item?.title} />
              </Stack>
            ))
           }
          </Stack>
          <img
            src={m3d}
            alt="test7"
            className=" rounded-[10px] bottom-0 object-center brightness-105 md:brightness-100 absolute md:relative"
            width={width*0.25}
          />
          <Stack
            sx={{ width: width * 0.45 }}
            className={`overflow-hidden z-10 text-start text-wrap`}
            spacing={2}
          >
           {
            MobileOnlySectionData1.slice(2,4).map((item, index:number)=>(
              <Stack spacing={0.5} key={index}>
                <MobileOnlySection list={item?.list} title={item?.title} />
              </Stack>
            ))
           }
          </Stack>
        </Stack>
      </section>
      {/* mobile only section */}
      <Stack className="h-fit bg-[#D9D9D9] py-[10px]" spacing={2}>
          <Marquee speed={30} className="py-[10px]">
            {
              TeacherRecognition.map((item:any, index:number)=>(
                <TeacherYearCard
                  title={item.title}
                  name={item.name}
                  subject={item.subject}
                  grade={item.grade}
                  description={item.description}
                  img={item.img}
                  key={index}
                />
              ))
            }
          </Marquee>
      </Stack>
      <Stack className="h-fit bg-[#D9D9D9] pt-[10px]">
        <h1 className="pt-[10px] text-center font-roboto text-[20px] lg:text-[40px] font-bold uppercase text-ptxtl">
          Student Support Program
        </h1>
        <div className="flex flex-col md:flex-row gap-5 md:gap-5 justify-center items-center py-[20px]">
          {
            MobileDisplayCardData.slice(0, 4).map((item, index:number)=>(
              <MobileDisplayCard image={item.image} title={item.title} description={item.description} key={index} />
            ))
          }
        </div>
      </Stack>
      <Stack className="bg-[#D9D9D9] w-full h-fit py-[10px] ">
        <Marquee>
          {SchoolSubjectList.map((item) => (
            <p className="mx-4 text-[14px] lg:text-[16px] font-nunito font-bold" key={item}>
              {item}
            </p>
          ))}
        </Marquee>
      </Stack>

      <Stack>
        <section className="h-fit bg-default rounded-[30px]">
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
    </div>
  );
}



/*
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
   