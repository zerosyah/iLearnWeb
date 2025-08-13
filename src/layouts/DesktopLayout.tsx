//import React from 'react'
//import Hero from "../assets/Heros/Hero_1.jpg"
import DashSideBar from '../components/DashSideBar';

export default function DesktopLayout() {
    return (
      // the Main section opening tag below this line
      <section className="MAIN flex h-full w-full justify-start gap-[2%] p-[3%]">
        {/* the Main section opening tag above this line */}

        {/* the sidebar section opening tag below tis line */}
        <section className="h-fit w-[20%] rounded-[10px]  ">
          {/* the sidebar section opening tag above this line */}

          <DashSideBar />

          {/* the sidebar section closing tag below this line */}
        </section>
        {/* the sidebar section closing tag above this line */}

        {/* the right section section opening tag below tis line */}
        <section className="flex w-full flex-col gap-[5%] rounded-[10px]">
          {/* the right section opening tag above this line */}

          <section className=" h-[10%] w-full rounded-[10px] border-2">
            top part
          </section>
          <section className="h-[25%] w-full rounded-[10px] border-2 ">
            bottom part
          </section>
          <section className="h-[54%] w-full rounded-[10px] border-2 ">
            bottom part
          </section>

          {/* the right section closing tag below this line */}
        </section>
        {/* the right section closing tag above this line */}

        {/* the Main section closing tag below this line  */}
      </section>
      // the Main section closing tag above this line
    );
}
