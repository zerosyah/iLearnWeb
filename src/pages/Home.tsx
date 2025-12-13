// import { useState , useEffect} from "react";
// import image1 from "../assets/images1.jpg";
// import { motion } from "framer-motion"
import Hero from "../assets/Heros/Hero_1.webp"
import Header from "../components/Header";
import {
  Button,
  Carousel,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Class_2 from "../assets/Heros/Class_2.jpg"
import Class_3 from "../assets/Heros/Class_3.jpg"
import Class_4 from "../assets/Heros/Class_4.jpg"
import Special from "../assets/Heros/Special_1.jpg"
import Sport_Boys_Team from "../assets/Heros/Sport_Boys_Team.jpg"
import Activity_1 from "../assets/Heros/Activity_1.jpg"
import Activity_2 from "../assets/Heros/Activity_2.jpg"
import SS1 from "../assets/Heros/SSP/Hoolywood_SSP.jpg";
import SS2 from "../assets/Heros/SSP/SSP2.jpg";
import SS3 from "../assets/Heros/SSP/SS3.jpg";
import SS4 from "../assets/Heros/SSP/SS4.jpg";
import SA1 from "../assets/Heros/SA/SA1.jpg";
import SA2 from "../assets/Heros/SA/SA2.jpg";
import SA3 from "../assets/Heros/SA/SA3.jpg";
import { Box, Stack } from "@mui/material";
import {class_1, class_2, class_3, class_4 } from "../Constants/Assets"


export default function Home() {
  const navigate = useNavigate();
  return (
    <Box sx={{ height: "100%", overflow: "auto" }} className="scroll-container h-screen">
      <Stack className="h-screen">
          <Header />
        <Stack className="h-fit w-full bg-[#D9D9D9] md:min-h-screen">
          <img
            src={Hero}
            alt="Hero Image"
            className="w-full rounded-b-[0px] object-cover md:h-screen"
          />
          <div className="absolute left-0 right-0 top-[100px]">
            <h2 className="ml-10 hidden bg-clip-text font-pacifico text-[30px] uppercase text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,3)] md:inline-block">
              Welcome
            </h2>
            <h1 className="from-defaultYellowHsl to-defaultGreenHsl text-wrap bg-gradient-to-r  bg-clip-text text-center font-bebasNeue text-[40px] font-bold uppercase text-transparent drop-shadow-[5px_5px_0px_rgba(1,2,5,3)] md:ml-10 md:text-[102px]">
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
        {/* second section visible on both. */}
        <Stack className="h-fit w-full bg-[#D9D9D9] px-[10px] py-[10px]">
          {/* first */}
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
              {/* only visible on mobile */}
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
              {/* above visible on mobile */}
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
  );
}

/*
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
*/
   