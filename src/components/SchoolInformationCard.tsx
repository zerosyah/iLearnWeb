import React from "react";
import { SchoolInformationCardProps} from "../Constants/PropsInventory"

function SchoolInformationCard({informationName, address, email, faxNumber, name, phoneNumber, telephoneNumber}:SchoolInformationCardProps):JSX.Element {
  return (
    <section className="border rounded-[10px] flex flex-col gap-[10px] py-[10px] px-[5px]">
      <div className="text-center text-[20px] font-bold font-nunito">{informationName}</div>
      <div className="">
        <span className=" font-semibold text-[16px] font-roboto ">Name: </span>{" "}
        <span className="font-mono">{name}</span>
      </div>
      <div className="">
        <span className=" font-semibold font-roboto text-[16px] ">Tel No: </span>{" "}
        <span className="font-mono">{telephoneNumber}</span>
      </div>
      <div className="">
        <span className=" font-semibold font-roboto text-[16px] ">Phone No: </span>{" "}
        <span className="font-mono">{phoneNumber}</span>
      </div>
      <div className="">
        <span className=" font-semibold font-roboto text-[16px] ">Fax No: </span>{" "}
        <span className="font-mono">{faxNumber}</span>
      </div>
      <div className="">
        <span className=" font-semibold font-roboto text-[16px] ">Email: </span>{" "}
        <span className="font-mono">{email}</span>
      </div>
      <div className="">
        <span className=" font-semibold font-roboto text-[16px] ">Address: </span>{" "}
        <span className="font-mono">{address}</span>
      </div>
    </section>
  );
}

export default SchoolInformationCard;
