
import { Card } from "flowbite-react";
import Header from "../components/Header";

export default function Department() {
  const subjects = [
    "Mathematics",
    "English",
    "IsiZulu",
    "Life Orientation",
    "Creative Art",
    "Technology",
    "Natural Science",
    "Geography",
    "Drama",
    "History",
    "Life Sciences",
    "Physical Science",
    "Mathematics Literacy",
    "Tourism",
    "Accounting",
    "Consumer Studies",
    "Business Studies",
    "****************",
  ];
  const grade = {
    Grade8: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[4],
      subjects[5],
      subjects[6],
      subjects[17],
      subjects[17],
    ],
    Grade9: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[4],
      subjects[5],
      subjects[6],
      subjects[17],
      subjects[17],
    ],
    grade10_science: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[9],
      subjects[7],
      subjects[10],
      subjects[11],
    ],
    grade10_drama: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[7],
      subjects[8],
      subjects[9],
      subjects[13],
    ],
    grade10_Commerce: [
      subjects[0],
      subjects[1],
      subjects[2],
      subjects[3],
      subjects[9],
      subjects[14],
      subjects[15],
      subjects[16],
    ],
  };
  return (
    <section className="flex h-fit flex-col gap-0 bg-coolWhite dark:bg-royalBlue">
      <Header />
      <div className="relative mb-4 mt-[90px] flex flex-col flex-wrap justify-evenly gap-4 self-center md:flex-row">
        {/*Grade 8 */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white ">GRADE 8</h2>
          <ul className="">
            {grade["Grade8"].map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 9 */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">GRADE 9</h2>
          <ul className="">
            {grade["Grade9"].map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">
                {subject}
              </li>
            ))}
          </ul>
        </Card>

        {/*Grade 10 commerce */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">Grade 10</h2>
          <span className="text-center italic text-black dark:text-white">Commerce</span>
          <ul className="">
            {grade.grade10_Commerce.map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">
                {subject}
              </li>
            ))}
          </ul>
        </Card>

        {/*Grade 10 drama */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">Grade 10</h2>
          <span className="text-center italic text-black dark:text-white">General</span>
          <ul className="">
            {grade.grade10_drama.map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 10 science */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">Grade 10</h2>
          <span className="text-center italic text-black dark:text-white">Science</span>
          <ul className="">
            {grade.grade10_science.map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">{subject}</li>
            ))}
          </ul>
        </Card>

        {/**grade11 */}

        {/*Grade 11 drama */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">Grade 11</h2>
          <span className="text-center italic text-black dark:text-white">General</span>
          <ul className="">
            {grade.grade10_drama.map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 11 science */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">Grade 11</h2>
          <span className="text-center italic text-black dark:text-white">Science</span>
          <ul className="">
            {grade.grade10_science.map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 11 commerce */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">Grade 11</h2>
          <span className="text-center italic text-black dark:text-white">Commerce</span>
          <ul className="">
            {grade.grade10_Commerce.map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 12 drama */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">Grade 12</h2>
          <span className="text-center italic text-black dark:text-white">General</span>
          <ul className="">
            {grade.grade10_drama.map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 12 science */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">Grade 12</h2>
          <span className="text-center italic text-black dark:text-white">Science</span>
          <ul className="">
            {grade.grade10_science.map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">{subject}</li>
            ))}
          </ul>
        </Card>

        {/*Grade 12 commerce */}
        <Card className="bg-[#D9D9D9] p-[8px]">
          <h2 className="text-center font-montserrat text-[24px] font-bold tracking-tighter text-black dark:text-white">Grade 12</h2>
          <span className="text-center italic text-black dark:text-white">Commerce</span>
          <ul className="">
            {grade.grade10_Commerce.map((subject, index) => (
              <li key={index} className="font-montserrat text-[16px] text-black dark:text-white">{subject}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
