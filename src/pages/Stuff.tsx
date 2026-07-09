import Header from "../components/Header";
import StaffDisplayCard from "../components/SaffDisplayCard";
import {StaffData} from "../Constants/EventLayout.json"

export default function Stuff() {
  return (
    <section className="flex size-full flex-col flex-wrap justify-evenly bg-[#D9D9D9]">
      <div className="mb-[70px]">
        <Header />
      </div>

      <div className="relative mx-[10px] my-2 flex flex-wrap justify-evenly gap-4">
        {/*General Teacher*/}
        {
          StaffData.map((item, index:number)=>(
            <StaffDisplayCard name={item.name} description={item.description} gender={item.gender} grade={item.grade} key={index} subject={item.subject} image={item.image}/>
          ))
        } 
      </div>
    </section>
  );
}

/*
staff.map(({ id, Subject, description, link }) => (
            <Card className={`max-w-sm bg-[#D9D9D9] 0verflow-hidden transition-transform duration-700 transform  `} onMouseEnter={() => setIsHovered(Subject)} onMouseLeave={() => setIsHovered("")} imgSrc={logo} horizontal key={id} >
          <h5 className={`text-[20px] font-semibold font-popins tracking-tight text-gray-900 dark:text-white ${isHovered === Subject ? "-mt-5 duration-700 ease-in-out": "mt-0"}`}>
            {Subject}
          </h5>
          <motion.p className="font-robot text-[16px] text-gray-700 dark:text-gray-400" {...(isHovered === Subject ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } } : { initial: { opacity: 1 }, animate: { opacity: 0 }, transition: { duration: 0.5 } })}>
            {description}
          </motion.p>
          <button className={`bg-blue-500 hover:bg-blue-700 font-robot text-white font-bold py-2 px-4 rounded opacity-0 ease-in-out transition-opacity duration-700 ${isHovered === Subject ? "opacity-100 translate-y-4": "translate-y-0"}`}>
            <Link to={link} className="">
              view
            </Link>
          </button>
        </Card> 
          )) */