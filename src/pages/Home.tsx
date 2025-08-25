// import { useState , useEffect} from "react";
// import image1 from "../assets/images1.jpg";
// import { motion } from "framer-motion"
import Hero from "../assets/Heros/Hero_1.jpg"
import Header from "../components/Header";
import { Button, Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Class_1 from "../assets/Heros/Class_1.jpg"
import Class_2 from "../assets/Heros/Class_2.jpg"
import Class_3 from "../assets/Heros/Class_3.jpg"
import Class_4 from "../assets/Heros/Class_4.jpg"


export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="h-screen">
      <div className="h-fit w-full bg-[#D9D9D9] md:min-h-screen">
        <Header />
        <img
          src={Hero}
          alt="Hero Image"
          className="w-full rounded-b-[30px] object-cover md:h-screen"
        />
        <div className="absolute left-0 right-0 top-[100px]">
          <h2 className="ml-10 hidden bg-clip-text font-pacifico text-[30px] uppercase text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,3)] md:inline-block">
            Welcome
          </h2>
          <h1 className="text-wrap bg-gradient-to-r from-yellow-300 to-green-400 bg-clip-text text-center font-bebasNeue text-[40px] font-bold uppercase text-transparent drop-shadow-[5px_5px_0px_rgba(0,0,0,3)] md:ml-10 md:text-[102px]">
            sompukwane secondary school
          </h1>
          <div className="relative top-[40px] flex items-center justify-center md:top-[200px]">
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
      </div>
      <section className="h-fit bg-[#D9D9D9] py-[10px]">
        <h1 className="text-center font-bebasNeue text-[30px] text-black">
          Explore our School activities
        </h1>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:pt-[56px]">
          <div className="">
            <h1 className="text-center font-popins text-[18px] font-semibold text-black underline md:px-[10px] md:text-start">
              Class Rooms Highlights
            </h1>
            <p className="h-fit w-fit text-wrap px-[10px] text-center font-robot text-[12px] text-black transition-all duration-500 ease-in-out md:w-[700px] md:text-start md:text-[18px]">
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
            </p>
          </div>
          <div className="px-[10px] transition-all duration-500 ease-in-out">
            <img
              src={Class_1}
              alt="photo"
              className="w-fit rounded-[10px] transition-all duration-500 object-contain ease-in-out md:h-[303px] md:w-[407px]"
            />
          </div>
        </div>
      </section>
      <section className="hidden h-fit items-center justify-evenly bg-[#D9D9D9] py-[10px] md:flex">
        <div className="">
          <img
            src={Class_2}
            alt="photo 2"
            className=" h-[253px] w-[407px] object-fill rounded-[10px]"
          />
          <p className="pt-2 font-robot text-[12px] text-black">
            Student Meeting
          </p>
        </div>
        <div className="">
          <img
          src={Class_3}
            alt="PHOTO 3"
            className="h-[253px] w-[407px] object-fill rounded-[10px] "
          />
          <p className="object-fill pt-2 font-robot text-[12px] text-black">
            Mathematics
          </p>
        </div>
        <div className="">
          <img
            src={Class_4}
            alt=""
            className="h-[253px] w-[407px] rounded-[10px] object-fill "
          />
          <p className="pt-2 font-robot text-[12px] text-black">Sciences</p>
        </div>
      </section>
      <section className="h-[450px] items-center justify-evenly bg-[#D9D9D9] md:hidden">
        <Carousel className="h-full w-full px-[10px]">
          <img
            src="https://i.pinimg.com/736x/b1/32/86/b13286837396ba5f03bedc551d701954.jpg"
            alt="photo 2"
            className="h-[400px] rounded-[10px] object-cover "
          />
          <img
            src="https://i.pinimg.com/736x/52/cb/c7/52cbc79ccaadce4e326f8227fdd41f12.jpg"
            alt="PHOTO 3"
            className="h-[400px] rounded-[10px] object-cover "
          />
          <img
            src="https://i.pinimg.com/1200x/e4/5b/9c/e45b9cb765df30c0c694806539ba6bf5.jpg"
            alt=""
            className="h-[400px] rounded-[10px] object-cover "
          />
        </Carousel>
      </section>
      <section className="gap flex h-fit flex-col bg-[#FFFFFF] pb-[10px]">
        <h1 className="text-wrap py-5 text-center font-popins  text-[30px] font-semibold uppercase text-black underline ">
          Student Support Program
        </h1>
        <div className="flex flex-col items-center justify-evenly gap-[20px] pb-[10px] text-center md:flex-row md:gap-0 md:pb-0 md:text-start ">
          <div className="px-[10px] transition-all duration-500 ease-in-out md:px-0">
            <img
              src="https://i.pinimg.com/1200x/d9/89/88/d9898815d05b547c499cb55a8b6856cb.jpg"
              alt="photo"
              className="h-[253px] w-full rounded-[10px] object-fill md:w-[407px]"
            />
          </div>
          <div className="h-fit text-wrap px-[10px] font-robot text-[12px] text-black transition-all duration-500 ease-in-out md:w-[407px] md:px-0 md:text-[14px]">
            The Student Support Program plays a vital role in ensuring that
            every learner receives the necessary resources and guidance to
            succeed academically and personally. This initiative provides
            mentorship, educational materials, and financial assistance to
            students in need. Dedicated teachers and staff work closely with
            learners to identify challenges and offer solutions that foster a
            positive learning environment. By addressing academic struggles,
            emotional well-being, and financial hardships, the program ensures
            that no student is left behind. Through workshops, tutoring, and
            counseling, students gain the confidence and skills needed to excel
            in their studies and future careers.
          </div>
          <div className="h-fit text-wrap px-[10px] font-robot text-[12px] text-black transition-all duration-500 ease-in-out md:w-[407px] md:px-0 md:text-[14px]">
            Beyond academics, the Student Support Program encourages holistic
            development by promoting extracurricular activities and community
            engagement. Students participate in leadership training, social
            responsibility projects, and skill-building workshops that prepare
            them for real-world challenges. The program also facilitates
            partnerships with organizations and sponsors to provide
            scholarships, school supplies, and career guidance. By fostering a
            culture of inclusion and empowerment, students feel motivated to
            strive for excellence. This initiative not only enhances individual
            growth but also strengthens the entire school community, ensuring
            that every student has an equal opportunity to thrive and reach
            their full potential.
          </div>
        </div>
      </section>
      <section className="h-fit bg-[#D9D9D9] py-[10px] md:h-fit">
        <h1 className="px-[10px] text-center font-popins text-[30px] font-semibold uppercase text-black underline md:px-0 md:pb-[20px]">
          Explore our School Sport Activities
        </h1>
        <div className="flex flex-col items-center justify-center gap-8 text-center  md:flex-row md:text-start">
          <div className="px-[10px] transition-all duration-500 ease-in-out md:px-0">
            <img
              src="https://i.pinimg.com/1200x/fe/35/83/fe358315ebc20446ba4823dddd729e9a.jpg"
              alt="photo"
              className="h-[253px] w-full rounded-[10px] object-fill md:w-[407px]"
            />
          </div>
          <div className="">
            <h1 className="font-popins text-[18px] font-semibold text-black">
              Summary
            </h1>
            <p className="h-fit px-[10px] font-robot text-[12px] text-black transition-all duration-500 ease-in-out md:w-[700px] md:px-0 md:text-[14px]">
              School Sport Activities are essential in promoting teamwork,
              discipline, and physical well-being among students. Our school
              offers a variety of sports, including netball, soccer, athletics,
              and more, allowing learners to develop their skills and compete at
              different levels. These activities provide an opportunity for
              students to build confidence, learn sportsmanship, and stay
              active. Dedicated coaches and teachers guide students in training
              sessions and tournaments, ensuring they reach their full
              potential. By participating in sports, students not only enhance
              their fitness but also create lasting friendships and memories.
              Our school takes pride in nurturing young athletes for future
              success.
            </p>
          </div>
        </div>
      </section>
      <section className="gap flex h-fit flex-col bg-[#FFFFFF] py-[10px] md:h-fit">
        <h1 className="pb-[10px] text-center font-popins text-[30px] font-semibold uppercase text-black underline">
          Spacial Events
        </h1>
        <div className="flex flex-col items-center justify-evenly gap-[10px] md:flex-row">
          <div className="h-fit text-wrap px-[10px] text-center font-robot text-[12px] text-black transition-all duration-500 ease-in-out md:w-[407px] md:px-0 md:text-[14px] ">
            School Special Events play a vital role in bringing students,
            teachers, and the community together to celebrate achievements,
            culture, and creativity. Our school hosts various events, including
            annual prize-giving ceremonies, cultural days, talent shows, and
            academic fairs. These occasions provide students with a platform to
            showcase their talents, develop leadership skills, and foster
            teamwork. Special events also encourage student engagement, making
            learning more enjoyable and interactive. Whether it's a sports day,
            a fundraising event, or a career expo, each occasion helps shape
            well-rounded individuals. We take pride in organizing memorable
            events that inspire and empower our students for the future.
          </div>
          <div className="px-[10px] md:px-0">
            <img
              src="https://i.pinimg.com/1200x/28/79/9b/28799b4d1eee7c8aaf3e19cbbc53076d.jpg"
              alt="photo"
              className="h-[303px] w-full rounded-[10px] md:w-[407px] "
            />
          </div>
          <div className="px-[10px] md:px-0">
            <img
              src="https://i.pinimg.com/736x/54/a2/46/54a24661be4a7648c0ba22412dae8eec.jpg"
              alt="photo"
              className="h-[303px] w-full rounded-[10px]  md:w-[407px] "
            />
          </div>
        </div>
      </section>
      <section className="h-fit bg-[#D9D9D9]">
        <span className="font-poppins text-[12px] text-black">
          &#169; 2023 School Name. All Rights Reserved.
        </span>
      </section>
    </section>
  );
}