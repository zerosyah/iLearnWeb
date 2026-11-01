//import React from "react";
import { SchoolInformationCardProps } from "../Constants/PropsInventory";

function SchoolInformationCard({
  informationName,
  address,
  email,
  faxNumber,
  name,
  phoneNumber,
  telephoneNumber,
}: SchoolInformationCardProps): JSX.Element {
  return (
    <section className="flex flex-col gap-[10px] rounded-[10px] border px-[5px] py-[10px]">
      <div className="text-center font-nunito text-[20px] font-bold">
        {informationName}
      </div>
      <div className="">
        <span className=" font-roboto text-[16px] font-semibold ">Name: </span>{" "}
        <span className="font-mono">{name}</span>
      </div>
      <div className="">
        <span className=" font-roboto text-[16px] font-semibold ">
          Tel No:{" "}
        </span>{" "}
        <span className="font-mono">{telephoneNumber}</span>
      </div>
      <div className="">
        <span className=" font-roboto text-[16px] font-semibold ">
          Phone No:{" "}
        </span>{" "}
        <span className="font-mono">{phoneNumber}</span>
      </div>
      <div className="">
        <span className=" font-roboto text-[16px] font-semibold ">
          Fax No:{" "}
        </span>{" "}
        <span className="font-mono">{faxNumber}</span>
      </div>
      <div className="">
        <span className=" font-roboto text-[16px] font-semibold ">Email: </span>{" "}
        <span className="font-mono">{email}</span>
      </div>
      <div className="">
        <span className=" font-roboto text-[16px] font-semibold ">
          Address:{" "}
        </span>{" "}
        <span className="font-mono">{address}</span>
      </div>
    </section>
  );
}

export default SchoolInformationCard;
