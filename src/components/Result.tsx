import {
  Button
} from "flowbite-react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import {
  studentSearchStart,
  studentSearchSuccess,
  studentSearchFailure,
} from "../redux/marks/markSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Result() {
  const [formData, setFormData] = useState<any>({
    studentSubject: "",
    studentId: "",
    Grade: "",
  });
  const [submitForm, setSubmitForm] = useState<any>({
    Subject: "",
    Month: "",
    TestName: "",
    Mark: "",
    Total: "",
    Status: "",
  })
  const [display, setDisplay] = useState(false);
  //@ts-ignore
  const [studens, setStudent] = useState([]);
  const dispatch = useDispatch();
  const { error, searching, student } = useSelector((state: any) => state.mark);
  const currentUser = useSelector((state: any) => state.user.currentUser);
  //const 
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const gradeOptions = [
    { value: "8", label: "Grade 8" },
    { value: "9", label: "Grade 9" },
    { value: "10", label: "Grade 10" },
    { value: "11", label: "Grade 11" },
    { value: "12", label: "Grade 12" },
  ]
  //const currentStudent = useSelector((state:any)=>{state.st.currentStudent})
  //console.log(currentStudent);
  

  const months = ["January", "February"]

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // @ts-ignore
      const res = await fetch(
        // @ts-ignore
        `https://mark.ilearn.club/data/student/marks/:${currentUser._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();
      if (res.ok) {
        console.log(data);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to check if student participate on the subject.
  useEffect(() => {
    // create a call back function to fetch student
    const searchStudent = async () => {
      // use try method
      try {
        dispatch(studentSearchStart());
        // @ts-ignore
        const res = await fetch(
          `https://mark.ilearn.club/data/student/marks/${formData.studentId}/${formData.Grade}/${formData.studentSubject}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "content-type": "application/json",
              accept: "application/json",
            },
          },
        );

        // get data from database and change to json
        const data = await res.json();

        if (data.success === false) {
          dispatch(studentSearchFailure(data));
          setDisplay(false);
        }

        dispatch(studentSearchSuccess(data));
        setDisplay(true);
        setStudent(data.message);

      } catch (error) {
        dispatch(studentSearchFailure(error));
      }
    };

    // call the function
    searchStudent();

    // @ts-ignore
  }, [formData.studentSubject, formData.studentId, formData.Grade]);
  const subjects = [
    { "label": "Mathematics", "value": "Mathematics" },
    { "label": "English", "value": "English" },
    { "label": "IsiZulu", "value": "IsiZulu " },
    { "label": "Life Orientation", "value": "LifeOrientation" },
    { "label": "Creative Art", "value": "CreativeArt" },
    { "label": "Technology", "value": "Technology" },
    { "label": "Natural Science", "value": "NaturalScience" },
    { "label": "Geography", "value": "Geography" },
    { "label": "Drama", "value": "Drama" },
    { "label": "History", "value": "History" },
    { "label": "Life Sciences", "value": "LifeSciences" },
    { "label": "Physical Sciences", "value": "PhysicalSciences" },
    { "label": "Mathematics Literacy", "value": "MathematicsLiteracy" },
    { "label": "Tourism", "value": "Tourism" },
    { "label": "Accounting", "value": "Accounting" },
    { "label": "Consumer Studies", "value": "ConsumerStudies" },
    { "label": "Business Studies", "value": "BusinessStudies" },
  ]
  //console.log("searching: ", student);
  
  return (
    <div className="m-4 ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-center text-lg font-bold underline">
          <h1>Student Result</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <div className="std-id flex flex-col gap-[20px]">
            <TextField
              id="studentId"
              label="Student ID"
              variant="outlined"
              onChange={handleChange}
              size="small"
              type="text"
              //required={true}
            />
            <Autocomplete
              value={formData.Grade}
              onChange={(event: any, value: object) => {
                event.preventDefault();
                //@ts-ignore
                setFormData({ ...formData, Grade: value.value });
              }}
              id="sudentGrade"
              size="small"
              options={gradeOptions}
              //sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Grade"  />}
            />
            <Autocomplete
              value={formData.studentSubject}
              onChange={(event: any, value: object) => {
                event.preventDefault();
                //@ts-ignore
                setFormData({ ...formData, studentSubject: value.value });
              }}
              id="studentSubject"
              options={subjects}
              size="small"
              //sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Subject"                                               />
              )}
            />
          </div>
          <div className="flex h-fit w-56 items-center justify-center border border-dashed p-1">
            {!searching && formData.studentId.length < 0 && (
              <p className="">Results will Show here!</p>
            )}
            {searching && <p className="">Loading please wait...</p>}
            {!searching && error && student == null && (
              <p className="">Student Not Found.</p>
            )}
            {!searching && student !== null && (
              <p className="space-x-[10px] font-popins font-medium text-lime-600">
                {student.message}
              </p>
            )}
          </div>
          {!display && (
            <div className="flex flex-col gap-3 border border-dotted p-3 md:flex-row md:items-center md:justify-evenly">
              <div className="flex items-center gap-1">
                <Autocomplete
                  value={formData.Subject}
                  onChange={(event: any, value: object) => {
                    event.preventDefault();
                    //@ts-ignore
                    setFormData({ ...formData, Subject: value.value });
                  }}
                  id="Subject"
                  options={subjects}
                  size="small"
                  sx={{ width: 180 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Subject" required={true} />
                  )}
                />
              </div>
              <div className="flex items-center gap-1">
                <Autocomplete
                  value={submitForm.Month}
                  onChange={(event: any, value: object) => {
                    event.preventDefault();
                    //@ts-ignore
                    setSubmitForm({ ...submitForm, Month: value });
                  }}
                  id="Month"
                  options={months}
                  size="small"
                  sx={{ width: 150 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Month" required={true} />
                  )}
                />
              </div>
              <div className="flex items-center gap-1">
                <TextField
                  id="TestName"
                  label="TestName"
                  variant="outlined"
                  onChange={handleChange}
                  size="small"
                  type="text"
                  required={true}
                  //focused=""
                />
              </div>
            </div>
          )}
          {!display && (
            <div className="flex flex-col gap-4 border p-3 md:flex-row md:justify-evenly">
              <div className="flex items-center gap-1">
                <TextField
                  id="Mark"
                  label="Mark"
                  variant="outlined"
                  onChange={handleChange}
                  type="number"
                  required={true}
                  size="small"
                />
              </div>
              <div className="flex items-center gap-1">
                <Autocomplete
                  value={submitForm.Status}
                  onChange={(event: any, value: object) => {
                    event.preventDefault();
                    //@ts-ignore
                    setSubmitForm({ ...submitForm, Status: value });
                  }}
                  id="Status"
                  options={["Pass", "Fail"]}
                  size="small"
                  sx={{ width: 150 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Status" required={true} />
                  )}
                />
              </div>
            </div>
          )}
          {!display && (
            <Button
              className="uppercase"
              gradientDuoTone={"tealToLime"}
              type="submit"
            >
              Add Result
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
