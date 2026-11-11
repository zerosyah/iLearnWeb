import Header from "../components/Header";
import StaffDisplayCard from "../components/SaffDisplayCard";
import { StaffData } from "../Constants/EventLayout.json";

export default function Stuff() {
  return (
    <section className="scroll-container relative mx-auto flex h-screen min-h-0 w-full flex-col overflow-y-auto bg-white lg:max-w-[1152px]">
      <Header />
      <div className="grid w-full grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-4">
        {
          StaffData.map((item, index)=>(
            <StaffDisplayCard key={index} description={item.description} gender={item.gender} grade={item.grade} name={item.name} subject={item.subject} image={item.image} />
          ))
        }
      </div>
    </section>
  );
}