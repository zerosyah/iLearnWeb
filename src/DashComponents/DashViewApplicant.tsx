import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { LuChevronDown, LuUser } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const DashViewApplicant = () => {
  const [selected, setSelected] = React.useState<string>("");
  const onClickSection = (value: string) => {
    if (selected == value) return setSelected("");
    return setSelected(value);
  };
  const location = useLocation();
  const data = location.state?.data;

  if (!data) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[#F8F7EE] px-6 text-center">
        <h1 className="font-bebasNeue text-4xl text-nightGreen">
          Applicant data unavailable
        </h1>
        <p className="font-popins text-sm text-textGray">
          Select an applicant from the applications list to view their details.
        </p>
        <Link
          to="/dashboard?tab=applications"
          className="rounded-[6px] bg-gold px-4 py-2 font-popins text-sm font-semibold text-strongNightGreen hover:bg-hoverGold"
        >
          Return to applications
        </Link>
      </div>
    );
  }

  const sectionsList = [
    {
      section: "section 01",
      title: "Personal Information",
    },
    {
      section: "section 02",
      title: "Previous School Details",
    },
    {
      section: "section 03",
      title: "Applications Details",
    },
    {
      section: "section 04",
      title: "Medical Details",
    },
    {
      section: "section 05",
      title: "Parents / Guardian Details",
    },
    {
      section: "section 06",
      title: "Sibling Details",
    },
  ];
  return (
    <div className="scroll-container min-h-screen w-full overflow-y-scroll bg-[#F8F7EE]">
      <section className="bg-nightGreen px-6 py-8 sm:px-8">
        <p className="font-popins text-[11px] font-medium uppercase tracking-[0.3em] text-[#EBBE5C]">
          Ilearn · admissions
        </p>
        <h1 className="mt-3 font-bebasNeue text-4xl leading-none tracking-wide text-[#F8F7EE] sm:text-5xl">
          {data?.FirstName + " " + data?.LastName}
        </h1>
        <div className="mt-2 flex items-center justify-between font-popins text-sm text-[#F8F7EE]/70">
          <p className="">0210245686089 · Grade 12 - Science</p>
          <div className="flex w-fit items-center gap-[8px] rounded-full border border-[#EBBE5C] bg-[#113022]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#EBBE5C]">
            {" "}
            <div className="size-[5px] rounded-full bg-[#EBBE5C]" />
            Pending
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#F8F7EE]">
        {sectionsList.map((item, index) => (
          <div className="" key={index}>
            <div
              key={index}
              onClick={() => onClickSection(item?.title)}
              className={`flex w-full items-center justify-between ${item?.title == selected ? "" : "border-b border-gray-400"} px-[24px] py-[20px] transition-all duration-300 ease-in-out`}
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
                className={`${selected == item?.title ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-in-out`}
              />
            </div>

            {/** Personal Details */}
            {item?.title == "Personal Information" &&
              selected == item?.title && (
                <div className="grid gap-6 px-6 pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      First name
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.FirstName}{" "}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Last name
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.LastName}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Gender
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.Gender}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Email
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.Email}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Birth Date
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {new Date(data.BirthDate).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Home Number
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.HomeNumber}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Country Of Birth
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.CountryOfOrigin}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Physical Address
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.PhysicalAddress}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      City
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.City}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Religion
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.Religion}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      ID Number
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.IdNumber}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Nick Name
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.NickName}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Phone Number
                    </h1>
                    <p
                      className={`mt-1 font-popins text-[14px] ${!data?.PhoneNumber && "text-imperialRed"} font-medium leading-none`}
                    >
                      {data.PhoneNumber || "N/A (required *)"}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Race
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.Race}
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
                        {data.FirstName[0] +
                          "." +
                          data.LastName +
                          "-ID-copy.pdf"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

            {/** Previous school details */}
            {item?.title == "Previous School Details" &&
              selected == item?.title && (
                <div className="grid gap-6 px-6 pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      School Name
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.PreviousSchoolName}{" "}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      School Principal
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.PreviousSchoolPrincipal}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      School Number
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.PreviousSchoolNumber}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      School Address
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.PreviousSchoolAddress}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      School Country
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.PreviousSchoolCountry}
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

            {/** Application Details */}
            {item.title == "Applications Details" && selected == item.title && (
              <div className="grid gap-6 px-6 pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Grade Applied For
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data.GradeAppliedFor}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Year Of Study
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data.YearOfStudy}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Stream / Course
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data.CourseOfStudy}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Highest Grade Passed
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data?.HighestGradePassed || "N/A"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Student Repeating Grade?
                  </h1>
                  <p
                    className={`mt-1 font-popins text-[14px] ${data?.IsRepeating && "text-imperialRed"} font-medium leading-none`}
                  >
                    {data?.IsRepeating
                      ? "Yes, I'm repeating."
                      : "No, i'm not repeating. "}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Current Grade
                  </h1>
                  <p
                    className={`mt-1 font-popins text-[14px] ${data?.CurrentGrade.length == "" && "text-imperialRed"} font-medium leading-none`}
                  >
                    {data?.CurrentGrade || "information Required *"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Admission Status
                  </h1>
                  <p
                    className={`mt-1 font-popins text-[14px] ${data?.Status == "Pending" && "text-gold"} font-medium leading-none`}
                  >
                    {data?.Status || "information Required *"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Birth Certificate
                  </h1>
                  <div className="mt-1 flex w-fit cursor-pointer items-center gap-2 rounded-[6px] border border-nightGreen px-2 py-1 hover:border-[#EBBE5C]">
                    <FaFilePdf
                      size={15}
                      className="text-nightGreen hover:text-[#EBBE5C]"
                    />
                    <p className="font-popins text-[14px] font-semibold leading-none text-nightGreen hover:text-[#EBBE5C]">
                      {data?.FirstName[0] + "." + data?.LastName}
                      -Birth-Certificate.pdf
                    </p>
                  </div>
                </div>

                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    {data?.IsRepeating
                      ? "Previous & Current Grade Report"
                      : "Previous Grade Report"}
                  </h1>
                  <div className="mt-1 flex w-fit cursor-pointer items-center gap-2 rounded-[6px] border border-nightGreen px-2 py-1 hover:border-[#EBBE5C]">
                    <FaFilePdf
                      size={15}
                      className="text-nightGreen hover:text-[#EBBE5C]"
                    />
                    <p className="font-popins text-[14px] font-semibold leading-none text-nightGreen hover:text-[#EBBE5C]">
                      {data?.FirstName[0] + "." + data?.LastName}
                      -Previous-Grade-Report.pdf
                    </p>
                  </div>
                  {!data?.IsRepeating && (
                    <div className="mt-1 flex w-fit cursor-pointer items-center gap-2 rounded-[6px] border border-nightGreen px-2 py-1 hover:border-[#EBBE5C]">
                      <FaFilePdf
                        size={15}
                        className="text-nightGreen hover:text-[#EBBE5C]"
                      />
                      <p className="font-popins text-[14px] font-semibold leading-none text-nightGreen hover:text-[#EBBE5C]">
                        {data?.FirstName[0] + "." + data?.LastName}
                        -Latest-Report.pdf
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/** Medical Conditions */}
            {item.title == "Medical Details" && selected == item.title && (
              <div className="grid gap-6 px-6 pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Medical Aid Available?
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data.HasMedicalAid
                      ? "Yes, I have medical aid."
                      : "No, I don't have medical aid."}
                  </p>
                </div>
                {data?.HasMedicalAid && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Medical Aid Name
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.MedicalAid || "None"}
                    </p>
                  </div>
                )}
                {data?.HasMedicalAid && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Medical Aid Number
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.MedicalAidNumber || "None"}
                    </p>
                  </div>
                )}
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Medical Conditions?
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data.HasMedicalConditions || "None"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Special Needs?
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data.HasSpecialNeeds || "None"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Allergic?
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data?.HasAllergies || "None"}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Disabled?
                  </h1>
                  <p
                    className={`mt-1 font-popins text-[14px] ${data?.IsRepeating && "text-imperialRed"} font-medium leading-none`}
                  >
                    {data?.HasDisability
                      ? "Yes, I have a disability."
                      : "No, I don't have a disability."}
                  </p>
                </div>
                {data?.HasDisability && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Medical Condition List
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.Disabilities || "None"}
                    </p>
                  </div>
                )}
                {data?.HasAllergies && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Allergy List
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.Allergies || "None"}
                    </p>
                  </div>
                )}
                {data?.HasSpecialNeeds && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Special Needs List
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.SpecialNeeds || "None"}
                    </p>
                  </div>
                )}
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Medical Condition List
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data?.Disabilities || "None"}
                  </p>
                </div>
              </div>
            )}

            {/** Parent / Guardian Details */}
            {item.title == "Parents / Guardian Details" &&
              selected == item.title && (
                <div className="grid gap-6 px-6 pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      First Name
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.ParentFirstName}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Last Name
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.ParentLastName}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Email
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data.ParentEmail}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Address
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.ParentAddress || "N/A"}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Occupation
                    </h1>
                    <p
                      className={`mt-1 font-popins text-[14px] ${data?.IsRepeating && "text-imperialRed"} font-medium leading-none`}
                    >
                      {data?.ParentOccupation || "N/A"}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Phone Number
                    </h1>
                    <p
                      className={`mt-1 font-popins text-[14px] ${data?.ParentPhoneNumber == "" && "text-imperialRed"} font-medium leading-none`}
                    >
                      {data?.ParentPhoneNumber || "information Required *"}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Work Phone Number
                    </h1>
                    <p
                      className={`mt-1 font-popins text-[14px] ${data?.ParentWorkNumber == "" && "text-imperialRed"} font-medium leading-none`}
                    >
                      {data?.ParentWorkNumber || "information Required *"}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Relationship to Student
                    </h1>
                    <p
                      className={`mt-1 font-popins text-[14px] ${data?.ParentRelationship == "" && "text-imperialRed"} font-medium leading-none`}
                    >
                      {data?.ParentRelationship || "information Required *"}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Parental Consent
                    </h1>
                    <p
                      className={`mt-1 font-popins text-[14px] ${data?.ParentalConsent == "N/A" && "text-imperialRed"} font-medium leading-none`}
                    >
                      {data?.ParentalConsent || "information Required *"}
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Parent / Guardian ID
                    </h1>
                    <div className="mt-1 flex w-fit cursor-pointer items-center gap-2 rounded-[6px] border border-nightGreen px-2 py-1 hover:border-[#EBBE5C]">
                      <FaFilePdf
                        size={15}
                        className="text-nightGreen hover:text-[#EBBE5C]"
                      />
                      <p className="font-popins text-[14px] font-semibold leading-none text-nightGreen hover:text-[#EBBE5C]">
                        {data?.ParentFirstName[0] + "." + data?.ParentLastName}
                        -ID-Copy.pdf
                      </p>
                    </div>
                  </div>
                </div>
              )}

            {/** Sibling Details */}
            {/** Application Details */}
            {item.title == "Sibling Details" && selected == item.title && (
              <div className="grid gap-6 px-6 pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                    Siblings
                  </h1>
                  <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                    {data?.HasSiblings
                      ? "Yes, I have siblings."
                      : "No, I don't have siblings."}
                  </p>
                </div>
                {data?.HasSiblings && (
                  <div className="">
                    <h1 className="font-popins text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600">
                      Sibling Details
                    </h1>
                    <p className="mt-1 font-popins text-[14px] font-medium leading-none">
                      {data?.Siblings || "None"}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        <section className="mt-6 flex gap-10 pl-6">
          <p className="font-popins text-[14px] font-medium text-textGray">
            Created At:{" "}
            {new Date(data.CreatedAt).toLocaleDateString("en-US", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>

          <p className="font-popins text-[14px] font-medium text-textGray">
            Updated At:{" "}
            {new Date(data.UpdatedAt).toLocaleDateString("en-US", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </section>

        <section className="mt-6 flex items-center justify-center gap-10">
          <button className="flex items-center rounded-[6px] border border-gold bg-gold px-6 py-3 font-popins text-[16px] font-semibold leading-none tracking-wide text-strongNightGreen hover:bg-hoverGold">
            <FaCheck className="mr-6" size={16} /> Accept Application
          </button>
          <button className="flex items-center rounded-[6px] border border-imperialRed px-6 py-3 font-popins text-[16px] font-semibold leading-none tracking-wide text-strongNightGreen hover:bg-imperialRed">
            <MdCancel className="mr-6" size={16} /> Decline Application
          </button>
        </section>
      </section>
    </div>
  );
};

export default DashViewApplicant;
