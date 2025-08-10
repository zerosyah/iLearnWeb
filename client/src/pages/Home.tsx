// import { useState , useEffect} from "react";
// import image1 from "../assets/images1.jpg";
// import { motion } from "framer-motion"
import Hero from "../assets/Heros/Hero_1.jpg"
import Header from "../components/Header";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="">
      <section
        className={`min-w-screen min-h-[720px]`}
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <div className=" mx-[40px] pt-[100px]">
          <h2 className="bg-clip-text font-pacifico text-[30px] uppercase text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,3)]">
            Welcome
          </h2>
          <h1 className=" space-[50px] w-fit text-pretty bg-gradient-to-r from-yellow-300 to-green-400 bg-clip-text font-bebasNeue text-[102px] font-bold uppercase text-transparent drop-shadow-[5px_5px_0px_rgba(0,0,0,3)]">
            sompukwane secondary school
          </h1>
        </div>
        <div className="relative flex animate-pulse items-center justify-center text-right">
          <img
            src="https://z-p3-scontent.fdur7-1.fna.fbcdn.net/v/t39.30808-6/473089070_596368299824292_6470818427490407713_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3q1kkP5iCYUNm-FhCFs5MuwXWDFia5HC7BdYMWJrkcLgTx21wSk5jVM5DRfENpYtUL2D92cz_l0G_tVkwE2Q8&_nc_ohc=p1JL7927jL4Q7kNvgHwADVf&_nc_oc=AdjUpyn5dhRr_0yQCa4cfCc_wo8EqJ2AazdusGqf4AT_tuKHIMe3DWUnZLxUZwr1JX8&_nc_zt=23&_nc_ht=z-p3-scontent.fdur7-1.fna&_nc_gid=Ah9DKyT20diBAgFcNm1HaMS&oh=00_AYD6WrXYpmaNcs3gp9cp_JkfcKXf8ON-n4w_urEi2z_TZg&oe=67BA5C28"
            alt=""
            className="w-300px] relative flex h-[300px] items-center justify-center rounded text-right opacity-50"
          />
        </div>
        <div className="mt-5 flex items-center justify-center px-5 text-[143px]">
          <Button
            gradientDuoTone={"tealToLime"}
            outline
            className="w-full font-popins font-bold uppercase"
            onClick={() => navigate("/signup")}
          >
            Register on in just few minutes.
          </Button>
        </div>
      </section>
      <section className="h-[501px] bg-[#D9D9D9] pt-4">
        <h1 className="text-center font-bebasNeue text-[40px] text-black">
          Explore our School activities
        </h1>
        <div className="pt[150px] flex items-center justify-center gap-8 pt-[56px]">
          <div className="">
            <h1 className="font-bigelowRules text-[32px] font-bold text-black">
              Class Rooms Highlights
            </h1>
            <p className="h-fit w-[700px] font-popins text-[17px] text-black">
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
          <div className="">
            <img
              src="https://i.pinimg.com/736x/d1/24/37/d124377275763f1644c8f97efd8fdb89.jpg"
              alt="photo"
              className="h-[303px] w-[407px] rounded-[10px]"
            />
          </div>
        </div>
      </section>
      <section className="flex h-[450px] items-center justify-evenly bg-[#D9D9D9]">
        <div className="">
          <img
            src="https://i.pinimg.com/736x/b1/32/86/b13286837396ba5f03bedc551d701954.jpg"
            alt="photo 2"
            className=" h-[303px] w-[407px] rounded-[10px] "
          />
          <p className="pt-2 font-popins text-black">Student Meeting</p>
        </div>
        <div className="">
          <img
            src="https://i.pinimg.com/736x/52/cb/c7/52cbc79ccaadce4e326f8227fdd41f12.jpg"
            alt="PHOTO 3"
            className="h-[303px] w-[407px] rounded-[10px] "
          />
          <p className="pt-2 font-popins text-black">Mathematics</p>
        </div>
        <div className="">
          <img
            src="https://i.pinimg.com/1200x/e4/5b/9c/e45b9cb765df30c0c694806539ba6bf5.jpg"
            alt=""
            className="h-[303px] w-[407px] rounded-[10px] "
          />
          <p className="pt-2 font-popins text-black">Sciences</p>
        </div>
      </section>
      <section className="gap flex h-[501px] flex-col bg-[#FFFFFF]">
        <h1 className="py-5 text-center font-bebasNeue text-[40px]  text-black ">
          Student Support Program
        </h1>
        <div className="flex items-center justify-evenly">
          <div className="">
            <img
              src="https://i.pinimg.com/1200x/d9/89/88/d9898815d05b547c499cb55a8b6856cb.jpg"
              alt="photo"
              className="h-[303px] w-[407px] rounded-[10px]"
            />
          </div>
          <div className="h-fit w-[407px] text-wrap font-popins text-[15px] text-black">
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
          <div className="h-fit w-[407px] text-wrap font-popins text-[15px] text-black">
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
      <section className="h-[501px] bg-[#D9D9D9] pt-4">
        <h1 className="text-center font-bebasNeue text-[40px] text-black">
          Explore our School Sport Activities
        </h1>
        <div className="pt[150px] flex items-center justify-center gap-8 pt-[56px]">
          <div className="">
            <img
              src="https://i.pinimg.com/1200x/fe/35/83/fe358315ebc20446ba4823dddd729e9a.jpg"
              alt="photo"
              className="h-[303px] w-[407px] rounded-[10px]"
            />
          </div>
          <div className="">
            <h1 className="font-bigelowRules text-[32px] font-bold text-black">
              Summary
            </h1>
            <p className="h-fit w-[700px] font-popins text-[17px] text-black">
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
      <section className="gap flex h-[501px] flex-col bg-[#FFFFFF]">
        <h1 className="py-5 text-center font-bebasNeue text-[40px] text-black">
          Spacial Events
        </h1>
        <div className="flex items-center justify-evenly">
          <div className="h-fit w-[407px] text-wrap font-popins text-[15px] text-black">
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
          <div className="">
            <img
              src="https://i.pinimg.com/1200x/28/79/9b/28799b4d1eee7c8aaf3e19cbbc53076d.jpg"
              alt="photo"
              className="h-[303px] w-[407px] rounded-[10px]"
            />
          </div>
          <div className="">
            <img
              src="https://i.pinimg.com/736x/54/a2/46/54a24661be4a7648c0ba22412dae8eec.jpg"
              alt="photo"
              className="h-[303px] w-[407px] rounded-[10px]"
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
