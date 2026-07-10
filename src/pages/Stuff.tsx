import Header from "../components/Header";
import StaffDisplayCard from "../components/SaffDisplayCard";
import { StaffData } from "../Constants/EventLayout.json";

export default function Stuff() {
  return (
    <section className="min-h-screen bg-[#f7f7f8] text-slate-800">
      <Header />

      <div className="flex max-w-7xl flex-col px-4 pb-8 pt-[90px] sm:px-6 lg:px-8 lg:pt-[90px]">
        <div className="mb-8 flex flex-col gap-3 text-center sm:text-left">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-[16px] py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-sm sm:mx-0">
            <span className="size-2 rounded-full bg-[#3b82f6]" />
            Our Dedicated Staff
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Meet the people behind the learning experience
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:mx-0 sm:text-base">
              Our teachers and staff bring experience, care, and commitment to every classroom and community activity.
            </p>
          </div>
        </div>

        <div className="2xl:grid-cols- grid place-items-start gap-6 md:grid-cols-2 xl:grid-cols-5">
          {StaffData.map((item, index: number) => (
            <StaffDisplayCard
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              gender={item.gender}
              grade={item.grade}
              subject={item.subject}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}