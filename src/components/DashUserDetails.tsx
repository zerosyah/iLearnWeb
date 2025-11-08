import {useEffect, useState} from 'react'
import { Avatar, Modal } from 'flowbite-react';
//import LineChart from "./PieChart"
import { Autocomplete, Divider, Stack, TextField, Button } from '@mui/material';
import { LineChart } from "@mui/x-charts/LineChart";
import { FaChevronDown } from "react-icons/fa";
//import { Model } from 'mongoose';

function DashUserDetails({selectedUser, selected}: any) {
    const [user, setUser] = useState({});
    const [details, setDetails] = useState({});
    const [parent, setParent] = useState(false);
    const [school, setSchool] = useState(false);
    const [medic, setMedic] = useState(false);
    const [other, setOther] = useState(false);
    const [show, setShow] = useState<boolean>(true);
    const [showChart, setShowChart] = useState<boolean>(false);
    const [showOther, setShowOther] = useState<boolean>(true);

    useEffect(() =>{
        // fetch student from more details
        const fetchStudent = async () =>{
            // fetch student from more details using id
            const res = await fetch(`/api/user/getUsersById/${selectedUser}`);

            // get data from database and change to json
            const data = await res.json();
            
            // if response was success
            if(res.ok){
                // set details
                setDetails(data.users);
            }
        }

        // fetch user
        const fetchGet = async () =>{
            // fetch user using id from oirginal database
            const res = await fetch(`/api/user/get/${selectedUser}`);

            // get data from database and change to json
            const data = await res.json();

            // if response was success
            if(res.ok){
                // set user
                setUser(data.users);
            }
        }

        // call the function
        fetchStudent();

        // call the function
        fetchGet();
    }, [selectedUser]);

    const handleParent = () =>{
        setParent(true);
    }
    const handleSchool = () =>{
        setSchool(true);
    }
    const handleMedic = () =>{
        setMedic(true);
    }
    const handleOther = () =>{
        setOther(true);
    }
    console.log("student: ", selected);
    const subjects = [
      { label: "Mathematics", value: "Mathematics" },
      { label: "English", value: "English" },
      { label: "IsiZulu", value: "IsiZulu " },
      { label: "Life Orientation", value: "LifeOrientation" },
      { label: "Creative Art", value: "CreativeArt" },
      { label: "Technology", value: "Technology" },
      { label: "Natural Science", value: "NaturalScience" },
      { label: "Geography", value: "Geography" },
      { label: "Drama", value: "Drama" },
      { label: "History", value: "History" },
      { label: "Life Sciences", value: "LifeSciences" },
      { label: "Physical Sciences", value: "PhysicalSciences" },
      { label: "Mathematics Literacy", value: "MathematicsLiteracy" },
      { label: "Tourism", value: "Tourism" },
      { label: "Accounting", value: "Accounting" },
      { label: "Consumer Studies", value: "ConsumerStudies" },
      { label: "Business Studies", value: "BusinessStudies" },
    ];
    const [formData, setFormData] = useState<any>({
    });
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
  return (
    <div className="Main-div max-w-[600px]">
      <Stack
        direction={"column"}
        spacing={0}
        className="rounded-[10px] border "
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          bgcolor={"#F8F8F8"}
          className="h-[100px] rounded-[10px] p-[10px]"
        >
          {/* @ts-ignore */}
          <Avatar
            size={"lg"}
            //@ts-ignore
            img={user?.ProfilePicture}
            rounded
            className=""
            bordered
          />
          <Stack direction={"column"} spacing={1} className="">
            {/* @ts-ignore */}
            <p className="font-popins text-[25px] font-medium text-gray-700">
              {selected?.FirstName} {selected?.LastName}
            </p>
            <Stack
              direction={"row"}
              spacing={1}
              alignItems={"center"}
              className="text-[14px] font-medium italic text-gray-600"
            >
              {/* @ts-ignore */}
              <span>{selected?.GradeAppliedFor}</span>
              <span>|</span>
              <span>{selected?.IdNumber}</span>
              <span>|</span>
              <span>{selected?.Gender}</span>
            </Stack>
          </Stack>
        </Stack>
          <Divider />
        <Stack spacing={0.5} className="p-[10px]">
          <Stack direction={"column"} spacing={1} className="">
            <Stack direction={"row"} spacing={2} className="items-center">
              <h1 className="font-robot text-[18px] font-medium">
                Basic Details
              </h1>
              <FaChevronDown
                size={18}
                className={`${show && "rotate-180 transition-all duration-500 ease-in-out"} hover:cursor-pointer ${!show && "transition-all duration-500 ease-in-out"}`}
                onClick={() => setShow(!show)}
              />
            </Stack>
            {show && (
              <>
                <Stack direction={"row"} spacing={4} className="mt-2 px-4">
                  <Stack spacing={-0.5} className="Dob">
                    <p className="text-[12px] text-gray-400">Date Of Birth</p>
                    {/* @ts-ignore */}
                    <p className=" text-[14px] font-semibold">
                      {selected?.BirthDate}
                    </p>
                  </Stack>
                  <Stack spacing={-0.5} className="">
                    <p className="text-[12px] text-gray-400">Religion</p>
                    {/* @ts-ignore */}
                    <p className=" text-[14px] font-semibold">
                      {selected?.Religion}
                    </p>
                  </Stack>
                  <Stack spacing={-0.5} className="">
                    <p className="text-[12px] text-gray-400"> Disability</p>
                    {/* @ts-ignore */}
                    <p className=" text-[14px] font-semibold">
                      {selected?.Disabilities ? "N/A" : "Yes"}
                    </p>
                  </Stack>
                  <Stack spacing={-0.5} className="">
                    <p className="text-[12px] text-gray-400"> Emergency</p>
                    {/* @ts-ignore */}
                    <p className=" text-[14px] font-semibold">
                      {selected.EmergencyNumber}
                    </p>
                  </Stack>
                  <Stack spacing={-0.5} className="">
                    <p className="text-[12px] text-gray-400"> Phone</p>
                    {/* @ts-ignore */}
                    <p className=" text-[14px] font-semibold">
                      {selected?.PhoneNumber}
                    </p>
                  </Stack>
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={4}
                  className="mt-2 items-center overflow-x-hidden px-4"
                >
                  <Stack spacing={-0.5} className="Dob">
                    <p className="text-[12px] text-gray-400">Race</p>
                    {/* @ts-ignore */}
                    <p className=" text-[14px] font-semibold">
                      {selected.Race}
                    </p>
                  </Stack>
                  <Stack spacing={-0.5} className="">
                    <p className="text-[12px] text-gray-400">Home Number</p>
                    {/* @ts-ignore */}
                    <p className=" text-[14px] font-semibold">
                      {selected?.HomeNumber}
                    </p>
                  </Stack>
                  <Stack spacing={-0.5} className="">
                    <p className="text-[12px] text-gray-400">Country</p>
                    {/* @ts-ignore */}
                    <p className=" text-[14px] font-semibold">
                      {selected?.CountryOfOrigin}
                    </p>
                  </Stack>
                  <Stack spacing={-0.5} className=" truncate">
                    <p className="text-[12px] text-gray-400">Email</p>
                    {/* @ts-ignore */}
                    <p className=" text-[14px] font-semibold">
                      {selected?.Email}
                    </p>
                  </Stack>
                </Stack>
              </>
            )}
          </Stack>
        </Stack>

        <Stack direction={"column"} spacing={0.5} className="px-[10px]">
          <Divider />
          <Stack direction={"row"} spacing={2} className="items-center pb-[10px]">
            <h1 className="font-popins text-[18px] font-medium">Results</h1>
            <FaChevronDown
              size={18}
              onClick={() => setShowChart(!showChart)}
              className={`${showChart && "rotate-180 transition-all duration-500 ease-in-out"} hover:cursor-pointer ${!showChart && "transition-all duration-500 ease-in-out"}`}
            />
          </Stack>
          {showChart && (
            <>
              <Stack direction={"row"} spacing={2}>
                <Autocomplete
                  value={formData.Subject}
                  onChange={(event: any, value: object) => {
                    event.preventDefault();
                    //@ts-ignore
                    setFormData({ ...formData, Subject: value.value });
                  }}
                  id="Subject"
                  size="small"
                  options={subjects}
                  sx={{ width: 150 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Subject" />
                  )}
                />
                <Autocomplete
                  value={formData.Month}
                  onChange={(event: any, value: string) => {
                    event.preventDefault();
                    //@ts-ignore
                    setFormData({ ...formData, Month: value });
                  }}
                  id="Month"
                  size="small"
                  options={months}
                  sx={{ width: 150 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Month" />
                  )}
                />
                <div className="text-xs">
                  <p className="">
                    Showing {formData?.Subject} Marks of {formData?.Month}.
                  </p>
                  <p className="">Error wass found here</p>
                </div>
              </Stack>
              <div className="">
                <LineChart
                  xAxis={[{ data: ["1", 2, 3, 4, 5, 6, 7, 8] }]}
                  series={[
                    {
                      data: [58, 87, 29, 85, 76, 60, 96, 45],
                    },
                  ]}
                  height={270}
                />
              </div>
            </>
          )}
        </Stack>
        <Stack direction={"column"} spacing={0.5} className="px-[10px]">
          <Divider />
          <Stack direction={"row"} spacing={2} className="items-center pb-[10px]">
            <h1 className="font-robot text-[18px] font-medium">
              Other Details
            </h1>
            <FaChevronDown
              size={18}
              className={`${showOther && "rotate-180 transition-all duration-500 ease-in-out"} hover:cursor-pointer ${!showOther && "transition-all duration-500 ease-in-out"}`}
              onClick={() => setShowOther(!showOther)}
            />
          </Stack>
          {showOther && (
            <>
              <Stack direction={"row"} spacing={2} className="pb-[10px]">
                <Button variant='contained' onClick={handleSchool}>Prev School</Button>
                  <Button variant='contained' onClick={handleMedic}>Medical Info</Button>
                  <Button variant='contained' onClick={handleParent}>Parents/Gudian</Button>
                <Button variant='outlined' onClick={handleOther}>Other!!</Button>
              </Stack>
            </>
          )}
        </Stack>
      </Stack>

      <div className="">
        <Modal show={parent} onClose={() => setParent(false)}>
          <Modal.Header>Parents/Guardian Details</Modal.Header>
          <Modal.Body>
            <div className="flex justify-evenly border">
              <div className="">
                <h2 className="font-semibold underline">Title:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.parentTitle}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">Initials:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.parentInitials}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">Language:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.parentHomeLanguage}</p>
              </div>
            </div>

            <div className="flex justify-evenly border">
              <div className="">
                <h2 className="font-semibold underline">First Name:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.parentFirstName}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">Second Name:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.parentSecondName}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">ID Number:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.parentId}</p>
              </div>
            </div>

            <div className="flex justify-evenly border">
              <div className="">
                <h2 className="font-semibold underline">Email:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.parentEmail}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">First Number:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.parentSecondName}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">Second Number:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.parentId}</p>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={school} onClose={() => setSchool(false)}>
          <Modal.Header>Previous School Details</Modal.Header>
          <Modal.Body>
            <h2 className="text-lg font-semibold underline">School Name:</h2>
            {/* @ts-ignore */}
            <p className="text-sm">{details.previousSchoolName}</p>

            <h2 className="text-lg font-semibold underline">School Address:</h2>
            {/* @ts-ignore */}
            <p className="text-sm">{details.previousSchoolAddress}</p>

            <h2 className="text-lg font-semibold underline">Zip Code:</h2>
            {/* @ts-ignore */}
            <p className="text-sm">{details.previousSchoolZipCode}</p>

            <h2 className="text-lg font-semibold underline">Country:</h2>
            {/* @ts-ignore */}
            <p className="text-sm">
              {
                //@ts-ignore
                details.previousSchoolProvince
              }
              ,{" "}
              {
                //@ts-ignore
                details.previousSchoolCountry
              }
            </p>
          </Modal.Body>
        </Modal>

        <Modal show={medic} onClose={() => setMedic(false)}>
          <Modal.Header>Medical Details</Modal.Header>
          <Modal.Body>
            <div className="flex justify-evenly border">
              <div className="">
                <h2 className="font-semibold underline">Medical Aid Number:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.medicalAidNumber}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">Medical Aid Name:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.medicalAidName}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">Medical Aid Member:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.medicalAidMainMember}</p>
              </div>
            </div>
            <div className="flex justify-around border">
              <div className="">
                <h2 className="font-semibold underline">Doctor Name:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.medicalAidDoctorName}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">Doctor Number:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.medicalAidDoctorNumber}</p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">Doctor Address:</h2>
                {/* @ts-ignore */}
                <p className="text-sm ">{details.medicalAidDoctorAddress}</p>
              </div>
            </div>
            <div className="flex justify-around border">
              <div className="">
                <h2 className="font-semibold underline">Counseling:</h2>
                {/* @ts-ignore */}
                <p className="text-sm uppercase">
                  {
                    //@ts-ignore
                    details.studentRequiringCounseling
                  }
                </p>
              </div>
              <div className="">
                <h2 className="font-semibold underline">Medical Condion:</h2>
                {/* @ts-ignore */}
                <p className="text-sm uppercase">
                  {
                    //@ts-ignore
                    details.studentMedicalCondition
                  }
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={other} onClose={() => setOther(false)}>
          <Modal.Header>Other information</Modal.Header>
          <Modal.Body>
            <div className="flex justify-around">
              <div className="border p-2">
                <div className="">
                  <h2 className="font-semibold underline">
                    Siblings In School:
                  </h2>
                  {/* @ts-ignore */}
                  <p className="text-sm ">{details.numberOfSiblingsInSchool}</p>
                </div>
                <div className="">
                  <h2 className="font-semibold underline">
                    Position In Family:
                  </h2>
                  {/* @ts-ignore */}
                  <p className="text-sm ">{details.positionInTheFamily}</p>
                </div>
                <div className="">
                  <h2 className="font-semibold underline">Sibling 1:</h2>
                  {/* @ts-ignore */}
                  <p className="text-sm ">{details.firstSiblingName}</p>
                </div>
                <div className="">
                  <h2 className="font-semibold underline">Sibling 2:</h2>
                  {/* @ts-ignore */}
                  <p className="text-sm ">{details.secondSiblingName}</p>
                </div>
                <div className="">
                  <h2 className="font-semibold underline">Sibling 3:</h2>
                  {/* @ts-ignore */}
                  <p className="text-sm ">{details.thirdSiblingName}</p>
                </div>
              </div>
              <div className="">
                <div className="border p-2">
                  <h2 className="font-semibold underline">Home Address:</h2>
                  {/* @ts-ignore */}
                  <p className="text-sm ">{details.streetAddress}</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default DashUserDetails