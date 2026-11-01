import React, { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { LuChevronDown, LuUser } from "react-icons/lu";
import DashLinechart from "../DashComponents/DashLineChart";
import { ChartData } from "../Constants/EventLayout.json";
import { Student } from "../Constants/PropsInventory";
import { useSelector } from "react-redux";
import { store } from "../redux/store";

type SelectedProp = {
  selectedUser: Student,
}

type RootProp = ReturnType<typeof store.getState>

function DashUserDetails(selectedUser:SelectedProp) {
  const [, setUser] = useState({});
  const [, setDetails] = useState<Student>() 
  const [data, setData] = useState<DataTypeProp[]>();
  const {studentData} = useSelector((state:RootProp) => state.student)
  console.log("redux data:", studentData);
  console.log("SelectedUser:", selectedUser);
  

  if (data?.length == 0) {
    setData(()=> {
      [{
    "name": "Test 1",
    "mark": 37,
    "month": "Jan",
    "subject": "Mathematics",
    "date": "2025-01-02"
  },
  {
    "name": "Test 2",
    "mark": 71,
    "month": "Jan",
    "subject": "English",
    "date": "2025-01-03"
  },
  {
    "name": "Test 3",
    "mark": 32,
    "month": "Jan",
    "subject": "Physical Sciences",
    "date": "2025-01-07"
  },
  {
    "name": "Test 4",
    "mark": 89,
    "month": "Jan",
    "subject": "Life Sciences",
    "date": "2025-01-15"
  },
  {
    "name": "Test 5",
    "mark": 52,
    "month": "Jan",
    "subject": "Geography",
    "date": "2025-01-17"
  },
  {
    "name": "Test 6",
    "mark": 29,
    "month": "Jan",
    "subject": "History",
    "date": "2025-01-24"
  }]
    })
  }

  type FormDataProp = {
    Subject : string,
    Month: string
  }

  useEffect(() => {
    // fetch student from more details
    const fetchStudent = async () => {
      // fetch student from more details using id
      const res = await fetch(`/api/user/getUsersById/${selectedUser}`);

      // get data from database and change to json
      const data = await res.json();

      // if response was success
      if (res.ok) {
        // set details
        setDetails(data.users);
      }
    };

    // fetch user
    const fetchGet = async () => {
      // fetch user using id from oirginal database
      const res = await fetch(`/api/user/get/${selectedUser}`);

      // get data from database and change to json
      const data = await res.json();

      // if response was success
      if (res.ok) {
        // set user
        setUser(data.users);
      }
    };

    // call the function
    fetchStudent();

    // call the function
    fetchGet();
  }, [selectedUser]);
  const [formData, setFormData] = useState<FormDataProp>({
    Subject: "",
    Month: ""
  });
  const sectionsList = [
    {
      section: "section 01",
      title: "Personal Information",
    },
    {
      section: "section 02",
      title: "Chart",
    },
    {
      section: "section 03",
      title: "Previous School",
    },
    {
      section: "section 04",
      title: "Medical Info",
    },
  ];
  const [select, setSelected] = React.useState<string>("");
  const onClickSection = (value: string) => {
    if (select == value) return setSelected("");
    return setSelected(value);
  };

  useEffect(() => {
    if (formData.Month === "" || formData.Subject === "") return;

    const filterByMonth = ChartData.filter((item) =>
      item.month.includes(formData.Month),
    );
    setData(filterByMonth);
  }, [formData.Month, formData.Subject]);

  type DataTypeProp = {
    date: string,
    mark: number,
    month: string,
    name: string
    subject: string
  };

  const birthDate = (studentData as {BirthDate: string} | null)?.BirthDate;

  return (
    <div className="scroll-container h-screen w-full overflow-y-scroll">
      <div className="flex w-full items-start gap-6 rounded-[6px] bg-default p-[20px]">
        <div className="flex size-[70px] items-center justify-center rounded-[6px] border-2 border-gold bg-nightGreen">
          <h1 className="font-bebasNeue text-[36px] leading-none tracking-widest text-gold">
            {(studentData as {FirstName: string} | null)?.FirstName?.[0]}
            {(studentData as {LastName: string} | null)?.LastName?.[0]}
          </h1>
        </div>
        <div className="">
          <h1 className="font-bebasNeue text-[36px] leading-none text-strongNightGreen">
            {(studentData as {FirstName: string}| null)?.FirstName} {(studentData as {LastName:string}|null)?.LastName}
          </h1>
          <div className="flex items-center gap-1 font-popins text-[14px] font-medium">
            <p className="">{(studentData as {IdNumber:string}|null)?.IdNumber}</p>
            <p className="">·</p>
            <p className="">{(studentData as {Gender:string}|null)?.Gender}</p>
          </div>
        </div>
      </div>

      <section className="mt-4 min-h-screen">
        {sectionsList?.map((item, index) => (
          <div className="" key={index}>
            <div
              key={index}
              onClick={() => onClickSection(item?.title)}
              className={`flex w-full items-center justify-between ${item?.title == select ? "" : "border-b border-gray-400"} bg-default px-[24px] py-[20px] transition-all duration-300 ease-in-out`}
            >
              <div className="flex gap-[16px]">
                <div className="flex size-[36px] items-center justify-center rounded-[6px] bg-nightGreen">
                  <LuUser
                    size={20}
                    color="#EBBE5C"
                    className="flex items-center justify-center"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-popins text-[11px] font-medium uppercase leading-none tracking-[0.2em] text-[#EBBE5C]">
                    {item?.section}
                  </p>
                  <p className="font-bebasNeue text-[24px] uppercase leading-none tracking-wide">
                    {item?.title}
                  </p>
                </div>
              </div>
              <LuChevronDown
                size={24}
                className={`${select == item?.title ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-in-out`}
              />
            </div>

            {/** Personal Details */}
            {item?.title == "Personal Information" && select == item?.title && (
              <div className="mt-2 grid gap-6 px-6 pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    First name
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {FirstName: string}| null)?.FirstName}{" "}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Last name
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {LastName: string}| null)?.LastName}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Gender
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {Gender: string}| null)?.Gender}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Email
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {Email: string}| null)?.Email}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Birth Date
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {birthDate
                      ? new Date(birthDate).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })
                      : ""}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Home Number
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {HomeNumber: string} | null)?.HomeNumber}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Country Of Birth
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {CountryOfOrigin: string} | null)?.CountryOfOrigin}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Physical Address
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {PhysicalAddress: string} | null)?.PhysicalAddress}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    City
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {City: string} | null)?.City}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Religion
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {Religion: string} | null)?.Religion}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    ID Number
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {IdNumber: string} | null)?.IdNumber}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Nick Name
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {NickName: string} | null)?.NickName}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Phone Number
                  </h1>
                  <p
                    className={`mt-1 font-popins text-[14px] ${!(studentData as {PhoneNumber: string} | null)?.PhoneNumber && "text-imperialRed"} font-medium leading-none`}
                  >
                    {(studentData as {PhoneNumber: string} | null)?.PhoneNumber || "N/A (required *)"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Race
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {Race: string} | null)?.Race}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Certified Id Copy
                  </h1>
                  <div className="mt-1 flex w-fit cursor-pointer items-center gap-2 rounded-[6px] border border-nightGreen px-2 py-1 hover:border-[#EBBE5C]">
                    <FaFilePdf
                      size={15}
                      className="text-nightGreen hover:text-[#EBBE5C]"
                    />
                    <p className="font-popins text-[14px] font-semibold leading-none text-nightGreen hover:text-[#EBBE5C]">
                      {(studentData as {FirstName: string} | null)?.FirstName?.[0] +
                        "." +
                        (studentData as {LastName: string} | null)?.LastName +
                        "-ID-copy.pdf"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/** Charts */}
            {item.title == "Chart" && select == item.title && (
              <div className="mt-4">
                <div className="flex items-center gap-4">
                  <div className="">
                    <select
                      className="h-[40px] w-[150px] rounded-[6px]"
                      id="Subject"
                      onChange={(e: React.FormEvent) => {
                        e.preventDefault();
                        const target = e.target as HTMLInputElement;
                        setFormData({ ...formData, [target.id]: target.value });
                      }}
                    >
                      <option value="Mathematics" className="">
                        Mathematics
                      </option>
                      <option value="MathematicsLiteracy" className="">
                        Math Literacy
                      </option>
                      <option value="English" className="">
                        English
                      </option>
                    </select>
                  </div>
                  <div className="">
                    <select
                      className="h-[40px] w-[150px] rounded-[6px]"
                      id="Month"
                      onChange={(e: React.FormEvent) => {
                        e.preventDefault();
                        const target = e.target as HTMLInputElement;
                        setFormData({ ...formData, [target.id]: target.value });
                      }}
                    >
                      <option value="" className="">
                        Months
                      </option>
                      <option value="Jan" className="">
                        January
                      </option>
                      <option value="Feb" className="">
                        February
                      </option>
                      <option value="Mar" className="">
                        March
                      </option>
                    </select>
                  </div>

                  <div className="">
                    <p className="font-popins text-[14px] text-textGray">
                      Showing <strong>{formData?.Subject}</strong> Marks of{" "}
                      <strong>{formData?.Month}</strong>.
                    </p>
                    <p className="font-popins text-[14px] text-strongNightGreen">
                      Error wass found here
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex w-full gap-6">
                  {data && <DashLinechart data={data} />}
                  <div className="">
                    <h1 className="font-bebasNeue text-[18px] uppercase">
                      MArks Layout
                    </h1>
                    <div className="">
                      <div className="">
                        {data && (
                          <ul className="">
                            {data.map((item: DataTypeProp, index: number) => (
                              <li
                                className="flex items-center gap-2"
                                key={index}
                              >
                                {item.name}:{" "}
                                <span className="">{item.mark}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/** Previous School Data */}
            {item?.title == "Previous School" && select == item?.title && (
              <div className="mt-2 grid gap-6 px-6 pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    School Name
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {PreviousSchoolName: string} | null)?.PreviousSchoolName}{" "}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    School Principal
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {PreviousSchoolPrincipal: string} | null)?.PreviousSchoolPrincipal}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    School Number
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {PreviousSchoolNumber: string} | null)?.PreviousSchoolNumber}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    School Address
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {PreviousSchoolAddress: string} | null)?.PreviousSchoolAddress}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    School Country
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {PreviousSchoolCountry: string} | null)?.PreviousSchoolCountry}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Removal letter
                  </h1>
                  <div className="mt-1 flex w-fit cursor-pointer items-center gap-2 rounded-[6px] border border-nightGreen px-2 py-1 hover:border-[#EBBE5C]">
                    <FaFilePdf
                      size={15}
                      className="text-nightGreen hover:text-[#EBBE5C]"
                    />
                    <p className="font-popins text-[14px] font-semibold leading-none text-nightGreen hover:text-[#EBBE5C]">
                      School-Removal-Letter.pdf
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/** Medical Conditions */}
            {item.title == "Medical Info" && select == item.title && (
              <div className="mt-2 grid gap-6 px-6 pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Medical Aid Available?
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {HasMedicalAid: boolean} | null)?.HasMedicalAid
                      ? "Yes, I have medical aid."
                      : "No, I don't have medical aid."}
                  </p>
                </div>
                {(studentData as {HasMedicalAid: boolean} | null)?.HasMedicalAid && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Medical Aid Name
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {(studentData as {MedicalAid: string} | null)?.MedicalAid || "None"}
                    </p>
                  </div>
                )}
                {(studentData as {HasMedicalAid: boolean} | null)?.HasMedicalAid && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Medical Aid Number
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {(studentData as {MedicalAidNumber: string} | null)?.MedicalAidNumber || "None"}
                    </p>
                  </div>
                )}
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Medical Conditions?
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {HasMedicalConditions: boolean} | null)?.HasMedicalConditions || "None"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Special Needs?
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {HasSpecialNeeds: boolean} | null)?.HasSpecialNeeds || "None"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Allergic?
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {HasAllergies: boolean} | null)?.HasAllergies || "None"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Disabled?
                  </h1>
                  <p
                    className={`mt-1 font-popins text-[14px] ${(studentData as {IsRepeating: boolean} | null)?.IsRepeating && "text-imperialRed"} font-medium leading-none`}
                  >
                    {(studentData as {HasDisability: boolean} | null)?.HasDisability
                      ? "Yes, I have a disability."
                      : "No, I don't have a disability."}
                  </p>
                </div>
                {(studentData as {HasDisability: boolean} | null)?.HasDisability && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Medical Condition List
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {(studentData as {Disabilities: string[] | null} | null)?.Disabilities || "None"}
                    </p>
                  </div>
                )}
                {(studentData as {HasAllergies: boolean} | null)?.HasAllergies && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Allergy List
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {(studentData as {Allergies: string[] | null} | null)?.Allergies || "None"}
                    </p>
                  </div>
                )}
                {(studentData as {HasSpecialNeeds: boolean} | null)?.HasSpecialNeeds && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Special Needs List
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {(studentData as {SpecialNeeds: string[] | null} | null)?.SpecialNeeds || "None"}
                    </p>
                  </div>
                )}
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Medical Condition List
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {(studentData as {Disabilities: string[] | null} | null)?.Disabilities || "None"}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default DashUserDetails;
