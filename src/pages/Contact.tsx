import Header from "../components/Header";
import { SchoolInformationCardData} from "../Constants/EventLayout.json"
import SchoolInformationCard from "../components/SchoolInformationCard";
export default function Contact() {
  return (
    <section className="h-[180vh] bg-[#D9D9D9] md:h-screen">
      <Header />
      <div className="relative flex flex-col gap-4 self-center md:flex-row">
        {
          SchoolInformationCardData.map((item, index:number)=>(
            <SchoolInformationCard address={item.address} email={item.email} faxNumber={item.faxNumber} informationName={item.informationName} name={item.name} phoneNumber={item.phoneNumber} telephoneNumber={item.telephoneNumber} Role="" key={index} />
          ))
        }
      </div>
    </section>
  );
}
